define(["jquery"],function(e,i){var n={getName:function(){return"weixin_news_side_preview@1.0.0"},getAuthKey:function(){return"6ea9ab1baa0efb9e1909-5c7d57051b73466e1989-b4b148bc522828732f1a-dade9b5c59c6961635a65c5b900a2c1a"},createObj:function(){function i(){t(),s(),a(),d(),_()}function n(){r(),u(),I(),l(),y(),m()}function t(){for(var i=0;8>i;i++)""==e("#j_material_box_name_image_reply_type_"+i).find(".j_material_box_media_id_input").val()&&e(".j_thumb_fileid_reply_type_"+i).css("background-image","url(/static/components/builder/weixin_card_preview/images/no_cover_pic.png)")}function s(){e(".j_sidenews_item").each(function(i){q[i]=parseInt(e(this).attr("data-index"))})}function a(){var i=e("input[name=show_items_indexids]").val(),n=i.split(",");console.log(n),A=n.length>0?parseInt(n.length-1):0,console.log(A);for(var t=0;t<parseInt(A+1);t++)J.push(q[t]);o()}function d(){var i=parseInt(e(".j_sidenews_item.editing").attr("data-index"));e(".j_newspublishitem_builder_"+i).removeClass("hidden"),j()}function _(){for(var e=0;8>e;e++)g(e),b(e)}function o(){var i=[];e.each(q,function(e,n){i.push(n)});var n=e.unique(i).join(","),t=e.unique(J).join(",");e("input[name=show_items_indexids]").val(t),e("input[name=post_items_indexids]").val(n)}function r(){k.on("click",".J_choose_this_side_item",function(){var i=e(this).attr("data-index");c(i)})}function c(i){if(!(e.inArray(parseInt(i),J)<0)){var n=e(".j_sidenews_item_"+i);e(".j_sidenews_item").removeClass("editing"),n.addClass("editing"),e(".j_newspublishitem_builder").addClass("hidden"),e(".j_newspublishitem_builder_"+i).removeClass("hidden"),e(".edui-editor").css("width",e(".edui-editor").parent().css("width")),e(".edui-editor-iframeholder").css({height:500,width:400}),g(i)}}function u(){k.on("click",".J_add_news_item",function(){console.log(q),console.log(J),A>=7||(A++,J.push(q[A]),o(),x(),g(A),c(A))})}function l(){k.on("click",".J_sidenews_down",function(){var i,n,t=parseInt(e(this).attr("data-index")),s=e(".j_sidenews_item_"+t);e.each(q,function(e,s){s==t&&(i=e,n=parseInt(e+1))});var a=q[n],d=e(".j_sidenews_item_"+a);w(s,d,i,n,t,a)}),k.on("click",".J_sidenews_up",function(){var i,n,t=parseInt(e(this).attr("data-index")),s=e(".j_sidenews_item_"+t);e.each(q,function(e,s){s==t&&(n=e,i=parseInt(e-1))});var a=q[i],d=e(".j_sidenews_item_"+a);w(d,s,i,n,a,t)})}function m(){k.on("click",".J_sidenews_del",function(){var i,n,t=parseInt(e(this).attr("data-index"));e.each(q,function(e,s){s==t&&(i=e,n=parseInt(e-1))});var s=q[n];c(s),p(t),f(t)})}function f(i){e("input[name=title_"+i+"]").val(""),g(i),e("input[name=author_"+i+"]").val(""),e(".j_newspublishitem_builder_"+i).find(".u-imgboxupload-removebtn").trigger("click"),e("textarea[name=digest_"+i+"]").val(""),e(document).trigger("clear_UEditor_content_"+i),e("input[name=from_url_"+i+"]").val("")}function p(i){A--,J=C.removeArrayItem(J,i),o(),h(i),e(".j_sidenews_item_"+i).addClass("hidden"),e(".j_newspublishitem_builder_"+i).addClass("hidden")}function h(i){C.removeArrayItem(q,i),q.push(i);var n=q[6],t=e(".j_sidenews_item_"+n),s=e(".j_sidenews_item_"+i);s.insertAfter(t)}function v(e,i,n,t){q[e]=parseInt(t),q[i]=parseInt(n),o()}function w(e,i,n,t,s,a){0!=A&&A!=n&&(i.insertBefore(e),v(n,t,s,a),0==n&&(e.find(".item-first-content").addClass("hidden"),e.find(".item-content").removeClass("hidden")),1==t&&(i.find(".item-first-content").removeClass("hidden"),i.find(".item-content").addClass("hidden")))}function b(i){e(".j_newspublishitem_builder_"+i).find("input[name=title_"+i+"]").unbind("input propertychange"),e(".j_newspublishitem_builder_"+i).find("input[name=title_"+i+"]").bind("input propertychange",function(){""!=e(this).val()?e(".j_sidenews_title_"+i).text(e(this).val()):g(i)})}function g(i){var n=e("input[name=title_"+i+"]").val();("undefined"==typeof n||""==n)&&(n="标题"),e(".j_sidenews_title_"+i).text(n)}function j(){e.each(J,function(i,n){e(".j_sidenews_item_"+n).removeClass("hidden")})}function x(){var i=q[A];e(".j_sidenews_item_"+i).removeClass("hidden")}function I(){k.on("Jt_material_image_choosed_callback",function(i,n,t,s){e(".j_sidenews_item.editing").find(".thumb").css("background-image","url("+n+")"),e(".j_sidenews_item.editing").find(".thumb").addClass("j_thumb_fileid_"+s)})}function y(){k.on("Jt_material_image_choosed_delete_callback",function(i,n,t){console.log(n),console.log(t),e(".j_sidenews_item.editing").find(".j_thumb_fileid_"+t).css("background-image","url(/static/components/builder/weixin_news_side_preview/images/no_cover_pic.png)")})}var C={},k=e(document),A=0,J=[],q=[];return C.init=function(){i(),n()},C.removeArrayItem=function(i,n){return i.splice(e.inArray(n,i),1),i},C}};return n});