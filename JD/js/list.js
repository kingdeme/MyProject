/**
 * Created by Administrator on 2017/1/6.
 */
$(function () {
    var url = "http://localhost:63342/javascript/JD/json/index.json"  //json数据地址

//    快捷导航 左半部分 位置
    $(".sm-left").mouseenter(function () {
        $(this).addClass("hover");
    }).mouseleave(function () {
        $(this).removeClass("hover")
    })

    //地址数据加载
    $.ajax({
        url: url,
        success: function (location) {
            var obj = eval(location)
            for (var i = 0; i < obj.location.length; i++) {
                $(".dorpdown-content").append('<div class="item"><a href="javascript:void(0)">' + obj.location[i].site + '</a></div>')
            }
            $(".dorpdown-content .item:first a").addClass("selected");
            $(".dorpdown-content .item").click(function () {
                var index = $(this).index(); //获取当前下标
                var txt = $(".dorpdown-content .item a").eq(index).html(); //获取a内容
                $(".dorpdown-content .item").eq(index).children("a").addClass("selected"); //a 添加class名
                $(".dorpdown-content .item").eq(index).siblings().children("a").removeClass("selected"); //a 删除class名
                $(".location-text").html(txt);
            })
        },
        error: function (messages) {
            alert(messages);
        }
    });

    //我的京东
    $(".dorpdown-li").mouseenter(function () {
        $(this).addClass("hover");
    });
    $(".dorpdown-li").mouseleave(function () {
        $(this).removeClass("hover");
    });
    $(".mobile").mouseover(function () {
        $(".mobile").addClass("hover");
    }).mouseout(function () {
        $(".mobile").removeClass("hover");
    });


    //侧边栏
    $.ajax({
        url:url,
        success:function (sidebar) {
            var obj = eval(sidebar);
            addList(obj);
            addItem(obj);
            DOM();
        },
        error:function (messages) {
            alert(messages);
        }
    })
    //加载侧边栏数据
    function addList(obj) {
        for(var i=0;i<obj.sidebar.length; i++ ){
            var li = $('<li class="sidebar-list-item"></li>');
            $(".sidebar-list").append(li)
            for(var j=0;j<obj.sidebar[i].sidebarName.length; j++){
                li.append('<a class="sidebar-txt" href="javascript:void(0)">'+obj.sidebar[i].sidebarName[j]+'</a><span class="sidebar-line">、</span>');
            }
        }
        $(".sidebar-list-item .sidebar-line:last-child").remove();
    }
    //加载内容数据
    function addItem(obj) {
        for(var i=0; i<obj.sidebar.length; i++){
            var divitem = $('<div class="sidebar-content-item clearfix" style="display: none;"></div>');// 外壳
            var itemLeft = $('<div class="sidebar-content-item-left"></div>');// 内部 左半部分
            var itemLeftTop = $('<div class="item-main-top"></div>');  // 左半部分 顶部
            var itemLeftBottom = $('<div class="item-main-bottom"></div>'); //左半部分 底部
            var itemRight = $('<div class="sidebar-content-item-right"></div>');// 内部右半部分
            var itemRightSimg = $('<div class="sidebar-content-simg"></div>');//右半部分小图片
            var itemRightBimg = $('<div class="sidebar-content-bimg"></div>');//右半部分大图片
            var itemLeftAll = itemLeft.append(itemLeftTop).append(itemLeftBottom); //左半部分所有
            var itemRightAll = itemRight.append(itemRightSimg).append(itemRightBimg); // 右半部分所有
            var divitemAll = divitem.append(itemLeftAll).append(itemRightAll);
            $(".sidebar-content").append(divitemAll);
            //便利 左半部分顶部的 数据
            for(var k=0; k<obj.sidebar[i].topNav.length; k++){
                itemLeftTop.append('<a href="javascript:void (0)" class="item-main-lk">'+obj.sidebar[i].topNav[k]+'<i class="iconfont item-main-icon">&#xe601;</i></a>')
            }
            //便利左半部分底部的数据
            for(var a=0; a<obj.sidebar[i].smallNav.length; a++){
                var dl = $('<dl class="item-main-content"></dl>'); // 底部的dl
                var dt = $('<dt class="content-title"></dt>'); //dl里的dt
                var dd = $('<dd class="content-con"></dd>');//dl里的dd
                var dlAll = dl.append(dt).append(dd);
                itemLeftBottom.append(dlAll);
                for(var b=0; b<obj.sidebar[i].smallNav[a].smallNavName.length; b++){
                    dt.append(' <a href="javascript:void (0)">'+obj.sidebar[i].smallNav[a].smallNavName[b]+'<i class="iconfont item-main-icon">&#xe601;</i></a>')
                }
                for(var c=0; c<obj.sidebar[i].smallNav[a].smallNavValue.length; c++){
                    dd.append('<a href="javascript:void (0)" class="content-con-lk">'+obj.sidebar[i].smallNav[a].smallNavValue[c]+'</a>');
                }
            }

            //便利右半部的数据
            var path = "http://localhost:63342/javascript/JD/img/index/cbl/"
            for(var d=0; d<obj.sidebar[i].sidebarSmallImg.length; d++){
                itemRightSimg.append(' <a href="javascript:void (0)" class="simg-lk"><img src="'+path+obj.sidebar[i].sidebarSmallImg[d]+'" alt=""></a>');
            }
            for(var e=0; e<obj.sidebar[i].sidebarBigImg.length; e++){
                itemRightBimg.append(' <a href="javascript:void (0)" class="bimg-lk"><img src="'+path+obj.sidebar[i].sidebarBigImg[e]+'" alt=""></a>')
            }
        }
    }
    //侧边栏的DOM操作
    function DOM() {

        $(".sidbar-wrap").mouseenter(function () {
            $(".bc-left").css("display","block");
        })

        $(".sidebar-list-item").mouseenter(function () {
            $(this).addClass("active").siblings().removeClass("active");
            $(".sidebar-content").css("display","block");
            var index = $(this).index();
            $(".sidebar-content-item").eq(index).css("display","block").siblings().css("display","none");
        })
        $(".sidbar-wrap").mouseleave(function () {
            $(".bc-left").css("display","none");
            $(".sidebar-list-item").removeClass("active");
            $(".sidebar-content").css("display","none");
            $(".sidebar-content-item").css("display","none");
        })
    }
})
