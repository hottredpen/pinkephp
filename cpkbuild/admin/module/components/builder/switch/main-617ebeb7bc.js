define(["jquery"],function(i){var n={createObj:function(){function n(){}function t(){i(r.builderDiv+" .J_form_item_switch").on("click",function(){var n=1==i(this).val()?0:1;i(this).val(n)})}var e={},r=(i(document),{builderDiv:"",formItemName:""});return e.init=function(e){console.log("builder switch"),r=i.extend({},r,e),n(),t()},e}};return n});