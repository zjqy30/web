'use strict';
window.templates = Object.create(null);
//网红审核
window.templates['demo1.html'] = '<!-- 网红管理-网红审核 -->\n' +
    '<script src="js/demo1.js"></script>\n' +
    '<div id="red_sh" style="width: 100%;height:100%;">   \n' +
    '  <!-- 内容 -->\n' +
    '</div>';
// <!--网红审核-人员查看  -->
window.templates['demo2.html'] = '<!-- 网红管理-人员查看 -->\n' +
    '<script src="js/demo2.js"></script>\n' +
    '<div class="wh_content">\n' +
    '    <!-- 查询 -->\n' +
    '    <form class="form-inline">\n' +
    '        <div class="form-group">\n' +
    '            <label for="exampleInputName2">平台：</label>\n' +
    '            <input type="text" class="form-control" id="ipt_platName" placeholder="请输入">\n' +
    '        </div>\n' +
    '        <div class="form-group">\n' +
    '            <label for="exampleInputEmail2">名字：</label>\n' +
    '            <input type="text" class="form-control" id="ipt_wxName" placeholder="请输入">\n' +
    '        </div>\n' +
    '        <div class="form-group">\n' +
    '            <label for="name">性别：</label>\n' +
    '            <input type="text" class="form-control" id="ipt_sex" placeholder="请输入">\n' +
    '        </div>\n' +
    '        <button type="button" class="btn btn-default" style="color: white;\n' +
    'background: #1890FF">查询</button>\n' +
    '    </form>\n' +
    '    <!-- 网红人员列表 -->\n' +
    '    <table class="wh_table">\n' +
    '        <thead>\n' +
    '            <tr class="tr_heard">\n' +
    '                <th></th>\n' +
    '                <th>姓名</th>\n' +
    '                <th>平台</th>\n' +
    '                <th>性别</th>\n' +
    '                <th>粉丝数量</th>\n' +
    '                <th>入驻时间</th>\n' +
    '                <th>操作</th>\n' +
    '            </tr>\n' +
    '        </thead>\n' +
    '        <tbody id="red_tbody">\n' +
    '            <!-- 表格内容 -->\n' +
    '        </tbody>\n' +
    '    </table>\n' +
    '    <!-- 网红人员更多资料-模态框 Modal -->\n' +
    '    <div class="modal fade" id="myModalmore" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"\n' +
    '        style="z-index: 10">\n' +
    '        <div class="modal-dialog" role="document">\n' +
    '            <div class="modal-content">\n' +
    '                <div class="modal-header">\n' +
    '                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span\n' +
    '                            aria-hidden="true">&times;</span></button>\n' +
    '                    <h4 class="modal-title" id="myModalLabel"> 更多资料</h4>\n' +
    '                </div>\n' +
    '                <div class="modal-body" id="more">\n' +
    '\n' +
    '                    <div class="layui-row" id="row">\n' +
    '                        <!-- 内容 -->\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <!--  -->\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <!-- 二级模态框 整个模态框要跟第一个模态框同级 Modal -->\n' +
    '    <div class="modal fade model" id="myModal1" tabindex="1" role="dialog" aria-labelledby="myModalLabel"\n' +
    '        style="z-index: 100">\n' +
    '        <div class="modal-dialog" role="document">\n' +
    '            <div class="modal-content">\n' +
    '                <div class="modal-header">\n' +
    '                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>\n' +
    '\n' +
    '                    <h4 class="modal-title" id="myModalLabel">查看大图</h4>\n' +
    '                </div>\n' +
    '                <div class="modal-body">\n' +
    '                    <div class="more_cardID">\n' +
    '                        <P class="cardText">查看大图:</P>\n' +
    '                        <img src="images/hehua.jpg" alt="">\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="modal-footer">\n' +
    '                    <button type="button" class="btn btn-default" data-dismiss="modal">确定</button>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <!-- 模态框-完 -->\n' +
    '    <!-- 分页 -->\n' +
    '    <div id="demo2-1"></div>\n' +
    '</div>';
//商家审核
window.templates['demo3.html'] = '<!-- 商家审核 -->\n' +
    '<script src="js/demo3.js"></script>\n' +
    '<div id="sjDate">\n' +
    '    <!-- 内容 -->\n' +
    '</div>'
