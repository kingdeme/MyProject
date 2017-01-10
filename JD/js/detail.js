/**
 *
 * Created by Administrator on 2017/1/9.
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

    //商品信息
    //放大镜效果
    var url1 = "http://localhost:63342/javascript/JD/json/product.json";
    var spath = "http://localhost:63342/javascript/JD/img/detail/smallimg/"
    var bpath = "http://localhost:63342/javascript/JD/img/detail/bigimg/"
    var tpath = "http://localhost:63342/javascript/JD/img/detail/tabimg/"
    var webId = window.location.search.replace(/\?/," ").split("=");
    console.log(webId);
    var pro_id = webId[1]
    $.ajax({
        url:url1,
        success:function (product) {
            var obj = eval(product);
            for(var i=0; i < obj.product.length; i++){
                if(obj.product[i].id == pro_id){
                    var pid = obj.product[i];
                    fdj(pid);
                    fdjDom()
                    addproduct(pid);
                    productDom()
                }
            }
        }

    })
    function fdj(obj) {
        var simg = $('<img class="smallimg" src="'+spath+obj.sImg+'" alt=""><div class="jqzoompup"></div>');
        $(".jqzoom").append(simg);
        var bimg = $('<img src="'+bpath+obj.bImg+'" class="bigimg" alt="">');
        $(".zoomdiv").append(bimg);
        var liLength = obj.tImg.length;
        var ul = $('  <ul class="lh" style="width:'+liLength*62+'px;height: 54px;top: 0;left: 0;position: absolute;"></ul>');
        for(var k=0; k<obj.tImg.length; k++){
            var li = $(' <li class="lh-item" imgsrc="'+obj.tImg[k]+'"><img src="'+tpath+obj.tImg[k]+'" class="lh-img" alt=""></li>');
            ul.append(li);
        }
        $(".spec-item").append(ul);
    }
    function fdjDom() {

        $(".lh-item").mouseenter(function () {
            var src = $(this).attr("imgsrc")
            $(this).children(".lh-img").addClass("img-hover");
            $(this).siblings().children(".lh-img").removeClass("img-hover");
            $(".smallimg").attr("src",spath+src);
            $(".bigimg").attr("src",bpath+src);
        });

        $(".jqzoom").mouseenter(function () {
            $(".jqzoompup").css("display","block");
            $(".zoomdiv").css("display","block");
        })
        $(".jqzoom").mouseleave(function () {
            $(".jqzoompup").css("display","none");
            $(".zoomdiv").css("display","none");
        })

        $(".jqzoom").on("mousemove",function (e) {
            var pageX = e.pageX;
            var pageY = e.pageY;
            var jqzoomLeft = $(".jqzoom").offset().left;
            var jqzoomTop = $(".jqzoom").offset().top;
            var jqzoomWidth = $(".jqzoom").width();
            var jqzoomHeight = $(".jqzoom").height();
            var pupWidth = $(".jqzoompup").width()/2;
            var pupHeight = $(".jqzoompup").height()/2;
            var x = pageX-jqzoomLeft-pupWidth;
            var y = pageY-jqzoomTop-pupHeight;

            if(x<0){
                x=0;
            }
            console.log(jqzoomWidth)
            console.log(x)
            if(x > jqzoomWidth-$(".jqzoompup").width()){
                x = jqzoomWidth-$(".jqzoompup").width()
            }
            if(y<0){
                y=0
            }
            if(y>jqzoomHeight-$(".jqzoompup").height()){
                y = jqzoomHeight-$(".jqzoompup").height()
            }

            $(".jqzoompup").css({left:x,top:y});
            $(".bigimg").css({left:-x*3,top:-y*3})
        })

        var vWidth = $(".spec-item").width();
        var ulWidth = $(".lh").width();
        var liWidth = $(".lh-item").width();
        $(".tab-next").click(function () {
            $(".tab-prev").removeClass("disabled");
            var ulLeft = $(".lh").position().left;
            var x = ulLeft+(-1*liWidth);
            if(Math.abs(x) > ulWidth-vWidth){
                x = -(ulWidth-vWidth);
                $(this).addClass("disabled");
            }
            $(".lh").stop().animate({left:x},500);
        })

        $(".tab-prev").click(function () {
            $(".tab-next").removeClass("disabled");
            var ulLeft = $(".lh").position().left;
            var x = ulLeft+liWidth;
            if(x>0){
                x=0;
                $(this).addClass("disabled");
            }
            $(".lh").stop().animate({left:x},500);
        })
    }
    //京东秒杀
    //倒计时
    function addproduct(obj) {
        var path = "http://localhost:63342/javascript/JD/img/detail/attr/"
        $(".name").append('<h1 class="name-tit">'+obj.name+'</h1><div class="p-ad">'+obj.words+'</div>');

        $(".comment-count").append('<p class="comment">累计评价</p><a href="javascript:void (0)" class="count">'+obj.comment+'</a>')

        $(".summary-price").append(' <div class="p-main"><strong class="p-price">'+obj.newprice+'</strong><span class="pricing">[<del class="origin-price">'+obj.price+'</del>]</span><a href="javascript:void (0)" class="">(降价通知)</a></div>');

        for(var i=0; i<obj.attr.length; i++){
            $(".attr-main").append('<div class="attr-item"><a class="attr-item-lk" href="javascript:void (0)"><img src="'+path+obj.attr[i].attrImg+'" alt="" class="attr-item-img"><i class="attr-item-name">'+obj.attr[i].attrName+'</i></a></div>')
            $(".attr-item:first").addClass("active");
        }
    }
    function productDom() {
        setInterval(countDown,1000);
        function countDown(){
            var dd = new Date("2017/2/01 00:00:00")-new Date();
            var s = parseInt(dd/1000);
            var d = parseInt(s/3600/24);
            s -= d*24*3600;
            var h = parseInt(s/3600);
            s -= h*3600;
            var m = parseInt(s/60);
            s -= m*60;
            if(d<10){d = "0"+d};
            if(h<10){h = "0"+h};
            if(m<10){m = "0"+m};
            if(s<10){s = "0"+s};
            $(".sk-day").html(d)
            $(".sk-hour").html(h);
            $(".sk-minute").html(m);
            $(".sk-seconds").html(s);
        };
        //选择
        $(".attr-item").click(function () {
            $(this).addClass("active").siblings().removeClass("active")
        })
        var flag = true;
        $(".baitiao-item").mouseenter(function () {
            $(this).addClass("hover").siblings().removeClass("hover")
        }).click(function () {
            if(flag){
                flag = false
                $(this).addClass("active").siblings().removeClass("active");
            }else{
                flag = true;
                $(this).removeClass("active");
            }
        }).mouseleave(function () {
            flag = true;
            $(this).removeClass("hover")
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




})