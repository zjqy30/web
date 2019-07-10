'use strict';
window.templates = Object.create(null);
//网红审核
window.templates['demo1.html'] = '<div class="content_row" id="content_row">' +
    '<!-- 单个model -->' +
    '<div class="layui-row" id="row">' +
    ' <!-- 33.3% -->' +
    '<div class="layui-col-md4">' +
    '<div class="grid-demo grid-demo-bg1">' +
    '<span class="color_black">姓名：</span>' +
    '<span class="color_gray">朱涛</span>' +
    '</div>' +
    '</div>' +
    '<div class="layui-col-md4">' +
    '<div class="grid-demo">' +
    '<span class="color_black">性别：</span>' +
    '<span class="color_gray">男</span>' +
    '</div>' +
    '</div>' +
    '<div class="layui-col-md4">' +
    '<div class="grid-demo grid-demo-bg1">' +
    '<span class="color_black">年龄：</span>' +
    '<span class="color_gray">23</span>' +
    '</div>' +
    '</div>' +
    '<div class="layui-col-md4">' +
    '<div class="grid-demo grid-demo-bg1">' +
    ' <span class="color_black">店铺：</span>' +
    '<span class="color_gray">暂无店铺</span>' +
    '</div>' +
    '</div>' +
    '<div class="layui-col-md4">' +
    ' <div class="grid-demo">' +
    '<span class="color_black">平台ID：</span>' +
    '<span class="color_gray">123456</span>' +
    '</div>' +
    '</div>' +
    '<div class="layui-col-md4">' +
    '<div class="grid-demo grid-demo-bg1">' +
    '<span class="color_black">平台：</span>' +
    '<span class="color_gray">抖音</span>' +
    '</div>' +
    '</div>' +
    '<div class="layui-col-md4">' +
    '<div class="grid-demo grid-demo-bg1">' +
    '<span class="color_black">手机号码：</span>' +
    '<span class="color_gray">110120119115</span>' +
    '</div>' +
    '</div>' +
    '<div class="layui-col-md4">' +
    '<div class="grid-demo">' +
    '<span class="color_black">邀请人：</span>' +
    '<span class="color_gray">张慧云</span>' +
    '</div>' +
    '</div>' +
    '<div class="layui-col-md4">' +
    '<div class="grid-demo grid-demo-bg1">' +
    '<span class="color_black">粉丝量：</span>' +
    ' <span class="color_gray">23万</span>' +
    ' </div>' +
    '</div>' +
    '<div class="layui-col-md12">' +
    '<div class="grid-demo grid-demo-bg1">' +
    '<span class="color_black">申请时间：</span>' +
    '<span class="color_gray">2019-06-05 20:00</span>' +
    ' </div>' +
    '</div>' +
    '<div class="layui-col-md12">' +
    '<div class="grid-demo grid-demo-bg1">' +
    '<span class="color_black">居住地址：</span>' +
    '<span class="color_gray">江苏省苏州市金马大厦A座</span>' +
    '</div>' +
    '</div>' +
    '<div class="layui-col-md9">' +
    '<div class="grid-demo grid-demo-bg1">' +
    '<span class="color_black">身份证号码：</span>' +
    '<span class="color_gray">32098119604206732</span>' +
    '</div>' +
    '</div>' +
    '<div class="layui-col-md3">' +
    '<!-- 一级模态框-->' +
    '<div class="grid-demo grid-demo-bg1" data-toggle="modal" data-target="#myModal">' +
    '更多资料' +
    '</div>' +
    '<!-- Modal -->' +
    '<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" style="z-index:10">' +
    '<div class="modal-dialog" role="document">' +
    '<div class="modal-content">' +
    '<div class="modal-header">' +
    '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
    '<h4 class="modal-title" id="myModalLabel"> 更多资料</h4>' +
    '</div>' +
    '<div class="modal-body">' +
    '<div class="more_cardID">' +
    '<P class="cardText">手持身份证照：</P>' +
    '<img class="cardImg" src="images/hehua.jpg" alt="" data-toggle="modal" data-target="#myModal1">' +
    '</div>' +
    '<div class="more_cardID">' +
    '<P class="cardText">身份证正/反面照：</P>' +
    '<img class="cardImg" src="images/hehua.jpg" alt="" data-toggle="modal" data-target="#myModal1">' +
    '<img class="cardImg" src="images/hehua.jpg" alt="" data-toggle="modal" data-target="#myModal1">' +
    '</div>' +
    '<div class="more_cardID">' +
    '<P class="cardText">形象照：</P>' +
    '<img class="cardImg" src="images/hehua.jpg" alt=""data-toggle="modal" data-target="#myModal1">' +
    '</div>' +
    '<div class="more_cardID">' +
    '<P class="cardText">平台截图：</P>' +
    '<img class="cardImg" src="images/hehua.jpg" alt="" data-toggle="modal" data-target="#myModal1">' +
    '</div>' +
    ' </div>' +
    '<button type="button" class="btn btn_green" style="margin: 10% 10px 10% 36%;">通过</button>' +
    '<button type="button" class="btn btn-default">拒绝</button>' +
    '</div>' +

    '</div>' +
    '</div>' +
    '<!-- 二级模态框 同一级模态框同级-->' +
    ' <!-- Modal -->' +
    '<div class="modal fade model" id="myModal1" tabindex="1" role="dialog" style="z-index:100;" aria-labelledby="myModalLabel">' +
    '<div class="modal-dialog" role="document">' +
    '<div class="modal-content">' +
    '<div class="modal-header">' +
    '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' +

    '<h4 class="modal-title" id="myModalLabel">查看大图</h4>' +
    '</div>' +
    '<div class="modal-body">' +
    '<div class="more_cardID">' +
    '<P class="cardText">手持身份证照：</P>' +
    '<img src="images/hehua.jpg" alt="">' +
    '</div>' +
    '</div>' +
    '<div class="modal-footer">' +
    '<button type="button" class="btn btn-default" data-dismiss="modal">确定</button>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>';
// <!--网红审核-人员查看  -->
window.templates['demo2.html'] = '<!--人员查看  -->' +
    '<div class="wh_content">' +
    '<!-- 查询 -->' +
    '<form class="form-inline">' +
    '<div class="form-group">' +
    '<label for="exampleInputName2">平台：</label>' +
    '<input type="text" class="form-control" id="exampleInputName2" placeholder="请输入">' +
    '</div>' +
    '<div class="form-group">' +
    '<label for="exampleInputEmail2">性别：</label>' +
    '<input type="text" class="form-control" placeholder="请输入">' +
    '</div>' +
    '<div class="form-group">' +
    '<label for="name">名字：</label>' +
    '<input type="text" class="form-control" id="name" placeholder="请输入">' +
    '</div>' +
    '<button type="submit" class="btn btn-default" style="color: white;background: #1890FF">查询</button>' +
    '</form>' +
    '<!-- 网红人员列表 -->' +
    '<table class="wh_table">' +
    '<thead>' +
    '<tr class="tr_heard">' +
    '<th></th>' +
    '<th>姓名</th>' +
    '<th>平台</th>' +
    '<th>性别</th>' +
    '<th>粉丝数量</th>' +
    '<th>入驻时间</th>' +
    '<th>操作</th>' +
    '</tr>' +
    '</thead>' +
    '<tbody>' +
    '<tr>' +
    '<td><img src="images/hehua.jpg" alt=""></td>' +
    '<td class="tabel_name">你说什么就是什么</td>' +
    '<td>抖音</td>' +
    '<td>男</td>' +
    '<td>1230000</td>' +
    '<td>2019-6-18 10:00</td>' +
    '<td>' +
    '<button class="wh_table_btn right" data-toggle="modal" data-target="#myModalmore">更多资料</button>' +
    '<button class="wh_table_btn">删除资料</button>' +
    '</td>' +
    ' </tr>' +
    '<tr>' +
    '<td><img src="images/hehua.jpg" alt=""></td>' +
    '<td class="tabel_name">你说什么就是什么</td>' +
    '<td>抖音</td>' +
    '<td>男</td>' +
    '<td>1230000</td>' +
    '<td>2019-6-18 10:00</td>' +
    '<td>' +
    '<button class="wh_table_btn right" data-toggle="modal" data-target="#myModalmore">更多资料</button>' +
    '<button class="wh_table_btn">删除资料</button>' +
    '</td>' +
    ' </tr>' +
    '</tbody>' +
    '</table>' +
    '<!-- 网红人员更多资料-模态框 -->' +
    '<!-- Modal -->' +
    '<div class="modal fade" id="myModalmore" tabindex="-1" role="dialog"' +
    'aria-labelledby="myModalLabel" style="z-index: 10">' +
    '<div class="modal-dialog" role="document">' +
    '<div class="modal-content">' +
    '<div class="modal-header">' +
    '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
    '<h4 class="modal-title" id="myModalLabel"> 更多资料</h4>' +
    '</div>' +
    '<div class="modal-body">' +

    '<div class="layui-row" id="row">' +
    '<P class="cardText">基本信息：</P>' +
    '<div class="layui-col-md4">' +
    '<div class="grid-demo grid-demo-bg1">' +
    '<span class="color_black">姓名：</span>' +
    '<span class="color_gray">朱涛</span>' +
    '</div>' +
    '</div>' +
    '<div class="layui-col-md4">' +
    '<div class="grid-demo">' +
    '<span class="color_black">性别：</span>' +
    '<span class="color_gray">男</span>' +
    '</div>' +
    '</div>' +
    '<div class="layui-col-md4">' +
    '<div class="grid-demo grid-demo-bg1">' +
    '<span class="color_black">年龄：</span>' +
    '<span class="color_gray">23</span>' +
    '</div>' +
    '</div>' +
    '<div class="layui-col-md4">' +
    '<div class="grid-demo grid-demo-bg1">' +
    ' <span class="color_black">店铺：</span>' +
    '<span class="color_gray">暂无店铺</span>' +
    '</div>' +
    '</div>' +
    '<div class="layui-col-md4">' +
    ' <div class="grid-demo">' +
    '<span class="color_black">平台ID：</span>' +
    '<span class="color_gray">123456</span>' +
    '</div>' +
    '</div>' +
    '<div class="layui-col-md4">' +
    '<div class="grid-demo grid-demo-bg1">' +
    '<span class="color_black">平台：</span>' +
    '<span class="color_gray">抖音</span>' +
    '</div>' +
    '</div>' +
    '<div class="layui-col-md4">' +
    '<div class="grid-demo grid-demo-bg1">' +
    '<span class="color_black">手机号码：</span>' +
    '<span class="color_gray">110120119115</span>' +
    '</div>' +
    '</div>' +
    '<div class="layui-col-md4">' +
    '<div class="grid-demo">' +
    '<span class="color_black">邀请人：</span>' +
    '<span class="color_gray">张慧云</span>' +
    '</div>' +
    '</div>' +
    '<div class="layui-col-md4">' +
    '<div class="grid-demo grid-demo-bg1">' +
    '<span class="color_black">粉丝量：</span>' +
    ' <span class="color_gray">23万</span>' +
    ' </div>' +
    '</div>' +
    '<div class="layui-col-md12">' +
    '<div class="grid-demo grid-demo-bg1">' +
    '<span class="color_black">申请时间：</span>' +
    '<span class="color_gray">2019-06-05 20:00</span>' +
    ' </div>' +
    '</div>' +
    '<div class="layui-col-md12">' +
    '<div class="grid-demo grid-demo-bg1">' +
    '<span class="color_black">居住地址：</span>' +
    '<span class="color_gray">江苏省苏州市金马大厦A座</span>' +
    '</div>' +
    '</div>' +
    '<div class="layui-col-md9">' +
    '<div class="grid-demo grid-demo-bg1">' +
    '<span class="color_black">身份证号码：</span>' +
    '<span class="color_gray">32098119604206732</span>' +
    '</div>' +
    '</div>' +
    '<div class="layui-col-md12">' +
    '<div class="more_cardID cardid">' +
    '<P class="cardText">手持身份证照：</P>' +
    '<img class="cardidImg" src="images/hehua.jpg" alt=""data-toggle="modal" data-target="#myModal1">' +
    '</div>' +
    '<div class="more_cardID cardid">' +
    '<P class="cardText">身份证正/反面照：</P>' +
    '<img class="cardidImg" src="images/hehua.jpg" alt=""data-toggle="modal" data-target="#myModal1">' +
    '<img class="cardidImg" style="margin: 0" src="images/hehua.jpg"alt="" data-toggle="modal" data-target="#myModal1">' +
    '</div>' +
    '<div class="more_cardID cardid">' +
    '<P class="cardText">形象照：</P>' +
    '<img class="cardidImg" src="images/hehua.jpg" alt="" data-toggle="modal" data-target="#myModal1">' +
    '</div>' +
    '<div class="more_cardID cardid">' +
    '<P class="cardText">平台截图：</P>' +
    '<img class="cardidImg" src="images/hehua.jpg" alt="" data-toggle="modal" data-target="#myModal1">' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '<!-- 二级模态框 整个模态框要跟第一个模态框同级 Modal -->' +
    '<div class="modal fade model" id="myModal1" tabindex="1" role="dialog"aria-labelledby="myModalLabel" style="z-index: 100">' +
    '<div class="modal-dialog" role="document">' +
    '<div class="modal-content">' +
    '<div class="modal-header">' +
    '<button type="button" class="close" data-dismiss="modal"aria-hidden="true">×</button>' +
    '<h4 class="modal-title" id="myModalLabel">查看大图</h4>' +
    '</div>' +
    '<div class="modal-body">' +
    '<div class="more_cardID">' +
    '<P class="cardText">查看大图:</P>' +
    '<img src="images/hehua.jpg" alt="">' +
    '</div>' +
    '</div>' +
    '<div class="modal-footer">' +
    '<button type="button" class="btn btn-default" data-dismiss="modal">确定</button>' +
    '</div>' +
    ' </div>' +
    '</div>' +
    '</div>' +
    ' <!-- 模态框-完 -->' +
    '<!-- 分页 -->' +
    '<div id="demo2-1"></div>' +
    '</div>';