// <!--商家审核-人员查看  -->
window.templates['demo4.html'] = '<!--商家-人员查看  -->\n' +
    '<script src="js/demo4.js"></script>\n' +
    '<div class="wh_content">\n' +
    '    <!-- 查询 -->\n' +
    '    <form class="form-inline">\n' +
    '        <div class="form-group">\n' +
    '            <label for="exampleInputName2">平台：</label>\n' +
    '            <input type="text" class="form-control" id="sj_platName" placeholder="请输入">\n' +
    '        </div>\n' +
    '        <div class="form-group">\n' +
    '            <label for="exampleInputEmail2">性别：</label>\n' +
    '            <input type="text" class="form-control" id="sj_sex" placeholder="请输入">\n' +
    '        </div>\n' +
    '        <div class="form-group">\n' +
    '            <label for="name">名字：</label>\n' +
    '            <input type="text" class="form-control" id="sj_wxName" placeholder="请输入">\n' +
    '        </div>\n' +
    '        <button type="submit" class="btn btn-default" style="color: white;\n' +
    'background: #1890FF">查询</button>\n' +
    '    </form>\n' +
    '    <!-- 网红人员列表 -->\n' +
    '    <div class="divs">\n' +
    '        <table class="wh_table">\n' +
    '            <thead>\n' +
    '                <tr class="tr_heard">\n' +
    '                    <th></th>\n' +
    '                    <th>姓名</th>\n' +
    '                    <th>性别</th>\n' +
    '                    <th>行业</th>\n' +
    '                    <th>入驻时间</th>\n' +
    '                    <th>操作</th>\n' +
    '                </tr>\n' +
    '            </thead>\n' +
    '            <tbody id="sjData">\n' +
    '                <!-- tabel表格 -->\n' +
    '            </tbody>\n' +
    '        </table>\n' +
    '    </div>\n' +
    '    <!-- 网红人员更多资料-模态框 Modal -->\n' +
    '    <div class="modal fade" id="myModalmore" tabindex="-1" role="dialog"\n' +
    '        aria-labelledby="myModalLabel" style="z-index: 10">\n' +
    '        <div class="modal-dialog" role="document">\n' +
    '            <div class="modal-content">\n' +
    '                <div class="modal-header">\n' +
    '                    <button type="button" class="close" data-dismiss="modal"\n' +
    '                        aria-label="Close"><span aria-hidden="true">&times;</span></button>\n' +
    '                    <h4 class="modal-title" id="myModalLabel"> 更多资料</h4>\n' +
    '                </div>\n' +
    '                <div class="modal-body">\n' +
    '                    <div class="layui-row" id="row">\n' +
    '                        <!-- 内容 -->\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <!-- 二级模态框 整个模态框要跟第一个模态框同级 Modal -->\n' +
    '    <div class="modal fade model" id="myModal1" tabindex="1" role="dialog"\n' +
    '        aria-labelledby="myModalLabel" style="z-index: 100">\n' +
    '        <div class="modal-dialog" role="document">\n' +
    '            <div class="modal-content">\n' +
    '                <div class="modal-header">\n' +
    '                    <button type="button" class="close" data-dismiss="modal"\n' +
    '                        aria-hidden="true">×</button>\n' +
    '\n' +
    '                    <h4 class="modal-title" id="myModalLabel">查看大图</h4>\n' +
    '                </div>\n' +
    '                <div class="modal-body">\n' +
    '                    <div class="more_cardID">\n' +
    '                        <P class="cardText">查看大图:</P>\n' +
    '                        <img src="images/hehua.jpg" alt="">\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="modal-footer">\n' +
    '                    <button type="button" class="btn btn-default" data-dismiss="modal">确定</button>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <!-- 模态框-完 -->\n' +
    '    <!-- 分页 -->\n' +
    '    <div id="demo2-1"></div>\n' +
    '</div>';
