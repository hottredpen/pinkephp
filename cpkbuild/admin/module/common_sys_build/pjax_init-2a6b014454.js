define(["jquery","../cpk_plugins/nprogress","../cpk_plugins/pjax","./jquery_extend"],function(t,a){console.log("pjax_init");var n=t(document),o="",e={};e.pjax_container_default="#pjax-container",e.pjax_container_click="#pjax-container",window.history&&window.history.pushState&&t(window).on("popstate",function(){var t=location.hash,a=t.split("#!/"),o=a[1];if(""!==o){var e=window.location.hash;console.log(window.history.state.url),""===e&&n.trigger("Jt_page_change",[window.history.state.url])}}),a.configure({template:'<div class="bar" role="bar" style="background: #3388ff"><div class="peg" style="box-shadow: 0 0 10px #3388ff, 0 0 5px #3388ff;"></div></div><div class="spinner" role="spinner"><div class="spinner-icon" style="border-top-color:#3388ff;border-left-color: #3388ff;"></div></div>'}),t.support.pjax&&(n.on("click",'a[target!=_blank][target!=_self][class!="j_not_pjax"]',function(a){console.log("pjax");var n=t(this).attr("data-pjax-container");o=t(this).attr("href"),"undefined"!=typeof n&&t(n).length>0?e.pjax_container_click=n:e.pjax_container_click=e.pjax_container_default,t.pjax.click(a,{container:e.pjax_container_click})}),t.pjax.defaults.timeout=6e3,t.pjax.defaults.dataType="html",n.on("pjax:send",function(){a.start()}),n.on("pjax:complete",function(){a.done()}),n.on("pjax:timeout",function(t){t.preventDefault()}),n.on("pjax:beforeReplace",function(t,a){void 0!=a[0].data&&(a[0].data="")}),n.on("pjax:success",function(a,i,c,r){if(n.trigger("Jt_page_change",[o]),i.match("^{(.+:.+,*){1,}}$")){var i=JSON.parse(i);if(0==i.status)return t.custom.notify(i.msg),void window.history.go(-1);1==i.status&&(t.custom.success_tip(i.msg),"undefined"!=typeof i.data.backurl&&t.pjax({url:i.data.backurl,container:e.pjax_container_click}))}}))});