//商家审核
window.templates['demo3.html'] = '<!-- 商家审核 -->\n' +
    '                    <div class="sh_content" id="content_row">\n' +
    '                        <!-- 单个model -->\n' +
    '                        <div class="layui-row" id="row">\n' +
    '                            <!-- 33.3% -->\n' +
    '                            <div class="layui-col-md4">\n' +
    '                                <div class="grid-demo grid-demo-bg1">\n' +
    '                                    <span class="color_black">姓名：</span>\n' +
    '                                    <span class="color_gray">朱涛</span>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="layui-col-md4">\n' +
    '                                <div class="grid-demo">\n' +
    '                                    <span class="color_black">性别：</span>\n' +
    '                                    <span class="color_gray">男</span>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="layui-col-md4">\n' +
    '                                <div class="grid-demo grid-demo-bg1">\n' +
    '                                    <span class="color_black">邀请人：</span>\n' +
    '                                    <span class="color_gray">张慧云</span>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="layui-col-md6">\n' +
    '                                <div class="grid-demo grid-demo-bg1">\n' +
    '                                    <span class="color_black">手机号码：</span>\n' +
    '                                    <span class="color_gray">110120119115</span>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="layui-col-md6">\n' +
    '                                <div class="grid-demo grid-demo-bg1">\n' +
    '                                    <span class="color_black">申请时间：</span>\n' +
    '                                    <span class="color_gray">2019-06-05 20:00</span>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="layui-col-md6">\n' +
    '                                <div class="grid-demo">\n' +
    '                                    <span class="color_black">行业：</span>\n' +
    '                                    <span class="color_gray">服装-女装-裤子</span>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="layui-col-md6">\n' +
    '                                <div class="grid-demo grid-demo-bg1">\n' +
    '                                    <span class="color_black">居住地址：</span>\n' +
    '                                    <span class="color_gray">江苏省苏州市金马大厦A座</span>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '\n' +
    '                            <div class="layui-col-md9">\n' +
    '                                <div class="grid-demo grid-demo-bg1">\n' +
    '                                    <span class="color_black">身份证号码：</span>\n' +
    '                                    <span class="color_gray">32098119604206732</span>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="layui-col-md3">\n' +
    '                                <!-- 一级模态框 -->\n' +
    '                                <div class="grid-demo grid-demo-bg1" data-toggle="modal" data-target="#myModal">\n' +
    '                                    更多资料\n' +
    '                                </div>\n' +
    '                                <!-- Modal -->\n' +
    '                                <div class="modal fade" id="myModal" tabindex="-1" role="dialog"\n' +
    '                                    aria-labelledby="myModalLabel" style="z-index: 10">\n' +
    '                                    <div class="modal-dialog" role="document">\n' +
    '                                        <div class="modal-content">\n' +
    '                                            <div class="modal-header">\n' +
    '                                                <button type="button" class="close" data-dismiss="modal"\n' +
    '                                                    aria-label="Close"><span aria-hidden="true">&times;</span></button>\n' +
    '                                                <h4 class="modal-title" id="myModalLabel"> 更多资料</h4>\n' +
    '                                            </div>\n' +
    '                                            <div class="modal-body">\n' +
    '                                                <div class="more_cardID">\n' +
    '                                                    <P class="cardText">手持身份证照：</P>\n' +
    '                                                    <img class="cardImg" src="images/hehua.jpg" alt=""\n' +
    '                                                        data-toggle="modal" data-target="#myModal1">\n' +
    '                                                </div>\n' +
    '                                                <div class="more_cardID">\n' +
    '                                                        <P class="cardText">营业执照：</P>\n' +
    '                                                        <img class="cardImg" src="images/hehua.jpg" alt=""\n' +
    '                                                            data-toggle="modal" data-target="#myModal1">\n' +
    '                                                    </div>\n' +
    '                                                <div class="more_cardID">\n' +
    '                                                    <P class="cardText">身份证正/反面照：</P>\n' +
    '                                                    <img class="cardImg" src="images/hehua.jpg" alt=""\n' +
    '                                                        data-toggle="modal" data-target="#myModal1">\n' +
    '                                                    <img class="cardImg" src="images/hehua.jpg" alt=""\n' +
    '                                                        data-toggle="modal" data-target="#myModal1">\n' +
    '                                                </div>\n' +
    '                                            </div>\n' +
    '                                            <button type="button" class="btn btn_green"\n' +
    '                                                style="margin: 10% 10px 10% 36%;">通过</button>\n' +
    '                                            <button type="button" class="btn btn-default">拒绝</button>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                                <!-- 二级模态框 整个模态框要跟第一个模态框同级\n' +
    '                                Modal -->\n' +
    '                                <div class="modal fade model" id="myModal1" tabindex="1" role="dialog"\n' +
    '                                    aria-labelledby="myModalLabel" style="z-index: 100">\n' +
    '                                    <div class="modal-dialog" role="document">\n' +
    '                                        <div class="modal-content">\n' +
    '                                            <div class="modal-header">\n' +
    '                                                <button type="button" class="close" data-dismiss="modal"\n' +
    '                                                    aria-hidden="true">×</button>\n' +
    '\n' +
    '                                                <h4 class="modal-title" id="myModalLabel">查看大图</h4>\n' +
    '                                            </div>\n' +
    '                                            <div class="modal-body">\n' +
    '                                                <div class="more_cardID">\n' +
    '                                                    <P class="cardText">查看大图：</P>\n' +
    '                                                    <img src="images/hehua.jpg" alt="">\n' +
    '                                                </div>\n' +
    '                                            </div>\n' +
    '                                            <div class="modal-footer">\n' +
    '                                                <button type="button" class="btn btn-default"\n' +
    '                                                    data-dismiss="modal">确定</button>\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>'
// <!--商家审核-人员查看  -->
window.templates['demo4.html'] = '<!--商家-人员查看  -->\n' +
    '                    <div class="wh_content">\n' +
    '                        <!-- 查询 -->\n' +
    '                        <form class="form-inline">\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="exampleInputName2">平台：</label>\n' +
    '                                <input type="text" class="form-control" id="exampleInputName2" placeholder="请输入">\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="exampleInputEmail2">性别：</label>\n' +
    '                                <input type="text" class="form-control" placeholder="请输入">\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="name">名字：</label>\n' +
    '                                <input type="text" class="form-control" id="name" placeholder="请输入">\n' +
    '                            </div>\n' +
    '                            <button type="submit" class="btn btn-default" style="color: white;\n' +
    '            background: #1890FF">查询</button>\n' +
    '                        </form>\n' +
    '                        <!-- 网红人员列表 -->\n' +
    '                        <table class="wh_table">\n' +
    '                            <thead>\n' +
    '                                <tr class="tr_heard">\n' +
    '                                    <th></th>\n' +
    '                                    <th>姓名</th>\n' +
    '                                    <th>平台</th>\n' +
    '                                    <th>性别</th>\n' +
    '                                    <th>粉丝数量</th>\n' +
    '                                    <th>入驻时间</th>\n' +
    '                                    <th>操作</th>\n' +
    '                                </tr>\n' +
    '                            </thead>\n' +
    '                            <tbody>\n' +
    '                                <tr>\n' +
    '                                    <td><img src="images/hehua.jpg" alt=""></td>\n' +
    '                                    <td class="tabel_name">你说什么就是什么</td>\n' +
    '                                    <td>抖音</td>\n' +
    '                                    <td>男</td>\n' +
    '                                    <td>1230000</td>\n' +
    '                                    <td>2019-6-18 10:00</td>\n' +
    '                                    <td>\n' +
    '                                        <button class="wh_table_btn right" data-toggle="modal"\n' +
    '                                            data-target="#myModalmore">更多资料</button>\n' +
    '                                        <button class="wh_table_btn">删除资料</button>\n' +
    '                                    </td>\n' +
    '                                </tr>\n' +
    '                                <tr>\n' +
    '                                    <td><img src="images/hehua.jpg" alt=""></td>\n' +
    '                                    <td class="tabel_name">你说什么就是什么</td>\n' +
    '                                    <td>抖音</td>\n' +
    '                                    <td>男</td>\n' +
    '                                    <td>1230000</td>\n' +
    '                                    <td>2019-6-18 10:00</td>\n' +
    '                                    <td>\n' +
    '                                        <button class="wh_table_btn right" data-toggle="modal"\n' +
    '                                            data-target="#myModalmore">更多资料</button>\n' +
    '                                        <button class="wh_table_btn">删除资料</button>\n' +
    '                                    </td>\n' +
    '                                </tr>\n' +
    '                                <tr>\n' +
    '                                    <td><img src="images/hehua.jpg" alt=""></td>\n' +
    '                                    <td class="tabel_name">你说什么就是什么</td>\n' +
    '                                    <td>抖音</td>\n' +
    '                                    <td>男</td>\n' +
    '                                    <td>1230000</td>\n' +
    '                                    <td>2019-6-18 10:00</td>\n' +
    '                                    <td>\n' +
    '                                        <button class="wh_table_btn right" data-toggle="modal"\n' +
    '                                            data-target="#myModalmore">更多资料</button>\n' +
    '                                        <button class="wh_table_btn">删除资料</button>\n' +
    '                                    </td>\n' +
    '                                </tr>\n' +
    '                                <tr>\n' +
    '                                    <td><img src="images/hehua.jpg" alt=""></td>\n' +
    '                                    <td class="tabel_name">你说什么就是什么</td>\n' +
    '                                    <td>抖音</td>\n' +
    '                                    <td>男</td>\n' +
    '                                    <td>1230000</td>\n' +
    '                                    <td>2019-6-18 10:00</td>\n' +
    '                                    <td>\n' +
    '                                        <button class="wh_table_btn right" data-toggle="modal"\n' +
    '                                            data-target="#myModalmore">更多资料</button>\n' +
    '                                        <button class="wh_table_btn">删除资料</button>\n' +
    '                                    </td>\n' +
    '                                </tr>\n' +
    '                                <tr>\n' +
    '                                    <td><img src="images/hehua.jpg" alt=""></td>\n' +
    '                                    <td class="tabel_name">你说什么就是什么</td>\n' +
    '                                    <td>抖音</td>\n' +
    '                                    <td>男</td>\n' +
    '                                    <td>1230000</td>\n' +
    '                                    <td>2019-6-18 10:00</td>\n' +
    '                                    <td>\n' +
    '                                        <button class="wh_table_btn right" data-toggle="modal"\n' +
    '                                            data-target="#myModalmore">更多资料</button>\n' +
    '                                        <button class="wh_table_btn">删除资料</button>\n' +
    '                                    </td>\n' +
    '                                </tr>\n' +
    '                            </tbody>\n' +
    '                        </table>\n' +
    '                        <!-- 网红人员更多资料-模态框 Modal -->\n' +
    '                        <div class="modal fade" id="myModalmore" tabindex="-1" role="dialog"\n' +
    '                            aria-labelledby="myModalLabel" style="z-index: 10">\n' +
    '                            <div class="modal-dialog" role="document">\n' +
    '                                <div class="modal-content">\n' +
    '                                    <div class="modal-header">\n' +
    '                                        <button type="button" class="close" data-dismiss="modal"\n' +
    '                                            aria-label="Close"><span aria-hidden="true">&times;</span></button>\n' +
    '                                        <h4 class="modal-title" id="myModalLabel"> 更多资料</h4>\n' +
    '                                    </div>\n' +
    '                                    <div class="modal-body">\n' +
    '\n' +
    '                                        <div class="layui-row" id="row">\n' +
    '                                            <P class="cardText">基本信息：</P>\n' +
    '                                            <div class="layui-col-md4" id="md4">\n' +
    '                                                    <div class="grid-demo grid-demo-bg1">\n' +
    '                                                        <span class="color_black">姓名：</span>\n' +
    '                                                        <span class="color_gray">朱涛</span>\n' +
    '                                                    </div>\n' +
    '                                                </div>\n' +
    '                                                <div class="layui-col-md4" id="md4">\n' +
    '                                                    <div class="grid-demo">\n' +
    '                                                        <span class="color_black">性别：</span>\n' +
    '                                                        <span class="color_gray">男</span>\n' +
    '                                                    </div>\n' +
    '                                                </div>\n' +
    '                                                <div class="layui-col-md4"id="md4">\n' +
    '                                                    <div class="grid-demo grid-demo-bg1">\n' +
    '                                                        <span class="color_black">邀请人：</span>\n' +
    '                                                        <span class="color_gray">张慧云</span>\n' +
    '                                                    </div>\n' +
    '                                                </div>\n' +
    '                                                <div class="layui-col-md6" id="md4">\n' +
    '                                                    <div class="grid-demo grid-demo-bg1">\n' +
    '                                                        <span class="color_black">手机号码：</span>\n' +
    '                                                        <span class="color_gray">110120119115</span>\n' +
    '                                                    </div>\n' +
    '                                                </div>\n' +
    '                                                <div class="layui-col-md6" id="md4">\n' +
    '                                                    <div class="grid-demo grid-demo-bg1">\n' +
    '                                                        <span class="color_black">申请时间：</span>\n' +
    '                                                        <span class="color_gray">2019-06-05 20:00</span>\n' +
    '                                                    </div>\n' +
    '                                                </div>\n' +
    '                                                <div class="layui-col-md6" id="md4">\n' +
    '                                                    <div class="grid-demo">\n' +
    '                                                        <span class="color_black">行业：</span>\n' +
    '                                                        <span class="color_gray">服装-女装-裤子</span>\n' +
    '                                                    </div>\n' +
    '                                                </div>\n' +
    '                                                <div class="layui-col-md6" id="md4">\n' +
    '                                                    <div class="grid-demo grid-demo-bg1">\n' +
    '                                                        <span class="color_black">居住地址：</span>\n' +
    '                                                        <span class="color_gray">江苏省苏州市金马大厦A座</span>\n' +
    '                                                    </div>\n' +
    '                                                </div>\n' +
    '                                        \n' +
    '                                                <div class="layui-col-md9" id="md4">\n' +
    '                                                    <div class="grid-demo grid-demo-bg1">\n' +
    '                                                        <span class="color_black">身份证号码：</span>\n' +
    '                                                        <span class="color_gray">32098119604206732</span>\n' +
    '                                                    </div>\n' +
    '                                                </div>\n' +
    '\n' +
    '                                            <div class="layui-col-md12">\n' +
    '                                                <div class="more_cardID cardid">\n' +
    '                                                    <P class="cardText">手持身份证照：</P>\n' +
    '                                                    <img class="cardidImg" src="images/hehua.jpg" alt=""\n' +
    '                                                        data-toggle="modal" data-target="#myModal1">\n' +
    '                                                </div>\n' +
    '                                                <div class="more_cardID cardid">\n' +
    '                                                        <P class="cardText">营业执照：</P>\n' +
    '                                                        <img class="cardidImg" src="images/hehua.jpg" alt=""\n' +
    '                                                            data-toggle="modal" data-target="#myModal1">\n' +
    '                                                    </div>\n' +
    '                                                <div class="more_cardID cardid">\n' +
    '                                                    <P class="cardText">身份证正/反面照：</P>\n' +
    '                                                    <img class="cardidImg" src="images/hehua.jpg" alt=""\n' +
    '                                                        data-toggle="modal" data-target="#myModal1">\n' +
    '                                                    <img class="cardidImg" style="margin: 0" src="images/hehua.jpg"\n' +
    '                                                        alt="" data-toggle="modal" data-target="#myModal1">\n' +
    '                                                </div>\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <!-- 二级模态框 整个模态框要跟第一个模态框同级 Modal -->\n' +
    '                        <div class="modal fade model" id="myModal1" tabindex="1" role="dialog"\n' +
    '                            aria-labelledby="myModalLabel" style="z-index: 100">\n' +
    '                            <div class="modal-dialog" role="document">\n' +
    '                                <div class="modal-content">\n' +
    '                                    <div class="modal-header">\n' +
    '                                        <button type="button" class="close" data-dismiss="modal"\n' +
    '                                            aria-hidden="true">×</button>\n' +
    '\n' +
    '                                        <h4 class="modal-title" id="myModalLabel">查看大图</h4>\n' +
    '                                    </div>\n' +
    '                                    <div class="modal-body">\n' +
    '                                        <div class="more_cardID">\n' +
    '                                            <P class="cardText">查看大图:</P>\n' +
    '                                            <img src="images/hehua.jpg" alt="">\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                    <div class="modal-footer">\n' +
    '                                        <button type="button" class="btn btn-default" data-dismiss="modal">确定</button>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <!-- 模态框-完 -->\n' +
    '                        <!-- 分页 -->\n' +
    '                        <div id="demo2-1"></div>\n' +
    '                    </div>\n' +
    '                </div>';
