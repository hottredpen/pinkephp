define(["jquery","wxjssdk","jquery_weui"],function(e,n){var i={createObj:function(){function i(){var n=window.location.href;e.ajax({url:c.shareApi,type:"GET",data:{url:n},dataType:"json",success:function(e){t(e.data)}})}function t(i){n.config({debug:!1,appId:i.appId,timestamp:i.timestamp,nonceStr:i.nonceStr,signature:i.signature,jsApiList:["getLocation","onMenuShareTimeline","onMenuShareAppMessage"]}),n.ready(function(){n.checkJsApi({jsApiList:["getLocation","onMenuShareTimeline","onMenuShareAppMessage"],success:function(e){}}),n.onMenuShareAppMessage({title:c.title,desc:c.desc,link:c.link,imgUrl:c.imgUrl,trigger:function(e){},success:function(e){},cancel:function(e){},fail:function(n){e.alert(n.errMsg)}}),n.onMenuShareTimeline({title:c.title,desc:c.desc,link:c.link,imgUrl:c.imgUrl,trigger:function(e){},success:function(e){},cancel:function(e){},fail:function(n){e.alert(JSON.stringify(n))}})})}var a={},c=(e(document),{shareApi:"/car/api/getshareweixinsigndata",title:"嘟嘟二手车",desc:"",link:"",imgUrl:""});return a.init=function(n,t){c=e.extend({},c,n),i()},a}};return i});