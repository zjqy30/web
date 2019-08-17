var globel = 'https://hongonew.com';
var token = localStorage.getItem('token')

var currPage = parseInt($('#currPage').text()); // 初始页
var pageSize = 8;//页面数
var allPage = 0;//总页面
SJList()
listenerDom()
function listenerDom() {
    // 上一页
    $('.last').click(function () {
        if (currPage == 1 || currPage == 0) {
            alert('这是第一页');
        } else {
            currPage--;
            $('#currPage').text(currPage);
            SJList()
        }
    })

    // 点击下一页
    $('.next').click(function () {
        if (currPage == allPage) {
            alert('这是最后一页');
        } else {
            currPage++;
            $('#currPage').text(currPage);
            SJList()
        }
    })

}
// 获取商家待审核列表
function SJList(){
    var sjData={
        'token':token,
        'pageNumber': currPage,//页数
        'pageSize': pageSize//页面值
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
            // 渲染前先清空
            $("#sjDate").html('');
             // 总页数
             allPage = parseInt(data.data.pageData.totalCount) / pageSize;
             allPage = Math.ceil(allPage);
             $('#allPage').text(allPage);
             // 非空判断
             if (list.length == 0) {
                 currPage = 0
                 $('#currPage').text(currPage);
                 return false;
             }
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
                        '<div class="grid-demo grid-demo-bg1" data-toggle="modal" data-target="#myModal'+index+'">'+
                            '更多资料'+
                        '</div>'+
                       ' <!-- Modal -->'+
                        '<div class="modal fade" id="myModal'+index+'" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" style="overflow-y:auto">'+
                            '<div class="modal-dialog" role="document">'+
                                '<div class="modal-content">'+
                                    '<div class="modal-header">'+
                                        '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
                                        '<h4 class="modal-title" id="myModalLabel"> 更多资料</h4>'+
                                    '</div>'+
                                    '<div class="modal-body">'+
                                        '<div class="more_cardID">'+
                                            '<P class="cardText">手持身份证照：</P>'+
                                            '<img class="cardImg" src="'+item.idCardPic+'" alt="" data-toggle="modal" data-target="#myModal1'+index+'">'+
                                        '</div>'+
                                        '<div class="more_cardID">'+
                                            '<P class="cardText">营业执照：</P>'+
                                            '<img class="cardImg" src="'+item.businessLicense+'" alt="" data-toggle="modal" data-target="#myModal2'+index+'">'+
                                       ' </div>'+
                                        '<div class="more_cardID">'+
                                            '<P class="cardText">身份证正/反面照：</P>'+
                                           ' <img class="cardImg" src="'+item.idCardUpPic+'" alt="" data-toggle="modal" data-target="#myModal3'+index+'">'+
                                            '<img class="cardImg" src="'+item.idCardDownPic+'" alt="" data-toggle="modal" data-target="#myModal4'+index+'">'+
                                        '</div>'+
                                    '</div>'+
                                    '<button type="button" id="pass" class="btn btn_green" style="margin: 10% 10px 10% 36%;">通过</button>'+
                                    '<button type="button" id="nopass" class="btn btn-default">拒绝</button>'+
                                '</div>'+
                            '</div>'+
                         '</div>'+
                                '<!-- 二级模态框 -->'+
                                '<!-- 手持身份证照 -->'+
                                '<div class="modal fade" id="myModal1'+index+'" tabindex="1" role="dialog" style="margin-left: -18px;" aria-labelledby="myModalLabel">'+
                                    '<div class="modal-dialog" role="document">'+
                                       ' <div class="modal-content">'+
                                            '<div class="modal-header">'+
                                                '<button type="button" class="close" data-dismiss="modal"aria-hidden="true">×</button>'+
    
                                                '<h4 class="modal-title" id="myModalLabel">查看大图</h4>'+
                                            '</div>'+
                                           ' <div class="modal-body">'+
                                                '<div class="more_cardID">'+
                                                    '<P class="cardText">手持身份证照：</P>'+
                                                    '<img src="'+item.idCardPic+'" alt="" style="width:100%;">'+
                                                '</div>'+
                                            '</div>'+
                                           ' <div class="modal-footer">确定</button>'+
                                            '</div>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                                '<!-- 营业执照 -->'+
                                '<div class="modal fade" id="myModal2'+index+'" tabindex="1" role="dialog" style="margin-left: -18px;" aria-labelledby="myModalLabel">'+
                                    '<div class="modal-dialog" role="document">'+
                                       ' <div class="modal-content">'+
                                            '<div class="modal-header">'+
                                                '<button type="button" class="close" data-dismiss="modal"aria-hidden="true">×</button>'+
    
                                                '<h4 class="modal-title" id="myModalLabel">查看大图</h4>'+
                                            '</div>'+
                                           ' <div class="modal-body">'+
                                                '<div class="more_cardID">'+
                                                    '<P class="cardText">营业执照：</P>'+
                                                    '<img src="'+item.businessLicense+'" alt="" style="width:100%;">'+
                                                '</div>'+
                                            '</div>'+
                                           ' <div class="modal-footer">确定</button>'+
                                            '</div>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                                '<!-- 身份证正面照 -->'+
                                '<div class="modal fade" id="myModal3'+index+'" tabindex="1" role="dialog" style="margin-left: -18px;" aria-labelledby="myModalLabel">'+
                                    '<div class="modal-dialog" role="document">'+
                                       ' <div class="modal-content">'+
                                            '<div class="modal-header">'+
                                                '<button type="button" class="close" data-dismiss="modal"aria-hidden="true">×</button>'+
    
                                                '<h4 class="modal-title" id="myModalLabel">查看大图</h4>'+
                                            '</div>'+
                                           ' <div class="modal-body">'+
                                                '<div class="more_cardID">'+
                                                    '<P class="cardText">身份证正面照:</P>'+
                                                    '<img src="'+item.idCardUpPic+'" alt="" style="width:100%;">'+
                                                '</div>'+
                                            '</div>'+
                                           ' <div class="modal-footer">确定</button>'+
                                            '</div>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                                '<!-- 身份证反面照 -->'+
                                '<div class="modal fade" id="myModal4'+index+'" tabindex="1" role="dialog" style="margin-left: -18px;" aria-labelledby="myModalLabel">'+
                                    '<div class="modal-dialog" role="document">'+
                                       ' <div class="modal-content">'+
                                            '<div class="modal-header">'+
                                                '<button type="button" class="close" data-dismiss="modal"aria-hidden="true">×</button>'+
    
                                                '<h4 class="modal-title" id="myModalLabel">查看大图</h4>'+
                                            '</div>'+
                                           ' <div class="modal-body">'+
                                                '<div class="more_cardID">'+
                                                    '<P class="cardText">身份证反面照：</P>'+
                                                    '<img src="'+item.idCardDownPic+'" alt="" style="width:100%;">'+
                                                '</div>'+
                                            '</div>'+
                                           ' <div class="modal-footer">确定</button>'+
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
                            if(data.errorCode==0){
                                alert("审核通过")
                            }else{
                                alert("审核未通过")
                            }
                            window.location.reload();
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
                            if(data.errorCode==0){
                                alert("审核已拒绝")
                            }else{
                                alert("审核拒绝失败")
                            }
                            window.location.reload();
                        }
                        
                    })
                })
            })
        }
    })
}