// <!-- 订单管理 -->
window.templates['dingdan.html'] = '<!-- 订单管理 -->\n' +
    '<link rel="stylesheet" href="css/dingdan.css">\n' +
    '<div class="dd_solid"></div>\n' +
    '<div class="dd_content">\n' +
    '    <div class="dd_top">\n' +
    '        <p class="dd_text">搜索订单</p>\n' +
    '        <div class="input-group" id="input_group">\n' +
    '            <input type="text" class="form-control" placeholder="请输入" aria-describedby="basic-addon2"\n' +
    '                style="height: 49px">\n' +
    '            <span class="input-group-addon" id="basic-addon2">搜索</span>\n' +
    '        </div>\n' +
    '        <!-- Nav tabs -->\n' +
    '        <ul class="nav nav-tabs" role="tablist" id="dd_ul">\n' +
    '            <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab"\n' +
    '                    data-toggle="tab">待审核</a></li>\n' +
    '            <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">派单中</a></li>\n' +
    '            <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">进行中</a>\n' +
    '            </li>\n' +
    '            <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">已完成</a>\n' +
    '            </li>\n' +
    '        </ul>\n' +
    '\n' +
    '    </div>\n' +
    '    <!-- Tab panes -->\n' +
    '    <div class="tab-content">\n' +
    '        <!-- 待审核 -->\n' +
    '        <div role="tabpanel" class="tab-pane active" id="home">\n' +
    '            <div class="row" style="margin: 0">\n' +
    '                <div class="col-md-4" id="tab-content">\n' +
    '                    <!--订单更多资料-模态框(仅写了一个模态框)-->\n' +
    '                    <div class="dd_tab_detail" data-toggle="modal" data-target="#sjmyModal">\n' +
    '                        <div class="dd_detail">\n' +
    '                            <div class="dd_userImg">\n' +
    '                                <img class="dd_img" src="images/hehua.jpg" alt="">\n' +
    '                            </div>\n' +
    '                            <div class="dd_userText">\n' +
    '                                <div class="dd_userName">你说什么就是什么</div>\n' +
    '                                <div class="dd_userDe">\n' +
    '                                    <span>快手</span>\n' +
    '                                    <span style="margin-left: 10px;">短视频直播推广</span>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="dd_price">\n' +
    '                                <span style="color: #F03D37">1000元</span>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="dd_gn">\n' +
    '                            <p>在中台产品的研发过程中，会出现不同的 设计规范练习方式，但其中往往存在很帅 类似的问题。我们还是要多多注意谢谢规\n' +
    '                                范一些东西还是要注意细节。</p>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="dd_foot">\n' +
    '                        <span style="border-right: 1px solid #dedede">通过</span>\n' +
    '                        <span>拒绝</span>\n' +
    '                    </div>\n' +
    '                    <!--订单更多资料-模态框-->\n' +
    '                    <!-- 商家更多资料 -->\n' +
    '                    <div class="modal fade" id="sjmyModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">\n' +
    '                        <div class="modal-dialog" role="document">\n' +
    '                            <div class="modal-content">\n' +
    '                                <div class="modal-header">\n' +
    '                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span\n' +
    '                                            aria-hidden="true">&times;</span></button>\n' +
    '                                    <h4 class="modal-title" id="myModalLabel">更多资料</h4>\n' +
    '                                </div>\n' +
    '                                <div class="modal-body">\n' +
    '                                    <div class="row">\n' +
    '                                        <div class="layui-col-md12">\n' +
    '                                            <p>订单编号：\n' +
    '                                                <span class="dd_layui_span">\n' +
    '                                                    1324558885555896666666\n' +
    '                                                </span>\n' +
    '                                            </p>\n' +
    '                                        </div>\n' +
    '                                        <div class="layui-col-md12">\n' +
    '                                            <p>\n' +
    '                                                需求标签：\n' +
    '                                                <span class="layui_span">美食</span>\n' +
    '                                                <span class="layui_span">三农</span>\n' +
    '                                                <span class="layui_span">美女</span>\n' +
    '                                            </p>\n' +
    '                                        </div>\n' +
    '                                        <div class="layui-col-md12">\n' +
    '                                            <p>粉丝要求：<span class="dd_layui_span">10万</span>\n' +
    '                                            </p>\n' +
    '                                        </div>\n' +
    '                                        <div class="layui-col-md12">\n' +
    '                                            <p>商品图片：</p>\n' +
    '                                            <img src="images/hehua.jpg" alt="">\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="col-md-4" id="tab-content">\n' +
    '                    <div class="dd_tab_detail">\n' +
    '                        <div class="dd_detail">\n' +
    '                            <div class="dd_userImg">\n' +
    '                                <img class="dd_img" src="images/hehua.jpg" alt="">\n' +
    '                            </div>\n' +
    '                            <div class="dd_userText">\n' +
    '                                <div class="dd_userName">你说什么就是什么ne</div>\n' +
    '                                <div class="dd_userDe">\n' +
    '                                    <span style="color: #ADADAD">发布时间</span>\n' +
    '                                    <span style="margin-left: 10px;">2019-6-19</span>\n' +
    '                                    <span style="color: #333333">18:00</span>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="dd_price">\n' +
    '                                <span style="color: #F03D37">1000元</span>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="dd_gn">\n' +
    '                            <div class="dd_gn_first">\n' +
    '                                <div>\n' +
    '                                    <span class="first_gary">商品类型：</span><span class=\'first_3\'>鞋帽箱包</span>\n' +
    '                                </div>\n' +
    '                                <div style=\'float:right\'>\n' +
    '                                    <span class="first_gary">粉丝要求：</span><span class=\'first_3\'>10万</span>\n' +
    '                                </div>\n' +
    '                                <div>\n' +
    '                                    <span class="first_gary">达人平台：</span><span class=\'first_3\'>暂无要求</span>\n' +
    '                                </div>\n' +
    '                                <div style=\'float:right\'>\n' +
    '                                    <span class="first_gary">佣金比例：</span><span class=\'first_3\'>30%</span>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="dd_foot">\n' +
    '                        <span style="border-right: 1px solid #dedede">通过</span>\n' +
    '                        <span>拒绝</span>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="col-md-4" id="tab-content">\n' +
    '                    <div class="dd_tab_detail">\n' +
    '                        <div class="dd_detail">\n' +
    '                            <div class="dd_userImg">\n' +
    '                                <img class="dd_img" src="images/hehua.jpg" alt="">\n' +
    '                            </div>\n' +
    '                            <div class="dd_userText">\n' +
    '                                <div class="dd_userName">你说什么就是什么</div>\n' +
    '                                <div class="dd_userDe">\n' +
    '                                    <span>快手</span>\n' +
    '                                    <span style="margin-left: 10px;">短视频直播推广</span>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="dd_price">\n' +
    '                                <span style="color: #F03D37">1000元</span>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="dd_gn">\n' +
    '                            <p>在中台产品的研发过程中，会出现不同的 设计规范练习方式，但其中往往存在很帅 类似的问题。我们还是要多多注意谢谢规\n' +
    '                                范一些东西还是要注意细节。</p>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="dd_foot">\n' +
    '                        <span style="border-right: 1px solid #dedede">通过</span>\n' +
    '                        <span>拒绝</span>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <!-- 派单中 -->\n' +
    '        <div role="tabpanel" class="tab-pane" id="profile">\n' +
    '            <div class="row" style="margin: 0">\n' +
    '                <div class="col-md-4" id="tab-content">\n' +
    '                    <!--订单更多资料-模态框(仅写了一个模态框)-->\n' +
    '                    <div class="dd_tab_detail" data-toggle="modal" data-target="#sjModal">\n' +
    '                        <div class="dd_detail">\n' +
    '                            <div class="dd_userImg">\n' +
    '                                <img class="dd_img" src="images/hehua.jpg" alt="">\n' +
    '                            </div>\n' +
    '                            <div class="dd_userText">\n' +
    '                                <div class="dd_userName">你说什么就是什么</div>\n' +
    '                                <div class="dd_userDe">\n' +
    '                                    <span>快手</span>\n' +
    '                                    <span style="margin-left: 10px;">短视频直播推广</span>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="dd_price">\n' +
    '                                <span style="color: #F03D37">1000元</span>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="dd_gn">\n' +
    '                            <p>在中台产品的研发过程中，会出现不同的 设计规范练习方式，但其中往往存在很帅 类似的问题。我们还是要多多注意谢谢规\n' +
    '                                范一些东西还是要注意细节。</p>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <!-- 抢单人员-模态框 -->\n' +
    '                    <div class="dd_foot">\n' +
    '                        <span style="border-right: 1px solid #dedede" data-toggle="modal"\n' +
    '                            data-target=".bs-example-modal-lg">抢单人员</span>\n' +
    '                        <span>删除订单</span>\n' +
    '                    </div>\n' +
    '                    <!-- 抢单人员 modal -->\n' +
    '                    <div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog"\n' +
    '                        aria-labelledby="myLargeModalLabel">\n' +
    '                        <div class="modal-dialog modal-lg" role="document">\n' +
    '                            <div class="modal-content" id="modal-content">\n' +
    '                                <div class="modal-header">\n' +
    '                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span\n' +
    '                                            aria-hidden="true">&times;</span></button>\n' +
    '                                    <h4 class="modal-title" id="myModalLabel">抢单人员</h4>\n' +
    '                                </div>\n' +
    '                                <!-- <p class="mode_title">抢单人员</p> -->\n' +
    '                                <table class="dd_table wh_table">\n' +
    '                                    <tbody>\n' +
    '                                        <tr>\n' +
    '                                            <td><img src="images/hehua.jpg" alt=""></td>\n' +
    '                                            <td class="tabel_name">你说什么就是什么</td>\n' +
    '                                            <td>抖音</td>\n' +
    '                                            <td>男</td>\n' +
    '                                            <td>200万</td>\n' +
    '                                        </tr>\n' +
    '                                        <tr>\n' +
    '                                            <td><img src="images/hehua.jpg" alt=""></td>\n' +
    '                                            <td class="tabel_name">你说什么就是什么</td>\n' +
    '                                            <td>抖音</td>\n' +
    '                                            <td>男</td>\n' +
    '                                            <td>200万</td>\n' +
    '                                        </tr>\n' +
    '                                        <tr>\n' +
    '                                            <td><img src="images/hehua.jpg" alt=""></td>\n' +
    '                                            <td class="tabel_name">你说什么就是什么</td>\n' +
    '                                            <td>抖音</td>\n' +
    '                                            <td>男</td>\n' +
    '                                            <td>200万</td>\n' +
    '                                        </tr>\n' +
    '                                        <tr>\n' +
    '                                            <td><img src="images/hehua.jpg" alt=""></td>\n' +
    '                                            <td class="tabel_name">你说什么就是什么</td>\n' +
    '                                            <td>抖音</td>\n' +
    '                                            <td>男</td>\n' +
    '                                            <td>200万</td>\n' +
    '                                        </tr>\n' +
    '                                        <tr>\n' +
    '                                            <td><img src="images/hehua.jpg" alt=""></td>\n' +
    '                                            <td class="tabel_name">你说什么就是什么</td>\n' +
    '                                            <td>抖音</td>\n' +
    '                                            <td>男</td>\n' +
    '                                            <td>200万</td>\n' +
    '                                        </tr>\n' +
    '\n' +
    '                                    </tbody>\n' +
    '                                </table>\n' +
    '                                <div id="demo2-1"></div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <!--订单更多资料-模态框-->\n' +
    '                    <!-- 商家更多资料 -->\n' +
    '                    <div class="modal fade" id="sjModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">\n' +
    '                        <div class="modal-dialog" role="document">\n' +
    '                            <div class="modal-content">\n' +
    '                                <div class="modal-header">\n' +
    '                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span\n' +
    '                                            aria-hidden="true">&times;</span></button>\n' +
    '                                    <h4 class="modal-title" id="myModalLabel">更多资料</h4>\n' +
    '                                </div>\n' +
    '                                <div class="modal-body">\n' +
    '                                    <div class="row">\n' +
    '                                        <div class="layui-col-md12">\n' +
    '                                            <p>商家电话：<span style="color:#1890FF ">15371185538</span>\n' +
    '                                            </p>\n' +
    '                                        </div>\n' +
    '                                        <div class="layui-col-md12">\n' +
    '                                            <p>\n' +
    '                                                需求标签：\n' +
    '                                                <span class="layui_span">美食</span>\n' +
    '                                                <span class="layui_span">三农</span>\n' +
    '                                                <span class="layui_span">美女</span>\n' +
    '                                            </p>\n' +
    '                                        </div>\n' +
    '                                        <div class="layui-col-md12">\n' +
    '                                            <p>粉丝要求：<span class="dd_layui_span">10万</span>\n' +
    '                                            </p>\n' +
    '                                        </div>\n' +
    '                                        <div class="layui-col-md12">\n' +
    '                                            <p>发布时间：<span class="dd_layui_span">2019-6-19\n' +
    '                                                    15:17</span>\n' +
    '                                            </p>\n' +
    '                                        </div>\n' +
    '                                        <div class="layui-col-md12">\n' +
    '                                            <p>创建时间：<span class="dd_layui_span">2019-6-19\n' +
    '                                                    15:17</span>\n' +
    '                                            </p>\n' +
    '                                        </div>\n' +
    '                                        <div class="layui-col-md12">\n' +
    '                                            <p>订单编号：\n' +
    '                                                <span class="dd_layui_span">\n' +
    '                                                    1324558885555896666666\n' +
    '                                                </span>\n' +
    '                                            </p>\n' +
    '                                        </div>\n' +
    '                                        <div class="layui-col-md12">\n' +
    '                                            <p>商品图片：</p>\n' +
    '                                            <img src="images/hehua.jpg" alt="">\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <!-- 完 -->\n' +
    '\n' +
    '                </div>\n' +
    '\n' +
    '                <div class="col-md-4" id="tab-content">\n' +
    '                    <div class="dd_tab_detail">\n' +
    '                        <div class="dd_detail">\n' +
    '                            <div class="dd_userImg">\n' +
    '                                <img class="dd_img" src="images/hehua.jpg" alt="">\n' +
    '                            </div>\n' +
    '                            <div class="dd_userText">\n' +
    '                                <div class="dd_userName">你说什么就是什么</div>\n' +
    '                                <div class="dd_userDe">\n' +
    '                                    <span>快手</span>\n' +
    '                                    <span style="margin-left: 10px;">短视频直播推广</span>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <!-- <div class="dd_price">\n' +
    '                                                        <span style="color: #F03D37">1000元</span>\n' +
    '                                                    </div> -->\n' +
    '                        </div>\n' +
    '                        <div class="dd_gn">\n' +
    '                            <div class="dd_gn_first">\n' +
    '                                <div>\n' +
    '                                    <span class="first_gary">商品类型：</span><span class=\'first_3\'>鞋帽箱包</span>\n' +
    '                                </div>\n' +
    '                                <div style=\'float:right\'>\n' +
    '                                    <span class="first_gary">粉丝要求：</span><span class=\'first_3\'>10万</span>\n' +
    '                                </div>\n' +
    '                                <div>\n' +
    '                                    <span class="first_gary">达人平台：</span><span class=\'first_3\'>暂无要求</span>\n' +
    '                                </div>\n' +
    '                                <div style=\'float:right\'>\n' +
    '                                    <span class="first_gary">佣金比例：</span><span class=\'first_3\'>30%</span>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="dd_foot">\n' +
    '                        <span style="border-right: 1px solid #dedede">抢单人员</span>\n' +
    '                        <span>删除订单</span>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="col-md-4" id="tab-content">\n' +
    '                    <div class="dd_tab_detail">\n' +
    '                        <div class="dd_detail">\n' +
    '                            <div class="dd_userImg">\n' +
    '                                <img class="dd_img" src="images/hehua.jpg" alt="">\n' +
    '                            </div>\n' +
    '                            <div class="dd_userText">\n' +
    '                                <div class="dd_userName">你说什么就是什么</div>\n' +
    '                                <div class="dd_userDe">\n' +
    '                                    <span>快手</span>\n' +
    '                                    <span style="margin-left: 10px;">短视频直播推广</span>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="dd_price">\n' +
    '                                <span style="color: #F03D37">1000元</span>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="dd_gn">\n' +
    '                            <p>在中台产品的研发过程中，会出现不同的 设计规范练习方式，但其中往往存在很帅 类似的问题。我们还是要多多注意谢谢规\n' +
    '                                范一些东西还是要注意细节。</p>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="dd_foot">\n' +
    '                        <span style="border-right: 1px solid #dedede">抢单人员</span>\n' +
    '                        <span>删除订单</span>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <!-- 进行中 -->\n' +
    '        <div role="tabpanel" class="tab-pane" id="messages">\n' +
    '            <div class="row" style="margin: 0">\n' +
    '                <div class="col-md-4" id="tab-content">\n' +
    '                    <!--订单更多资料-模态框(仅写了一个模态框)-->\n' +
    '                    <div class="dd_tab_detail" data-toggle="modal" data-target="#sjing">\n' +
    '                        <div class="dd_detail">\n' +
    '                            <div class="dd_userImg">\n' +
    '                                <img class="dd_img" src="images/hehua.jpg" alt="">\n' +
    '                            </div>\n' +
    '                            <div class="dd_userText">\n' +
    '                                <div class="dd_userName">你说什么就是什么</div>\n' +
    '                                <div class="dd_userDe">\n' +
    '                                    <span>快手</span>\n' +
    '                                    <span style="margin-left: 10px;">短视频直播推广</span>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="dd_price">\n' +
    '                                <span style="color: #F03D37">1000元</span>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="dd_gn">\n' +
    '                            <p>在中台产品的研发过程中，会出现不同的 设计规范练习方式，但其中往往存在很帅 类似的问题。我们还是要多多注意谢谢规\n' +
    '                                范一些东西还是要注意细节。</p>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="dd_foot">\n' +
    '                        <span style="border-right: 1px solid #dedede">恢复订单</span>\n' +
    '                        <span>结束订单</span>\n' +
    '                    </div>\n' +
    '                    <!--订单更多资料-模态框-->\n' +
    '                    <!-- 商家更多资料 -->\n' +
    '                    <div class="modal fade" id="sjing" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">\n' +
    '                        <div class="modal-dialog" role="document">\n' +
    '                            <div class="modal-content">\n' +
    '                                <div class="modal-header">\n' +
    '                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span\n' +
    '                                            aria-hidden="true">&times;</span></button>\n' +
    '                                    <h4 class="modal-title" id="myModalLabel">更多资料</h4>\n' +
    '                                </div>\n' +
    '                                <div class="modal-body">\n' +
    '                                    <div class="row">\n' +
    '                                        <div class="layui-col-md12">\n' +
    '                                            <p>商家电话：<span style="color:#1890FF ">15371185538</span>\n' +
    '                                            </p>\n' +
    '                                        </div>\n' +
    '                                        <div class="layui-col-md12">\n' +
    '                                            <p>抢单人员：\n' +
    '                                                <span>你说什么就是什么</span>\n' +
    '                                                <span style="color:#1890FF ">15371185538</span>\n' +
    '                                            </p>\n' +
    '                                        </div>\n' +
    '                                        <div class="layui-col-md12">\n' +
    '                                            <p>\n' +
    '                                                需求标签：\n' +
    '                                                <span class="layui_span">美食</span>\n' +
    '                                                <span class="layui_span">三农</span>\n' +
    '                                                <span class="layui_span">美女</span>\n' +
    '                                            </p>\n' +
    '                                        </div>\n' +
    '                                        <div class="layui-col-md12">\n' +
    '                                            <p>粉丝要求：<span class="dd_layui_span">10万</span>\n' +
    '                                            </p>\n' +
    '                                        </div>\n' +
    '                                        <div class="layui-col-md12">\n' +
    '                                            <p>发布时间：<span class="dd_layui_span">2019-6-19\n' +
    '                                                    15:17</span>\n' +
    '                                            </p>\n' +
    '                                        </div>\n' +
    '                                        <div class="layui-col-md12">\n' +
    '                                            <p>创建时间：<span class="dd_layui_span">2019-6-19\n' +
    '                                                    15:17</span>\n' +
    '                                            </p>\n' +
    '                                        </div>\n' +
    '                                        <div class="layui-col-md12">\n' +
    '                                            <p>订单编号：\n' +
    '                                                <span class="dd_layui_span">\n' +
    '                                                    1324558885555896666666\n' +
    '                                                </span>\n' +
    '                                            </p>\n' +
    '                                        </div>\n' +
    '                                        <div class="layui-col-md12">\n' +
    '                                            <p>商品图片：</p>\n' +
    '                                            <img src="images/hehua.jpg" alt="">\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <!-- 完 -->\n' +
    '                </div>\n' +
    '                <div class="col-md-4" id="tab-content">\n' +
    '                    <div class="dd_tab_detail">\n' +
    '                        <div class="dd_detail">\n' +
    '                            <div class="dd_userImg">\n' +
    '                                <img class="dd_img" src="images/hehua.jpg" alt="">\n' +
    '                            </div>\n' +
    '                            <div class="dd_userText">\n' +
    '                                <div class="dd_userName">你说什么就是什么</div>\n' +
    '                                <div class="dd_userDe">\n' +
    '                                    <span>快手</span>\n' +
    '                                    <span style="margin-left: 10px;">短视频直播推广</span>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="dd_price">\n' +
    '                                <span style="color: #F03D37">1000元</span>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="dd_gn">\n' +
    '                            <p>在中台产品的研发过程中，会出现不同的 设计规范练习方式，但其中往往存在很帅 类似的问题。我们还是要多多注意谢谢规\n' +
    '                                范一些东西还是要注意细节。</p>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="dd_foot">\n' +
    '                        <span style="border-right: 1px solid #dedede">恢复订单</span>\n' +
    '                        <span>结束订单</span>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="col-md-4" id="tab-content">\n' +
    '                    <div class="dd_tab_detail">\n' +
    '                        <div class="dd_detail">\n' +
    '                            <div class="dd_userImg">\n' +
    '                                <img class="dd_img" src="images/hehua.jpg" alt="">\n' +
    '                            </div>\n' +
    '                            <div class="dd_userText">\n' +
    '                                <div class="dd_userName">你说什么就是什么</div>\n' +
    '                                <div class="dd_userDe">\n' +
    '                                    <span>快手</span>\n' +
    '                                    <span style="margin-left: 10px;">短视频直播推广</span>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="dd_price">\n' +
    '                                <span style="color: #F03D37">1000元</span>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="dd_gn">\n' +
    '                            <p>在中台产品的研发过程中，会出现不同的 设计规范练习方式，但其中往往存在很帅 类似的问题。我们还是要多多注意谢谢规\n' +
    '                                范一些东西还是要注意细节。</p>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="dd_foot">\n' +
    '                        <span style="border-right: 1px solid #dedede">恢复订单</span>\n' +
    '                        <span>结束订单</span>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <!-- 已完成 -->\n' +
    '        <div role="tabpanel" class="tab-pane" id="settings">\n' +
    '            <div class="row" style="margin: 0">\n' +
    '                <div class="col-md-4" id="tab-content">\n' +
    '                    <div class="dd_tab_detail">\n' +
    '                        <div class="dd_detail">\n' +
    '                            <div class="dd_userImg">\n' +
    '                                <img class="dd_img" src="images/hehua.jpg" alt="">\n' +
    '                            </div>\n' +
    '                            <div class="dd_userText">\n' +
    '                                <div class="dd_userName">你说什么就是什么</div>\n' +
    '                                <div class="dd_userDe">\n' +
    '                                    <span>快手</span>\n' +
    '                                    <span style="margin-left: 10px;">短视频直播推广</span>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="dd_price">\n' +
    '                                <span style="color: #F03D37">1000元</span>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="dd_gn">\n' +
    '                            <p>在中台产品的研发过程中，会出现不同的 设计规范练习方式，但其中往往存在很帅 类似的问题。我们还是要多多注意谢谢规\n' +
    '                                范一些东西还是要注意细节。</p>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="dd_foot">\n' +
    '                        <span id="dd_foot_detail"  data-toggle="modal" data-target="#sjachieve">订单详情</span>\n' +
    '                    </div>\n' +
    '                    <!--订单更多资料-模态框-->\n' +
    '                    <!-- 商家更多资料 -->\n' +
    '                    <div class="modal fade" id="sjachieve" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">\n' +
    '                        <div class="modal-dialog" role="document">\n' +
    '                            <div class="modal-content">\n' +
    '                                <div class="modal-header">\n' +
    '                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span\n' +
    '                                            aria-hidden="true">&times;</span></button>\n' +
    '                                    <h4 class="modal-title" id="myModalLabel">更多资料</h4>\n' +
    '                                </div>\n' +
    '                                <div class="modal-body">\n' +
    '                                    <div class="row">\n' +
    '                                        <div class="layui-col-md12">\n' +
    '                                            <p>商家电话：<span style="color:#1890FF ">15371185538</span>\n' +
    '                                            </p>\n' +
    '                                        </div>\n' +
    '                                        <div class="layui-col-md12">\n' +
    '                                            <p>抢单人员：\n' +
    '                                                <span>你说什么就是什么</span>\n' +
    '                                                <span style="color:#1890FF ">15371185538</span>\n' +
    '                                            </p>\n' +
    '                                        </div>\n' +
    '                                        <div class="layui-col-md12">\n' +
    '                                            <p>\n' +
    '                                                需求标签：\n' +
    '                                                <span class="layui_span">美食</span>\n' +
    '                                                <span class="layui_span">三农</span>\n' +
    '                                                <span class="layui_span">美女</span>\n' +
    '                                            </p>\n' +
    '                                        </div>\n' +
    '                                        <div class="layui-col-md12">\n' +
    '                                            <p>粉丝要求：<span class="dd_layui_span">10万</span>\n' +
    '                                            </p>\n' +
    '                                        </div>\n' +
    '                                        <div class="layui-col-md12">\n' +
    '                                            <p>发布时间：<span class="dd_layui_span">2019-6-19\n' +
    '                                                    15:17</span>\n' +
    '                                            </p>\n' +
    '                                        </div>\n' +
    '                                        <div class="layui-col-md12">\n' +
    '                                            <p>创建时间：<span class="dd_layui_span">2019-6-19\n' +
    '                                                    15:17</span>\n' +
    '                                            </p>\n' +
    '                                        </div>\n' +
    '                                        <div class="layui-col-md12">\n' +
    '                                            <p>订单编号：\n' +
    '                                                <span class="dd_layui_span">\n' +
    '                                                    1324558885555896666666\n' +
    '                                                </span>\n' +
    '                                            </p>\n' +
    '                                        </div>\n' +
    '                                        <div class="layui-col-md12">\n' +
    '                                            <p>商品图片：</p>\n' +
    '                                            <img src="images/hehua.jpg" alt="">\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <!-- 完 -->\n' +
    '                </div>\n' +
    '                <div class="col-md-4" id="tab-content">\n' +
    '                    <div class="dd_tab_detail">\n' +
    '                        <div class="dd_detail">\n' +
    '                            <div class="dd_userImg">\n' +
    '                                <img class="dd_img" src="images/hehua.jpg" alt="">\n' +
    '                            </div>\n' +
    '                            <div class="dd_userText">\n' +
    '                                <div class="dd_userName">你说什么就是什么</div>\n' +
    '                                <div class="dd_userDe">\n' +
    '                                    <span>快手</span>\n' +
    '                                    <span style="margin-left: 10px;">短视频直播推广</span>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <!-- <div class="dd_price">\n' +
    '                                                    <span style="color: #F03D37">1000元</span>\n' +
    '                                                </div> -->\n' +
    '                        </div>\n' +
    '                        <div class="dd_gn">\n' +
    '                            <div class="dd_gn_first">\n' +
    '                                <div>\n' +
    '                                    <span class="first_gary">商品类型：</span><span class=\'first_3\'>鞋帽箱包</span>\n' +
    '                                </div>\n' +
    '                                <div style=\'float:right\'>\n' +
    '                                    <span class="first_gary">粉丝要求：</span><span class=\'first_3\'>10万</span>\n' +
    '                                </div>\n' +
    '                                <div>\n' +
    '                                    <span class="first_gary">达人平台：</span><span class=\'first_3\'>暂无要求</span>\n' +
    '                                </div>\n' +
    '                                <div style=\'float:right\'>\n' +
    '                                    <span class="first_gary">佣金比例：</span><span class=\'first_3\'>30%</span>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="dd_foot">\n' +
    '                        <span id="dd_foot_detail">订单详情</span>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="col-md-4" id="tab-content">\n' +
    '                    <div class="dd_tab_detail">\n' +
    '                        <div class="dd_detail">\n' +
    '                            <div class="dd_userImg">\n' +
    '                                <img class="dd_img" src="images/hehua.jpg" alt="">\n' +
    '                            </div>\n' +
    '                            <div class="dd_userText">\n' +
    '                                <div class="dd_userName">你说什么就是什么</div>\n' +
    '                                <div class="dd_userDe">\n' +
    '                                    <span>快手</span>\n' +
    '                                    <span style="margin-left: 10px;">短视频直播推广</span>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="dd_price">\n' +
    '                                <span style="color: #F03D37">1000元</span>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="dd_gn">\n' +
    '                            <p>在中台产品的研发过程中，会出现不同的 设计规范练习方式，但其中往往存在很帅 类似的问题。我们还是要多多注意谢谢规\n' +
    '                                范一些东西还是要注意细节。</p>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="dd_foot">\n' +
    '                        <span id="dd_foot_detail">订单详情</span>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '</div>';
