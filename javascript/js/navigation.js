'use strict';
var navigation = (function() {
  var calculatorDialog = document.getElementById('calculator'),
      xmlhttprequestDialog = document.getElementById('xmlhttprequest'),
      xmlhttprequestDialogExternal = document.getElementById('xmlhttprequestexternal'),
      closeDialog = function (dialog) {
        dialog.style.display = "none";
      },
      displayDialog = function (dialog) {
        dialog.style.display = "block";
      };


  return {
    showCalculator: function() {
      //console.log("calculator page");
      displayDialog(calculatorDialog);
      closeDialog(xmlhttprequestDialog),
      closeDialog(xmlhttprequestDialogExternal);
    },
    showXMLHttpRequest: function(){
      //console.log("XMLreq");
      closeDialog(calculatorDialog);
      displayDialog(xmlhttprequestDialog),
      closeDialog(xmlhttprequestDialogExternal);
    },
    showXMLHttpRequestExternal: function(){
      //console.log("XMLreq2");
      closeDialog(calculatorDialog);
      closeDialog(xmlhttprequestDialog),
      displayDialog(xmlhttprequestDialogExternal);
    }
  };
})();
