define(["jquery","jquery_datepicker"],function(e){var t={getName:function(){return"daterangepicker@1.0.0"},getAuthKey:function(){return"c20ad4d76fe97759aa27-d5490f048dc3b17aaa7e-b4b147bc522828831f1a-173618d11bc246214dd7e80ab5593d50"},createObj:function(){function t(){e(c.inputId).datepicker({autoclose:!0,format:"yyyy-mm-dd"}).on("changeDate",function(){e(document).trigger("Jt_datepicker_change",[c.inputId])})}var n={},c=(e(document),{inputId:""});return n.init=function(n){console.log("builder cpk_pictures"),c=e.extend({},c,n),t()},n}};return t});