//订单生成
window.templates['dings.html'] = '<!-- 订单生成 -->\n' +
    '<link rel="stylesheet" href="css/dings.css">\n' +
    '<div class="ds_solid"></div>\n' +
    '<div class="ds_content">\n' +
    '    <div class="ds_top">\n' +
    '        <p class="ds_text">订单生成</p>\n' +
    '        <form class="form-horizontal">\n' +
    '            <div class="form-group" id="ds_modal_center">\n' +
    '                <label for="inputEmail3" class="col-sm-2 control-label">选择商家：</label>\n' +
    // '                <div class="col-sm-10">\n' +
    // '                    <input type="text" class="form-control" id="inputEmail3" placeholder="请输入" style="width: 50%">\n' +
    // '                </div>\n' +
    '<select class="form-control" style="width: 50%">' +
    '<option>1</option>' +
    '<option>2</option>' +
    '<option>3</option>' +
    '<option>4</option>' +
    '<option>5</option>' +
    '</select>' +
    '            </div>\n' +
    '            <div class="form-group" id="ds_modal_center">\n' +
    '                <label for="inputPassword3" class="col-sm-2 control-label">选择网红：</label>\n' +
    // '                <div class="col-sm-10">\n' +
    // '                    <input type="text" class="form-control" id="inputPassword3" placeholder="请输入" style="width: 50%">\n' +
    // '                </div>\n' +
    '<select class="form-control" style="width: 50%">' +
    '<option>1</option>' +
    '<option>2</option>' +
    '<option>3</option>' +
    '<option>4</option>' +
    '<option>5</option>' +
    '</select>' +
    '            </div>\n' +
    '            <div class="form-group" id="ds_modal_center">\n' +
    '                <div class="col-sm-offset-2 col-sm-10">\n' +
    '                    <button type="submit" class="btn btn-default"\n' +
    '                        style="background: #1890FF;color: white;">创建链接</button>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </form>\n' +
    '    </div>\n' +
    '</div>';