// <!-- 订单管理 -->
window.templates['dingdan.html'] = '<!-- 订单管理 -->\n' +
    '<link rel="stylesheet" href="css/dingdan.css">\n' +
    '<script src="js/dingdan.js"></script>\n' +
    '<div class="dd_solid"></div>\n' +
    '<div class="dd_content">\n' +
    '    <div class="dd_top">\n' +
    '        <p class="dd_text">搜索订单</p>\n' +
    '        <div class="input-group" id="input_group">\n' +
    '            <input type="text" class="form-control" placeholder="请输入" aria-describedby="basic-addon2" id="dd_ipt"\n' +
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
    '            <div class="row" style="margin: 0" id="needData">\n' +
    '                <!-- 待审核内容 -->\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <!-- 派单中 -->\n' +
    '        <div role="tabpanel" class="tab-pane" id="profile">\n' +
    '            <div class="row" style="margin: 0" id="paiData">\n' +
    '                <!-- 抢单人员 modal -->\n' +
    '                <div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog"\n' +
    '                    aria-labelledby="myLargeModalLabel">\n' +
    '                    <div class="modal-dialog modal-lg" role="document">\n' +
    '                        <div class="modal-content" id="modal-content">\n' +
    '                            <div class="modal-header">\n' +
    '                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span\n' +
    '                                        aria-hidden="true">&times;</span></button>\n' +
    '                                <h4 class="modal-title" id="myModalLabel">抢单人员</h4>\n' +
    '                            </div>\n' +
    '                            <table class="dd_table wh_table">\n' +
    '                                <tbody id="robData">\n' +
    '                                    <!-- 抢单人员 -->\n' +
    '                                </tbody>\n' +
    '                            </table>\n' +
    '                            <!-- <div id="demo2-1"></div> -->\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <!-- 进行中 -->\n' +
    '        <div role="tabpanel" class="tab-pane" id="messages">\n' +
    '            <div class="row" style="margin: 0" id="unway">\n' +
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
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <!-- 已完成 -->\n' +
    '        <div role="tabpanel" class="tab-pane" id="settings">\n' +
    '            <div class="row" style="margin: 0" id="finish">\n' +
    '                <!--已完成-->\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>';
// <!-- 纯佣订单 -->
window.templates['Pure.html'] = '<!-- 纯佣订单 -->\n' +
    '<link rel="stylesheet" href="css/dingdan.css">\n' +
    '<script src="js/cun.js"></script>\n' +
    '<div class="dd_solid"></div>\n' +
    '<div class="dd_content">\n' +
    '    <div class="dd_top">\n' +
    '        <p class="dd_text">搜索订单</p>\n' +
    '        <div class="input-group" id="input_group">\n' +
    '            <input type="text" class="form-control" placeholder="请输入" aria-describedby="basic-addon2" id="cun_ipt"\n' +
    '                style="height: 49px">\n' +
    '            <span class="input-group-addon" id="basic-addon2">搜索</span>\n' +
    '        </div>\n' +
    '        <!-- Nav tabs -->\n' +
    '        <ul class="nav nav-tabs" role="tablist" id="dd_ul">\n' +
    '            <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab"\n' +
    '                    data-toggle="tab">待审核</a></li>\n' +
    '            <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">派单中</a></li>\n' +
    '            <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">已完成</a>\n' +
    '            </li>\n' +
    '        </ul>\n' +
    '\n' +
    '    </div>\n' +
    '    <!-- Tab panes -->\n' +
    '    <div class="tab-content">\n' +
    '        <!-- 待审核 -->\n' +
    '        <div role="tabpanel" class="tab-pane active" id="home">\n' +
    '            <div class="row" style="margin: 0" id="homeData">\n' +
    '                <div class="col-md-4" id="tab-content">\n' +
    '                    <div class="dd_tab_detail" data-toggle="modal" data-target="#sjmyModal">\n' +
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
    '                    <!--订单更多资料-模态框-->\n' +
    '\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <!-- 派单中 -->\n' +
    '        <div role="tabpanel" class="tab-pane" id="profile">\n' +
    '            <div class="row" style="margin: 0" id="profileData">\n' +
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
    '                        <span style="border-right: 1px solid #dedede">删除</span>\n' +
    '                        <span>结束</span>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <!-- 已完成 -->\n' +
    '        <div role="tabpanel" class="tab-pane" id="settings">\n' +
    '            <div class="row" style="margin: 0" id="settingsData">\n' +
    '                <!-- 已完成 -->\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
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
// <!-- 服务类型 -->
window.templates['serveType.html'] = '<!-- 服务类型 -->\n' +
    '<link rel="stylesheet" href="css/serve.css">\n' +
    '<script src="js/serveType.js"></script>\n' +
    '<div class="serve_solid"></div>\n' +
    '<div class="serve_content">\n' +
    '    <div class="serve_top">\n' +
    '        <p class="serve_text">添加模板</p>\n' +
    '        <form class="form-inline">\n' +
    '            <div class="form-group col-sm-6">\n' +
    '                <label for="exampleInputName2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 标题：</label>\n' +
    '                <input type="text" class="form-control" id="type_title" placeholder="请输入" style="width: 50%">\n' +
    '            </div>\n' +
    '            <div class="form-group col-sm-6">\n' +
    '                <label for="exampleInputEmail2">详情描述：</label>\n' +
    '                <input type="text" class="form-control" id="type_infos" placeholder="请输入" style="width: 50%">\n' +
    '            </div>\n' +
    '            <div class="form-group col-sm-12" id="serve_modal_center">\n' +
    '                <div class="">\n' +
    '                    <button type="button" class="btn btn-default" onclick="type_btn()"\n' +
    '                        style="background: #1890FF;color: white;">保存</button>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '        </form>\n' +
    '    </div>\n' +
    '    <div class="serve_foot">\n' +
    '        <div role="tabpanel" class="tab-pane" id="settings">\n' +
    '            <div class="row" style="margin:0;height:555px;overflow: auto;" id="serve_big">\n' +
    '                <!--  小块  -->\n' +
    '\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>';
