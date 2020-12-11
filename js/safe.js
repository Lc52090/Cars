let imgSrcArr = []
let pcimgSrc = []
for (let i = 0; i < 3; i++) {
  pcimgSrc[i] = 'img/pcimg/safe/insetsafe0' + (i + 1) + '.png'
  imgSrcArr.push(pcimgSrc[i])
}
let telimgSrc = []
for (let i = 0; i < 3; i++) {
  telimgSrc[i] = 'img/telimg/safe/swiper0' + (i + 1) + '.png'
  imgSrcArr.push(telimgSrc[i])
}
let systemPcimgSrc = []
for (let i = 0; i < 4; i++) {
  systemPcimgSrc[i] = 'img/pcimg/safe/function' + (i + 1) + '.png'
  imgSrcArr.push(systemPcimgSrc[i])
}
let systemTelimgSrc = []
for (let i = 0; i < 4; i++) {
  systemTelimgSrc[i] = 'img/telimg/safe/function' + (i + 1) + '.png'
  imgSrcArr.push(systemTelimgSrc[i])
}
imgLoad(imgSrcArr)

//页面加载
window.onload = function () {
  var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
  /*   let driveImg = document.querySelector('.drivemain')
    let safeImg = document.querySelector('.car-safe') */

  if (oWidth > 750) {
    getRem(1920, 100)
    /*  driveImg.style.backgroundImage = 'url("./' + systemPcimgSrc[0] + '")'
     safeImg.style.backgroundImage = 'url("./' + pcimgSrc[1] + '")' */
  } else {
    getRem(750, 100)
    /*     driveImg.style.backgroundImage = 'url("./' + systemTelimgSrc[0] + '")'
        safeImg.style.backgroundImage = 'url("./' + telimgSrc[1] + '")' */

  }
  window.onresize = function () {
    oWidth = document.body.clientWidth || document.documentElement.clientWidth;
    if (oWidth > 750) {
      getRem(1920, 100)
    } else {
      getRem(750, 100)
    }
  }
  //驾驶系统点击切换
  let driveClick = document.querySelectorAll('.drivemain .bottom li')
  let driveImg = document.querySelector('.drivemain')
  for (let i = 0; i < driveClick.length; i++) {
    driveClick[i].index = i
    addListener(driveClick[i], 'click', function () {
      this.style.background = ''
      oWidth = document.body.clientWidth || document.documentElement.clientWidth;
      for (let j = 0; j < driveClick.length; j++) {
        driveClick[j].classList.remove('active')
      }
      this.classList.add('active')
      if (oWidth > 750) {
        driveImg.style.backgroundImage = 'url("./' + systemPcimgSrc[this.index] + '")'
      } else {
        driveImg.style.backgroundImage = 'url("./' + systemTelimgSrc[this.index] + '")'
      }
    })
  }

  //安全系统介绍部点击切换
  let safeImg = document.querySelector('.car-safe')
  let textClick = safeImg.querySelectorAll('.tab ul li')
  let safeHide = safeImg.querySelectorAll('.tab>.safe-hide div')
  let lineShow = safeImg.querySelectorAll('.tab>.line div')
  for (let i = 0; i < textClick.length; i++) {
    textClick[i].index = i
    addListener(textClick[i], 'click', function () {
      this.style.background = ''
      oWidth = document.body.clientWidth || document.documentElement.clientWidth;
      for (let j = 0; j < textClick.length; j++) {
        textClick[j].classList.remove('active')
        safeHide[j].classList.remove('active')
        lineShow[j].classList.remove('active')
      }
      this.classList.add('active')
      safeHide[this.index].classList.add('active')
      lineShow[this.index].classList.add('active')
      if (oWidth > 750) {
        safeImg.style.backgroundImage = 'url("./' + pcimgSrc[this.index] + '")'
      } else {
        safeImg.style.backgroundImage = 'url("./' + telimgSrc[this.index] + '")'
      }
    })
  }
  /*
  *点击X号返回上一页*/
  //获取X号,X号点击事件
  let closed = document.querySelector(".closed")
  addListener(closed, "click", function () {
    //返回上一页
    window.history.go(-1)
  })
}