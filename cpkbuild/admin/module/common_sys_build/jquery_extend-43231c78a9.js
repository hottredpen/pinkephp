define(["jquery","./custom_cpk","./custom_layer"],function(t,e,n){t.custom=t.custom||{version:"v1.0.0",name:"cpk"},t.tools=t.tools||{version:"v1.0.0",name:"cpk"},t.extend(t.custom,{}),t.custom.alert=function(t){n.alert(t)},t.custom.success_tip=function(t){e.success_tip(t)},t.custom.toastr=function(t){e.success_tip(t)},t.custom.notify=function(t){e.notify(t)},t.tools.CurTime=function(){return Date.parse(new Date)/1e3},t.tools.DateToUnix=function(t){var e=t.split(" ",2),n=(e[0]?e[0]:"").split("-",3),s=(e[1]?e[1]:"").split(":",3);return new Date(parseInt(n[0],10)||null,(parseInt(n[1],10)||1)-1,parseInt(n[2],10)||null,parseInt(s[0],10)||null,parseInt(s[1],10)||null,parseInt(s[2],10)||null).getTime()/1e3},t.tools.UnixToDate=function(t,e,n){"undefined"==typeof e&&(e=!0),"undefined"==typeof n&&(n=8),"number"==typeof n&&(t=parseInt(t)+60*parseInt(n)*60);var s=new Date(1e3*t),o="",u=s.getUTCMonth()+1,r=s.getUTCDate();return 10>u&&(u="0"+u),10>r&&(r="0"+r),o+=s.getUTCFullYear()+"-",o+=u+"-",o+=r,e===!0&&(o+=" "+s.getUTCHours()+":",o+=s.getUTCMinutes()+":",o+=s.getUTCSeconds()),o}});