layui.define(
  ["config", "admin", "layer", "laytpl", "element", "form"],
  function(exports) {
    var $ = layui.$;
    var config = layui.config;
    var admin = layui.admin;
    var layer = layui.layer;
    var laytpl = layui.laytpl;
    var element = layui.element;
    var form = layui.form;
    var index = {
      // 首页初始化
      init: function(successFuntion) {
        layer.load(2);
        // data是我们后台请求成功时返回的json
        var user = config.getUser();
        successFuntion(user);
        // 执行完关闭loading层
        layer.closeAll("loading");
      },
      // 渲染左侧导航栏
      initLeftNav: function() {
        // 渲染-->1.先加载左侧菜单栏，2.然后加载菜单数据，3.渲染，4.渲染完成之后把生成的html代码加载到nav中
        $(".layui-layout-admin .layui-side").load(
          "components/side.html",
          function() {
            // 加载菜单数据
            var loginInfo = config.getLoginInfo();
            // 渲染
            laytpl(sideNav.innerHTML).render(loginInfo.menu_list, function(
              html
            ) {
              // 渲染完成结束后对新生成的网页的动作，下面是加载方法
              $("#sideNav").after(html);
            });
            // 重新对导航进行渲染
            element.render("nav");
            // 设置当前选中左侧菜单项，Q.lash = console
            admin.activeNav(Q.lash);
          }
        );
      },
      // 路由注册
      initRouter: function() {
        var loginInfo = config.getLoginInfo();
        index.regRouter(loginInfo.menu_list);
        Q.init({
          index: "console"
        });
      },
      // 使用递归循环注册
      regRouter: function(menus) {
        $.each(menus, function(i, data) {
          if (data.url && data.url.indexOf("#!") == 0) {
            Q.reg(data.url.substring(2), function() {
              var menuId = data.url.substring(2);
              var menuPath = "components/" + data.path;
              index.loadView(menuId, menuPath, data.name);
            });
          }
          if (data.subMenus) {
            index.regRouter(data.subMenus);
          }
        });
      },
      // 路由加载组件
      loadView: function(menuId, menuPath, menuName) {
        var contentDom = ".layui-layout-admin .layui-body";
        admin.showLoading(".layui-layout-admin .layui-body");
        var flag; // 选项卡是否添加
        // 判断是否开启了选项卡功能
        if (config.pageTabs) {
          $(
            ".layui-layout-admin .layui-body .layui-tab .layui-tab-title>li"
          ).each(function(index) {
            if ($(this).attr("lay-id") === menuId) {
              flag = true;
            }
          });
          if (!flag) {
            element.tabAdd("admin-pagetabs", {
              title: menuName,
              content: '<div id="' + menuId + '"></div>',
              id: menuId
            });
          }
          contentDom = "#" + menuId;
          element.tabChange("admin-pagetabs", menuId);
          admin.rollPage("auto");
          // 切换tab关闭表格内浮窗
          $(".layui-table-tips-c").trigger("click");
          // 解决切换tab滚动条时而消失的问题
          var $iframe = $(
            ".layui-layout-admin .layui-body .layui-tab-content .layui-tab-item.layui-show .admin-iframe"
          )[0];
          if ($iframe) {
            $iframe.style.height = "99%";
            $iframe.scrollWidth;
            $iframe.style.height = "100%";
          }
        }
        if (!flag || admin.isRefresh) {
          $(contentDom).load(menuPath, function() {
            admin.isRefresh = false;
            element.render("breadcrumb");
            form.render("select");
            admin.removeLoading(".layui-layout-admin .layui-body");
          });
        } else {
          admin.removeLoading(".layui-layout-admin .layui-body");
        }
        admin.activeNav(Q.lash);
        // 移动设备切换页面隐藏侧导航
        if (document.body.clientWidth <= 750) {
          admin.flexible(true);
        }
      },
      // 页面元素绑定事件监听
      bindEvent: function() {
        // 退出登录
        $("#btnLogout").click(function() {
          layer.confirm("确定退出登录？", function() {
            // 清除本地登录信息
            config.removeLoginInfo();
            location.replace("login.html");
            return;
          });
        });
        // 修改密码
        $("#setPsw").click(function() {
          admin.popupRight("components/tpl/password.html");
        });
        // 个人信息
        $("#setInfo").click(function() {});
        // 消息
        $("#btnMessage").click(function() {
          admin.popupRight("components/tpl/message.html");
        });
      },
      // 检查多标签功能是否开启
      checkPageTabs: function() {
        // 加载主页
        if (config.pageTabs) {
          $(".layui-layout-admin").addClass("open-tab");
          element.tabAdd("admin-pagetabs", {
            title: '<i class="layui-icon layui-icon-home"></i>',
            content: '<div id="console"></div>',
            id: "console"
          });
          $("#console").load("components/console.html", function() {});
        } else {
          $(".layui-layout-admin").removeClass("open-tab");
        }
      },
      // 打开新页面
      openNewTab: function(param) {
        var url = param.url;
        var title = param.title;
        var menuId = param.menuId;
        if (!menuId) {
          menuId = url.replace(/[?:=&/]/g, "_");
        }

        Q.reg(menuId, function() {
          index.loadView(menuId, url, title);
        });

        Q.go(menuId);
      },
      // 关闭选项卡
      closeTab: function(menuId) {
        element.tabDelete("admin-pagetabs", menuId);
      }
    };

    // tab选项卡切换监听
    element.on("tab(admin-pagetabs)", function(data) {
      var layId = $(this).attr("lay-id");
      Q.go(layId);
    });

    exports("index", index);
  }
);
