define(["jquery","layer_dialog"],function(e,n){var t={createObj:function(){function t(){r=e("#j_keywords_list li").length}function d(){i.on("click",".J_keyword_edit",function(){var n=e(this).parent().parent().find(".j_keyword_val").attr("data-content"),t=e(this).parent().parent().attr("data-index");show_keyword_dialog_form(n,t)}),i.on("click",".J_keyword_del",function(){e(this).parent().parent().remove()}),e(document).off("Jt_add_keyword_in_page"),e(document).on("Jt_add_keyword_in_page",function(t,d){console.log(" get Jt_add_keyword_in_page");var a=d.keywords;r++,e("#j_keywords_list").append(o(a,r)),n.closeAll()})}function o(e,n){var t='<li class="j_indexid_'+n+'" data-index="'+n+'">		                    <div class="desc">		                        <strong class="title j_keyword_val" data-content="'+e+'">'+e+'</strong>		                        <input type="hidden" name="keywords[]" value="'+e+'">		                    </div>		                    <div class="opr">		                        <a href="javascript:;" data-id="0" class="icon14_common del_gray J_keyword_del">删除</a>		                    </div>		                </li>';return t}var a={},i=e(document),r=0,_={uploadType:""};return a.init=function(n){console.log("builder weixin_keywords_str"),_=e.extend({},_,n),t(),d()},a}};return t});