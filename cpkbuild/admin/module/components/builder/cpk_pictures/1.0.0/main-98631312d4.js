define(["jquery"],function(e){var i={getName:function(){return"cpk_pictures@1.0.0"},getAuthKey:function(){return"d3d9446802a44259755d-ea20a043c08f51687450-b4b147bc522828731f1a-2fa7529d6d1f2fae8ea3754f919cb4d6"},createObj:function(){function i(){require([pinkephp.web_static_url+"static/components/tools/cpk_uploadify.js","nestable"],function(i){var n=d.uploadType,t=d.uploadInitInput,a=i.createObj();a.init({queueID:"imguploadhidden",uploadType:n,inputFileId:"#"+t,uploadLimit:10},function(i,n,t){e(d.mainDivUl).append('<li class="dd-item">                                                            <div class="dd-handle"><img src="'+t+'"></div>                                                            <div class="dd-del"><a class="J_del_'+d.builderFieldName+'_imgbox" href="javascript:;">删除（id:'+n+'）</a></div>                                                            <input type="hidden" name="'+d.uploadPostInput+'" value="'+n+'" >                                                        </li>')}),e(d.mainDivId).nestable(),e(".J_del_"+d.builderFieldName+"_imgbox").on("click",function(){e(this).parent().parent().remove()})})}var n={},d=(e(document),{uploadType:"",uploadInitInput:"",uploadPostInput:"",mainDivId:"",mainDivUl:"",builderFieldName:""});return n.init=function(n){console.log("builder cpk_pictures"),d=e.extend({},d,n),i()},n}};return i});