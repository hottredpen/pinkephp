define(["jquery"],function(e){var i={getName:function(){return"weixin_card_preview@1.0.0"},getAuthKey:function(){return"8e296a067a37563370de-c4de9fe96892a873768e-b5b147bc522829841f1a-4dbf9899c0ee41f7cd1099e63d2697d7"},createObj:function(){function i(){n(),a(),o(),r(),c(),d(),u(),p()}function n(){b=parseInt(e("#j_form_item_val_advanced_info_use_condition_least_cost_is_open").val()),isNaN(b)&&(b=0),g=parseInt(e("#j_form_item_val_advanced_info_use_condition_category_is_open").val()),isNaN(g)&&(g=0),console.log(b)}function _(){m.on("Jt_weixin_card_color",function(i,n){e(".j_color_bg_preview").css("background-color",n)}),m.on("cpk_imgbox_upload_callback",function(i,n){e("#j_cover_preview img").attr("src",n.url),e("#j_cover_preview img").addClass("j_thumb_fileid_"+n.fileid)}),m.on("cpk_imgbox_upload_delete_callback",function(i,n){e(".j_weixin_card_preview_builder").find(".j_thumb_fileid_"+n).attr("src","")}),s(),f()}function t(i,n){var _=parseInt(e.tools.CurTime()+parseInt(24*i*3600)),t=e.tools.UnixToDate(_,!1),a=parseInt(_+24*n*3600),o=e.tools.UnixToDate(a,!1);e("#j_use_time_preview").text(t+"-"+o)}function a(){e(".j_weixin_card_preview_builder").find("input[name=base_info_title]").unbind("input propertychange"),e(".j_weixin_card_preview_builder").find("input[name=base_info_title]").bind("input propertychange",function(){var i=e(this).val();e("#j_title_preview").text(i)})}function o(){e(".j_weixin_card_preview_builder").find("input[name=advanced_info_abstract_abstract]").unbind("input propertychange"),e(".j_weixin_card_preview_builder").find("input[name=advanced_info_abstract_abstract]").bind("input propertychange",function(){var i=e(this).val();e("#j_cover_title_preview").text(i)})}function r(){e(".j_weixin_card_preview_builder").find("input[name=custom_cell1_name]").unbind("input propertychange"),e(".j_weixin_card_preview_builder").find("input[name=custom_cell1_name]").bind("input propertychange",function(){var i=e(this).val();e(".j_custom_cell1_name").text(i)})}function c(){e(".j_weixin_card_preview_builder").find("input[name=custom_cell1_tips]").unbind("input propertychange"),e(".j_weixin_card_preview_builder").find("input[name=custom_cell1_tips]").bind("input propertychange",function(){var i=e(this).val();e(".j_custom_cell1_tips").text(i)})}function d(){e(".j_weixin_card_preview_builder").find("input[name=advanced_info_use_condition_least_cost_format]").unbind("input propertychange"),e(".j_weixin_card_preview_builder").find("input[name=advanced_info_use_condition_least_cost_format]").bind("input propertychange",function(){var i=e(this).val();""==i&&(i="xxx"),x[0]="消费满"+i+"元可用;",e("#j_use_condition_preview").text(x.join(" "))})}function u(){e(".j_weixin_card_preview_builder").find("input[name=advanced_info_use_condition_accept_category]").unbind("input propertychange"),e(".j_weixin_card_preview_builder").find("input[name=advanced_info_use_condition_accept_category]").bind("input propertychange",function(){var i=e(this).val();""==i&&(i="xxx"),x[1]="适用于"+i+";",e("#j_use_condition_preview").text(x.join(" "))})}function p(){e(".j_weixin_card_preview_builder").find("input[name=advanced_info_use_condition_reject_category]").unbind("input propertychange"),e(".j_weixin_card_preview_builder").find("input[name=advanced_info_use_condition_reject_category]").bind("input propertychange",function(){var i=e(this).val();""==i&&(i="xxx"),x[2]="不适用于"+i+";",e("#j_use_condition_preview").text(x.join(" "))})}function s(){m.on("Jt_datepicker_change",function(i,n){console.log(n);var _=e(n).find('input[name="base_info_date_info_begin_timestamp"]').val(),t=e(n).find('input[name="base_info_date_info_end_timestamp"]').val();e("#j_use_time_preview").text(_+"-"+t)}),m.on("Jt_builder_form_class_trigger_item_base_info_date_info_type",function(i,n){if("DATE_TYPE_FIX_TIME_RANGE"==n){var _=e('input[name="base_info_date_info_begin_timestamp"]').val(),a=e('input[name="base_info_date_info_end_timestamp"]').val();e("#j_use_time_preview").text(_+"-"+a)}if("DATE_TYPE_FIX_TERM"==n){var o=parseInt(e('select[name="base_info_date_info_fixed_begin_term"]').val()),r=parseInt(e('select[name="base_info_date_info_fixed_term"]').val());isNaN(r)&&(r=0),t(o,r)}}),m.on("Jt_builder_form_class_trigger_item_base_info_date_info_fixed_begin_term",function(i,n){n=parseInt(n);var _=parseInt(e('select[name="base_info_date_info_fixed_term"]').val());isNaN(_)&&(_=0),t(n,_)}),m.on("Jt_builder_form_class_trigger_item_base_info_date_info_fixed_term",function(i,n){var _=parseInt(e('select[name="base_info_date_info_fixed_begin_term"]').val());n=parseInt(n),isNaN(n)&&(n=0),t(_,n)})}function f(){m.on("Jt_builder_form_class_trigger_item_advanced_info_use_condition_least_cost_is_open",function(e,i){b=1==parseInt(i)?1:0,l()}),m.on("Jt_builder_form_class_trigger_item_advanced_info_use_condition_category_is_open",function(e,i){console.log("adsfasdf:"+i),g=1==parseInt(i)?1:0,l()}),m.on("Jt_builder_form_class_trigger_item_advanced_info_use_condition_can_use_with_other_discount",function(e,i){w=1==parseInt(i)?1:0,l()})}function l(){"cash"==j.cardType&&(console.log("cash :"+b+" "+g),0==b&&0==g?e("#j_use_condition_preview_li").hide():e("#j_use_condition_preview_li").show())}var v={},m=e(document),b=0,g=0,w=0,x=[];x[0]="",x[1]="",x[2]="";var j={builderDiv:"",cardType:""};return v.init=function(n){console.log("builder weixin_card_preview"),j=e.extend({},j,n),i(),_(),setTimeout(function(){l()},0)},v}};return i});