define(["jquery","layer_dialog"],function(t,i){t(document).on("click",".J_layer_dialog",function(){var a=t(this).attr("data-url"),e=t(this).attr("data-title"),r=t(this).attr("data-width"),n=t(this).attr("data-height");if("undefined"==typeof r&&(r="80%"),"undefined"==typeof n)var o=[r,"auto"];else var o=[r,n];return t.ajax({type:"get",url:a,success:function(a){1==a.status?(i.open({type:1,fixed:!1,offset:"50px",anim:1,title:e,area:o,content:a.data}),console.log("Jt_builder_form_init trigger"),t(document).trigger("Jt_builder_form_init")):t.custom.alert(a.msg)}}),!1}),t(document).on("click",".J_layer_iframe",function(){var a=t(this).attr("data-url"),e=(t(this).attr("title")||t(this).data("original-title"),t(this).attr("data-width")),r=t(this).attr("data-height");if("undefined"==typeof e&&(e="80%"),"undefined"==typeof r)var n=[e,"auto"];else var n=[e,r];return i.open({type:2,fixed:!1,offset:"50px",anim:1,title:dtitle,area:n,content:a}),!1}),t(document).on("click",".J_confirmurl",function(){var a=t(this),e=a.attr("data-id");uri=a.attr("data-uri"),dtitle=a.attr("data-title"),msg=a.attr("data-msg");var r="",n=a.attr("data-target-from");if("undefined"!=typeof n){var o=[];t("input.ids").each(function(i,a){t(this).is(":checked")&&o.push(t(this).val())}),r=o.join(",")}i.open({title:dtitle,icon:0,content:msg,yes:function(a,n){t.ajax({type:"post",url:uri,data:{id:e,ids:r},success:function(e){i.close(a),1==e.status?i.msg(e.msg,{time:500,icon:6},function(){window.location.reload()}):t.custom.alert(e.msg)}})}})}),t(document).on("click",".J_batch_layer_dialog",function(){var a=t(this);a.attr("data-id");uri=a.attr("data-uri"),width=a.attr("data-width"),height=a.attr("data-height"),dtitle=a.attr("data-title"),msg=a.attr("data-msg");var e="",r=a.attr("data-target-from");if("undefined"!=typeof r){var n=[];t("input.ids").each(function(i,a){t(this).is(":checked")&&n.push(t(this).val())}),e=n.join(",")}console.log("J_batch_layer_dialog click"),t.getJSON(uri,{ids:e},function(a){1==a.status?(i.open({type:1,fixed:!1,offset:"50px",anim:1,title:dtitle,area:[width,height],content:a.data}),console.log("Jt_builder_form_init  trigger"),t(document).trigger("Jt_builder_form_init")):t.custom.alert(a.msg)})})});