dojo.declare("Main", wm.Page, {
	start: function() {
		
	},
	"preferredDevice": "desktop",


	label5ReadOnlyNodeFormat: function(inSender, inValue) {
        var now = new Date();
        return("Application loaded at: " + now.toLocaleTimeString() + " on " + now.toLocaleDateString());
	},
	upButtonClick: function(inSender) {
      try {
         var thisControl = inSender.parent;
         var newIndex = thisControl.parent.indexOfControl(thisControl) - 1;
         if(newIndex >= 0){
            thisControl.parent.moveControl(thisControl,(newIndex));
            thisControl.reflowParent();
         }
         } catch(e) {
                  console.error('ERROR IN upButtonClick: ' + e); 
          } 
	},
	customerDojoGrid1GridButtonClick: function(inSender, fieldName, rowData, rowIndex) {
        inSender.setSelectedRow(rowIndex);
        this.layer3.activate();
        this.customerEditLiveForm1.beginDataUpdate();
	},
	customerDojoGrid1Select: function(inSender) {
        this.layer2.activate();
	},
	customerEditLiveForm1BeforeServiceCall: function(inSender, inOperation, inData) {
        if(inData.zip.toString().length!=5){
            app.toastError("Zip code must be 5 digits only");
            //Must be error of "Abort" to stop service call
            throw new Error("Abort");
        }
		
	},
	AddItemBttonClick: function(inSender) {
        var name = this.newItemtext.getDataValue();
        var panelName = "panel" + name;
        var labelName = "label" + name;
        var caption = "Item " + name;
        var buttonName = "button" + name;
        this.ItemListPanel.createComponent(panelName , "wm.Panel",{"height":"46px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"400px"}, {}, {
            labelName: ["wm.Label", {"align":"center","caption":caption,"padding":"4"}, {}],
            upButtonName: ["wm.Button", {"caption":"Move Up","margin":"4"}, {"onclick":"upButtonClick"}]
            });
        this.ItemListPanel.reflow();
},
	_end: 0
});