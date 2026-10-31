sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("jsonmodel6.controller.View1", {
        onInit: function() {
            var oModel = new JSONModel({
                formData: {
                    employeeId: "",
                    firstName: "",
                    lastName: ""
                },
                submittedData: {
                    employeeId: "",
                    firstName: "",
                    lastName: ""
                }
            });
            this.getView().setModel(oModel);
        },

        onSubmit: function(){
            var oModel = this.getView().getModel();
            // Retrieve current values input by the user
            var oFormData = oModel.getProperty("/formData");
            
            // Create a deep copy of form entries and map them to display block
            var oDataSnapshot = JSON.parse(JSON.stringify(oFormData));
            oModel.setProperty("/submittedData", oDataSnapshot);
        }
    });
});