//    服务内幕
window.templates['serve.html'] = '<!-- 服务内幕 -->\n' +
    '<link rel="stylesheet" href="css/serve.css">\n' +
    '<script src="js/serve.js"></script>\n' +
    '<div class="serve_solid"></div>\n' +
    '<div class="serve_content">\n' +
    '    <div class="serve_top">\n' +
    '        <p class="serve_text">添加模板</p>\n' +
    '        <form class="form-inline">\n' +
    '            <div class="form-group col-sm-6">\n' +
    '                <label for="exampleInputName2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 标题：</label>\n' +
    '                <input type="text" class="form-control" id="title" placeholder="请输入" style="width: 50%">\n' +
    '            </div>\n' +
    '            <div class="form-group col-sm-6">\n' +
    '                <label for="exampleInputEmail2">详情描述：</label>\n' +
    '                <input type="text" class="form-control" id="infos" placeholder="请输入" style="width: 50%">\n' +
    '            </div>\n' +
    '            <div class="form-group col-sm-6">\n' +
    '                <label for="exampleInputName2">最高单价：</label>\n' +
    '                <input type="number" class="form-control" id="heightPrice" placeholder="请输入" style="width: 50%">\n' +
    '            </div>\n' +
    '            <div class="form-group col-sm-6">\n' +
    '                <label for="exampleInputEmail2">最低单价：</label>\n' +
    '                <input type="number" class="form-control" id="footPrice" placeholder="请输入" style="width: 50%">\n' +
    '            </div>\n' +
    '            <div class="form-group col-sm-12" id="serve_modal_center">\n' +
    '                <div class="">\n' +
    '                    <button type="button" class="btn btn-default" onclick="must()" id="serve"\n' +
    '                        style="background: #1890FF;color: white;">保存</button>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </form>\n' +
    '    </div>\n' +
    '    <div class="serve_foot">\n' +
    '        <div role="tabpanel" class="tab-pane" id="settings">\n' +
    '            <div class="row" style="margin:0;height:555px;overflow: auto;" id="serve_big">\n' +
    '\n' +
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
    '\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>';
//销售管理
window.templates['market.html'] = "<!-- 销售管理 -->\n" +
    "<link rel=\"stylesheet\" href=\"css/market.css\">\n" +
    "<link rel=\"stylesheet\" href=\"css/index.css\">\n" +
    "<script src=\"js/market.js\"></script>\n" +
    "<div class=\"serve_solid\"></div>\n" +
    "<div class=\"serve_content\">\n" +
    "    <div class=\"market_top\">\n" +
    "        <p class=\"serve_text\">添加人员</p>\n" +
    "        <form class=\"form-inline\">\n" +
    "            <div class=\"form-group col-sm-12\">\n" +
    "                <label for=\"exampleInputName2\">姓名：</label>\n" +
    "                <input type=\"text\" class=\"form-control\" id=\"market_name\" placeholder=\"请输入\" style=\"width: 25%\">\n" +
    "            </div>\n" +
    "            <div class=\"form-group col-sm-12\" id=\"serve_modal_center\">\n" +
    "                <div class=\"\">\n" +
    "                    <button type=\"button\" class=\"btn btn-default\" onclick=\"market_btn()\"\n" +
    "                        style=\"background: #1890FF;color: white;letter-spacing: 4px;\">确认添加</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "    <div class=\"market_foot\">\n" +
    "        <div class=\"market_foot_table\">\n" +
    "            <table class=\"market_table\">\n" +
    "                <thead>\n" +
    "                    <tr class=\"market_tr_heard\">\n" +
    "                        <th></th>\n" +
    "                        <th>姓名</th>\n" +
    "                        <th>性别</th>\n" +
    "                        <th>邀请数量</th>\n" +
    "                        <th>邀请码</th>\n" +
    "                        <th>二维码生成</th>\n" +
    "                        <th>操作</th>\n" +
    "                    </tr>\n" +
    "                </thead>\n" +
    "                <tbody id=\"red_ti\">\n" +
    "                    <!-- 销售人员 -->\n" +
    "                </tbody>\n" +
    "            </table>\n" +
    "        </div>\n" +
    "        <!-- 分页 -->\n" +
    "        <div id=\"demo2-1\"></div>\n" +
    "        <!-- 邀请人员-模态框 -->\n" +
    "        <div class=\"modal fade\" id=\"myModalmore\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n" +
    "            style=\"z-index: 10\">\n" +
    "            <div class=\"modal-dialog\" role=\"document\">\n" +
    "                <div class=\"modal-content\" id=\"market_modal_content\">\n" +
    "                    <div class=\"modal-header\">\n" +
    "                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span\n" +
    "                                aria-hidden=\"true\">&times;</span></button>\n" +
    "                        <h4 class=\"modal-title\" id=\"myModalLabel\">邀请人员</h4>\n" +
    "                    </div>\n" +
    "                    <div class=\"modal-body\">\n" +
    "                        <div class=\"market_modal-body\" id=\"bobo\">\n" +
    "                            <table class=\"market_table\">\n" +
    "                                <tbody id=\"market_red\">\n" +
    "                                    <!-- 邀请人员 -->\n" +
    "                                </tbody>\n" +
    "                            </table>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <!-- 分页 -->\n" +
    "                        <!-- <div id=\"demo2-1\"></div> -->\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <!-- 完 -->\n" +
    "    </div>\n" +
    "</div>";