//    服务内幕
window.templates['serve.html'] = '<!-- 服务内幕 -->\n' +
    '<link rel="stylesheet" href="css/serve.css">\n' +
    '<div class="serve_solid"></div>\n' +
    '<div class="serve_content">\n' +
    '    <div class="serve_top">\n' +
    '        <p class="serve_text">添加模板</p>\n' +
    '        <form class="form-inline">\n' +
    '            <div class="form-group col-sm-6">\n' +
    '                <label for="exampleInputName2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 标题：</label>\n' +
    '                <input type="text" class="form-control" id="exampleInputName2" placeholder="请输入" style="width: 50%">\n' +
    '            </div>\n' +
    '            <div class="form-group col-sm-6">\n' +
    '                <label for="exampleInputEmail2">详情描述：</label>\n' +
    '                <input type="text" class="form-control" id="exampleInputEmail2" placeholder="请输入" style="width: 50%">\n' +
    '            </div>\n' +
    '            <div class="form-group col-sm-6">\n' +
    '                <label for="exampleInputName2">最高单价：</label>\n' +
    '                <input type="number" class="form-control" id="exampleInputName2" placeholder="请输入" style="width: 50%">\n' +
    '            </div>\n' +
    '            <div class="form-group col-sm-6">\n' +
    '                <label for="exampleInputEmail2">最低单价：</label>\n' +
    '                <input type="number" class="form-control" id="exampleInputEmail2" placeholder="请输入" style="width: 50%">\n' +
    '            </div>\n' +
    '            <div class="form-group col-sm-12" id="serve_modal_center">\n' +
    '                <div class="">\n' +
    '                    <button type="submit" class="btn btn-default" style="background: #1890FF;color: white;">保存</button>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </form>\n' +
    '    </div>\n' +
    '    <div class="serve_foot">\n' +
    '        <div role="tabpanel" class="tab-pane" id="settings">\n' +
    '            <div class="row" style="margin: 0">\n' +
    '                <!--  小块  -->\n' +
    '                <div class="col-md-4" id="serve_content">\n' +
    '                    <div class="serve_block_detail">\n' +
    '                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;标题：<span>线下直播</span> </p>\n' +
    '                        <p class="serve_block_p">详情描述：<span\n' +
    '                                class="serve_block_span">让网红做一场线下直播推广/带货/网红带到标准即可付款。让网红做</span> </p>\n' +
    '                        <p>最低单价：<span>500</span> </p>\n' +
    '                        <p>最高单价：<span>1000</span> </p>\n' +
    '                    </div>\n' +
    '                    <div class="serve_block_foot">\n' +
    '                        <span id="serve_del">删除模板</span>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="col-md-4" id="serve_content">\n' +
    '                    <div class="serve_block_detail">\n' +
    '                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;标题：<span>线下直播</span> </p>\n' +
    '                        <p class="serve_block_p">详情描述：<span\n' +
    '                                class="serve_block_span">让网红做一场线下直播推广/带货/网红带到标准即可付款。让网红做</span> </p>\n' +
    '                        <p>最低单价：<span>500</span> </p>\n' +
    '                        <p>最高单价：<span>1000</span> </p>\n' +
    '                    </div>\n' +
    '                    <div class="serve_block_foot">\n' +
    '                        <span id="serve_del">删除模板</span>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="col-md-4" id="serve_content">\n' +
    '                    <div class="serve_block_detail">\n' +
    '                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;标题：<span>线下直播</span> </p>\n' +
    '                        <p class="serve_block_p">详情描述：<span\n' +
    '                                class="serve_block_span">让网红做一场线下直播推广/带货/网红带到标准即可付款。让网红做</span> </p>\n' +
    '                        <p>最低单价：<span>500</span> </p>\n' +
    '                        <p>最高单价：<span>1000</span> </p>\n' +
    '                    </div>\n' +
    '                    <div class="serve_block_foot">\n' +
    '                        <span id="serve_del">删除模板</span>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>';
