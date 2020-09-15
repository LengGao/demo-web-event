/**
 * CustomEvent https://developer.mozilla.org/zh-CN/docs/Web/API/CustomEvent
 * 
 */
// var event =  new Event('mie'); // 用来创建内置事件对象
function definition () {
  var dom = document.querySelector('#new')
  var ce = new CustomEvent('my',{detail: { mie: 'miemiemiemie' }, bubbles: true, cancelable: false}) 
  // var ce = new Event('my',{detail: { mie: 'miemiemiemie' }, bubbles: true, cancelable: false}) 
  dom.addEventListener('my',function () {
    var p = document.createElement('p')
    p.innerText = 'my event trigger'
    dom.appendChild(p)
  },false)
  dom.dispatchEvent(ce) 
}
definition()

// 触发内置事件
function simulateClick () {
  var event = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true
  })
  var ch = document.getElementById('checkbox')
  var cancelled = !ch.dispatchEvent(event)
  window.alert(cancelled ? 'cancelled' : 'not cancelled')
}
simulateClick()