var globel = 'https://hongonew.com';
var token = localStorage.getItem('token');

news();
// 获取消息列表
function news(){
    var data = {
        'token': token
    }
    // 消息列表
    $.ajax({
        url: globel + "/hone/backend/backendMsg/list",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (data) {
            // console.log('消息列表', data)
            var list = data.data.messageList
            if(!list){
                $("#new_body").hide()
                return false;
            };
            $.each(list, function (index, item) {
                var type=item.type;
                $("#login-top").append('<div class="new">'+(index+1)+'</div>')
                $("#new_body").append(
                    '<div class="body_block">' +
                    '<div class="body_text">' +
                    '<p class="text_p1">' + item.content + '</p>' +
                    '<p class="text_p2">' + item.createDate + '</p>' +
                    '</div>' +
                    '</div>' 
                )
            })
        }
    })
}
// 1 网红审核-demo1 2 商家审核-demo3 3 退款审核-refund 4 提现审核-red 5 非纯佣订单审核-Pure 6 纯佣订单审核-dingdan
// function jump(type) {
//     console.log('点击类型',type)
//     if(type=1){
//         str='dings.html'
//         $('#target_main').html(window.templates[str]);
        
//     }else if(type=2){
//         str='demo3.html'
//         $('#target_main').html(window.templates[str]);

//     }else if(type=3){
//         str='refund.html'
//         $('#target_main').html(window.templates[str]);

//     }else if(type=4){
//         str='red.html'
//         $('#target_main').html(window.templates[str]);

//     }else if(type=5){
//         str='Pure.html'
//         $('#target_main').html(window.templates[str]);

//     }else if(type=6){
//         str='dingdan.html'
//         $('#target_main').html(window.templates[str]);
//     }
// }

