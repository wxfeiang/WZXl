layui.define(['config', 'layer','form'], function (exports) {

    // 定义全局变量
    var $ = layui.$;
    var config = layui.config;
    var layer = layui.layer;
    var form = layui.form;

    // 自定义方法
    var login = {

        // 登录初始化
        initLogin: function () {

            // 先从缓存中获取用户的登录信息
            var token = config.getToken();

            // 如果有token，直接返回首页
            if (token) {
                location.replace('./');
            }
        },
        
        // 执行登录
        doLogin: function(filterName){

            // 清空localstorage
            config.removeLoginInfo();

            // 监听表单提交
            form.on('submit('+ filterName +')', function (obj) {
                layer.load(2); // 转圈圈
                var field = obj.field;

                $.ajax({
                    url: config.base_server + '/login',
                    type: 'POST',
                    data: field,
                    dataType: 'JSON',
                    success: function(res){
                        if(res.success){
                            // 缓存登录信息
                            config.putLoginInfo(res.data);
                            location.replace('./');
                            // layer.msg('登录成功', {icon: 1}, function () {
                            //     location.replace('./');
                            // })
                        } else {
                            layer.closeAll('loading');
                            layer.msg(res.msg, {icon: 5});
                        }                       
                    },
                    error: function (xhr) {
                        layer.closeAll('loading'); // 关闭转圈圈
                        // if (xhr.status == 400) {
                        //     layer.msg('账号或密码错误', {icon: 5});
                        // }
                    }
                });
            });
            // todo other
        }

    };
    exports('login', login);
});