// <!-- 网红提现 -->
window.templates['red.html'] = '<!-- 网红提现 -->\n' +
    '<link rel="stylesheet" href="css/serve.css">\n' +
    '<script src="js/red.js"></script>\n' +
    '<div class="serve_solid"></div>\n' +
    '<div class="serve_content">\n' +
    '    <div class="serve_foot">\n' +
    '        <div role="tabpanel" class="tab-pane" id="settings">\n' +
    '            <div class="row" style="margin: 0" id="red_ti">\n' +
    '\n' +
    '                <!--  小块  -->\n' +
    '\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>';
//商家退款
window.templates['refund.html'] = '<!-- 商家退款 -->\n' +
    '<link rel="stylesheet" href="css/refund.css">\n' +
    '<script src="js/refund.js"></script>\n' +
    '<div class="refund_content">\n' +
    '    <div role="tabpanel" class="tab-pane active" id="home">\n' +
    '        <div class="row" style="margin: 0" id="refund">\n' +
    '            <!--商家退款   -->\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>';
//标签管理
window.templates['labels.html'] = "<!-- 标签管理 -->\n" +
    "<link rel=\"stylesheet\" href=\"css/labels.css\">\n" +
    "<script src=\"jquery.min.js\"></script>\n" +
    "<script src=\"js/labels.js\"></script>\n" +
    "<div class=\"labels_solid\"></div>\n" +
    "<div class=\"labels_content\">\n" +
    "    <div class=\"labels_top\">\n" +
    "        <p class=\"labels_text\">标签生成</p>\n" +
    "        <form class=\"form-horizontal\">\n" +
    "            <div class=\"form-group\" id=\"ds_modal_center\">\n" +
    "                <label for=\"inputEmail3\" class=\"col-sm-2 control-label\">新建标签：</label>\n" +
    "                <div class=\"col-sm-10\">\n" +
    "                    <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"请输入\" style=\"width: 50%\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" id=\"ds_modal_center\">\n" +
    "                <div class=\"col-sm-offset-2 col-sm-10\">\n" +
    "                    <button type=\"button\" class=\"btn btn-default\" style=\"background: #1890FF;color: white;\"\n" +
    "                        id=\"labels_btn\">生成</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "        <!-- Nav tabs -->\n" +
    "        <ul class=\"nav nav-tabs\" role=\"tablist\" id=\"labels_ul\">\n" +
    "            <li role=\"presentation\" class=\"active\"><a href=\"#home\" aria-controls=\"home\" role=\"tab\"\n" +
    "                    data-toggle=\"tab\">网红标签</a></li>\n" +
    "            <li role=\"presentation\"><a href=\"#profile\" aria-controls=\"profile\" role=\"tab\" data-toggle=\"tab\">网红平台</a>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div class=\"tab-content\">\n" +
    "        <!-- 网红标签 -->\n" +
    "        <div role=\"tabpanel\" class=\"tab-pane active\" id=\"home\">\n" +
    "            <div class=\"row\" style=\"margin: 0\" id=\"labels_row\">\n" +
    "        <!-- 网红标签 -->\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <!-- 网红平台 -->\n" +
    "        <div role=\"tabpanel\" class=\"tab-pane\" id=\"profile\">\n" +
    "            <div class=\"row\" style=\"margin: 0\" id='labels_red'>\n" +
    "        <!-- 网红平台 -->\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" ;
    // "<script>\n" +
    // "    // 标签上传图片\n" +
    // "    ipt.onchange = function () {\n" +
    // "        // console.log(this.files[0])\n" +
    // "        var F = new FileReader();\n" +
    // "        F.readAsDataURL(this.files[0]);\n" +
    // "        F.onload = function () {\n" +
    // "            labes_img.src = F.result;\n" +
    // "            labes_img.style.display = \"block\";\n" +
    // "        }\n" +
    // "    }\n" +
    // "</script>";

