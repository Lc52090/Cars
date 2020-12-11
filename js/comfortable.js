let imgSrcArr = []
let containerimgSrc = ['img/pcimg/comfortable/soft-car1.gif','img/pcimg/comfortable/soft-car2.png','img/pcimg/comfortable/soft-car3.png']
imgSrcArr.push(...containerimgSrc)
console.log(imgSrcArr)
let pcimgSrc = []
for (let i = 0; i < 3; i++) {
  pcimgSrc[i] = 'img/pcimg/comfortable/land0'+(i+1)+'.png'
  imgSrcArr.push(pcimgSrc[i])
}
let disposePcimgSrc = []
for (let i = 0; i < 4; i++) {
  disposePcimgSrc[i] = 'img/pcimg/comfortable/pcdispose'+(i+1)+'.png'
  imgSrcArr.push(disposePcimgSrc[i])
}
let disposeTelimgSrc = []
for (let i = 0; i < 4; i++) {
  disposeTelimgSrc[i] = 'img/pcimg/comfortable/dispose'+(i+1)+'.png'
  imgSrcArr.push(disposeTelimgSrc[i])
}
imgLoad(imgSrcArr)
window.onload = function () {
  
  var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
  /* let disposeImg = document.querySelector('.dispose-bcg') */
  if (oWidth > 750) {
    getRem(1920, 100)
    /* disposeImg.style.backgroundImage =  'url("./'+disposePcimgSrc[0]+'")' */
  } else {
    getRem(750, 100)
    /* disposeImg.style.backgroundImage =  'url("./'+disposeTelimgSrc[0]+'")' */
  }

  window.onresize = function () {
    oWidth = document.body.clientWidth || document.documentElement.clientWidth;
    if (oWidth > 750) {
      getRem(1920, 100)
    } else {
      getRem(750, 100)
    }
  }
  /**点击X号返回上一页*/
  //获取X号,X号点击事件
  var closed = document.querySelector(".closed")
  addListener(closed, "click", function () {
    //返回上一页
    window.history.go(-1)
  })

  //点击按钮切换空间大小图片
  let containerClick = document.querySelectorAll('.container-right ul>li')
  let containerImg = document.querySelector('.car-container>.bak-left')
  for (let i = 0; i < containerClick.length; i++) {
    containerClick[i].index = i
    addListener(containerClick[i], 'click', function () {
      this.style.background = ''
      for (let j = 0; j < containerClick.length; j++) {
        containerClick[j].classList.remove('active')
      }
      this.classList.add('active')
      //改变背景图片
      containerImg.style.backgroundImage = 'url("./'+ containerimgSrc[this.index] +'")'
    })
  }

  //路况点击切换
  let moduleClick = document.querySelectorAll('.module-content>.left li')
  let moduleImg = document.querySelector('.module-content>.right')
  for (let i = 0; i < moduleClick.length; i++) {
    moduleClick[i].index = i
    addListener(moduleClick[i], 'click', function () {
      this.style.background = ''
      for (let j = 0; j < moduleClick.length; j++) {
        moduleClick[j].classList.remove('active')
      }
      this.classList.add('active')
      moduleImg.style.backgroundImage = 'url("./'+pcimgSrc[this.index]+'")'
    })
  }

  //布置点击切换
  let disposeClick = document.querySelectorAll('.dispose-tab>ul li')
  let disposeImg = document.querySelector('.dispose-bcg')
  for (let i = 0; i < disposeClick.length; i++) {
    disposeClick[i].index = i
    addListener(disposeClick[i], 'click', function () {
      this.style.background = ''
      oWidth = document.body.clientWidth || document.documentElement.clientWidth;
      for (let j = 0; j < disposeClick.length; j++) {
        disposeClick[j].classList.remove('active')
      }
      this.classList.add('active')
      if (oWidth > 750) {
        disposeImg.style.backgroundImage =  'url("./'+disposePcimgSrc[this.index]+'")'
      } else {
        disposeImg.style.backgroundImage =  'url("./'+disposeTelimgSrc[this.index]+'")'
      }
    })
  }
}