//销售管理
window.templates['market.html'] = "<!-- 销售管理 -->\n" +
    "                    <link rel=\"stylesheet\" href=\"css/market.css\"> \n" +
    "                        <link rel=\"stylesheet\" href=\"css/index.css\"> \n" +
    "                    <div class=\"serve_solid\"></div>\n" +
    "                    <div class=\"serve_content\">\n" +
    "                        <div class=\"market_top\">\n" +
    "                            <p class=\"serve_text\">添加人员</p>\n" +
    "                            <form class=\"form-inline\">\n" +
    "                                <div class=\"form-group col-sm-12\">\n" +
    "                                    <label for=\"exampleInputName2\">姓名：</label>\n" +
    "                                    <input type=\"text\" class=\"form-control\" id=\"\" placeholder=\"请输入\" style=\"width: 25%\">\n" +
    "                                </div>\n" +
    "                                <!-- <div class=\"form-group col-sm-6\">\n" +
    "                                    <label for=\"exampleInputEmail2\">邀请码生成：</label>\n" +
    "                                    <input type=\"text\" class=\"form-control\" id=\"\" placeholder=\"请输入\" style=\"width: 50%\">\n" +
    "                                </div> -->\n" +
    "                                <div class=\"form-group col-sm-12\" id=\"serve_modal_center\">\n" +
    "                                    <div class=\"\">\n" +
    "                                        <button type=\"submit\" class=\"btn btn-default\"\n" +
    "                                            style=\"background: #1890FF;color: white;letter-spacing: 4px;\">确认添加</button>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </form>\n" +
    "                        </div>\n" +
    "                        <div class=\"market_foot\">\n" +
    "                            <div class=\"market_foot_table\">\n" +
    "                                <table class=\"market_table\">\n" +
    "                                    <thead>\n" +
    "                                        <tr class=\"market_tr_heard\">\n" +
    "                                            <th></th>\n" +
    "                                            <th>姓名</th>\n" +
    "                                            <th>性别</th>\n" +
    "                                            <th>邀请数量</th>\n" +
    "                                            <th>邀请码</th>\n" +
    "                                            <th>二维码生成</th>\n" +
    "                                            <th>操作</th>\n" +
    "                                        </tr>\n" +
    "                                    </thead>\n" +
    "                                    <tbody>\n" +
    "                                        <tr>\n" +
    "                                            <td><img src=\"images/hehua.jpg\" alt=\"\"></td>\n" +
    "                                            <td class=\"market_name\">你说什么就是什么</td>\n" +
    "                                            <td>男</td>\n" +
    "                                            <td>20</td>\n" +
    "                                            <td>12356</td>\n" +
    "                                            <td class=\"market_btn\">二维码</td>\n" +
    "                                            <td>\n" +
    "                                                <button class=\"market_table_btn right\" data-toggle=\"modal\"\n" +
    "                                                    data-target=\"#myModalmore\">邀请人员</button>\n" +
    "                                                <button class=\"market_table_btn\">删除资料</button>\n" +
    "                                            </td>\n" +
    "                                        </tr>\n" +
    "                                        <tr>\n" +
    "                                            <td><img src=\"images/hehua.jpg\" alt=\"\"></td>\n" +
    "                                            <td class=\"tabel_name\">你说什么就是什么</td>\n" +
    "                                            <td>男</td>\n" +
    "                                            <td>20</td>\n" +
    "                                            <td>12356</td>\n" +
    "                                            <td class=\"wh_table_btn\">二维码</td>\n" +
    "                                            <td>\n" +
    "                                                <button class=\"wh_table_btn right\" data-toggle=\"modal\"\n" +
    "                                                    data-target=\"#myModalmore\">邀请人员</button>\n" +
    "                                                <button class=\"wh_table_btn\">删除资料</button>\n" +
    "                                            </td>\n" +
    "                                        </tr>\n" +
    "                                        <tr>\n" +
    "                                            <td><img src=\"images/hehua.jpg\" alt=\"\"></td>\n" +
    "                                            <td class=\"tabel_name\">你说什么就是什么</td>\n" +
    "                                            <td>男</td>\n" +
    "                                            <td>20</td>\n" +
    "                                            <td>12356</td>\n" +
    "                                            <td class=\"wh_table_btn\">二维码</td>\n" +
    "                                            <td>\n" +
    "                                                <button class=\"wh_table_btn right\" data-toggle=\"modal\"\n" +
    "                                                    data-target=\"#myModalmore\">邀请人员</button>\n" +
    "                                                <button class=\"wh_table_btn\">删除资料</button>\n" +
    "                                            </td>\n" +
    "                                        </tr>\n" +
    "                                        <tr>\n" +
    "                                            <td><img src=\"images/hehua.jpg\" alt=\"\"></td>\n" +
    "                                            <td class=\"tabel_name\">你说什么就是什么</td>\n" +
    "                                            <td>男</td>\n" +
    "                                            <td>20</td>\n" +
    "                                            <td>12356</td>\n" +
    "                                            <td class=\"wh_table_btn\">二维码</td>\n" +
    "                                            <td>\n" +
    "                                                <button class=\"wh_table_btn right\" data-toggle=\"modal\"\n" +
    "                                                    data-target=\"#myModalmore\">邀请人员</button>\n" +
    "                                                <button class=\"wh_table_btn\">删除资料</button>\n" +
    "                                            </td>\n" +
    "                                        </tr>\n" +
    "                                        <tr>\n" +
    "                                            <td><img src=\"images/hehua.jpg\" alt=\"\"></td>\n" +
    "                                            <td class=\"tabel_name\">你说什么就是什么</td>\n" +
    "                                            <td>男</td>\n" +
    "                                            <td>20</td>\n" +
    "                                            <td>12356</td>\n" +
    "                                            <td class=\"wh_table_btn\">二维码</td>\n" +
    "                                            <td>\n" +
    "                                                <button class=\"wh_table_btn right\" data-toggle=\"modal\"\n" +
    "                                                    data-target=\"#myModalmore\">邀请人员</button>\n" +
    "                                                <button class=\"wh_table_btn\">删除资料</button>\n" +
    "                                            </td>\n" +
    "                                        </tr>\n" +
    "                                        <tr>\n" +
    "                                            <td><img src=\"images/hehua.jpg\" alt=\"\"></td>\n" +
    "                                            <td class=\"tabel_name\">你说什么就是什么</td>\n" +
    "                                            <td>男</td>\n" +
    "                                            <td>20</td>\n" +
    "                                            <td>12356</td>\n" +
    "                                            <td class=\"wh_table_btn\">二维码</td>\n" +
    "                                            <td>\n" +
    "                                                <button class=\"wh_table_btn right\" data-toggle=\"modal\"\n" +
    "                                                    data-target=\"#myModalmore\">邀请人员</button>\n" +
    "                                                <button class=\"wh_table_btn\">删除资料</button>\n" +
    "                                            </td>\n" +
    "                                        </tr>\n" +
    "                                        <tr>\n" +
    "                                            <td><img src=\"images/hehua.jpg\" alt=\"\"></td>\n" +
    "                                            <td class=\"tabel_name\">你说什么就是什么</td>\n" +
    "                                            <td>男</td>\n" +
    "                                            <td>20</td>\n" +
    "                                            <td>12356</td>\n" +
    "                                            <td class=\"wh_table_btn\">二维码</td>\n" +
    "                                            <td>\n" +
    "                                                <button class=\"wh_table_btn right\" data-toggle=\"modal\"\n" +
    "                                                    data-target=\"#myModalmore\">邀请人员</button>\n" +
    "                                                <button class=\"wh_table_btn\">删除资料</button>\n" +
    "                                            </td>\n" +
    "                                        </tr>\n" +
    "                                        <tr>\n" +
    "                                            <td><img src=\"images/hehua.jpg\" alt=\"\"></td>\n" +
    "                                            <td class=\"tabel_name\">你说什么就是什么</td>\n" +
    "                                            <td>男</td>\n" +
    "                                            <td>20</td>\n" +
    "                                            <td>12356</td>\n" +
    "                                            <td class=\"wh_table_btn\">二维码</td>\n" +
    "                                            <td>\n" +
    "                                                <button class=\"wh_table_btn right\" data-toggle=\"modal\"\n" +
    "                                                    data-target=\"#myModalmore\">邀请人员</button>\n" +
    "                                                <button class=\"wh_table_btn\">删除资料</button>\n" +
    "                                            </td>\n" +
    "                                        </tr>\n" +
    "                                    </tbody>\n" +
    "                                </table>\n" +
    "                            </div>\n" +
    "                            <!-- 分页 -->\n" +
    "                            <div id=\"demo2-1\"></div>\n" +
    "                            <!--邀请人员-模态框-->\n" +
    "                            <!-- 网红人员更多资料-模态框 Modal -->\n" +
    "                            <div class=\"modal fade\" id=\"myModalmore\" tabindex=\"-1\" role=\"dialog\"\n" +
    "                                aria-labelledby=\"myModalLabel\" style=\"z-index: 10\">\n" +
    "                                <div class=\"modal-dialog\" role=\"document\">\n" +
    "                                    <div class=\"modal-content\" id=\"market_modal_content\">\n" +
    "                                        <div class=\"modal-header\">\n" +
    "                                            <button type=\"button\" class=\"close\" data-dismiss=\"modal\"\n" +
    "                                                aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n" +
    "                                            <h4 class=\"modal-title\" id=\"myModalLabel\"> 抢单人员</h4>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"modal-body\">\n" +
    "                                            <div class=\"market_modal-body\">\n" +
    "                                                <table class=\"market_table\">\n" +
    "                                                    <tbody>\n" +
    "                                                        <tr>\n" +
    "                                                            <td><img src=\"images/hehua.jpg\" alt=\"\"></td>\n" +
    "                                                            <td class=\"tabel_name\">你说什么就是什么</td>\n" +
    "                                                            <td>网红</td>\n" +
    "                                                            <td>抖音</td>\n" +
    "                                                        </tr>\n" +
    "                                                        <tr>\n" +
    "                                                            <td><img src=\"images/hehua.jpg\" alt=\"\"></td>\n" +
    "                                                            <td class=\"tabel_name\">你说什么就是什么</td>\n" +
    "                                                            <td>商家</td>\n" +
    "                                                            <td>服装-男装-裤子</td>\n" +
    "                                                        </tr>\n" +
    "                                                    </tbody>\n" +
    "                                                </table>\n" +
    "                                            </div>\n" +
    "                                            <!-- 分页 -->\n" +
    "                                            <!-- <div id=\"demo2-1\"></div> -->\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <!-- 完 -->\n" +
    "\n" +
    "                        </div>\n" +
    "                    </div>";
//商家退款
window.templates['refund.html'] = '<!-- 商家退款 -->\n' +
    '<link rel="stylesheet" href="css/refund.css">\n' +
    '<div class="refund_solid"></div>\n' +
    '<div class="refund_content">\n' +
    '    <div role="tabpanel" class="tab-pane active" id="home">\n' +
    '        <div class="row" style="margin: 0">\n' +
    '            <div class="col-md-4" id="refund-content">\n' +
    '                <!--订单更多资料-模态框(仅写了一个模态框)-->\n' +
    '                <div class="refund_tab_detail" data-toggle="modal" data-target="#refundModal">\n' +
    '                    <div class="refund_detail">\n' +
    '                        <div class="refund_userImg">\n' +
    '                            <img class="refund_img" src="images/hehua.jpg" alt="">\n' +
    '                        </div>\n' +
    '                        <div class="refund_userText">\n' +
    '                            <div class="refund_userName">你说什么就是什么</div>\n' +
    '                            <div class="refund_userDe">\n' +
    '                                <span>快手</span>\n' +
    '                                <span style="margin-left: 10px;">短视频直播推广</span>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="refund_price">\n' +
    '                            <span style="color: #F03D37;font-weight: bold;">1000元</span>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="refund_gn">\n' +
    '                        <p>在中台产品的研发过程中，会出现不同的 设计规范练习方式，但其中往往存在很帅 类似的问题。我们还是要多多注意谢谢规\n' +
    '                            范一些东西还是要注意细节。</p>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="refund_foot">\n' +
    '                    <span style="border-right: 1px solid #dedede">退款</span>\n' +
    '                    <span>拒绝</span>\n' +
    '                </div>\n' +
    '                <!--订单更多资料-模态框-->\n' +
    '                <!-- 商家更多资料 -->\n' +
    '                <div class="modal fade" id="refundModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">\n' +
    '                    <div class="modal-dialog" role="document">\n' +
    '                        <div class="modal-content">\n' +
    '                            <div class="modal-header">\n' +
    '                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span\n' +
    '                                        aria-hidden="true">&times;</span></button>\n' +
    '                                <h4 class="modal-title" id="myModalLabel">更多资料</h4>\n' +
    '                            </div>\n' +
    '                            <div class="modal-body">\n' +
    '                                <div class="row">\n' +
    '                                    <div class="layui-col-md12">\n' +
    '                                        <p>商家电话：<span style="color:#1890FF ">15371185538</span>\n' +
    '                                        </p>\n' +
    '                                    </div>\n' +
    '                                    <div class="layui-col-md12">\n' +
    '                                        <p>\n' +
    '                                            需求标签：\n' +
    '                                            <span class="layui_span">美食</span>\n' +
    '                                            <span class="layui_span">三农</span>\n' +
    '                                            <span class="layui_span">美女</span>\n' +
    '                                        </p>\n' +
    '                                    </div>\n' +
    '                                    <div class="layui-col-md12">\n' +
    '                                        <p>粉丝要求：<span class="refund_layui_span">10万</span>\n' +
    '                                        </p>\n' +
    '                                    </div>\n' +
    '                                    <div class="layui-col-md12">\n' +
    '                                        <p>发布时间：<span class="refund_layui_span">2019-6-19\n' +
    '                                                15:17</span>\n' +
    '                                        </p>\n' +
    '                                    </div>\n' +
    '                                    <div class="layui-col-md12">\n' +
    '                                        <p>创建时间：<span class="refund_layui_span">2019-6-19\n' +
    '                                                15:17</span>\n' +
    '                                        </p>\n' +
    '                                    </div>\n' +
    '                                    <div class="layui-col-md12">\n' +
    '                                        <p>订单编号：\n' +
    '                                            <span class="refund_layui_span">\n' +
    '                                                1324558885555896666666\n' +
    '                                            </span>\n' +
    '                                        </p>\n' +
    '                                    </div>\n' +
    '                                    <div class="layui-col-md12">\n' +
    '                                        <p>退款原因：\n' +
    '                                            <span class="refund_layui_span">\n' +
    '                                                因为暂时无人抢单，所以想取消订单。\n' +
    '                                            </span>\n' +
    '                                        </p>\n' +
    '                                    </div>\n' +
    '                                    <div class="layui-col-md12">\n' +
    '                                        <p>商品图片：</p>\n' +
    '                                        <img src="images/hehua.jpg" alt="">\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>';

