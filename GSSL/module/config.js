layui.define("layer", function(exports) {
  var $ = layui.$;
  var layer = layui.layer;

  var config = {
    base_server: "http://127.0.0.1:8088", // 接口地址，实际项目请换成http形式的地址
    tableName: "login_info", // 存储表名
    tokenName: "access_token", // token名称
    autoRender: false, // 窗口大小改变后是否自动重新渲染表格，解决layui数据表格非响应式的问题，目前实现的还不是很好，暂时关闭该功能
    pageTabs: true, // 是否开启多标签
    // 获取缓存的登录信息
    getLoginInfo: function() {
      var t = layui.data(config.tableName).loginInfo;
      if (t) {
        return JSON.parse(t);
      }
    },

    // 清除登录信息
    removeLoginInfo: function() {
      // layui.data(config.tableName, {
      //     key: 'token',
      //     remove: true
      // });
      layui.data(config.tableName, null);
    },

    // 缓存登录信息
    putLoginInfo: function(loginInfo) {
      // 转换成json字符串再存进去
      layui.data(config.tableName, {
        key: "loginInfo",
        value: JSON.stringify(loginInfo)
      });
    },

    // 当前登录的用户
    getUser: function() {
      // 获取当前登录信息，再获取登录用户
      var u = config.getLoginInfo();
      if (u) {
        return u.login_user;
      }
    },

    // 获取token
    getToken: function() {
      // 获取当前登录信息，再获取登录用户
      var u = config.getLoginInfo();
      if (u) {
        return u.access_token;
      }
    }
  };
  exports("config", config);
});
