
// 侧边栏的js



var staut = 1
function this_show(that) {
    if(that == staut){
        staut = 1;
        $(that).next("ul").hide(400)
        // $(that).next("ul").css({'color':'white',})
        return false
    }
    $(that).next("ul").show(400)
    $(that).parent().siblings().find('ul').hide(400)
    staut = that;
}

//切换页面
function target(str) {
    str = str+'.html'
    $('#target_main').html(window.templates[str]);
}
