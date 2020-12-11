//背景图预加载
let imgSrcArr = []
let pcimgSrc = []
for (let i = 0; i < 3; i++) {
  pcimgSrc[i] = 'img/pcimg/second/color0'+(i+1)+'.png'
  imgSrcArr.push(pcimgSrc[i])
}
let telimgSrc = []
for (let i = 0; i < 3; i++) {
  telimgSrc[i] = 'img/telimg/second/color0'+(i+1)+'.png'
  imgSrcArr.push(telimgSrc[i])
}
let lightPcImgSrc = []
for (let i = 0; i <3; i++) {
  lightPcImgSrc[i]= 'img/pcimg/second/light0'+(i+1)+'.png'
  imgSrcArr.push(lightPcImgSrc[i])
}
let lightTelImgSrc = []
for (let i = 0; i <3; i++) {
  lightTelImgSrc[i]= 'img/telimg/second/light0'+(i+1)+'.png'
  imgSrcArr.push(lightTelImgSrc[i])
}
let inPcImgSrc = []
for (let i = 0; i <4; i++) {
  inPcImgSrc[i]= 'img/pcimg/apprance/inside0'+(i+1)+'.png'
  imgSrcArr.push(inPcImgSrc[i])
}
let inTelImgSrc = []
for (let i = 0; i <4; i++) {
  inTelImgSrc[i]= 'img/pcimg/apprance/tel-inside0'+(i+1)+'.png'
  imgSrcArr.push(inTelImgSrc[i])
}
imgLoad(imgSrcArr)
window.onload = function () {
  /**
  * 获取当前屏幕宽度
  * 判断当屏幕大于750OX和小于750px时rem布局情况
  * 当屏幕改变时重新判断当屏幕大于750OX和小于750px时rem布局情况
  */
  var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
  if (oWidth > 750) {
    getRem(1920, 100)
  } else {
    getRem(750, 100)
  }
  window.onresize = function () {
    oWidth = document.body.clientWidth || document.documentElement.clientWidth;
    if (oWidth > 750) {
      getRem(1920, 100)
    } else {
      getRem(750, 100)
    }
  }
    //点击切换外观设计图片  
    let tabList = document.querySelectorAll('.outside-toptab>ul li')
    let tabDom = document.querySelector('.outside>.swiper-wrapper')
    Tab(tabList, tabDom, '.outside')
    
  //点击X按钮回到上一级主页面
  let closed = document.querySelector('.layout>.closed')
  addListener(closed, 'click', function () {
    window.history.go(-1)
  })
  //点击颜色切换按钮切换颜色
  let colorBackground = document.querySelector('.color-content')
  let colorClick = colorBackground.querySelectorAll('.tabchoose>ul li')
  let colorSpan = colorBackground.querySelector('.tabchoose>p span')
  let spanArr = ["橙+黑", "跃东红+极光黑", "白+黑"]
  for (let i = 0; i < colorClick.length; i++) {
    colorClick[i].index = i
    addListener(colorClick[i], 'click', function () {
      owidth = document.body.clientWidth || document.documentElement.clientWidth
      this.style.backgroundImage = ''
      colorSpan.innerHTML = spanArr[i]
      if (owidth > 750) {
        colorBackground.style.backgroundImage = 'url("./'+ pcimgSrc[this.index] +'")'
      } else {
        colorBackground.style.backgroundImage = 'url("./'+ telimgSrc[this.index] +'")'
      }
    })
  }

  //点击切换按钮切换车灯介绍图片
  let lightClick = document.querySelectorAll('.tablight>.toptext li')
  let tabImg = document.querySelector('.tablight>.phototab')
  for (let i = 0; i < colorClick.length; i++) {
    lightClick[i].index = i
    addListener(lightClick[i], 'click', function () {
      for (let j = 0; j < lightClick.length; j++) {
        lightClick[j].classList.remove('active')
      }
      owidth = document.body.clientWidth || document.documentElement.clientWidth
      this.classList.add('active')
      this.style.backgroundImage = ''
      if (owidth > 750) {
        tabImg.style.backgroundImage = 'url("./'+ lightPcImgSrc[this.index] +'")'
      } else {
        tabImg.style.backgroundImage = 'url("./'+ lightTelImgSrc[this.index] +'")'
      }
    })
  }

  //点击切换内饰图片
  let insideClick = document.querySelectorAll('.inside-tab>ul li')
  let insideImg = document.querySelector('.inside-bck')
  for (let i = 0; i < insideClick.length; i++) {
    insideClick[i].index = i
    addListener(insideClick[i], 'click', function () {
      owidth = document.body.clientWidth || document.documentElement.clientWidth
      this.style.background = ''
      for (let j = 0; j < insideClick.length; j++) {
        insideClick[j].classList.remove('active')
      }
      this.classList.add('active')
      if (owidth > 750) {
        insideImg.style.backgroundImage = 'url("./'+ inPcImgSrc[this.index] +'")'
      } else {
        insideImg.style.backgroundImage = 'url("./'+ inTelImgSrc[this.index] +'")'
      }
    })
  }
}