//标签管理
window.templates['labels.html'] = "<!-- 标签管理 -->\n" +
    "                    <link rel=\"stylesheet\" href=\"css/labels.css\">\n" +
    "                    <div class=\"labels_solid\"></div>\n" +
    "                    <div class=\"labels_content\">\n" +
    "                        <div class=\"labels_top\">\n" +
    "                            <p class=\"labels_text\">标签生成</p>\n" +
    "                            <form class=\"form-horizontal\">\n" +
    "                                <div class=\"form-group\" id=\"ds_modal_center\">\n" +
    "                                    <label for=\"inputEmail3\" class=\"col-sm-2 control-label\">新建标签：</label>\n" +
    "                                    <div class=\"col-sm-10\">\n" +
    "                                        <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"请输入\"\n" +
    "                                            style=\"width: 50%\">\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"form-group\" id=\"ds_modal_center\">\n" +
    "                                    <div class=\"col-sm-offset-2 col-sm-10\">\n" +
    "                                        <button type=\"submit\" class=\"btn btn-default\"\n" +
    "                                            style=\"background: #1890FF;color: white;\">生成</button>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </form>\n" +
    "                            <!-- Nav tabs -->\n" +
    "                            <ul class=\"nav nav-tabs\" role=\"tablist\" id=\"labels_ul\">\n" +
    "                                <li role=\"presentation\" class=\"active\"><a href=\"#home\" aria-controls=\"home\" role=\"tab\"\n" +
    "                                        data-toggle=\"tab\">网红标签</a></li>\n" +
    "                                <li role=\"presentation\"><a href=\"#profile\" aria-controls=\"profile\" role=\"tab\"\n" +
    "                                        data-toggle=\"tab\">网红平台</a>\n" +
    "                                </li>\n" +
    "                            </ul>\n" +
    "                        </div>\n" +
    "                        <div class=\"tab-content\">\n" +
    "                            <!-- 网红标签 -->\n" +
    "                            <div role=\"tabpanel\" class=\"tab-pane active\" id=\"home\">\n" +
    "                                <div class=\"row\" style=\"margin: 0\">\n" +
    "                                    <div class=\"col-md-2\" id=\"labels_content\">\n" +
    "                                        <div class=\"labels_col_text\">\n" +
    "                                            生活技巧\n" +
    "                                        </div>\n" +
    "                                        <button class=\"labels_col_del\">删除标签</button>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"col-md-2\" id=\"labels_content\">\n" +
    "                                        <div class=\"labels_col_text\">\n" +
    "                                            生活技巧\n" +
    "                                        </div>\n" +
    "                                        <button class=\"labels_col_del\">删除标签</button>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"col-md-2\" id=\"labels_content\">\n" +
    "                                        <div class=\"labels_col_text\">\n" +
    "                                            生活技巧\n" +
    "                                        </div>\n" +
    "                                        <button class=\"labels_col_del\">删除标签</button>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"col-md-2\" id=\"labels_content\">\n" +
    "                                        <div class=\"labels_col_text\">\n" +
    "                                            生活技巧\n" +
    "                                        </div>\n" +
    "                                        <button class=\"labels_col_del\">删除标签</button>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"col-md-2\" id=\"labels_content\">\n" +
    "                                        <div class=\"labels_col_text\">\n" +
    "                                            生活技巧\n" +
    "                                        </div>\n" +
    "                                        <button class=\"labels_col_del\">删除标签</button>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"col-md-2\" id=\"labels_content\">\n" +
    "                                        <div class=\"labels_col_text\">\n" +
    "                                            生活技巧\n" +
    "                                        </div>\n" +
    "                                        <button class=\"labels_col_del\">删除标签</button>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <!-- 网红平台 -->\n" +
    "                            <div role=\"tabpanel\" class=\"tab-pane\" id=\"profile\">\n" +
    "                                <div class=\"row\" style=\"margin: 0\">\n" +
    "                                    <div class=\"col-md-2\" id=\"labels_content2\">\n" +
    "                                        <div class=\"form-group\">\n" +
    "                                            <div class=\"labes_div_img\">\n" +
    "                                                <span class=\"labes_span_img\">+</span>\n" +
    "                                                <input type=\"file\" class=\"labels_input\" id=\"ipt\">\n" +
    "                                                <img class=\"labes_img\" src=\"\" alt=\"\" id=\"labes_img\">\n" +
    "                                            </div>\n" +
    "                                            <p class=\"help-block\">抖音</p>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <!-- <div class=\"col-md-2\" id=\"labels_content2\">\n" +
    "                                        <div class=\"form-group\">\n" +
    "                                            <div class=\"labes_div_img\">\n" +
    "                                                <span class=\"labes_span_img\">+</span>\n" +
    "                                                <input type=\"file\" class=\"labels_input\" id=\"ipt\">\n" +
    "                                                <img class=\"labes_img\" src=\"\" alt=\"\" id=\"labes_img\">\n" +
    "                                            </div>\n" +
    "                                            <p class=\"help-block\">抖音</p>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"col-md-2\" id=\"labels_content2\">\n" +
    "                                        <div class=\"form-group\">\n" +
    "                                            <div class=\"labes_div_img\">\n" +
    "                                                <span class=\"labes_span_img\">+</span>\n" +
    "                                                <input type=\"file\" class=\"labels_input\" id=\"ipt\">\n" +
    "                                                <img class=\"labes_img\" src=\"\" alt=\"\" id=\"labes_img\">\n" +
    "                                            </div>\n" +
    "                                            <p class=\"help-block\">抖音</p>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"col-md-2\" id=\"labels_content2\">\n" +
    "                                        <div class=\"form-group\">\n" +
    "                                            <div class=\"labes_div_img\">\n" +
    "                                                <span class=\"labes_span_img\">+</span>\n" +
    "                                                <input type=\"file\" class=\"labels_input\" id=\"ipt\">\n" +
    "                                                <img class=\"labes_img\" src=\"\" alt=\"\" id=\"labes_img\">\n" +
    "                                            </div>\n" +
    "                                            <p class=\"help-block\">抖音</p>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"col-md-2\" id=\"labels_content2\">\n" +
    "                                        <div class=\"form-group\">\n" +
    "                                            <div class=\"labes_div_img\">\n" +
    "                                                <span class=\"labes_span_img\">+</span>\n" +
    "                                                <input type=\"file\" class=\"labels_input\" id=\"ipt\">\n" +
    "                                                <img class=\"labes_img\" src=\"\" alt=\"\" id=\"labes_img\">\n" +
    "                                            </div>\n" +
    "                                            <p class=\"help-block\">抖音</p>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"col-md-2\" id=\"labels_content2\">\n" +
    "                                        <div class=\"form-group\">\n" +
    "                                            <div class=\"labes_div_img\">\n" +
    "                                                <span class=\"labes_span_img\">+</span>\n" +
    "                                                <input type=\"file\" class=\"labels_input\" id=\"ipt\">\n" +
    "                                                <img class=\"labes_img\" src=\"\" alt=\"\" id=\"labes_img\">\n" +
    "                                            </div>\n" +
    "                                            <p class=\"help-block\">抖音</p>\n" +
    "                                        </div>\n" +
    "                                    </div> -->\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <script>\n" +
    "                        // 标签上传图片\n" +
    "                        ipt.onchange = function () {\n" +
    "                            // console.log(this.files[0])\n" +
    "                            var F = new FileReader();\n" +
    "                            F.readAsDataURL(this.files[0]);\n" +
    "                            F.onload = function () {\n" +
    "                                labes_img.src = F.result;\n" +
    "                                labes_img.style.display = \"block\";\n" +
    "                            }\n" +
    "                        }\n" +
    "                    </script>";
//公告管理
window.templates['announcement.html'] = "<!-- 公告管理 -->\n" +
    "<link rel=\"stylesheet\" href=\"css/labels.css\">\n" +
    "<div class=\"labels_solid\"></div>\n" +
    "<div class=\"labels_content\">\n" +
    "    <div class=\"labels_top\">\n" +
    "        <p class=\"labels_text\">新建公告</p>\n" +
    "        <form class=\"form-horizontal\">\n" +
    "            <div class=\"form-group\" id=\"ds_modal_center\">\n" +
    "                <label for=\"inputEmail3\" class=\"col-sm-2 control-label\">新建公告：</label>\n" +
    "                <div class=\"col-sm-10\">\n" +
    "                    <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"请输入\" style=\"width: 50%\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" id=\"ds_modal_center\">\n" +
    "                <div class=\"col-sm-offset-2 col-sm-10\">\n" +
    "                    <button type=\"submit\" class=\"btn btn-default\" style=\"background: #1890FF;color: white;\">生成</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"tab-content\">\n" +
    "        <!-- 网红标签 -->\n" +
    "        <div role=\"tabpanel\" class=\"tab-pane active\" id=\"home\">\n" +
    "            <div class=\"row\" style=\"margin: 0\">\n" +
    "                <div class=\"col-md-4\" id=\"labels_contents\">\n" +
    "                    <p class=\"col_md_4\">公告1</p>\n" +
    "                    <div class=\"col_md_4_text\">\n" +
    "                        生活技巧生活技巧生活技巧生活技巧生活技巧生活技巧生活技巧生活技巧生活技巧生活技巧生活技巧\n" +
    "                    </div>\n" +
    "                    <button class=\"labels_col_del\">删除公告</button>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-4\" id=\"labels_contents\">\n" +
    "                    <p class=\"col_md_4\">公告1</p>\n" +
    "                    <div class=\"col_md_4_text\">\n" +
    "                        生活技巧生活技巧生活技巧生活技巧生活技巧生活技巧生活技巧生活技巧生活技巧生活技巧生活技巧\n" +
    "                    </div>\n" +
    "                    <button class=\"labels_col_del\">删除公告</button>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-4\" id=\"labels_contents\">\n" +
    "                    <p class=\"col_md_4\">公告1</p>\n" +
    "                    <div class=\"col_md_4_text\">\n" +
    "                        生活技巧生活技巧生活技巧生活技巧生活技巧生活技巧生活技巧生活技巧生活技巧生活技巧生活技巧\n" +
    "                    </div>\n" +
    "                    <button class=\"labels_col_del\">删除公告</button>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-4\" id=\"labels_contents\">\n" +
    "                    <p class=\"col_md_4\">公告1</p>\n" +
    "                    <div class=\"col_md_4_text\">\n" +
    "                        生活技巧生活技巧生活技巧生活技巧生活技巧生活技巧生活技巧生活技巧生活技巧生活技巧生活技巧\n" +
    "                    </div>\n" +
    "                    <button class=\"labels_col_del\">删除公告</button>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-4\" id=\"labels_contents\">\n" +
    "                    <p class=\"col_md_4\">公告1</p>\n" +
    "                    <div class=\"col_md_4_text\">\n" +
    "                        生活技巧生活技巧生活技巧生活技巧生活技巧生活技巧生活技巧生活技巧生活技巧生活技巧生活技巧\n" +
    "                    </div>\n" +
    "                    <button class=\"labels_col_del\">删除公告</button>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-4\" id=\"labels_contents\">\n" +
    "                    <p class=\"col_md_4\">公告1</p>\n" +
    "                    <div class=\"col_md_4_text\">\n" +
    "                        生活技巧生活技巧生活技巧生活技巧生活技巧生活技巧生活技巧生活技巧生活技巧生活技巧生活技巧\n" +
    "                    </div>\n" +
    "                    <button class=\"labels_col_del\">删除公告</button>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-4\" id=\"labels_contents\">\n" +
    "                    <p class=\"col_md_4\">公告1</p>\n" +
    "                    <div class=\"col_md_4_text\">\n" +
    "                        生活技巧生活技巧生活技巧生活技巧生活技巧生活技巧生活技巧生活技巧生活技巧生活技巧生活技巧\n" +
    "                    </div>\n" +
    "                    <button class=\"labels_col_del\">删除公告</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "</div>";
// 商家内幕-内幕管理
window.templates['sjStory.html'] = "<!-- 商家内幕-内幕管理 -->\n" +
    "<link rel=\"stylesheet\" href=\"css/sjStory.css\">\n" +
    "<div class=\"sjStory\">\n" +
    "    <!-- 查询 -->\n" +
    "    <div class=\"sjStory_top\">\n" +
    "        <form class=\"form-inline sjStory_form\">\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"exampleInputName2\">标签名称：</label>\n" +
    "                <input type=\"text\" class=\"form-control\" id=\"exampleInputName2\" placeholder=\"请输入\">\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"name\">所属行业：</label>\n" +
    "                <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"请输入\">\n" +
    "            </div>\n" +
    "            <button type=\"submit\" class=\"btn btn-default\" style=\"color: white;\n" +
    "    background: #1890FF\">查询</button>\n" +
    "        </form>\n" +
    "        <!-- 添加-模态框 -->\n" +
    "        <button type=\"text\" class=\"btn btn-default\" style=\"color: white;\n" +
    "    background: #1890FF;margin-top: 16px;\" data-toggle=\"modal\" data-target=\"#myModal\">添加</button>\n" +
    "        <!-- 模态框（Modal） -->\n" +
    "        <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n" +
    "            aria-hidden=\"true\">\n" +
    "            <div class=\"modal-dialog\">\n" +
    "                <div class=\"modal-content\" id=\"sjStory_modal\">\n" +
    "                    <div class=\"modal-header\">\n" +
    "                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n" +
    "                        <h4 class=\"modal-title\" id=\"myModalLabel\">添加标签</h4>\n" +
    "                    </div>\n" +
    // "                    <div class=\"modal-body\" style=\"height:350px\">\n" +
    "                    <div class=\"modal-body\">\n" +
    "                        <form class=\"form-inline sjStory_form\">\n" +
    "                            <div class=\"form-group\" id=\"form-group\">\n" +
    "                                <label for=\"exampleInputName2\">第一类：</label>\n" +
    "                                <input type=\"text\" class=\"form-control\" id=\"exampleInputName2\" placeholder=\"请输入\">\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group\" id=\"form-group\">\n" +
    "                                <label for=\"name\">第二类：</label>\n" +
    "                                <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"请输入\">\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group\" id=\"form-group\">\n" +
    "                                <label for=\"exampleInputName2\">第三类：</label>\n" +
    "                                <input type=\"text\" class=\"form-control\" id=\"exampleInputName2\" placeholder=\"请输入\">\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group\" id=\"form-group\">\n" +
    "                                <label for=\"name\">标&nbsp;&nbsp;&nbsp; 签：</label>\n" +
    "                                <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"请输入\">\n" +
    "                            </div>\n" +
    "                            <!-- <button type=\"submit\" class=\"btn btn-default\" style=\"color: white;\n" +
    "background: #1890FF;margin-top: 98px\">添加</button> -->\n" +
    "                        </form>\n" +
    "                    </div>\n" +
    "                    <div class=\"modal-footer\">\n" +
    "                        <!-- <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">关闭</button> -->\n" +
    "                        <button type=\"button\" class=\"btn btn-primary\">添加</button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!-- 表格 -->\n" +
    "    <table class=\"table\">\n" +
    "        <thead>\n" +
    "            <tr class=\"sjStory_tr\">\n" +
    "                <th>第一类</th>\n" +
    "                <th>第二类</th>\n" +
    "                <th>第三类</th>\n" +
    "                <th>标签名称</th>\n" +
    "                <th>操作</th>\n" +
    "            </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "            <tr>\n" +
    "                <td>鞋包配饰</td>\n" +
    "                <td>女鞋 </td>\n" +
    "                <td>单鞋</td>\n" +
    "                <td>鞋包配饰-女鞋-单鞋</td>\n" +
    "                <td>\n" +
    "                    <button class=\"sjStory_tr_btn\" data-toggle=\"modal\" data-target=\"#altermyModal\">修改</button><span\n" +
    "                        class=\"color_span\">|</span>\n" +
    "                    <button class=\"sjStory_tr_btn\">删除</button>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "                <td>鞋包配饰</td>\n" +
    "                <td>女鞋 </td>\n" +
    "                <td>单鞋</td>\n" +
    "                <td>鞋包配饰-女鞋-单鞋</td>\n" +
    "                <td>\n" +
    "                    <button class=\"sjStory_tr_btn\" data-toggle=\"modal\" data-target=\"#altermyModal\">修改</button><span\n" +
    "                        class=\"color_span\">|</span>\n" +
    "                    <button class=\"sjStory_tr_btn\">删除</button>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "        <!-- 表格-修改-模态框 -->\n" +
    "        <div class=\"modal fade\" id=\"altermyModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n" +
    "            aria-hidden=\"true\">\n" +
    "            <div class=\"modal-dialog\">\n" +
    "                <div class=\"modal-content\" id=\"sjStory_modal\">\n" +
    "                    <div class=\"modal-header\">\n" +
    "                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n" +
    "                        <h4 class=\"modal-title\" id=\"myModalLabel\">修改标签</h4>\n" +
    "                    </div>\n" +
    "                    <div class=\"modal-body sjStory_modal_body\" >\n" +
    "                        <form role=\"form\">\n" +
    "                            <div class=\"form-group\" id=\"sjStory_group\">\n" +
    "                                <label for=\"name\" class=\"sjDtory_label\">第一类：</label>\n" +
    "                                <select class=\"form-control\" id=\"sjStory_form_select\">\n" +
    "                                    <option>1</option>\n" +
    "                                    <option>2</option>\n" +
    "                                    <option>3</option>\n" +
    "                                    <option>4</option>\n" +
    "                                    <option>5</option>\n" +
    "                                </select>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group\" id=\"sjStory_group\">\n" +
    "                                <label for=\"name\" class=\"sjDtory_label\">第二类：</label>\n" +
    "                                <select class=\"form-control\" id=\"sjStory_form_select\">\n" +
    "                                    <option>1</option>\n" +
    "                                    <option>2</option>\n" +
    "                                    <option>3</option>\n" +
    "                                    <option>4</option>\n" +
    "                                    <option>5</option>\n" +
    "                                </select>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group\" id=\"sjStory_group\">\n" +
    "                                <label for=\"name\" class=\"sjDtory_label\">第三类：</label>\n" +
    "                                <select class=\"form-control\" id=\"sjStory_form_select\">\n" +
    "                                    <option>1</option>\n" +
    "                                    <option>2</option>\n" +
    "                                    <option>3</option>\n" +
    "                                    <option>4</option>\n" +
    "                                    <option>5</option>\n" +
    "                                </select>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group\" id=\"sjStory_group\">\n" +
    "                                <label for=\"name\" class=\"sjDtory_label\">标&nbsp;&nbsp;&nbsp; 签：</label>\n" +
    "                                <select class=\"form-control\" id=\"sjStory_form_select\">\n" +
    "                                    <option>1</option>\n" +
    "                                    <option>2</option>\n" +
    "                                    <option>3</option>\n" +
    "                                    <option>4</option>\n" +
    "                                    <option>5</option>\n" +
    "                                </select>\n" +
    "                            </div>\n" +
    "                        </form>\n" +
    "                    </div>\n" +
    "                    <div class=\"modal-footer\">\n" +
    "                        <button type=\"button\" class=\"btn btn-primary\">添加</button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </table>\n" +
    "</div>";
