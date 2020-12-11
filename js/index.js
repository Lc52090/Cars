//PC端图片预加载
let imgSrcArr = []
let pcimgSrc = []
for (let i = 0; i < 7; i++) {
  pcimgSrc[i] = 'img/pcimg/index/color-apearance0' + (i + 1) + '.png'
  imgSrcArr.push(pcimgSrc[i])
}
//移动端背景图预加载
let telimgSrc = []
for (let i = 0; i < 7; i++) {
  telimgSrc[i] = 'img/telimg/apprance/color-apearance0' + (i + 1) + '.png'
  imgSrcArr.push(telimgSrc[i])
}
//内饰背景图片加载
let inImgSrc = []
for (let i = 0; i < 3; i++) {
  inImgSrc[i] = 'img/pcimg/index/SP2c-seat' + (i + 1) + '.png'
  imgSrcArr.push(inImgSrc[i])
}
imgLoad(imgSrcArr)
window.onload = function () {
  /**
  * 获取当前屏幕宽度
  * 判断当屏幕大于750OX和小于750px时rem布局情况
  * 当屏幕改变时重新判断当屏幕大于750OX和小于750px时rem布局情况
  */
  let oWidth = document.body.clientWidth || document.documentElement.clientWidth;
  let outsideImg = document.querySelector('.outside-bck')
  if (oWidth > 750) {
    getRem(1920, 100)
    outsideImg.style.backgroundImage = 'url("./' + pcimgSrc[0] + '")'
  } else {
    getRem(750, 100)
    outsideImg.style.backgroundImage = 'url("./' + telimgSrc[0] + '")'
  }
  window.onresize = function () {
    oWidth = document.body.clientWidth || document.documentElement.clientWidth;
    if (oWidth > 750) {
      getRem(1920, 100)
    } else {
      getRem(750, 100)
    }
  }
  //主页面的按钮蒙层处理
  function buttonClick() {
    //点击按钮弹出配置参数
    let carForm = document.querySelector('.car-form')
    let container = document.querySelector('.container')
    let aForms = document.querySelectorAll('.cartext a:nth-of-type(1)')
    let ulBox = document.querySelector('.form-top>.top ul')
    let formLis = ulBox.querySelectorAll('li')
    for (let i = 0; i < aForms.length; i++) {
      aForms[i].index = i
      addListener(aForms[i], 'click', function () {
        container.style.display = 'none'
        carForm.scrollTop = '0'
        carForm.style.display = 'block'
        for (let j = 0; j < formLis.length; j++) {
          formLis[j].classList.remove('active')
        }
        //配置表样式切换
        formLis[this.index].classList.add('active')
      })
    }
    for (let i = 0; i < formLis.length; i++) {
      addListener(formLis[i], 'click', function () {
        for (let j = 0; j < formLis.length; j++) {
          formLis[j].classList.remove('active')
        }
        this.classList.add('active')
      })
    }
    //点击返回按钮进入主页
    let returnClick = document.querySelector('.form-top>.top .left')
    addListener(returnClick, 'click', function () {
      carForm.style.display = 'none'
      container.scrollTop = '0'
      container.style.display = 'block'
    })
    //点击预约试驾按钮弹出蒙层
    let aBtns = []
    aBtns.push(document.querySelector('.header .button'))
    aBtns.push(document.querySelector('.carcontainer-nav>.right div'))
    let aClicks = document.querySelectorAll('.cartext a:nth-of-type(2)')
    aBtns.push(document.querySelector('.form-top .button'))
    let mainbody = document.querySelector(".main_hide")
    for (let i = 0; i < aClicks.length; i++) {
      addListener(aClicks[i], 'click', function () {
        mainbody.style.display = 'block'
      })
    }
    for (let i = 0; i < aBtns.length; i++) {
      addListener(aBtns[i], 'click', function () {
        mainbody.style.display = 'block'
      })
    }
    //点击X关闭蒙层
    let mainClosed = document.querySelector('.main_closed')
    addListener(mainClosed, 'click', function () {
      mainbody.style.display = 'none'
    })
  }
  //外观和内饰视角展示切换部分
  function carProduce() {
    //外观展示内饰视角切换
    let outsideBody = document.querySelector('.outside-car')
    let insideBody = document.querySelector('.inside-car')
    let tabBody = document.querySelectorAll('.carproduce>ul li')
    for (let i = 0; i < tabBody.length; i++) {
      addListener(tabBody[i], 'click', function () {
        for (let j = 0; j < tabBody.length; j++) {
          tabBody[j].classList.remove('active')
        }
        this.classList.add('active')
        if (i === 0) {
          insideBody.style.display = 'none'
          outsideBody.style.display = 'block'
        } else if (i === 1) {
          outsideBody.style.display = 'none'
          insideBody.style.display = 'block'
        }
      })
    }
    //外观展示颜色切换
    let outColors = ["红", "红+黑", "橙", "橙+黑", "棕", "极光黑", "白"]
    let colorChanged = outsideBody.querySelectorAll('.outside-tab>ul li')
    let outsideImg = outsideBody.querySelector('.outside-bck')
    let spanText = outsideBody.querySelector('.outside-tab>p span')
    for (let i = 0; i < colorChanged.length; i++) {
      colorChanged[i].index = i
      addListener(colorChanged[i], 'click', function () {
        spanText.innerText = outColors[i]
        if (oWidth > 750) {
          outsideImg.style.backgroundImage = 'url("./' + pcimgSrc[this.index] + '")'
        } else {
          outsideImg.style.backgroundImage = 'url("./' + telimgSrc[this.index] + '")';
        }
      })
    }
    //内饰视角切换
    let inColors = ["黑色内饰(皮质)", "棕色内饰(皮质)", "黑色内饰(针织)"]
    let inChanged = insideBody.querySelectorAll('.inside-tab>ul li')
    let inSpanText = insideBody.querySelector('.inside-tab>p span')
    insideBody.style.backgroundImage = "url('./" + inImgSrc[0] + "')";
    for (let i = 0; i < inChanged.length; i++) {
      addListener(inChanged[i], 'click', function () {
        inSpanText.innerText = inColors[i]
        insideBody.style.backgroundImage = "url('./" + inImgSrc[i] + "')";
      })
    }
  }
  //视频部分的展示与隐藏
  function videoShow() {
    //视频展示切换部分
    let carVideoTab = document.querySelectorAll('.carvideotext>ul li')
    let videoBody = document.querySelector('.carvideo>.video')
    let videoShow = document.querySelector('.video-content')
    let videoClosed = document.querySelector('.video-closed')
    let videoPlay = document.querySelector('.video-self')
    videoPlay.pause()
    for (let i = 0; i < carVideoTab.length; i++) {
      addListener(carVideoTab[i], 'click', function () {
        for (let j = 0; j < carVideoTab.length; j++) {
          carVideoTab[j].classList.remove('active')
        }
        this.classList.add('active')
      })
    }
    //点击视频弹出蒙层开始播放视频
    addListener(videoBody, 'click', function () {
      videoShow.style.display = 'block'
      videoPlay.currentTime = 0
      videoPlay.play()
    })
    //点击X隐藏视频蒙层并停止播放视频
    addListener(videoClosed, 'click', function () {
      videoShow.style.display = 'none'
      videoPlay.pause()
    })
  }
  //配置参数数据下拉和收起
  function FormToggle() {
    let FormButtons = document.querySelectorAll('.p_title')
    let ul = document.querySelectorAll('.car_choose>ul')
    //监听按钮点击事件 
    for (let i = 0; i < FormButtons.length; i++) {
      ul[i].onoff = true
      addListener(FormButtons[i], 'click', function () {
        let parent = this.parentNode
        let child = parent.children[2]
        let img = this.querySelector('div>img')
        if (child.onoff) {
          child.style.display = 'none'
          img.src = './img/icon/icon-up.png'
          child.onoff = false
        } else {
          child.style.display = 'block'
          img.src = './img/icon/icon-down.png'
          child.onoff = true
        }
      })
    }
  }
  buttonClick()
  carProduce()
  videoShow()
  FormToggle()


  var parameterSwiper = new Swiper('.parameter', {
    slidesPerView: 2.5,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
}