var globel = 'http://192.168.0.166:8080';
var token = localStorage.getItem('token')

// 获取商家待审核列表
var sjData={
    'token':token,
    'pageNumber':1,
    'pageSize':10
}
$.ajax({
    url: globel + "/hone/backend/userBasic/sellerApproveList",
    dataType: 'json',
    type: "post",
    contentType: "application/json",
    data: JSON.stringify(sjData),
    success: function (data) {
        console.log('商家待审核列表', data)
        var list=data.data.pageData.list;
        console.log(list)
        $.each(list,function(index,item){
            var id=item.id;
            var status=item.status;
            console.log('待审核状态',status)
            $("#sjDate").append(
                '<div class="sh_content" id="content_row">'+
                '<div class="layui-row" id="row">'+

                '<div class="layui-col-md4">'+
                    '<div class="grid-demo grid-demo-bg1">'+
                        '<span class="color_black">姓名：</span>'+
                        '<span class="color_gray">'+item.wxName+'</span>'+
                   ' </div>'+
                '</div>'+
                '<div class="layui-col-md4">'+
                    '<div class="grid-demo grid-demo-bg1">'+
                        '<span class="color_black">性别：</span>'+
                        '<span class="color_gray">'+(item.sex==1?"男":"女")+'</span>'+
                   ' </div>'+
                '</div>'+
                '<div class="layui-col-md4">'+
                    '<div class="grid-demo grid-demo-bg1">'+
                        '<span class="color_black">邀请人：</span>'+
                        '<span class="color_gray">'+item.marketer+'</span>'+
                    '</div>'+
                '</div>'+
                '<div class="layui-col-md6">'+
                    '<div class="grid-demo grid-demo-bg1">'+
                        '<span class="color_black">手机号码：</span>'+
                        '<span class="color_gray">'+item.phoneNo+'</span>'+
                    '</div>'+
                '</div>'+
                '<div class="layui-col-md6">'+
                    '<div class="grid-demo grid-demo-bg1">'+
                        '<span class="color_black">申请时间：</span>'+
                        '<span class="color_gray">'+item.createDate+'</span>'+
                    '</div>'+
                '</div>'+
                '<div class="layui-col-md6">'+
                    '<div class="grid-demo grid-demo-bg1">'+
                        '<span class="color_black">行业：</span>'+
                        '<span class="color_gray">'+item.industry+'</span>'+
                    '</div>'+
                '</div>'+
                '<div class="layui-col-md6">'+
                    '<div class="grid-demo grid-demo-bg1">'+
                        '<span class="color_black">居住地址：</span>'+
                        '<span class="color_gray">'+item.country+'</span>'+
                    '</div>'+
                '</div>'+
                '<div class="layui-col-md9">'+
                    '<div class="grid-demo grid-demo-bg1">'+
                        '<span class="color_black">身份证号码：</span>'+
                        '<span class="color_gray">'+item.idCardNumber+'</span>'+
                    '</div>'+
                '</div>'+
                '<div class="layui-col-md3">'+
//                     '<!-- 一级模态框-->'+
                    '<div class="grid-demo grid-demo-bg1" data-toggle="modal" data-target="#myModal">'+
                        '更多资料'+
                    '</div>'+
                   ' <!-- Modal -->'+
                    '<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">'+
                        '<div class="modal-dialog" role="document">'+
                            '<div class="modal-content">'+
                                '<div class="modal-header">'+
                                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
                                    '<h4 class="modal-title" id="myModalLabel"> 更多资料</h4>'+
                                '</div>'+
                                '<div class="modal-body">'+
                                    '<div class="more_cardID">'+
                                        '<P class="cardText">手持身份证照：</P>'+
                                        '<img class="cardImg" src="'+item.idCardPic+'" alt="" data-toggle="modal" data-target="#myModal1">'+
                                    '</div>'+
                                    '<div class="more_cardID">'+
                                        '<P class="cardText">营业执照：</P>'+
                                        '<img class="cardImg" src="'+item.businessLicense+'" alt="" data-toggle="modal" data-target="#myModal1">'+
                                   ' </div>'+
                                    '<div class="more_cardID">'+
                                        '<P class="cardText">身份证正/反面照：</P>'+
                                       ' <img class="cardImg" src="'+item.idCardUpPic+'" alt="" data-toggle="modal" data-target="#myModal1">'+
                                        '<img class="cardImg" src="'+item.idCardDownPic+'" alt="">'+
                                    '</div>'+
                                '</div>'+
                                '<button type="button" id="pass" class="btn btn_green" style="margin: 10% 10px 10% 36%;">通过</button>'+
                                '<button type="button" id="nopass" class="btn btn-default">拒绝</button>'+
                            '</div>'+
                            '<!-- 二级模态框 -->'+
                            '<!-- Modal -->'+
                            '<div class="modal fade" id="myModal1" tabindex="1" role="dialog" style="margin-left: -18px;" aria-labelledby="myModalLabel">'+
                                '<div class="modal-dialog" role="document">'+
                                   ' <div class="modal-content">'+
                                        '<div class="modal-header">'+
                                            '<button type="button" class="close" data-dismiss="modal"aria-hidden="true">×</button>'+

                                            '<h4 class="modal-title" id="myModalLabel">查看大图</h4>'+
                                        '</div>'+
                                       ' <div class="modal-body">'+
                                            '<div class="more_cardID">'+
                                                '<P class="cardText">营业执照：</P>'+
                                                '<img src="'+item.platformImgs+'" alt="">'+
                                            '</div>'+
                                        '</div>'+
                                       ' <div class="modal-footer">确定</button>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+

                '</div>'+
                '</div>'
            )
            // 审核通过
            $("#pass").click(function(){
                console.log(123)
                var pass_data={
                    'token':token,
                    'appletUserId':id,//用户ID
                    'ifPass': 'pass'//过或不过
                }
                $.ajax({
                    url: globel + "/hone/backend/userBasic/sellerApproveOperate",
                    dataType: 'json',
                    type: "post",
                    contentType: "application/json",
                    data: JSON.stringify(pass_data),
                    success: function (data) {
                        console.log('审核通过',data)
                        alert("审核通过")
                    }
                })
            })
            // 审核未通过
            $("#nopass").click(function(){
                console.log(123)
                var nopass_data={
                    'token':token,
                    'appletUserId':id,//用户ID
                    'ifPass': 'nopass'//过或不过
                }
                $.ajax({
                    url: globel + "/hone/backend/userBasic/sellerApproveOperate",
                    dataType: 'json',
                    type: "post",
                    contentType: "application/json",
                    data: JSON.stringify(nopass_data),
                    success: function (data) {
                        console.log('审核未通过',data)
                        alert("审核未通过")
                    }
                    
                })
            })
        })
    }
})