//公告管理
window.templates['announcement.html'] = "<!-- 公告管理 -->\n" +
    "<link rel=\"stylesheet\" href=\"css/labels.css\">\n" +
    "<script src=\"jquery.min.js\"></script>\n" +
    "<script src=\"js/announcement.js\"></script>\n" +
    "<div class=\"labels_solid\"></div>\n" +
    "<div class=\"labels_content\">\n" +
    "    <div class=\"labels_top\">\n" +
    "        <p class=\"labels_text\">新建公告</p>\n" +
    "        <form class=\"form-horizontal\">\n" +
    "            <div class=\"form-group\" id=\"ds_modal_center\">\n" +
    "                <label for=\"inputEmail3\" class=\"col-sm-2 control-label\">新建公告：</label>\n" +
    "                <div class=\"col-sm-10\">\n" +
    "                    <input type=\"text\" class=\"form-control\" id=\"ann_value\" placeholder=\"请输入\" style=\"width: 50%\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" id=\"ds_modal_center\">\n" +
    "                <div class=\"col-sm-offset-2 col-sm-10\">\n" +
    "                    <button type=\"button\" class=\"btn btn-default\" id=\"ann_btn\"\n" +
    "                        style=\"background: #1890FF;color: white;\">生成</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"tab-content\">\n" +
    "        <!-- 公告标签 -->\n" +
    "        <div role=\"tabpanel\" class=\"tab-pane active\" id=\"home\">\n" +
    "            <div class=\"row\" style=\"margin: 0\">\n" +
    "\n" +
    "                <div id=\"ann_content\">\n" +
    "                    <!-- <div class=\"col-md-4\" id=\"labels_contents\">\n" +
    "                            <p class=\"col_md_4\">公告1</p>\n" +
    "                            <div class=\"col_md_4_text\">\n" +
    "                                生活技巧生活技巧生活技巧生活巧生活技巧\n" +
    "                            </div>\n" +
    "                            <button class=\"labels_col_del\">删除公告</button>\n" +
    "                        </div> -->\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "</div>";
