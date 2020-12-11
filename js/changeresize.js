function getRem(pwidth, prem) {
    var html = document.getElementsByTagName("html")[0];
    var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
    html.style.fontSize = oWidth / pwidth * prem + "px";
}
window.onload = function () {
    /**
    * 获取当前屏幕宽度
    * 判断当屏幕大于750pX和小于750px时rem布局情况
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
}