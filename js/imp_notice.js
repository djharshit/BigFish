
      //<![CDATA[
      var Page_Validators =  new Array(document.getElementById("UserLogin1_rfvImg"), document.getElementById("UserLogin1_Requiredfieldvalidator3"), document.getElementById("UserLogin1_Requiredfieldvalidator4"));
      //]]>
     
      
      
      //<![CDATA[
      var UserLogin1_rfvImg = document.all ? document.all["UserLogin1_rfvImg"] : document.getElementById("UserLogin1_rfvImg");
      UserLogin1_rfvImg.controltovalidate = "UserLogin1_TextBox1";
      UserLogin1_rfvImg.focusOnError = "t";
      UserLogin1_rfvImg.errormessage = "Above Text Required !!";
      UserLogin1_rfvImg.display = "Dynamic";
      UserLogin1_rfvImg.evaluationfunction = "RequiredFieldValidatorEvaluateIsValid";
      UserLogin1_rfvImg.initialvalue = "";
      var UserLogin1_Requiredfieldvalidator3 = document.all ? document.all["UserLogin1_Requiredfieldvalidator3"] : document.getElementById("UserLogin1_Requiredfieldvalidator3");
      UserLogin1_Requiredfieldvalidator3.controltovalidate = "UserLogin1_txtPassword";
      UserLogin1_Requiredfieldvalidator3.focusOnError = "t";
      UserLogin1_Requiredfieldvalidator3.errormessage = "* Required";
      UserLogin1_Requiredfieldvalidator3.display = "None";
      UserLogin1_Requiredfieldvalidator3.evaluationfunction = "RequiredFieldValidatorEvaluateIsValid";
      UserLogin1_Requiredfieldvalidator3.initialvalue = "";
      var UserLogin1_Requiredfieldvalidator4 = document.all ? document.all["UserLogin1_Requiredfieldvalidator4"] : document.getElementById("UserLogin1_Requiredfieldvalidator4");
      UserLogin1_Requiredfieldvalidator4.controltovalidate = "UserLogin1_txtUserName";
      UserLogin1_Requiredfieldvalidator4.focusOnError = "t";
      UserLogin1_Requiredfieldvalidator4.errormessage = "* Required";
      UserLogin1_Requiredfieldvalidator4.display = "None";
      UserLogin1_Requiredfieldvalidator4.evaluationfunction = "RequiredFieldValidatorEvaluateIsValid";
      UserLogin1_Requiredfieldvalidator4.initialvalue = "";
      //]]>
      
      
      
      
      //<![CDATA[
      
      var Page_ValidationActive = false;
      if (typeof(ValidatorOnLoad) == "function") {
          ValidatorOnLoad();
      }
      
      function ValidatorOnSubmit() {
          if (Page_ValidationActive) {
              return ValidatorCommonOnSubmit();
          }
          else {
              return true;
          }
      }
              WebForm_AutoFocus('UserLogin1_txtUserName');Sys.Application.initialize();
      
      document.getElementById('UserLogin1_rfvImg').dispose = function() {
          Array.remove(Page_Validators, document.getElementById('UserLogin1_rfvImg'));
      }
      
      document.getElementById('UserLogin1_Requiredfieldvalidator3').dispose = function() {
          Array.remove(Page_Validators, document.getElementById('UserLogin1_Requiredfieldvalidator3'));
      }
      
      document.getElementById('UserLogin1_Requiredfieldvalidator4').dispose = function() {
          Array.remove(Page_Validators, document.getElementById('UserLogin1_Requiredfieldvalidator4'));
      }
      Sys.Application.add_init(function() {
          $create(AjaxControlToolkit.ValidatorCalloutBehavior, {"closeImageUrl":"/WebResource.axd?d=woDtUTHd1zMNfuk1eM5CCWdRcAgcYsRIQvfmQUgmbVgZM8leUyOeSHauLXSxiw60LTuQaudqtIFhDMk4gTJhF2xARHHz7-Y9_ykoiaD64GyDp9T-ULo8zSQEaxtgWaWDq1SWSCT8p1vsrtIJg_sEjHyKU0o1&t=635081178209150391","id":"UserLogin1_VCEPassword","warningIconImageUrl":"Images/alert-small.gif","width":"25px"}, null, null, $get("UserLogin1_Requiredfieldvalidator3"));
      });
      Sys.Application.add_init(function() {
          $create(AjaxControlToolkit.ValidatorCalloutBehavior, {"closeImageUrl":"/WebResource.axd?d=woDtUTHd1zMNfuk1eM5CCWdRcAgcYsRIQvfmQUgmbVgZM8leUyOeSHauLXSxiw60LTuQaudqtIFhDMk4gTJhF2xARHHz7-Y9_ykoiaD64GyDp9T-ULo8zSQEaxtgWaWDq1SWSCT8p1vsrtIJg_sEjHyKU0o1&t=635081178209150391","id":"UserLogin1_VCEUserName","warningIconImageUrl":"Images/alert-small.gif","width":"25px"}, null, null, $get("UserLogin1_Requiredfieldvalidator4"));
      });
      Sys.Application.add_init(function() {
          $create(AjaxControlToolkit.FilteredTextBoxBehavior, {"FilterType":15,"ValidChars":"1234567890.@_$#!","id":"UserLogin1_FTBPassword"}, null, null, $get("UserLogin1_txtPassword"));
      });
      Sys.Application.add_init(function() {
          $create(AjaxControlToolkit.FilteredTextBoxBehavior, {"FilterMode":2,"FilterType":15,"InvalidChars":"#$@*_.:;~`!%^&*()-=+{}[]\u0027\"\\|:;\u003c\u003e,.?/","id":"UserLogin1_FTBUserName"}, null, null, $get("UserLogin1_txtUserName"));
      });
      //]]>
     
      