// 商家内幕-内幕管理
// window.templates['sjStory.html'] = "";
//商家内幕-层级管理
window.templates['sjindex.html'] = "<!-- 商家内幕-层级管理 -->\n" +
    "<link rel=\"stylesheet\" href=\"css/labels.css\">\n" +
    "<link rel=\"stylesheet\" href=\"css/sjStory.css\">\n" +
    "<script src=\"js/sjindex.js\"></script>\n" +
    "<div class=\"labels_solid\"></div>\n" +
    "<div class=\"labels_content\">\n" +
    "    <div class=\"labels_top\" style=\"height: 320px;\">\n" +
    "        <p class=\"labels_text\">层级管理</p>\n" +
    "        <!-- <form class=\"form-inline sjStory_form\">\n" +
    "                                <div class=\"form-group\" id=\"form-group\">\n" +
    "                                    <label for=\"exampleInputName2\">第一层级：</label>\n" +
    "                                    <input type=\"text\" class=\"form-control\" id=\"one_val\" placeholder=\"请输入\" style=\"width: 50%\">\n" +
    "                                </div>\n" +
    "                                <div class=\"form-group\" id=\"form-group\">\n" +
    "                                    <label for=\"name\">第二层级：</label>\n" +
    "                                    <input type=\"text\" class=\"form-control\" id=\"two_val\" placeholder=\"请输入\" style=\"width: 50%\">\n" +
    "                                </div>\n" +
    "                                <div class=\"form-group\" id=\"form-group\">\n" +
    "                                    <label for=\"exampleInputName2\">第三层级：</label>\n" +
    "                                    <input type=\"text\" class=\"form-control\" id=\"three_val\" placeholder=\"请输入\" style=\"width: 50%\">\n" +
    "                                </div>\n" +
    "                                <div class=\"form-group\" id=\"form-group\">\n" +
    "                                    <label for=\"name\">标&nbsp;&nbsp;&nbsp; 签：</label>\n" +
    "                                    <input type=\"text\" class=\"form-control\" id=\"all_val\" placeholder=\"请输入\" style=\"width: 50%\">\n" +
    "                                </div>\n" +
    "                                <button type=\"button\" class=\"btn btn-default\"  id=\"all_click\" style=\"color: white;background: #1890FF;margin-left: 36%\">添加</button>\n" +
    "                            </form> -->\n" +
    "        <form class=\"form-horizontal\">\n" +
    "            <div class=\"form-group\" id=\"ds_modal_center\">\n" +
    "                <label for=\"inputEmail3\" class=\"col-sm-2 control-label\">新建标签：</label>\n" +
    "                <div class=\"col-sm-10\">\n" +
    "                    <input type=\"text\" class=\"form-control\" id=\"all_value\" placeholder=\"请输入\" style=\"width: 50%\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" id=\"ds_modal_center\">\n" +
    "                <div class=\"col-sm-offset-2 col-sm-10\">\n" +
    "                    <button type=\"button\" class=\"btn btn-default\" id=\"all_click\"\n" +
    "                        style=\"background: #1890FF;color: white;\">生成</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "        <!-- Nav tabs -->\n" +
    "        <ul class=\"nav nav-tabs\" role=\"tablist\" id=\"all_ul\" style=\"margin-top: 44px;\">\n" +
    "            <li role=\"presentation\" class=\"active\" id=\"active\"><a href=\"#one\" aria-controls=\"home\" role=\"tab\"\n" +
    "                    data-toggle=\"tab\">第一层级</a></li>\n" +
    "            <li role=\"presentation\"><a href=\"#two\" aria-controls=\"profile\" role=\"tab\" data-toggle=\"tab\">第二层级</a>\n" +
    "            </li>\n" +
    "            <li role=\"presentation\"><a href=\"#three\" aria-controls=\"profile\" role=\"tab\" data-toggle=\"tab\">第三层级</a>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div class=\"tab-content\">\n" +
    "        <!-- 第一层级 -->\n" +
    "        <div role=\"tabpanel\" class=\"tab-pane active\" id=\"one\">\n" +
    "            <div class=\"row\" style=\"margin: 0\" id=\"one_list\">\n" +
    "                <!-- <div class=\"col-md-2\" id=\"labels_content\">\n" +
    "                                        <div class=\"labels_col_text\">\n" +
    "                                            生活技巧\n" +
    "                                        </div>\n" +
    "                                        <button class=\"labels_col_del\">删除标签</button>\n" +
    "                                    </div> -->\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <!-- 第二层级 -->\n" +
    "        <div role=\"tabpanel\" class=\"tab-pane\" id=\"two\">\n" +
    "            <div class=\"row\" style=\"margin: 0\" id=\"two_list\">\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <!-- 第三层级 -->\n" +
    "        <div role=\"tabpanel\" class=\"tab-pane\" id=\"three\">\n" +
    "            <div class=\"row\" style=\"margin: 0\" id=\"three_list\">\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>";
// <!-- 商品类型 -->
window.templates['product.html'] = '<!-- 商品类型 -->\n' +
    '<link rel="stylesheet" href="css/labels.css">\n' +
    '<script src="jquery.min.js"></script>\n' +
    '<script src="js/product.js"></script>\n' +
    '<div class="labels_solid"></div>\n' +
    '<div class="labels_content">\n' +
    '    <div class="labels_top">\n' +
    '        <p class="labels_text">类型生成</p>\n' +
    '        <form class="form-horizontal">\n' +
    '            <div class="form-group" id="ds_modal_center">\n' +
    '                <label for="inputEmail3" class="col-sm-2 control-label">新建标签：</label>\n' +
    '                <div class="col-sm-10">\n' +
    '                    <input type="text" class="form-control" placeholder="请输入" id="pro_Value" style="width: 50%">\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="form-group" id="ds_modal_center">\n' +
    '                <div class="col-sm-offset-2 col-sm-10">\n' +
    '                    <button type="button" class="btn btn-default" id="pro_btn"\n' +
    '                        style="background: #1890FF;color: white;">生成</button>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </form>\n' +
    '        <!-- Nav tabs -->\n' +
    '        <ul class="nav" role="tablist" id="labels_ul">\n' +
    '            <li role="presentation" class="active">\n' +
    '                <a href="#home" style="color: #1890FF">商品类型</a>\n' +
    '            </li>\n' +
    '        </ul>\n' +
    '    </div>\n' +
    '    <div class="tab-content">\n' +
    '        <!-- 商品类型 -->\n' +
    '        <div role="tabpanel" class="tab-pane active" id="home">\n' +
    '            <div class="row" style="margin: 0">\n' +
    '                <div id="pro_content">\n' +
    '                    <!-- <div class="col-md-2" id="labels_content">\n' +
    '                                            <div class="labels_col_text">\n' +
    '                                                生活技巧\n' +
    '                                            </div>\n' +
    '                                            <button class="labels_col_del">删除标签</button>\n' +
    '                                        </div> -->\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '    </div>\n' +
    '</div>';
