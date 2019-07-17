var globel = 'http://192.168.0.166:8080';
var token = localStorage.getItem('token')

// 页数没写
// 获取销售人员列表
var type_data = {
    'token': token,
    'pageNumber': 1,//页数
    'pageSize': 15 //页面值
}
$.ajax({
    url: globel + "/hone/backend/marketer/list",
    dataType: 'json',
    type: "post",
    contentType: "application/json",
    data: JSON.stringify(type_data),
    success: function (data) {
        console.log('1', data)
        // var getPage = data.data.pageData;
        var list = data.data.pageData.list;
        console.log('2', list)
        $.each(list, function (index, item) {
            var id = list[index].id
            // console.log(id)
            $("#red_ti").append(
                '<tr>' +
                '<td><img src="images/hehua.jpg" alt=""></td>' +
                '<td class="market_name">' + item.marketName + '</td>' +
                '<td>男</td>' +
                '<td>' + item.inviteNums + '</td>' +
                '<td>' + item.userCode + '</td>' +
                // '<td><img src="'+item.qrcodeUrl+'" alt=""></td>' +
                '<td class="market_btn" style="color:#1890ff;">' + item.qrcodeUrl + '</td>' +
                '<td>' +
                '<button class="market_table_btn right" data-toggle="modal" data-target="#myModalmore">邀请人员</button>' +
                '<button class="market_table_btn" id="market_del">删除资料</button>' +
                ' </td>' +
                '</tr>'
            )

            // $("#myModalmore").click(function(){
            //     // console.log(111111)
            //     //   点击弹出邀请人员
            //             var market_data = {
            //                 'token': token,
            //                 'marketerId': id,
            //                 'pageNumber':'1',
            //                 'pageSize':'10'

            //             }
            //             console.log(market_data)
            //             $.ajax({
            //                 url: globel + "/hone/backend/marketer/inviteList",
            //                 dataType: 'json',
            //                 type: "post",
            //                 contentType: "application/json",
            //                 data: JSON.stringify(market_data),
            //                 success: function (data) {
            //                     console.log('邀请人员', data)

            //                 }
            //             })
            // })

            // 点击删除销售人员
            // $(".market_table_btn").click(function () {
            //     var market_data = {
            //         'token': token,
            //         'marketerId':id
            //     }
            //     $.ajax({
            //         url: globel + "/hone/backend/marketer/create",
            //         dataType: 'json',
            //         type: "post",
            //         contentType: "application/json",
            //         data: JSON.stringify(market_data),
            //         success: function (data) {
            //             console.log('删除', data)
            //             $("#red_ti").remove()
            //         }
            //     })
            // })
        })
    }
})


// 创建销售人员
function market_btn() {
    var market_name = $("#market_name").val();
    var mar_data = {
        'token': token,
        'name': market_name
    }
    $.ajax({
        url: globel + "/hone/backend/marketer/create",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(mar_data),
        success: function (data) {
            // console.log('创建销售人员',data)
            var liss = data.data.hoMarketer;
            $.each(liss, function (index, item) {
                $("#red_ti").append(
                    '<tr>' +
                    '<td><img src="images/hehua.jpg" alt=""></td>' +
                    '<td class="market_name">' + item.marketName + '</td>' +
                    '<td>男</td>' +
                    '<td>' + item.inviteNums + '</td>' +
                    '<td>' + item.userCode + '</td>' +
                    // '<td><img src="'+item.qrcodeUrl+'" alt=""></td>' +
                    '<td class="market_btn" style="color:#1890ff;">' + item.qrcodeUrl + '</td>' +
                    '<td>' +
                    '<button class="market_table_btn right" data-toggle="modal" data-target="#myModalmore">邀请人员</button>' +
                    '<button class="market_table_btn">删除资料</button>' +
                    ' </td>' +
                    '</tr>'
                )
            })
            window.location.reload()
            market_name = ""
        }
    })
}


// '<!-- 网红人员更多资料-模态框 Modal -->'+
                // '< div class= "modal fade" id = "myModalmore" tabindex = "-1" role = "dialog" aria - labelledby="myModalLabel" style = "z-index: 10" >'+
                // '<div class="modal-dialog" role="document">'+
                //     '<div class="modal-content" id="market_modal_content">'+
                //         '<div class="modal-header">'+
                //             '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
                //             '<h4 class="modal-title" id="myModalLabel"> 抢单人员</h4>'+
                //         '</div>'+
                //         '<div class="modal-body">'+
                //             '<div class="market_modal-body">'+
                //                 '<table class="market_table">'+
                //                     '<tbody>'+
                //                         '<tr>'+
                //                             '<td><img src="images/hehua.jpg" alt=""></td>'+
                //                                 '<td class="tabel_name">你说什么就是什么</td>'+
                //                                 '<td>网红</td>'+
                //                                 '<td>抖音</td>'+
                //                                         '</tr>'+
                //                             '<tr>'+
                //                                 '<td><img src="images/hehua.jpg" alt=""></td>'+
                //                                     '<td class="tabel_name">你说什么就是什么</td>'+
                //                                     '<td>商家</td>'+
                //                                     '<td>服装-男装-裤子</td>'+
                //                                         '</tr>'+
                //                                     '</tbody>'+
                //                                 '</table>'+
                //                             '</div>'+
                //                    ' <!-- 分页 -->'+
                //                             '<!-- <div id="demo2-1"></div> -->'+
                //                         '</div>'+
                //             '</div>'+
                //         '</div>'+
                //     '</div>'
