
// 侧边栏的js
var staut = 1
function this_show(that) {
    if (that == staut) {
        staut = 1;
        $(that).next("ul").hide(400)
        return false
    }
    $(that).next("ul").show(400)
    $(that).parent().siblings().find('ul').hide(400)
    staut = that;
}

//切换页面
function target(str) {
    str = str + '.html'
    $('#target_main').html(window.templates[str]);
}

// 点击切换颜色(父)
$("#left_ul li").on('click', function () {
    $("#left_ul li").removeClass("color");
    $(this).addClass("color");
})
// 点击切换颜色(子)
$("#left_ul li ul li").on('click', function () {
    $("#left_ul li ul li").removeClass("bgColor");
    $(this).addClass("bgColor");
})

// 登陆后用户信息展示
var token = localStorage.getItem('token')
var headPic=localStorage.getItem("headPic")
var username = localStorage.getItem('username')
var id = localStorage.getItem('id')

if(token){
    $("#login_out").append(
        '<img src="'+(headPic?headPic:images/hehua.jpg)+'" alt="">' +
        '<p>'+username+'</p>' +
        '<i class="fa fa-caret-down" aria-hidden="true"></i>'
    )
}else{
    location.href="login.html"
}

// 退出登陆
function ligin_out() {
    var result = confirm("确定要退出吗？");
    if (result) {
        localStorage.clear()//清除所有缓存
        window.open('login.html') //跳转页面
    }
}