//商家内幕-层级管理
window.templates['sjindex.html'] = "<!-- 商家内幕-层级管理 -->\n" +
    "<link rel=\"stylesheet\" href=\"css/labels.css\">\n" +
    "<link rel=\"stylesheet\" href=\"css/sjStory.css\">\n" +
    "<div class=\"labels_solid\"></div>\n" +
    "<div class=\"labels_content\">\n" +
    "    <div class=\"labels_top\">\n" +
    "        <p class=\"labels_text\">层级管理</p>\n" +
    "        <form class=\"form-horizontal\">\n" +
    "            <div class=\"form-group\" id=\"ds_modal_center\">\n" +
    "                <label for=\"inputEmail3\" class=\"col-sm-2 control-label\">新建标签：</label>\n" +
    "                <div class=\"col-sm-10\">\n" +
    "                    <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"请输入\"\n" +
    "                        style=\"width: 50%\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" id=\"ds_modal_center\">\n" +
    "                <div class=\"col-sm-offset-2 col-sm-10\">\n" +
    "                    <button type=\"submit\" class=\"btn btn-default\"\n" +
    "                        style=\"background: #1890FF;color: white;\">生成</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "        <!-- Nav tabs -->\n" +
    "        <ul class=\"nav nav-tabs\" role=\"tablist\" id=\"all_ul\" style=\"margin-top: 44px;\">\n" +
    "            <li role=\"presentation\" class=\"active\" id=\"active\"><a href=\"#one\" aria-controls=\"home\" role=\"tab\"\n" +
    "                    data-toggle=\"tab\">第一层级</a></li>\n" +
    "            <li role=\"presentation\"><a href=\"#two\" aria-controls=\"profile\" role=\"tab\"\n" +
    "                    data-toggle=\"tab\">第二层级</a>\n" +
    "            </li>\n" +
    "            <li role=\"presentation\"><a href=\"#three\" aria-controls=\"profile\" role=\"tab\"\n" +
    "                    data-toggle=\"tab\">第三层级</a>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div class=\"tab-content\">\n" +
    "        <!-- 第一层级 -->\n" +
    "        <div role=\"tabpanel\" class=\"tab-pane active\" id=\"one\">\n" +
    "            <div class=\"row\" style=\"margin: 0\">\n" +
    "                <div class=\"col-md-2\" id=\"labels_content\">\n" +
    "                    <div class=\"labels_col_text\">\n" +
    "                        生活技巧\n" +
    "                    </div>\n" +
    "                    <button class=\"labels_col_del\">删除标签</button>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-2\" id=\"labels_content\">\n" +
    "                    <div class=\"labels_col_text\">\n" +
    "                        生活技巧\n" +
    "                    </div>\n" +
    "                    <button class=\"labels_col_del\">删除标签</button>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-2\" id=\"labels_content\">\n" +
    "                    <div class=\"labels_col_text\">\n" +
    "                        生活技巧\n" +
    "                    </div>\n" +
    "                    <button class=\"labels_col_del\">删除标签</button>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-2\" id=\"labels_content\">\n" +
    "                    <div class=\"labels_col_text\">\n" +
    "                        生活技巧\n" +
    "                    </div>\n" +
    "                    <button class=\"labels_col_del\">删除标签</button>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-2\" id=\"labels_content\">\n" +
    "                    <div class=\"labels_col_text\">\n" +
    "                        生活技巧\n" +
    "                    </div>\n" +
    "                    <button class=\"labels_col_del\">删除标签</button>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-2\" id=\"labels_content\">\n" +
    "                    <div class=\"labels_col_text\">\n" +
    "                        生活技巧\n" +
    "                    </div>\n" +
    "                    <button class=\"labels_col_del\">删除标签</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <!-- 第二层级 -->\n" +
    "        <div role=\"tabpanel\" class=\"tab-pane\" id=\"two\">\n" +
    "            <div class=\"row\" style=\"margin: 0\">\n" +
    "                <div class=\"col-md-2\" id=\"labels_content\">\n" +
    "                    <div class=\"labels_col_text\">\n" +
    "                        层级管理\n" +
    "                    </div>\n" +
    "                    <button class=\"labels_col_del\">删除标签</button>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-2\" id=\"labels_content\">\n" +
    "                    <div class=\"labels_col_text\">\n" +
    "                        生活技巧\n" +
    "                    </div>\n" +
    "                    <button class=\"labels_col_del\">删除标签</button>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-2\" id=\"labels_content\">\n" +
    "                    <div class=\"labels_col_text\">\n" +
    "                        生活技巧\n" +
    "                    </div>\n" +
    "                    <button class=\"labels_col_del\">删除标签</button>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-2\" id=\"labels_content\">\n" +
    "                    <div class=\"labels_col_text\">\n" +
    "                        生活技巧\n" +
    "                    </div>\n" +
    "                    <button class=\"labels_col_del\">删除标签</button>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-2\" id=\"labels_content\">\n" +
    "                    <div class=\"labels_col_text\">\n" +
    "                        生活技巧\n" +
    "                    </div>\n" +
    "                    <button class=\"labels_col_del\">删除标签</button>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-2\" id=\"labels_content\">\n" +
    "                    <div class=\"labels_col_text\">\n" +
    "                        生活技巧\n" +
    "                    </div>\n" +
    "                    <button class=\"labels_col_del\">删除标签</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <!-- 第三层级 -->\n" +
    "        <div role=\"tabpanel\" class=\"tab-pane\" id=\"three\">\n" +
    "            <div class=\"row\" style=\"margin: 0\">\n" +
    "                <div class=\"col-md-2\" id=\"labels_content\">\n" +
    "                    <div class=\"labels_col_text\">\n" +
    "                        第三层级\n" +
    "                    </div>\n" +
    "                    <button class=\"labels_col_del\">删除标签</button>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-2\" id=\"labels_content\">\n" +
    "                    <div class=\"labels_col_text\">\n" +
    "                        生活技巧\n" +
    "                    </div>\n" +
    "                    <button class=\"labels_col_del\">删除标签</button>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-2\" id=\"labels_content\">\n" +
    "                    <div class=\"labels_col_text\">\n" +
    "                        生活技巧\n" +
    "                    </div>\n" +
    "                    <button class=\"labels_col_del\">删除标签</button>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-2\" id=\"labels_content\">\n" +
    "                    <div class=\"labels_col_text\">\n" +
    "                        生活技巧\n" +
    "                    </div>\n" +
    "                    <button class=\"labels_col_del\">删除标签</button>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-2\" id=\"labels_content\">\n" +
    "                    <div class=\"labels_col_text\">\n" +
    "                        生活技巧\n" +
    "                    </div>\n" +
    "                    <button class=\"labels_col_del\">删除标签</button>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-2\" id=\"labels_content\">\n" +
    "                    <div class=\"labels_col_text\">\n" +
    "                        生活技巧\n" +
    "                    </div>\n" +
    "                    <button class=\"labels_col_del\">删除标签</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>";
// 轮播图管理
window.templates['banner.html'] = "<!-- 轮播图管理 -->\n" +
    "                    <!-- 把css写在labels.css里面了 -->\n" +
    "                    <link rel=\"stylesheet\" href=\"../css/labels.css\">\n" +
    "                    <div class=\"labels_solid\"></div>\n" +
    "                    <div class=\"labels_content\">\n" +
    "                        <div class=\"banner_top\">\n" +
    "                            <p class=\"labels_text\">轮播图管理</p>\n" +
    "                            <form class=\"form-horizontal\">\n" +
    "                                <div class=\"form-group\" id=\"ds_modal_center\">\n" +
    "                                    <label for=\"inputEmail3\" class=\"col-sm-3 control-label\">选择类型：</label>\n" +
    "                                    <div class=\"col-sm-9\">\n" +
    "                                        <!-- <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"请输入\"\n" +
    "                                            style=\"width: 50%\"> -->\n" +
    "                                        <select class=\"form-control\" style=\"width: 68%\">\n" +
    "                                            <option>请选择</option>\n" +
    "                                            <option>轮播图</option>\n" +
    "                                            <option>H5链接</option>\n" +
    "                                            <option>富文本</option>\n" +
    "                                        </select>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"form-group\" id=\"ds_modal_center\">\n" +
    "                                    <label for=\"inputEmail3\" class=\"col-sm-3 control-label\">新建轮播图：</label>\n" +
    "                                    <div class=\"col-sm-9\" id=\"addimg_div\">\n" +
    "                                        <span class=\"addimg\">+</span>\n" +
    "                                        <input type=\"file\" class=\"form-control\" id=\"addimg_input\" placeholder=\"请输入\">\n" +
    "                                        <img src=\"\" alt=\"\" id=\"banner_imgs\">\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"form-group\" id=\"ds_modal_center\">\n" +
    "                                    <label for=\"inputh5\" class=\"col-sm-3 control-label\">H5链接：</label>\n" +
    "                                    <div class=\"col-sm-9\">\n" +
    "                                        <input type=\"text\" class=\"form-control\" id=\"inputh5\" placeholder=\"请输入\"\n" +
    "                                            style=\"width: 68%\">\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"form-group\" id=\"ds_modal_center\">\n" +
    "                                    <div class=\"col-sm-offset-2 col-sm-10\">\n" +
    "                                        <button type=\"submit\" class=\"btn btn-default\"\n" +
    "                                            style=\"background: #1890FF;color: white;\">生成</button>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </form>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"banner_foot\">\n" +
    "                            <div role=\"tabpanel\" class=\"tab-pane\">\n" +
    "                                <div class=\"row\" style=\"margin: 0\">\n" +
    // "                                    <--小块-->\n" +
    "                                    <div class=\"col-md-4\" id=\"banner_content\">\n" +
    "                                        <div class=\"banner_block_detail\">\n" +
    "                                            <img src=\"images/hehua.jpg\" alt=\"\">\n" +
    "                                        </div>\n" +
    "                                        <div class=\"banner_block_foot\">\n" +
    "                                            <span id=\"banner_del\">删除模板</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"col-md-4\" id=\"banner_content\">\n" +
    "                                        <div class=\"banner_block_detail\">\n" +
    "                                            <img src=\"images/hehua.jpg\" alt=\"\">\n" +
    "                                        </div>\n" +
    "                                        <div class=\"banner_block_foot\">\n" +
    "                                            <span id=\"banner_del\">删除模板</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"col-md-4\" id=\"banner_content\">\n" +
    "                                        <div class=\"banner_block_detail\">\n" +
    "                                            <img src=\"images/hehua.jpg\" alt=\"\">\n" +
    "                                        </div>\n" +
    "                                        <div class=\"banner_block_foot\">\n" +
    "                                            <span id=\"banner_del\">删除模板</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <script>\n" +
    "                        addimg_input.onchange = function () {\n" +
    "                            // console.log(this.files[0])\n" +
    "                            var F = new FileReader();\n" +
    "                            F.readAsDataURL(this.files[0]);\n" +
    "                            F.onload = function () {\n" +
    "                                banner_imgs.src = F.result;\n" +
    "                                banner_imgs.style.display = \"block\"\n" +
    "                            }\n" +
    "                        }\n" +
    "                    </script>";


