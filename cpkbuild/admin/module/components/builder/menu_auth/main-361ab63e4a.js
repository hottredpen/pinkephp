define(["jquery"],function(e){var n={createObj:function(){function n(){e(i.builderDiv+' .auth input[type="checkbox"]').on("change",function(){e("."+e(this).attr("data-module-name")+" .auth"+e(this).val()).find("input").prop("checked",this.checked)})}function t(){}var u={},i=(e(document),{builderDiv:"",formItemName:"",tellInputId:""});return u.init=function(u){console.log("builder menu_auth"),i=e.extend({},i,u),n(),t()},u}};return n});