// 轮播图管理
window.templates['banner.html'] = "<!-- 轮播图管理 -->\n" +
    "<!-- 把css写在labels.css里面了 -->\n" +
    "<link rel=\"stylesheet\" href=\"css/labels.css\">\n" +
    "<script src=\"js/banner.js\"></script>\n" +
    "<div class=\"labels_solid\"></div>\n" +
    "<div class=\"labels_content\">\n" +
    "    <div class=\"banner_top\">\n" +
    "        <p class=\"labels_text\">轮播图管理</p>\n" +
    "        <form class=\"form-horizontal\">\n" +
    "            <div class=\"form-group\" id=\"ds_modal_center\">\n" +
    "                <label for=\"inputEmail3\" class=\"col-sm-3 control-label\">选择类型：</label>\n" +
    "                <div class=\"col-sm-9\">\n" +
    "                    <select class=\"form-control\" style=\"width: 68%\" id=\"banner_select\">\n" +
    "                        <option>请选择</option>\n" +
    "                        <option>轮播图</option>\n" +
    "                        <option>H5链接</option>\n" +
    "                        <option>富文本</option>\n" +
    "                    </select>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" id=\"ds_modal_center\">\n" +
    "                <label for=\"inputEmail3\" class=\"col-sm-3 control-label\">新建轮播图：</label>\n" +
    "                <div class=\"col-sm-9\" id=\"addimg_div\">\n" +
    "                    <span class=\"addimg\">+</span>\n" +
    "                    <input type=\"file\" class=\"form-control\" id=\"addimg_input\" placeholder=\"请输入\">\n" +
    "                    <img src=\"\" alt=\"\" id=\"banner_imgs\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" id=\"ds_modal_center\">\n" +
    "                <label for=\"inputh5\" class=\"col-sm-3 control-label\">H5链接：</label>\n" +
    "                <div class=\"col-sm-9\">\n" +
    "                    <input type=\"text\" class=\"form-control\" id=\"inputh5\" placeholder=\"请输入\" style=\"width: 68%\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" id=\"ds_modal_center\">\n" +
    "                <div class=\"col-sm-offset-2 col-sm-10\">\n" +
    "                    <button type=\"button\" class=\"btn btn-default\" onclick=\"banner_success()\"\n" +
    "                        style=\"background: #1890FF;color: white;\">生成</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"banner_foot\">\n" +
    "        <div role=\"tabpanel\" class=\"tab-pane\">\n" +
    "            <div class=\"row\" style=\"margin: 0\" id=\"banner_list\">\n" +
    "                <!-- 小块 -->\n" +
    "                <div class=\"col-md-4\" id=\"banner_content\">\n" +
    "                    <div class=\"banner_number\">0</div>\n" +
    "                    <div class=\"banner_block_detail\">\n" +
    "                        <img src=\"images/hehua.jpg\" alt=\"\">\n" +
    "                    </div>\n" +
    "                    <div class=\"banner_block_foot\">\n" +
    "                        <span id=\"banner_del\">删除</span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<script>\n" +
    "    addimg_input.onchange = function () {\n" +
    "        // console.log(this.files[0])\n" +
    "        var F = new FileReader();\n" +
    "        F.readAsDataURL(this.files[0]);\n" +
    "        F.onload = function () {\n" +
    "            banner_imgs.src = F.result;\n" +
    "            banner_imgs.style.display = \"block\"\n" +
    "        }\n" +
    "    }\n" +
    "</script>";
// window.templates[index.html]=
