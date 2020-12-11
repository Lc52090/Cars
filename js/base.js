function getRem(pwidth, prem) {
  var html = document.getElementsByTagName("html")[0];
  var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
  html.style.fontSize = oWidth / pwidth * prem + "px";
}
//图片预加载
function imgLoad(imgSrc) {
  let imgArr = []
  for (let i = 0; i < imgSrc.length; i++) {
    imgArr[i] = new Image()
    imgArr[i].src = imgSrc[i]
    imgArr[i].onload = function () {
      this.width = 960
      this.height = 380
    }
  }
}
/*封装监听事件兼容IE */
function addListener(el, type, fn) {
  if (el.addEventListener) {
    el.addEventListener(type, fn, false);
  } else if (el.attachEvent) {
    el.attachEvent('on' + type, fn);
  } else {
    el['on' + type] = fn;
  }
}
/**移动端点击事件封装 */
var itcast = {
  /*dom:传入的dom元素让我们可以为任意的元素添加tap事件*/
  tap: function (dom, callback) {
    /*判断是否传入对象同时对象应该是一个dom元素*/
    if (!dom || typeof dom != "object") {
      return;
    }
    var startTime, startX, startY;
    dom.addEventListener("touchstart", function (e) {
      /*判断是否只有一根手指进行操作*/
      if (e.targetTouches.length > 1) { //说明不止一个手指
        return;
      }
      /*记录手指开始触摸的时间*/
      startTime = Date.now();
      /*记录当前手指的坐标*/
      startX = e.targetTouches[0].clientX;
      startY = e.targetTouches[0].clientY;
      /*来做一些与事件相关的初始化操作*/
    })

    /*touchend：当手指松开时候触发，意味着当前元素上已经没有手指对象了,所以无法通过targetTouches来获取手指对象*/
    dom.addEventListener("touchend", function (e) {
      /*判断是否只有一根手指进行操作*/
      if (e.changedTouches.length > 1) { //说明不止一个手指
        return;
      }
      if (Date.now() - startTime > 150) { //长按操作
        return;
      }
      /*判断松开手指时的坐标与触摸开始时的坐标的距离差异*/
      var endX = e.changedTouches[0].clientX;
      var endY = e.changedTouches[0].clientY;
      /*这里暂且将距离差异定为6*/
      if (Math.abs(endX - startX) < 6 && Math.abs(endY - startY) < 6) {
        /*执行tap事件响应后的处理操作*/
        /*判断用户是否传入的回调函数*/
        callback && callback(e);
      }
    })
  }
};
/*切换页面函数封装*/
function Tab(el, dom, classname) {
  var index;
  //切换页面的轮播图
  var mySwiper = new Swiper(classname, {
    autoHeight: true, //高度随内容变化
    updateOnWindowResize: true,
    observer: true,
    observeParents: true,
    simulateTouch: false,//禁止鼠标模拟
    //回调函数
    on: {
      slideChangeTransitionStart: function () {

      },
      slideChangeTransitionEnd: function () {
        index = this.realIndex
        for (let j = 0; j < el.length; j++) {
          el[j].classList.remove("active")
        }
        el[this.realIndex].classList.add("active")
        dom.style.transitionDuration = 0 + "ms"
      },
    },
  })
  /**
* 导航栏点击切换
* 获取切换点击的li
* 获取切换点击li下标
* 获取切换的块
* 监听li的点击事件
*/
  //监听的li事件
  var that;
  function handleClick() {
    mySwiper.realIndex = that.index
    mySwiper.slideTo(that.index, 1000, false)
    mySwiper.updateAutoHeight(1000)
    mySwiper.autoHeight = true
    for (let j = 0; j < el.length; j++) {
      el[j].classList.remove("active")
    }
    that.classList.add("active")
  }
  //监听li的点击事件
  for (let i = 0; i < el.length; i++) {
    el[i].index = i
    addListener(el[i], 'click', function () {
      that = this
      handleClick()
    })

  }
}

// 获取所有图片
let arrImg = Array.from(document.querySelectorAll('img'))
// 节流
function throttle(fn, delay, atleast) {
  var timeout = null,
    startTime = new Date();
  return function () {
    var curTime = new Date();
    clearTimeout(timeout);
    if (curTime - startTime >= atleast) {
      fn();
      startTime = curTime;
    } else {
      timeout = setTimeout(fn, delay);
    }
  }
}
// 延迟加载图片
function lazyImg() {
  // 获取视口高度，滚动的高度
  let viewHeight = document.documentElement.clientHeight
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  // 存储到图片加载到的位置，避免每一次图片重新加载
  let n = 0
  // 循环图片判断滚动距离显示图片
  for (let i = n; i < arrImg.length; i++) {
    if (arrImg[i].offsetTop < viewHeight + scrollTop) {
      if (arrImg[i].getAttribute('src') == './img/loading.jpg') {
        arrImg[i].src = arrImg[i].getAttribute('data-src');
      }
      n = n + 1
    }
  }
}
lazyImg()
// 监听滚动事件执行图片加载
addListener(window, 'scroll', throttle(lazyImg, 500, 1000))

// 背景图片预加载
