/**
 * Event.initEvent() \https://developer.mozilla.org/zh-CN/docs/Web/API/Event/initEvent
 * 示例 https://www.jianshu.com/p/5f9027722204 
 */
/**
 * 定义事件三步走
 * var Event = document.createEvent();
 * var event = Event.initEvent();
 * var ele = dispatchEvent();
 */
// iE 兼容
console.log('attachEvent',document.attachEvent,'addEventListener',document.addEventListener,'removeEventListener',document.removeEventListener,'detachEvent',document.detachEvent);// onpropertychange
var dom = document.querySelector('#old');
document.addEventListener('alert',function (e) {
  console.log('alert',e);
},false)
var evt = document.createEvent('HTMLEvents');
// var evt = new Event('build');
console.log(evt,)
evt.initEvent('alert',false,false) //参数解释 事件名称，是否可以冒泡，是否阻止事件默认操作
dom.dispatchEvent(evt);

