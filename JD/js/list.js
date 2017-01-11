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

    //header
    //搜索框
    $("#search-box").focus(function () {
        $(this).css("color","#333");
        console.log($(this));
    });
    $("#search-box").blur(function () {
        $(this).css("color","#999");
    });

    //购物车
    $("#settleup").mouseenter(function () {
        $(this).addClass("hover");
    }).mouseleave(function () {
        $(this).removeClass("hover");
    });

    //banner背景
    $(".bg-banner").mouseenter(function () {
        $(this).addClass("bg-banner-active");
    }).mouseleave(function () {
        $(this).removeClass("bg-banner-active");
    })

    $(".bg-banner-act-close").click(function () {
        $(".bg-banner").removeClass("bg-banner-active");
    })


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

    //列表
    var url1 = "http://localhost:63342/javascript/JD/json/product.json"  //json数据地址
    $.ajax({
        url:url1,
        success:function (product) {
            var obj = eval(product);
            productbland(obj)
            productDom();
        }
    })
    function productbland(obj) {
        var path = "http://localhost:63342/javascript/JD/img/list/product/"
        for(var i=0; i<obj.product.length; i++){
            var li = $('<li class="plist-item-wrap"></li>');
            var div = $(' <div class="plist-item"></div>');
            var pimg = $(' <div class="p-img"><a href="detail.html?id='+obj.product[i].id+'" target="_blank" class="p-img-lk"><img src="'+path+obj.product[i].imgSrc+'" alt=""></a></div>');
            if(obj.product[i].picon == true){
                pimg.append('<div class="p-icon"></div>');
            };
            var pprice = $('<div class="p-price"><strong class="p-price-num"><em>￥</em><i>'+obj.product[i].price+'</i></strong></div>');
            var pname = $(' <div class="p-name"><a target="_blank"  href="detail.html?id='+obj.product[i].id+'"><em class="p-name-txt">'+obj.product[i].name+'</em><i class="promo-words">'+obj.product[i].words+'</i></a></div>');
            var commit = $('<div class="p-commit"><strong class="p-commit-comment">已有<a href="javascript:void (0)" class="comment">'+obj.product[i].comment+'</a>人评价</strong></div>');
            var icons = $('<div class="p-pro-icons"></div>');
            if(obj.product[i].icons == true){
                icons.append(' <img src="'+path+obj.product[i].iconsimg+'" class="p-pro-icons-img" alt=""><i class="p-pro-icons-tips"></i>')
            };
            var opearate = $(' <div class="p-opearate"><a href="javascript:void (0)" class="p-btn contrast"><i></i>对比</a><a href="javascript:void (0)" class="p-btn focus"><i></i>关注</a><a href="javascript:void (0)" class="p-btn addcart"><i></i>加入购物车</a></div>');

            div.append(pimg).append(pprice).append(pname).append(commit).append(icons).append(opearate);
            li.append(div);
            $(".plist-list").append(li);
        }
    }
    function productDom(){
        $(".plist-item-wrap").mouseenter(function () {
            $(this).addClass("active");
        }).mouseleave(function () {
            $(this).removeClass("active");
        })
    }

    //右边栏
    $(".jd-toolbar-tab").mouseenter(function () {
        $(this).addClass("jd-toolbar-tab-hover").siblings().removeClass("jd-toolbar-tab-hover");
    }).mouseleave(function () {
        $(this).removeClass("jd-toolbar-tab-hover");
    })

    //购物车
    var flag2 = true;
    $(".jd-toolbar-tab-cart").click(function () {
        $(".jd-toolbar-tab").children(".tab-text").css("display","block");
        var p = $(this).children(".tab-text");
        // flag3 = true;
        flag4 = true;
        if(flag2){
            flag2 = false;
            $(".jd-toolbar-cart").animate({left:0},500).css({zIndex:2});
            $(".jd-toolbar-panel").animate({left:350},500).css({zIndex:1});
            $(".jd-toolbar-wrap").addClass("jd-toolbar-wrap-on");
            p.css("display","none");
        }else{
            flag2 = true;
            $(this).removeClass("jd-toolbar-tab-hover");
            $(".jd-toolbar-wrap").removeClass("jd-toolbar-wrap-on");
            p.css("display","block");
        }
    })
    // //我的足迹
    // var flag3 = true;
    // $(".jd-toolbar-tab-history").click(function () {
    //     $(".jd-toolbar-tab").children(".tab-text").css("display","block");
    //     var p = $(this).children(".tab-text");
    //     flag2 = true;
    //     flag4 = true;
    //     if(flag3){
    //         flag3 = false;
    //         $(".jd-toolbar-wrap").addClass("jd-toolbar-wrap-on");
    //         p.css("display","none");
    //     }else{
    //         flag3 = true;
    //         $(this).removeClass("jd-toolbar-tab-hover");
    //         $(".jd-toolbar-wrap").removeClass("jd-toolbar-wrap-on");
    //         p.css("display","block");
    //     }
    // })
    //头部
    var flag4 = true;
    $(".jd-toolbar-header").click(function () {
        flag2 = true;
        // flag3 = true;
        $(".jd-toolbar-tab").children(".tab-text").css("display","block");
        if(flag4){
            flag4 = false;
            $(".jd-toolbar-wrap").addClass("jd-toolbar-wrap-on");
            $(".jd-toolbar-panel").css({zIndex:2}).animate({left:0},500);
            $(".jd-toolbar-cart").css({zIndex:1}).animate({left:350},500);
        }else{
            flag4 = true;
            $(".jd-toolbar-wrap").removeClass("jd-toolbar-wrap-on");
        }

    });


    $(".content-bag-left").mouseenter(function () {
        $(".content-bag-left-img2").stop().fadeOut();
    }).mouseleave(function () {
        $(".content-bag-left-img2").stop().fadeIn();
    })
    $(".jd-toolbar-panel-content-item").mouseenter(function () {
        $(this).find(".content-item-list").stop().slideDown(300);
        $(this).find(".content-item-mobilejd").stop().fadeIn(500);
    }).mouseleave(function () {
        $(this).find(".content-item-list").stop().slideUp(300);
        $(this).find(".content-item-mobilejd").stop().fadeOut(500);
    })
    $(".close-panel").click(function () {
        flag2 = true;
        // flag3 = true;
        flag4 = true;
        $(".jd-toolbar-tab").children(".tab-text").css("display","block");
        $(".jd-toolbar-wrap").removeClass("jd-toolbar-wrap-on");
    })

    //回到顶部
    $(".jd-toolbar-tab-top").click(function () {
        $("body").animate({scrollTop:0},0);
    })

    $(".tab-count").html(getTotal());

})
