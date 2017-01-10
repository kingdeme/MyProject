/**
 * Created by Administrator on 2016/12/23.
 */
$(function () {

    var url = "http://localhost:63342/javascript/JD/json/index.json"  //json数据地址

    // 头部广告的关闭
    $(".ad-close").click(function () {
        $("#advertisement").fadeOut();
    })

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
                li.append('<a class="sidebar-txt" href="html/list.html">'+obj.sidebar[i].sidebarName[j]+'</a><span class="sidebar-line">/</span>');
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
                itemLeftTop.append('<a href="html/list.html" class="item-main-lk">'+obj.sidebar[i].topNav[k]+'<i class="iconfont item-main-icon">&#xe601;</i></a>')
            }
            //便利左半部分底部的数据
            for(var a=0; a<obj.sidebar[i].smallNav.length; a++){
                var dl = $('<dl class="item-main-content"></dl>'); // 底部的dl
                var dt = $('<dt class="content-title"></dt>'); //dl里的dt
                var dd = $('<dd class="content-con"></dd>');//dl里的dd
                var dlAll = dl.append(dt).append(dd);
                itemLeftBottom.append(dlAll);
                for(var b=0; b<obj.sidebar[i].smallNav[a].smallNavName.length; b++){
                    dt.append(' <a href="html/list.html">'+obj.sidebar[i].smallNav[a].smallNavName[b]+'<i class="iconfont item-main-icon">&#xe601;</i></a>')
                }
                for(var c=0; c<obj.sidebar[i].smallNav[a].smallNavValue.length; c++){
                    dd.append('<a href="html/list.html" class="content-con-lk">'+obj.sidebar[i].smallNav[a].smallNavValue[c]+'</a>');
                }
            }

            //便利右半部的数据
            var path = "http://localhost:63342/javascript/JD/img/index/cbl/"
            for(var d=0; d<obj.sidebar[i].sidebarSmallImg.length; d++){
                itemRightSimg.append(' <a href="html/list.html" class="simg-lk"><img src="'+path+obj.sidebar[i].sidebarSmallImg[d]+'" alt=""></a>');
            }
            for(var e=0; e<obj.sidebar[i].sidebarBigImg.length; e++){
                itemRightBimg.append(' <a href="html/list.html" class="bimg-lk"><img src="'+path+obj.sidebar[i].sidebarBigImg[e]+'" alt=""></a>')
            }
        }
    }
    //侧边栏的DOM操作
    function DOM() {

        $(".sidebar-list-item").mouseenter(function () {
            $(this).addClass("active").siblings().removeClass("active");
            $(".sidebar-content").css("display","block");
            var index = $(this).index();
            $(".sidebar-content-item").eq(index).css("display","block").siblings().css("display","none");
        })
        $(".sidebar").mouseleave(function () {
            $(".sidebar-list-item").removeClass("active");
            $(".sidebar-content").css("display","none");
            $(".sidebar-content-item").css("display","none");
        })
    }

    //轮播图
    var path = "http://localhost:63342/javascript/JD/img/index/lbt/"
    $.ajax({
        url:url,
        success:function (slider) {
            var obj = eval(slider);
            bindDom(obj.slider);
            bindEvent();

        },
        error:function (messages) {
            alert(messages);
        }
    })
    autoPlay();
    function bindDom(arr){
        for(var i=0, len=arr.length; i<len; i++){
            //创建一个li标签
            $(".slider-list").append('<li class="slider-item" style="opacity:0;z-index: 0;position: absolute;"><a class="slider-item-lk" href="html/list.html"><img class="slider-item-img" src="'+path+arr[i]+'"></a>');
            //创建一个i标签
            $(".slider-indicator").append('<i class="slider-indicator-btn"><i>');
            $(".slider-list li:first").css({"opacity":1,"zIndex":1});
            $(".slider-indicator i:first").addClass("active");
        }
    }
    function bindEvent() {
        //左右按钮的显示隐藏
        $(".slider").mouseenter(function () {
            $(".slider-control-item").css("display","block");
            clearInterval(timer);
        }).mouseleave(function () {
            $(".slider-control-item").css("display","none");
            autoPlay();
        })

        //点击右按钮
        var index = 0;
        var flag  = true;
        $(".slider-control-next").click(function () {
            if(flag){
                flag = false;
                $(".slider-item").eq(index).animate({"opacity":0,"zIndex":0},300);
                index++;
                index = index % $(".slider-item").length;
                $(".slider-item").eq(index).animate({"opacity":1,"zIndex":1},300,function () {
                    flag = true
                });
                $(".slider-indicator-btn").eq(index).addClass("active").siblings().removeClass("active");
            }

        })
        //单击左按钮
        $(".slider-control-prev").click(function () {
            if(flag){
                flag = false;
                $(".slider-item").eq(index).animate({"opacity":0,"zIndex":0},300);
                index--;
                if(index<0){
                    index = $(".slider-item").length-1
                }
                $(".slider-item").eq(index).animate({"opacity":1,"zIndex":1},300,function () {
                    flag = true;
                });
                $(".slider-indicator-btn").eq(index).addClass("active").siblings().removeClass("active");
            }

        })
        //下标
        $(".slider-indicator-btn").mouseenter(function () {
            if(flag){
                flag = false
                $(".slider-item").eq(index).stop().animate({"opacity":0,"zIndex":0},300);
                $(this).addClass("active").siblings().removeClass("active");
                index = $(this).index();
                $(".slider-item").eq(index).stop().animate({"opacity":1,"zIndex":1},300,function () {
                    flag = true;
                });
            }
        })
    }
    function autoPlay() {
        timer = setInterval(function () {
            $(".slider-control-next").click();
        },3000)
    }

    //生活--公告
    $(".news-tab-head").mouseenter(function () {
        var index = $(this).index();
        $(".news-tab-active").stop().animate({"left":index*52},300);
        $(".news-tab-content-item").eq(index).css("display","block").siblings().css("display","none");
    })
    var flag = true;
    //service
    $(".service-frame").mouseenter(function () {
        if(flag){
            $(".service").addClass("service_expand");
            $(this).addClass("service-frame-txt").siblings().removeClass("service-frame-txt");
            var index = $(this).index();
            $(".service-pop-item").eq(index).css("display","block").siblings(".service-pop-item").css("display","none");
        }
    })
    //关闭service
    $(".service-pop-close").click(function () {
        flag = false;
        $(".service").removeClass("service_expand");
        $(".service-frame").removeClass("service-frame-txt");
        setTimeout(function () {
            flag = true
        },900)
    })


    //----------------------------话费-------------------------------------------
    $(".tab-item").mouseenter(function () {   //切换
        $(this).addClass("tab-item-selected").siblings().removeClass("tab-item-selected");
        var index = $(this).index()
        $(".recharge-content-wrap").eq(index).css("display","block").siblings().css("display","none")
    })
    //话费充值
    $(".select-price-money").change(function () {
        var price = $(".select-price-money").val();
        $(".msg-price").html("￥"+price*0.98+"-"+"￥"+price);
    })
    //-----------------------------机票----------------------------------------------
    var timerout = null;
    $(".jp-tab-item").mouseenter(function () {//切换
        clearTimeout(timerout)
        var that = this;
        timerout = setTimeout(function () {
            $(that).addClass("jp-current").siblings().removeClass("jp-current");
            var index = $(that).index();
            $(".jp-tab-content").animate({"marginLeft":-index*190},500)
        },400)
    }).mouseleave(function () {
        clearTimeout(timerout)
    })
    //---------------------------酒店-----------------------------
    $(".hotel-tab").mouseenter(function () {
        clearTimeout(timerout)
        var that = this;
        timerout = setTimeout(function () {
            $(that).addClass("current").siblings().removeClass("current");
            var index = $(that).index();
            $(".tab-content").animate({"marginLeft":-index*190},500)
        },400)

    }).mouseleave(function () {
        clearTimeout(timerout)
    })
    //------------------------------游戏-------------------------------------
    $(".game-tab-item").mouseenter(function () {//切换
        clearTimeout(timerout)
        var that = this;
        timerout = setTimeout(function () {
            $(that).addClass("jp-current").siblings().removeClass("jp-current");
            var index = $(that).index();
            $(".game-tab-content").animate({"marginLeft":-index*190},500)
        },400)
    }).mouseleave(function () {
        clearTimeout(timerout)
    });

    //京东秒杀
    //倒计时
    setInterval(countDown,1000);
    function countDown(){
        var dd = new Date("2017/12/01 00:00:00")-new Date();
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
        $(".cd-hour > span").html(h);
        $(".cd-minute > span").html(m);
        $(".cd-second > span").html(s);

    };
    $.ajax({
        url:url,
        success:function (seckill) {
            var obj = eval(seckill);
            var path = "http://localhost:63342/javascript/JD/img/index/seckill/"
            for(var i=0; i<obj.seckill.length; i++){
                var li = $("<li class='sk-list-item'></li>"); //创建Li
                var pic = $('<div class="sk-item-pic"></div>');//创建 上半部分
                var picCont = $('<a href="html/list.html" class="sk-item-pic-lk"><img src="'+path+obj.seckill[i].imgSrc+'" class="sk-item-img" alt=""><p class="sk-item-name">'+obj.seckill[i].name+'</p></a><span class="sk-item-shadow"></span>');
                var picALL = pic.append(picCont);
                var price = $('<p class="sk-item-price"><span class="sk-item-price-new"><i>￥</i><span>'+obj.seckill[i].newPrice+'</span></span><span class="sk-item-price-origin"><i>￥</i><del>'+obj.seckill[i].originPrice+'</del></span></p>');
                var liALL = li.append(picALL).append(price);
                if(obj.seckill[i].tagTxt){
                    var tag = $('<div class="sk-item-tag"><b class="tag-top"></b><span class="tag-txt">'+obj.seckill[i].tagTxt+'</span></div>');
                    pic.append(tag);
                }
                $(".sk-list").append(liALL);
            }
        },
        error:function (message) {
            alert(message)
        }
    });

    //领券中心
    $.ajax({
        url:url,
        success:function (coupon) {
            var obj = eval(coupon);
            var path = "http://localhost:63342/javascript/JD/img/index/coupon/"
            for(var i=0; i<obj.coupon.length; i++){
                $(".coupon-list").append(' <li class="coupon-item"><a href="html/list.html" class="coupon-item-lk"><div class="coupon-info"><p class="coupon-price"><i>￥</i>'+obj.coupon[i].price+'</p><p class="coupon-desc"><i class="mod-ver"></i><span class="coupon-desc-txt">'+obj.coupon[i].desc+'</span></p><p class="coupon-limit"><i class="mod-ver"></i><span class="coupon-limit-txt">'+obj.coupon[i].limit+'</span></p><p class="coupon-more">'+obj.coupon[i].more+'</p></div><img src="'+path+obj.coupon[i].imgSrc+'" class="coupon-img" alt=""></a><span class="coupon-item-shadow"></span></li>')
            }
        }
    });

    //发现好货/品牌头条/排行榜
    //find
    $.ajax({
        url:url,
        success:function (find) {
            var obj = eval(find);
            var path = "http://localhost:63342/javascript/JD/img/index/fbt/find/"
            for(var i=0; i<obj.find.length; i++){
                var num = i+1;
                $(".find-list").append(' <li class="find-item find-item'+num+'"><a href="html/list.html" class="find-item-lk"><p class="find-item-name">'+obj.find[i].names+'</p><img src="'+path+obj.find[i].imgSrc+'" alt="" class="find-item-img"></a></li>')
            }
        }
    })

    //排行榜
    $.ajax({
        url:url,
        success:function (top) {
            var obj = eval(top);
            jiazai(obj)
            qiehuan();
        },
        error:function (message) {
            alert(message);
        }
    })
    //加载
    function jiazai(obj){
        var path = "http://localhost:63342/javascript/JD/img/index/fbt/top/"
        for(var i=0; i<obj.top.length; i++){
            var a = $('<a href="html/list.html" class="top-bottom-head-item">'+obj.top[i].topName+'</a>');
            var ul = $('<ul class="top-bottom-content-list clearfix"></ul>')
            var div = $(' <div class="top-bottom-content-item"></div>');
            for(var j=0; j<obj.top[i].topcontent.length; j++){
                var num = j+1;
                var li = $('<li class="top-item top-item-'+num+'"><a href="html/list.html" class="top-lk"><div class="top-rank top-rank-'+num+'">'+obj.top[i].topcontent[j].topId+'</div><div class="top-pic"><img src="'+path+obj.top[i].topcontent[j].imgSrc+'" class="top-img"></div><p class="top-name">'+obj.top[i].topcontent[j].name+'</p></a></li>');
                ul.append(li);
            }
            $(".top-bottom-head").append(a);
            div.append(ul);
            $(".top-bottom-content").append(div);
            $(".top-bottom-content .top-bottom-content-item:first-child").addClass("top-bottom-content-item-on");
        }
        $(".top-bottom-head").append(' <div class="top-bottom-head-active"></div>');
        $(".top-bottom-head-item").first().addClass("top-bottom-head-item-first");
        $(".top-bottom-head-item").last().addClass("top-bottom-head-item-last");
    }
    function qiehuan() {
        $(".top-bottom-head-item").mouseenter(function () {
            var index = $(this).index();
            $(".top-bottom-head-active").stop().animate({"left":index*78},400,"easeOutBack");
            $(".top-bottom-content-item").eq(index).css("display","block").siblings().css("display","none");
        })
    }


    //享品质
    $.ajax({
        url:url,
        success:function (entry) {
            var obj = eval(entry);
            var path = "http://localhost:63342/javascript/JD/img/index/entry/"
            for(var i=0; i<obj.entry.length; i++){
                var num = i+1;
                $(".entry-list").append(' <li class="entry-item entry-item-'+num+'"><a href="html/list.html" class="entry-lk"><div class="entry-bg" style="background: '+obj.entry[i].bgColor+';"><div class="entry-info"><h4 class="entry-info-tit">'+obj.entry[i].tit+'</h4><p class="entry-info-desc">'+obj.entry[i].desc+'</p></div></div><img src="'+path+obj.entry[i].imgSrc+'" class="entry-img" alt=""></a></li>');
            }
        },
        error:function (msg) {
            alert(msg)
        }
    })

//    服装城
    var url1 = "http://localhost:63342/javascript/JD/json/clothBeauty.json"  //json数据地址
    $.ajax({
        url:url1,
        success:function (clothBeauty) {
            var obj = eval(clothBeauty);
            cloth(obj);
            closeDom();
        },
        error:function (msg) {
            alert(msg);

        }
    })
    function  cloth(obj){
        var path = "http://localhost:63342/javascript/JD/img/index/chn/";
        var pathLogo = "http://localhost:63342/javascript/JD/img/index/chn/logo/"
        for(var i=0; i<obj.clothBeauty.length; i++){
            var a = i+1;
            var divCol = $('<div class="chn-col chn-col-'+a+'"></div>');//最外面的模块
            var divName = $('<div class="pt pt-'+obj.clothBeauty[i].className+'"></div>');// class名加载
            var divTop = $('<div class="pt-top"></div>');//顶部
            var tit = $('<h3 class="pt-tit">'+obj.clothBeauty[i].names+'</h3>');//tit名字加载
            var tags = $('<div class="pt-tags"></div>');
            for(var k=0; k<obj.clothBeauty[i].pags.length; k++){
                tags.append(' <a href="html/list.html" class="pt-tags-item">'+obj.clothBeauty[i].pags[k]+'</a>')
            }// tags循环
            var divBottom = $('<div class="pt-bottom-wrap"></div>');//底部外套
            var divFt = $('<div class="pt-ft"></div>');
            var bottomInner = $('<div class="pt-bottom-inner"></div>');
            var hide = $(' <div class="pt-bottom-hide"></div>');
            var cover = $('<div class="pt-cover"></div>');
            var bi = $('<div class="pt-bi"></div>');
            var more = $('<div class="pt-more"></div>');
            var spanw = $('<span class="pt-bi-split pt-bi-split-w"></span>');
            var spanh = $('<span class="pt-bi-split pt-bi-split-h"></span>');
            var ftLogo = $('<div class="pt-logo"></div>');
            var logoList = $('<div class="pt-logo-list-wrap"></div>');
            var logoBtn = $('<div class="pt-logo-btn-wrap"></div>');
            var pre = $('<a href="html/list.html" class="pt-logo-btn pt-logo-pre iconfont">&#xe640;</a>');
            var next = $('<a href="html/list.html" class="pt-logo-btn pt-logo-next iconfont">&#xe63f;</a>');
            for(var j=0; j<obj.clothBeauty[i].cont.length; j++){
                var b=j+1;
                var divbtm = $('<div class="pt-bottom pt-bottom-'+b+'"></div>');
                divBottom.append(divbtm);
                var coverA = $(' <a href="html/list.html" class="pt-cover-lk"> <img src="'+path+obj.clothBeauty[i].cont[j].cover+'" class="pt-cover-img" alt=""></a>');
                for(var l=0; l<obj.clothBeauty[i].cont[j].bi.length; l++){
                    var biA = $(' <a href="html/list.html" class="pt-bi-item"><p class="pt-bi-tit">'+obj.clothBeauty[i].cont[j].bi[l].tit+'</p><p class="pt-bi-promo">'+obj.clothBeauty[i].cont[j].bi[l].promo+'</p><img src="'+path+obj.clothBeauty[i].cont[j].bi[l].imgSrc+'" class="pt-bi-img" alt=""></a>');
                    bi.append(biA);
                }
                for(var m=0; m<obj.clothBeauty[i].cont[j].more.length; m++){
                    var moreA = $(' <a href="html/list.html" class="pt-more-item"><img src="'+path+obj.clothBeauty[i].cont[j].more[m]+'" class="pt-more-img" alt=""></a>');
                    more.append(moreA);
                }


            }
            var liLength = obj.clothBeauty[i].ft.length;//li数量
            var ulList = $('<ul class="pt-logo-list clearfix" style="width:'+liLength*95+'px;"></ul>')
            for(var f=0; f<obj.clothBeauty[i].ft.length; f++){
                var liItem = $('<li class="pt-logo-item"><a href="html/list.html" class="pt-logo-lk"><img src="'+pathLogo+obj.clothBeauty[i].ft[f]+'" class="pt-logo-img" alt=""></a></li>');
                ulList.append(liItem);
            }
            logoBtn.append(pre).append(next);
            logoList.append(ulList);
            ftLogo.append(logoList).append(logoBtn);
            divFt.append(ftLogo);
            bi.append(spanw).append(spanh);
            cover.append(coverA);
            bottomInner.append(cover).append(bi).append(more);
            divbtm.append(bottomInner).append(hide);
            divBottom.append(divFt);
            divTop.append(tit).append(tags);
            divName.append(divTop).append(divBottom);
            divCol.append(divName);
            $("#portal-1 .chn").append(divCol);
        }

    }
    function closeDom(){
        var ulIndex = 0;
        var flag = true;
        $(".pt-logo-btn-wrap").on("click",".pt-logo-pre",function () {
            var ul =$(this).parents(".pt-logo").children(0).children(".pt-logo-list");
            var ulWidth = ul.width();
            var uli = ulWidth/4;
            if(flag){
                flag = false;
                ulIndex--;
                if(ulIndex < 0){
                    ul.css({"left":-uli*2});
                    ulIndex = 1;
                }
                ul.stop().animate({"left":-uli*ulIndex},1000,"easeOutBack",function () {
                    flag=true;
                });
            }
        })
        $(".pt-logo-btn-wrap").on("click",".pt-logo-next",function () {
            var ul =$(this).parents(".pt-logo").children(0).children(".pt-logo-list");
            var ulWidth = ul.width();
            var uli = ulWidth/4;
            if(flag){
                flag = false;
                if(ulIndex == 2){
                    ul.css({"left":0});
                    ulIndex = 0;
                }
                ulIndex++;
                ul.stop().animate({"left":-uli*ulIndex},1000,"easeOutBack",function () {
                    flag=true;
                });
            }
        })
    }

    //    家电手机
    var url2 = "http://localhost:63342/javascript/JD/json/phone.json"  //json数据地址
    $.ajax({
        url:url2,
        success:function (clothBeauty) {
            var obj = eval(clothBeauty);
            phone(obj);
            phoneDom();
        },
        error:function (msg) {
            alert(msg);

        }
    })
    function  phone(obj){
        var path = "http://localhost:63342/javascript/JD/img/index/phone/";
        var pathLogo = "http://localhost:63342/javascript/JD/img/index/phone/logo/"
        for(var i=0; i<obj.clothBeauty.length; i++){
            var a = i+1;
            var divCol = $('<div class="chn-col chn-col-'+a+'"></div>');//最外面的模块
            var divName = $('<div class="pt pt-'+obj.clothBeauty[i].className+'"></div>');// class名加载
            var divTop = $('<div class="pt-top"></div>');//顶部
            var tit = $('<h3 class="pt-tit">'+obj.clothBeauty[i].names+'</h3>');//tit名字加载
            var tags = $('<div class="pt-tags"></div>');
            for(var k=0; k<obj.clothBeauty[i].pags.length; k++){
                tags.append(' <a href="html/list.html" class="pt-tags-item">'+obj.clothBeauty[i].pags[k]+'</a>')
            }// tags循环
            var divBottom = $('<div class="pt-bottom-wrap"></div>');//底部外套
            var divFt = $('<div class="pt-ft"></div>');
            var bottomInner = $('<div class="pt-bottom-inner"></div>');
            var hide = $(' <div class="pt-bottom-hide"></div>');
            var cover = $('<div class="pt-cover"></div>');
            var bi = $('<div class="pt-bi"></div>');
            var more = $('<div class="pt-more"></div>');
            var spanw = $('<span class="pt-bi-split pt-bi-split-w"></span>');
            var spanh = $('<span class="pt-bi-split pt-bi-split-h"></span>');
            var ftLogo = $('<div class="pt-logo"></div>');
            var logoList = $('<div class="pt-logo-list-wrap"></div>');
            var logoBtn = $('<div class="pt-logo-btn-wrap"></div>');
            var pre = $('<a href="html/list.html" class="pt-logo-btn pt-logo-pre iconfont">&#xe640;</a>');
            var next = $('<a href="html/list.html" class="pt-logo-btn pt-logo-next iconfont">&#xe63f;</a>');
            for(var j=0; j<obj.clothBeauty[i].cont.length; j++){
                var b=j+1;
                var divbtm = $('<div class="pt-bottom pt-bottom-'+b+'"></div>');
                divBottom.append(divbtm);
                var coverA = $(' <a href="html/list.html" class="pt-cover-lk"> <img src="'+path+obj.clothBeauty[i].cont[j].cover+'" class="pt-cover-img" alt=""></a>');
                for(var l=0; l<obj.clothBeauty[i].cont[j].bi.length; l++){
                    var biA = $(' <a href="html/list.html" class="pt-bi-item"><p class="pt-bi-tit">'+obj.clothBeauty[i].cont[j].bi[l].tit+'</p><p class="pt-bi-promo">'+obj.clothBeauty[i].cont[j].bi[l].promo+'</p><img src="'+path+obj.clothBeauty[i].cont[j].bi[l].imgSrc+'" class="pt-bi-img" alt=""></a>');
                    bi.append(biA);
                }
                for(var m=0; m<obj.clothBeauty[i].cont[j].more.length; m++){
                    var moreA = $(' <a href="html/list.html" class="pt-more-item"><img src="'+path+obj.clothBeauty[i].cont[j].more[m]+'" class="pt-more-img" alt=""></a>');
                    more.append(moreA);
                }


            }
            var liLength = obj.clothBeauty[i].ft.length;//li数量
            var ulList = $('<ul class="pt-logo-list clearfix" style="width:'+liLength*95+'px;"></ul>')
            for(var f=0; f<obj.clothBeauty[i].ft.length; f++){
                var liItem = $('<li class="pt-logo-item"><a href="html/list.html" class="pt-logo-lk"><img src="'+pathLogo+obj.clothBeauty[i].ft[f]+'" class="pt-logo-img" alt=""></a></li>');
                ulList.append(liItem);
            }
            logoBtn.append(pre).append(next);
            logoList.append(ulList);
            ftLogo.append(logoList).append(logoBtn);
            divFt.append(ftLogo);
            bi.append(spanw).append(spanh);
            cover.append(coverA);
            bottomInner.append(cover).append(bi).append(more);
            divbtm.append(bottomInner).append(hide);
            divBottom.append(divFt);
            divTop.append(tit).append(tags);
            divName.append(divTop).append(divBottom);
            divCol.append(divName);
            $("#portal-2 .chn").append(divCol);
        }

    }
    function phoneDom(){
        var ulIndex = 0;
        var flag = true;
        $(".pt-logo-btn-wrap").on("click",".pt-logo-pre",function () {
            var ul =$(this).parents(".pt-logo").children(0).children(".pt-logo-list");
            var ulWidth = ul.width();
            var uli = ulWidth/4;
            if(flag){
                flag = false;
                ulIndex--;
                if(ulIndex < 0){
                    ul.css({"left":-uli*2});
                    ulIndex = 1;
                }
                ul.stop().animate({"left":-uli*ulIndex},1000,"easeOutBack",function () {
                    flag=true;
                });
            }
        })
        $(".pt-logo-btn-wrap").on("click",".pt-logo-next",function () {
            var ul =$(this).parents(".pt-logo").children(0).children(".pt-logo-list");
            var ulWidth = ul.width();
            var uli = ulWidth/4;
            if(flag){
                flag = false;
                if(ulIndex == 2){
                    ul.css({"left":0});
                    ulIndex = 0;
                }
                ulIndex++;
                ul.stop().animate({"left":-uli*ulIndex},1000,"easeOutBack",function () {
                    flag=true;
                });
            }
        })
    }

    //电脑数码
    var url3 = "http://localhost:63342/javascript/JD/json/computer.json"  //json数据地址
    $.ajax({
        url:url3,
        success:function (clothBeauty) {
            var obj = eval(clothBeauty);
            computer(obj);
            computerDom();
        },
        error:function (msg) {
            alert(msg);

        }
    })
    function  computer(arr){
        var path = "http://localhost:63342/javascript/JD/img/index/computer/";
        var pathLogo = "http://localhost:63342/javascript/JD/img/index/computer/logo/"
        for(var i=0; i<arr.clothBeauty.length; i++){
            var a = i+1;
            var divCol = $('<div class="chn-col chn-col-'+a+'"></div>');//最外面的模块
            var divName = $('<div class="pt pt-'+arr.clothBeauty[i].className+'"></div>');// class名加载
            var divTop = $('<div class="pt-top"></div>');//顶部
            var tit = $('<h3 class="pt-tit">'+arr.clothBeauty[i].names+'</h3>');//tit名字加载
            var tags = $('<div class="pt-tags"></div>');
            for(var k=0; k<arr.clothBeauty[i].pags.length; k++){
                tags.append(' <a href="html/list.html" class="pt-tags-item">'+arr.clothBeauty[i].pags[k]+'</a>')
            }// tags循环
            var divBottom = $('<div class="pt-bottom-wrap"></div>');//底部外套
            var divFt = $('<div class="pt-ft"></div>');
            var ftLogo = $('<div class="pt-logo"></div>');
            var logoList = $('<div class="pt-logo-list-wrap"></div>');
            var logoBtn = $('<div class="pt-logo-btn-wrap"></div>');
            var pre = $('<a href="html/list.html" class="pt-logo-btn pt-logo-pre iconfont">&#xe640;</a>');
            var next = $('<a href="html/list.html" class="pt-logo-btn pt-logo-next iconfont">&#xe63f;</a>');
            for(var j=0; j<arr.clothBeauty[i].cont.length; j++){
                var b=j+1;
                var bi = $('<div class="pt-bi"></div>');
                var more = $('<div class="pt-more"></div>');
                var spanw = $('<span class="pt-bi-split pt-bi-split-w"></span>');
                var spanh = $('<span class="pt-bi-split pt-bi-split-h"></span>');
                var bottomInner = $('<div class="pt-bottom-inner"></div>');
                var hide = $(' <div class="pt-bottom-hide"></div>');
                var divbtm = $('<div class="pt-bottom pt-bottom-'+b+'"></div>');
                for(var c=0; c<arr.clothBeauty[i].cont[j].cover.length; c++){
                    var cover = $('<div class="pt-cover"></div>');
                    var coverA = $(' <a href="html/list.html" class="pt-cover-lk"> <img src="'+path+arr.clothBeauty[i].cont[j].cover[c]+'" class="pt-cover-img" alt=""></a>');
                    cover.append(coverA);
                    bottomInner.append(cover);
                }
                bi.append(spanw).append(spanh);
                divBottom.append(divbtm);
                divbtm.append(bottomInner).append(hide);
                bottomInner.append(bi).append(more);
                for(var l=0; l<arr.clothBeauty[i].cont[j].bi.length; l++){
                    var biA = $(' <a href="html/list.html" class="pt-bi-item"><p class="pt-bi-tit">'+arr.clothBeauty[i].cont[j].bi[l].tit+'</p><p class="pt-bi-promo">'+arr.clothBeauty[i].cont[j].bi[l].promo+'</p><img src="'+path+arr.clothBeauty[i].cont[j].bi[l].imgSrc+'" class="pt-bi-img" alt=""></a>');
                    bi.append(biA);
                }
                for(var m=0; m<arr.clothBeauty[i].cont[j].more.length; m++){
                    var moreA = $(' <a href="html/list.html" class="pt-more-item"><img src="'+path+arr.clothBeauty[i].cont[j].more[m]+'" class="pt-more-img" alt=""></a>');
                    more.append(moreA);
                }
            }
            var liLength = arr.clothBeauty[i].ft.length;//li数量
            var ulList = $('<ul class="pt-logo-list clearfix" style="width:'+liLength*95+'px;"></ul>')
            for(var f=0; f<arr.clothBeauty[i].ft.length; f++){
                var liItem = $('<li class="pt-logo-item"><a href="html/list.html" class="pt-logo-lk"><img src="'+pathLogo+arr.clothBeauty[i].ft[f]+'" class="pt-logo-img" alt=""></a></li>');
                ulList.append(liItem);
            }
            logoBtn.append(pre).append(next);
            logoList.append(ulList);
            ftLogo.append(logoList).append(logoBtn);
            divFt.append(ftLogo);
            divBottom.append(divFt);
            divTop.append(tit).append(tags);
            divName.append(divTop).append(divBottom);
            divCol.append(divName);
            $("#portal-3 .chn").append(divCol);
        }

    }
    function computerDom(){
        var ulIndex = 0;
        var flag = true;
        $(".pt-logo-btn-wrap").on("click",".pt-logo-pre",function () {
            var ul =$(this).parents(".pt-logo").children(0).children(".pt-logo-list");
            var ulWidth = ul.width();
            var uli = ulWidth/4;
            if(flag){
                flag = false;
                ulIndex--;
                if(ulIndex < 0){
                    ul.css({"left":-uli*2});
                    ulIndex = 1;
                }
                ul.stop().animate({"left":-uli*ulIndex},1000,"easeOutBack",function () {
                    flag=true;
                });
            }
        })
        $(".pt-logo-btn-wrap").on("click",".pt-logo-next",function () {
            var ul =$(this).parents(".pt-logo").children(0).children(".pt-logo-list");
            var ulWidth = ul.width();
            var uli = ulWidth/4;
            if(flag){
                flag = false;
                if(ulIndex == 2){
                    ul.css({"left":0});
                    ulIndex = 0;
                }
                ulIndex++;
                ul.stop().animate({"left":-uli*ulIndex},1000,"easeOutBack",function () {
                    flag=true;
                });
            }
        })
    }

    //   玩3C运动
    var url4 = "http://localhost:63342/javascript/JD/json/3c.json"  //json数据地址
    $.ajax({
        url:url4,
        success:function (clothBeauty) {
            var obj = eval(clothBeauty);
            sport(obj);
            sportDom();
        },
        error:function (msg) {
            alert(msg);

        }
    })
    function  sport(obj){
        var path = "http://localhost:63342/javascript/JD/img/index/3c/";
        var pathLogo = "http://localhost:63342/javascript/JD/img/index/3c/logo/"
        for(var i=0; i<obj.clothBeauty.length; i++){
            var a = i+1;
            var divCol = $('<div class="chn-col chn-col-'+a+'"></div>');//最外面的模块
            var divName = $('<div class="pt pt-'+obj.clothBeauty[i].className+'"></div>');// class名加载
            var divTop = $('<div class="pt-top"></div>');//顶部
            var tit = $('<h3 class="pt-tit">'+obj.clothBeauty[i].names+'</h3>');//tit名字加载
            var tags = $('<div class="pt-tags"></div>');
            for(var k=0; k<obj.clothBeauty[i].pags.length; k++){
                tags.append(' <a href="html/list.html" class="pt-tags-item">'+obj.clothBeauty[i].pags[k]+'</a>')
            }// tags循环
            var divBottom = $('<div class="pt-bottom-wrap"></div>');//底部外套
            var divFt = $('<div class="pt-ft"></div>');
            var bottomInner = $('<div class="pt-bottom-inner"></div>');
            var hide = $(' <div class="pt-bottom-hide"></div>');
            var bi = $('<div class="pt-bi"></div>');
            var more = $('<div class="pt-more"></div>');
            var spanw = $('<span class="pt-bi-split pt-bi-split-w"></span>');
            var spanh = $('<span class="pt-bi-split pt-bi-split-h"></span>');
            var ftLogo = $('<div class="pt-logo"></div>');
            var logoList = $('<div class="pt-logo-list-wrap"></div>');
            var logoBtn = $('<div class="pt-logo-btn-wrap"></div>');
            var pre = $('<a href="html/list.html" class="pt-logo-btn pt-logo-pre iconfont">&#xe640;</a>');
            var next = $('<a href="html/list.html" class="pt-logo-btn pt-logo-next iconfont">&#xe63f;</a>');
            for(var j=0; j<obj.clothBeauty[i].cont.length; j++){
                var b=j+1;
                var divbtm = $('<div class="pt-bottom pt-bottom-'+b+'"></div>');
                divBottom.append(divbtm);
                for(var c=0; c<obj.clothBeauty[i].cont[j].cover.length; c++){
                    var cover = $('<div class="pt-cover"></div>');
                    var coverA = $(' <a href="html/list.html" class="pt-cover-lk"> <img src="'+path+obj.clothBeauty[i].cont[j].cover[c]+'" class="pt-cover-img" alt=""></a>');
                    cover.append(coverA);
                    bottomInner.append(cover);
                }
                for(var l=0; l<obj.clothBeauty[i].cont[j].bi.length; l++){
                    var biA = $(' <a href="html/list.html" class="pt-bi-item"><p class="pt-bi-tit">'+obj.clothBeauty[i].cont[j].bi[l].tit+'</p><p class="pt-bi-promo">'+obj.clothBeauty[i].cont[j].bi[l].promo+'</p><img src="'+path+obj.clothBeauty[i].cont[j].bi[l].imgSrc+'" class="pt-bi-img" alt=""></a>');
                    bi.append(biA);
                }
                for(var m=0; m<obj.clothBeauty[i].cont[j].more.length; m++){
                    var moreA = $(' <a href="html/list.html" class="pt-more-item"><img src="'+path+obj.clothBeauty[i].cont[j].more[m]+'" class="pt-more-img" alt=""></a>');
                    more.append(moreA);
                }
            }
            var liLength = obj.clothBeauty[i].ft.length;//li数量
            var ulList = $('<ul class="pt-logo-list clearfix" style="width:'+liLength*95+'px;"></ul>')
            for(var f=0; f<obj.clothBeauty[i].ft.length; f++){
                var liItem = $('<li class="pt-logo-item"><a href="html/list.html" class="pt-logo-lk"><img src="'+pathLogo+obj.clothBeauty[i].ft[f]+'" class="pt-logo-img" alt=""></a></li>');
                ulList.append(liItem);
            }
            logoBtn.append(pre).append(next);
            logoList.append(ulList);
            ftLogo.append(logoList).append(logoBtn);
            divFt.append(ftLogo);
            bi.append(spanw).append(spanh);
            bottomInner.append(bi).append(more);
            divbtm.append(bottomInner).append(hide);
            divBottom.append(divFt);
            divTop.append(tit).append(tags);
            divName.append(divTop).append(divBottom);
            divCol.append(divName);
            $("#portal-4 .chn").append(divCol);
        }

    }
    function sportDom(){
        var ulIndex = 0;
        var flag = true;
        $(".pt-logo-btn-wrap").on("click",".pt-logo-pre",function () {
            var ul =$(this).parents(".pt-logo").children(0).children(".pt-logo-list");
            var ulWidth = ul.width();
            var uli = ulWidth/4;
            if(flag){
                flag = false;
                ulIndex--;
                if(ulIndex < 0){
                    ul.css({"left":-uli*2});
                    ulIndex = 1;
                }
                ul.stop().animate({"left":-uli*ulIndex},1000,"easeOutBack",function () {
                    flag=true;
                });
            }
        })
        $(".pt-logo-btn-wrap").on("click",".pt-logo-next",function () {
            var ul =$(this).parents(".pt-logo").children(0).children(".pt-logo-list");
            var ulWidth = ul.width();
            var uli = ulWidth/4;
            if(flag){
                flag = false;
                ulIndex++;
                ul.stop().animate({"left":-uli*ulIndex},1000,"easeOutBack",function () {
                    if(ulIndex == 3){
                        ulIndex = 1;
                        ul.css({"left":-uli*ulIndex});

                    }
                    flag=true;
                });
            }
        })
    }

    //爱吃
    var url5 = "http://localhost:63342/javascript/JD/json/eat.json"  //json数据地址
    $.ajax({
        url:url5,
        success:function (clothBeauty) {
            var obj = eval(clothBeauty);
            eat(obj);
            eatDom();
        },
        error:function (msg) {
            alert(msg);

        }
    })
    function  eat(arr){
        var path = "http://localhost:63342/javascript/JD/img/index/eat/";
        var pathLogo = "http://localhost:63342/javascript/JD/img/index/eat/logo/"
        for(var i=0; i<arr.clothBeauty.length; i++){
            var a = i+1;
            var divCol = $('<div class="chn-col chn-col-'+a+'"></div>');//最外面的模块
            var divName = $('<div class="pt pt-'+arr.clothBeauty[i].className+'"></div>');// class名加载
            var divTop = $('<div class="pt-top"></div>');//顶部
            var tit = $('<h3 class="pt-tit">'+arr.clothBeauty[i].names+'</h3>');//tit名字加载
            var tags = $('<div class="pt-tags"></div>');
            for(var k=0; k<arr.clothBeauty[i].pags.length; k++){
                tags.append(' <a href="html/list.html" class="pt-tags-item">'+arr.clothBeauty[i].pags[k]+'</a>')
            }// tags循环
            var divBottom = $('<div class="pt-bottom-wrap"></div>');//底部外套
            var divFt = $('<div class="pt-ft"></div>');
            var ftLogo = $('<div class="pt-logo"></div>');
            var logoList = $('<div class="pt-logo-list-wrap"></div>');
            var logoBtn = $('<div class="pt-logo-btn-wrap"></div>');
            var pre = $('<a href="html/list.html" class="pt-logo-btn pt-logo-pre iconfont">&#xe640;</a>');
            var next = $('<a href="html/list.html" class="pt-logo-btn pt-logo-next iconfont">&#xe63f;</a>');
            for(var j=0; j<arr.clothBeauty[i].cont.length; j++){
                var b=j+1;
                var bi = $('<div class="pt-bi pt-bi-'+b+'"></div>');
                var more = $('<div class="pt-more"></div>');
                var spanw = $('<span class="pt-bi-split pt-bi-split-w"></span>');
                var spanh = $('<span class="pt-bi-split pt-bi-split-h"></span>');
                var bottomInner = $('<div class="pt-bottom-inner"></div>');
                var hide = $(' <div class="pt-bottom-hide"></div>');
                var divbtm = $('<div class="pt-bottom pt-bottom-'+b+'"></div>');
                for(var c=0; c<arr.clothBeauty[i].cont[j].cover.length; c++){
                    var cover = $('<div class="pt-cover"></div>');
                    var coverA = $(' <a href="html/list.html" class="pt-cover-lk"> <img src="'+path+arr.clothBeauty[i].cont[j].cover[c]+'" class="pt-cover-img" alt=""></a>');
                    cover.append(coverA);
                    bottomInner.append(cover);
                }
                bi.append(spanw).append(spanh);
                divBottom.append(divbtm);
                divbtm.append(bottomInner).append(hide);
                bottomInner.append(bi).append(more);
                for(var l=0; l<arr.clothBeauty[i].cont[j].bi.length; l++){
                    var biA = $(' <a href="html/list.html" class="pt-bi-item"><p class="pt-bi-tit">'+arr.clothBeauty[i].cont[j].bi[l].tit+'</p><p class="pt-bi-promo">'+arr.clothBeauty[i].cont[j].bi[l].promo+'</p><img src="'+path+arr.clothBeauty[i].cont[j].bi[l].imgSrc+'" class="pt-bi-img" alt=""></a>');
                    bi.append(biA);
                }
                for(var m=0; m<arr.clothBeauty[i].cont[j].more.length; m++){
                    var moreA = $(' <a href="html/list.html" class="pt-more-item"><img src="'+path+arr.clothBeauty[i].cont[j].more[m]+'" class="pt-more-img" alt=""></a>');
                    more.append(moreA);
                }
            }
            var liLength = arr.clothBeauty[i].ft.length;//li数量
            var ulList = $('<ul class="pt-logo-list clearfix" style="width:'+liLength*95+'px;"></ul>')
            for(var f=0; f<arr.clothBeauty[i].ft.length; f++){
                var liItem = $('<li class="pt-logo-item"><a href="html/list.html" class="pt-logo-lk"><img src="'+pathLogo+arr.clothBeauty[i].ft[f]+'" class="pt-logo-img" alt=""></a></li>');
                ulList.append(liItem);
            }
            logoBtn.append(pre).append(next);
            logoList.append(ulList);
            ftLogo.append(logoList).append(logoBtn);
            divFt.append(ftLogo);
            divBottom.append(divFt);
            divTop.append(tit).append(tags);
            divName.append(divTop).append(divBottom);
            divCol.append(divName);
            $("#portal-5 .chn").append(divCol);
        }

    }
    function eatDom(){
        var ulIndex = 0;
        var flag = true;
        $(".pt-logo-btn-wrap").on("click",".pt-logo-pre",function () {
            var ul =$(this).parents(".pt-logo").children(0).children(".pt-logo-list");
            var ulWidth = ul.width();
            var uli = ulWidth/4;
            if(flag){
                flag = false;
                ulIndex--;
                if(ulIndex < 0){
                    ul.css({"left":-uli*2});
                    ulIndex = 1;
                }
                ul.stop().animate({"left":-uli*ulIndex},1000,"easeOutBack",function () {
                    flag=true;
                });
            }
        })
        $(".pt-logo-btn-wrap").on("click",".pt-logo-next",function () {
            var ul =$(this).parents(".pt-logo").children(0).children(".pt-logo-list");
            var ulWidth = ul.width();
            var uli = ulWidth/4;
            if(flag){
                flag = false;
                if(ulIndex == 2){
                    ul.css({"left":0});
                    ulIndex = 0;
                }
                ulIndex++;
                ul.stop().animate({"left":-uli*ulIndex},1000,"easeOutBack",function () {
                    flag=true;
                });
            }
        })
    }

    //   爱宝宝爱家
    var url6 = "http://localhost:63342/javascript/JD/json/baby.json"  //json数据地址
    $.ajax({
        url:url6,
        success:function (clothBeauty) {
            var obj = eval(clothBeauty);
            baby(obj);
            babyDom();
        },
        error:function (msg) {
            alert(msg);

        }
    })
    function  baby(obj){
        var path = "http://localhost:63342/javascript/JD/img/index/babyfamily/";
        var pathLogo = "http://localhost:63342/javascript/JD/img/index/babyfamily/logo/"
        for(var i=0; i<obj.clothBeauty.length; i++){
            var a = i+1;
            var divCol = $('<div class="chn-col chn-col-'+a+'"></div>');//最外面的模块
            var divName = $('<div class="pt pt-'+obj.clothBeauty[i].className+'"></div>');// class名加载
            var divTop = $('<div class="pt-top"></div>');//顶部
            var tit = $('<h3 class="pt-tit">'+obj.clothBeauty[i].names+'</h3>');//tit名字加载
            var tags = $('<div class="pt-tags"></div>');
            for(var k=0; k<obj.clothBeauty[i].pags.length; k++){
                tags.append(' <a href="html/list.html" class="pt-tags-item">'+obj.clothBeauty[i].pags[k]+'</a>')
            }// tags循环
            var divBottom = $('<div class="pt-bottom-wrap"></div>');//底部外套
            var divFt = $('<div class="pt-ft"></div>');
            var bottomInner = $('<div class="pt-bottom-inner"></div>');
            var hide = $(' <div class="pt-bottom-hide"></div>');
            var bi = $('<div class="pt-bi"></div>');
            var more = $('<div class="pt-more"></div>');
            var spanw = $('<span class="pt-bi-split pt-bi-split-w"></span>');
            var spanh = $('<span class="pt-bi-split pt-bi-split-h"></span>');
            var ftLogo = $('<div class="pt-logo"></div>');
            var logoList = $('<div class="pt-logo-list-wrap"></div>');
            var logoBtn = $('<div class="pt-logo-btn-wrap"></div>');
            var pre = $('<a href="html/list.html" class="pt-logo-btn pt-logo-pre iconfont">&#xe640;</a>');
            var next = $('<a href="html/list.html" class="pt-logo-btn pt-logo-next iconfont">&#xe63f;</a>');
            for(var j=0; j<obj.clothBeauty[i].cont.length; j++){
                var b=j+1;
                var divbtm = $('<div class="pt-bottom pt-bottom-'+b+'"></div>');
                divBottom.append(divbtm);
                for(var c=0; c<obj.clothBeauty[i].cont[j].cover.length; c++){
                    var cover = $('<div class="pt-cover"></div>');
                    var coverA = $(' <a href="html/list.html" class="pt-cover-lk"> <img src="'+path+obj.clothBeauty[i].cont[j].cover[c]+'" class="pt-cover-img" alt=""></a>');
                    cover.append(coverA);
                    bottomInner.append(cover);
                }
                for(var l=0; l<obj.clothBeauty[i].cont[j].bi.length; l++){
                    var biA = $(' <a href="html/list.html" class="pt-bi-item"><p class="pt-bi-tit">'+obj.clothBeauty[i].cont[j].bi[l].tit+'</p><p class="pt-bi-promo">'+obj.clothBeauty[i].cont[j].bi[l].promo+'</p><img src="'+path+obj.clothBeauty[i].cont[j].bi[l].imgSrc+'" class="pt-bi-img" alt=""></a>');
                    bi.append(biA);
                }
                for(var m=0; m<obj.clothBeauty[i].cont[j].more.length; m++){
                    var moreA = $(' <a href="html/list.html" class="pt-more-item"><img src="'+path+obj.clothBeauty[i].cont[j].more[m]+'" class="pt-more-img" alt=""></a>');
                    more.append(moreA);
                }
            }
            var liLength = obj.clothBeauty[i].ft.length;//li数量
            var ulList = $('<ul class="pt-logo-list clearfix" style="width:'+liLength*95+'px;"></ul>')
            for(var f=0; f<obj.clothBeauty[i].ft.length; f++){
                var liItem = $('<li class="pt-logo-item"><a href="html/list.html" class="pt-logo-lk"><img src="'+pathLogo+obj.clothBeauty[i].ft[f]+'" class="pt-logo-img" alt=""></a></li>');
                ulList.append(liItem);
            }
            logoBtn.append(pre).append(next);
            logoList.append(ulList);
            ftLogo.append(logoList).append(logoBtn);
            divFt.append(ftLogo);
            bi.append(spanw).append(spanh);
            bottomInner.append(bi).append(more);
            divbtm.append(bottomInner).append(hide);
            divBottom.append(divFt);
            divTop.append(tit).append(tags);
            divName.append(divTop).append(divBottom);
            divCol.append(divName);
            $("#portal-6 .chn").append(divCol);
        }

    }
    function babyDom(){
        var ulIndex = 0;
        var flag = true;
        $(".pt-logo-btn-wrap").on("click",".pt-logo-pre",function () {
            var ul =$(this).parents(".pt-logo").children(0).children(".pt-logo-list");
            var ulWidth = ul.width();
            var uli = ulWidth/4;
            if(flag){
                flag = false;
                ulIndex--;
                if(ulIndex < 0){
                    ul.css({"left":-uli*2});
                    ulIndex = 1;
                }
                ul.stop().animate({"left":-uli*ulIndex},1000,"easeOutBack",function () {
                    flag=true;
                });
            }
        })
        $(".pt-logo-btn-wrap").on("click",".pt-logo-next",function () {
            var ul =$(this).parents(".pt-logo").children(0).children(".pt-logo-list");
            var ulWidth = ul.width();
            var uli = ulWidth/4;
            if(flag){
                flag = false;
                if(ulIndex == 2){
                    ul.css({"left":0});
                    ulIndex = 0;
                }
                ulIndex++;
                ul.stop().animate({"left":-uli*ulIndex},1000,"easeOutBack",function () {
                    flag=true;
                });
            }
        })
    }

    //  爱读书爱车
    var url7 = "http://localhost:63342/javascript/JD/json/readcar.json"  //json数据地址
    $.ajax({
        url:url7,
        success:function (clothBeauty) {
            var obj = eval(clothBeauty);
            read(obj);
            readDom();
        },
        error:function (msg) {
            alert(msg);

        }
    })
    function  read(obj){
        var path = "http://localhost:63342/javascript/JD/img/index/readcar/";
        var pathLogo = "http://localhost:63342/javascript/JD/img/index/readcar/logo/"
        for(var i=0; i<obj.clothBeauty.length; i++){
            var a = i+1;
            var divCol = $('<div class="chn-col chn-col-'+a+'"></div>');//最外面的模块
            var divName = $('<div class="pt pt-'+obj.clothBeauty[i].className+'"></div>');// class名加载
            var divTop = $('<div class="pt-top"></div>');//顶部
            var tit = $('<h3 class="pt-tit">'+obj.clothBeauty[i].names+'</h3>');//tit名字加载
            var tags = $('<div class="pt-tags"></div>');
            for(var k=0; k<obj.clothBeauty[i].pags.length; k++){
                tags.append(' <a href="html/list.html" class="pt-tags-item">'+obj.clothBeauty[i].pags[k]+'</a>')
            }// tags循环
            var divBottom = $('<div class="pt-bottom-wrap"></div>');//底部外套
            var divFt = $('<div class="pt-ft"></div>');
            var bottomInner = $('<div class="pt-bottom-inner"></div>');
            var hide = $(' <div class="pt-bottom-hide"></div>');
            var bi = $('<div class="pt-bi"></div>');
            var more = $('<div class="pt-more"></div>');
            var spanw = $('<span class="pt-bi-split pt-bi-split-w"></span>');
            var spanh = $('<span class="pt-bi-split pt-bi-split-h"></span>');
            var ftLogo = $('<div class="pt-logo"></div>');
            var logoList = $('<div class="pt-logo-list-wrap"></div>');
            var logoBtn = $('<div class="pt-logo-btn-wrap"></div>');
            var pre = $('<a href="html/list.html" class="pt-logo-btn pt-logo-pre iconfont">&#xe640;</a>');
            var next = $('<a href="html/list.html" class="pt-logo-btn pt-logo-next iconfont">&#xe63f;</a>');
            for(var j=0; j<obj.clothBeauty[i].cont.length; j++){
                var b=j+1;
                var divbtm = $('<div class="pt-bottom pt-bottom-'+b+'"></div>');
                divBottom.append(divbtm);
                for(var c=0; c<obj.clothBeauty[i].cont[j].cover.length; c++){
                    var cover = $('<div class="pt-cover"></div>');
                    var coverA = $(' <a href="html/list.html" class="pt-cover-lk"> <img src="'+path+obj.clothBeauty[i].cont[j].cover[c]+'" class="pt-cover-img" alt=""></a>');
                    cover.append(coverA);
                    bottomInner.append(cover);
                }
                for(var l=0; l<obj.clothBeauty[i].cont[j].bi.length; l++){
                    var biA = $(' <a href="html/list.html" class="pt-bi-item"><p class="pt-bi-tit">'+obj.clothBeauty[i].cont[j].bi[l].tit+'</p><p class="pt-bi-promo">'+obj.clothBeauty[i].cont[j].bi[l].promo+'</p><img src="'+path+obj.clothBeauty[i].cont[j].bi[l].imgSrc+'" class="pt-bi-img" alt=""></a>');
                    bi.append(biA);
                }
                for(var m=0; m<obj.clothBeauty[i].cont[j].more.length; m++){
                    var moreA = $(' <a href="html/list.html" class="pt-more-item"><img src="'+path+obj.clothBeauty[i].cont[j].more[m]+'" class="pt-more-img" alt=""></a>');
                    more.append(moreA);
                }
            }
            var liLength = obj.clothBeauty[i].ft.length;//li数量
            var ulList = $('<ul class="pt-logo-list clearfix" style="width:'+liLength*95+'px;"></ul>')
            for(var f=0; f<obj.clothBeauty[i].ft.length; f++){
                var liItem = $('<li class="pt-logo-item"><a href="html/list.html" class="pt-logo-lk"><img src="'+pathLogo+obj.clothBeauty[i].ft[f]+'" class="pt-logo-img" alt=""></a></li>');
                ulList.append(liItem);
            }
            logoBtn.append(pre).append(next);
            logoList.append(ulList);
            ftLogo.append(logoList).append(logoBtn);
            divFt.append(ftLogo);
            bi.append(spanw).append(spanh);
            bottomInner.append(bi).append(more);
            divbtm.append(bottomInner).append(hide);
            divBottom.append(divFt);
            divTop.append(tit).append(tags);
            divName.append(divTop).append(divBottom);
            divCol.append(divName);
            $("#portal-7 .chn").append(divCol);
        }

    }
    function readDom(){
        var ulIndex = 0;
        var flag = true;
        $(".pt-logo-btn-wrap").on("click",".pt-logo-pre",function () {
            var ul =$(this).parents(".pt-logo").children(0).children(".pt-logo-list");
            var ulWidth = ul.width();
            var uli = ulWidth/4;
            if(flag){
                flag = false;
                ulIndex--;
                if(ulIndex < 0){
                    ul.css({"left":-uli*2});
                    ulIndex = 1;
                }
                ul.stop().animate({"left":-uli*ulIndex},1000,"easeOutBack",function () {
                    flag=true;
                });
            }
        })
        $(".pt-logo-btn-wrap").on("click",".pt-logo-next",function () {
            var ul =$(this).parents(".pt-logo").children(0).children(".pt-logo-list");
            var ulWidth = ul.width();
            var uli = ulWidth/4;
            if(flag){
                flag = false;
                if(ulIndex == 2){
                    ul.css({"left":0});
                    ulIndex = 0;
                }
                ulIndex++;
                ul.stop().animate({"left":-uli*ulIndex},1000,"easeOutBack",function () {
                    flag=true;
                });
            }
        })
    }

    //虚拟
    var url8 = "http://localhost:63342/javascript/JD/json/xuni.json"  //json数据地址
    $.ajax({
        url:url8,
        success:function (clothBeauty) {
            var obj = eval(clothBeauty);
            xuni(obj);
            xuniDom();
        },
        error:function (msg) {
            alert(msg);

        }
    })
    function  xuni(arr){
        var path = "http://localhost:63342/javascript/JD/img/index/xuni/";
        var pathLogo = "http://localhost:63342/javascript/JD/img/index/xuni/logo/"
        for(var i=0; i<arr.clothBeauty.length; i++){
            var a = i+1;
            var divCol = $('<div class="chn-col chn-col-'+a+'"></div>');//最外面的模块
            var divName = $('<div class="pt pt-'+arr.clothBeauty[i].className+'"></div>');// class名加载
            var divTop = $('<div class="pt-top"></div>');//顶部
            var tit = $('<h3 class="pt-tit">'+arr.clothBeauty[i].names+'</h3>');//tit名字加载
            var tags = $('<div class="pt-tags"></div>');
            for(var k=0; k<arr.clothBeauty[i].pags.length; k++){
                tags.append(' <a href="html/list.html" class="pt-tags-item">'+arr.clothBeauty[i].pags[k]+'</a>')
            }// tags循环
            var divBottom = $('<div class="pt-bottom-wrap"></div>');//底部外套
            var divFt = $('<div class="pt-ft"></div>');
            var ftLogo = $('<div class="pt-logo"></div>');
            var logoList = $('<div class="pt-logo-list-wrap"></div>');
            var logoBtn = $('<div class="pt-logo-btn-wrap"></div>');
            var pre = $('<a href="html/list.html" class="pt-logo-btn pt-logo-pre iconfont">&#xe640;</a>');
            var next = $('<a href="html/list.html" class="pt-logo-btn pt-logo-next iconfont">&#xe63f;</a>');
            for(var j=0; j<arr.clothBeauty[i].cont.length; j++){
                var b=j+1;
                var cover = $('<div class="pt-cover"></div>');
                var bi = $('<div class="pt-bi pt-bi-2"></div>');
                var more = $('<div class="pt-more"></div>');
                var spanw = $('<span class="pt-bi-split pt-bi-split-w"></span>');
                var spanh = $('<span class="pt-bi-split pt-bi-split-h"></span>');
                var bottomInner = $('<div class="pt-bottom-inner"></div>');
                var hide = $(' <div class="pt-bottom-hide"></div>');
                var divbtm = $('<div class="pt-bottom pt-bottom-'+b+'"></div>');
                divbtm.append(bottomInner).append(hide);

                var coverA = $(' <a href="html/list.html" class="pt-cover-lk"> <img src="'+path+arr.clothBeauty[i].cont[j].cover+'" class="pt-cover-img" alt=""></a>');
                cover.append(coverA);
                bi.append(spanw).append(spanh);
                divBottom.append(divbtm);
                bottomInner.append(cover).append(bi).append(more);

                for(var l=0; l<arr.clothBeauty[i].cont[j].bi.length; l++){
                    var biA = $(' <a href="html/list.html" class="pt-bi-item"><p class="pt-bi-tit">'+arr.clothBeauty[i].cont[j].bi[l].tit+'</p><p class="pt-bi-promo">'+arr.clothBeauty[i].cont[j].bi[l].promo+'</p><img src="'+path+arr.clothBeauty[i].cont[j].bi[l].imgSrc+'" class="pt-bi-img" alt=""></a>');
                    bi.append(biA);
                }
                for(var m=0; m<arr.clothBeauty[i].cont[j].more.length; m++){
                    var moreA = $(' <a href="html/list.html" class="pt-more-item"><img src="'+path+arr.clothBeauty[i].cont[j].more[m]+'" class="pt-more-img" alt=""></a>');
                    more.append(moreA);
                }


            }
            var liLength = arr.clothBeauty[i].ft.length;//li数量
            var ulList = $('<ul class="pt-logo-list clearfix" style="width:'+liLength*95+'px;"></ul>')
            for(var f=0; f<arr.clothBeauty[i].ft.length; f++){
                var liItem = $('<li class="pt-logo-item"><a href="html/list.html" class="pt-logo-lk"><img src="'+pathLogo+arr.clothBeauty[i].ft[f]+'" class="pt-logo-img" alt=""></a></li>');
                ulList.append(liItem);
            }

            logoBtn.append(pre).append(next);
            logoList.append(ulList);
            ftLogo.append(logoList).append(logoBtn);
            divFt.append(ftLogo);
            divBottom.append(divFt);
            divTop.append(tit).append(tags);
            divName.append(divTop).append(divBottom);
            divCol.append(divName);
            $("#portal-8 .chn").append(divCol);
        }

    }
    function xuniDom(){
        var ulIndex = 0;
        var flag = true;
        $(".pt-logo-btn-wrap").on("click",".pt-logo-pre",function () {
            var ul =$(this).parents(".pt-logo").children(0).children(".pt-logo-list");
            var ulWidth = ul.width();
            var uli = ulWidth/4;
            if(flag){
                flag = false;
                ulIndex--;
                if(ulIndex < 0){
                    ul.css({"left":-uli*2});
                    ulIndex = 1;
                }
                ul.stop().animate({"left":-uli*ulIndex},1000,"easeOutBack",function () {
                    flag=true;
                });
            }
        })
        $(".pt-logo-btn-wrap").on("click",".pt-logo-next",function () {
            var ul =$(this).parents(".pt-logo").children(0).children(".pt-logo-list");
            var ulWidth = ul.width();
            var uli = ulWidth/4;
            if(flag){
                flag = false;
                if(ulIndex == 2){
                    ul.css({"left":0});
                    ulIndex = 0;
                }
                ulIndex++;
                ul.stop().animate({"left":-uli*ulIndex},1000,"easeOutBack",function () {
                    flag=true;
                });
            }
        })
    }

    //够特色
    $.ajax({
        url:url,
        success:function (gts) {
            var obj = eval(gts);
            var path = "http://localhost:63342/javascript/JD/img/index/gts/";
            for(var i=0; i<obj.gts.length; i++){
                $(".gts-list").append('<li class="gts-item"><a href="html/list.html" class="gts-lk"><div class="gts-bg" style="background-color:'+obj.gts[i].bgcolor+'"><div class="gts-info"><h4 class="gts-info-tit">'+obj.gts[i].tit+'</h4><p class="gts-info-desc">'+obj.gts[i].desc+'</p></div></div><img src="'+path+obj.gts[i].imgSrc+'" class="gts-img" alt=""></a></li>')
            }
        }
    })

    //还没逛够
    var url9 = "http://localhost:63342/javascript/JD/json/more.json"  //json数据地址
    $.ajax({
        url:url9,
        success:function (more) {
            var obj = eval(more);
            var path = "http://localhost:63342/javascript/JD/img/index/more/";
            for(var i=0; i<obj.more.length; i++){
                var num = i+1
                $(".more-list").append('<li class="more-item more-item-'+num+'"><a href="html/list.html" class="more-item-lk"><img src="'+path+obj.more[i].imgSrc+'" class="more-img" alt=""><div class="more-info"><p class="more-info-name">'+obj.more[i].name+'</p><p class="more-info-price"><i>￥</i><span class="more-info-price-txt">'+obj.more[i].price+'</span></p></div></a></li>')
            }
        },
        error:function (msg) {
            alert(msg);
        }
    })

    //滚动事件
    var flag = true;
    var timeout;
    $(window).scroll(function () {
        clearTimeout(timeout)
        var oTop = $(window).scrollTop(); //滚动条滚动高度  文档被卷去的距离
        if(oTop>= 1650){
            $(".newyear-fix").css("bottom","0");
        }else{
            $(".newyear-fix").css("bottom","-85px");
        }
        if(oTop>= 666){
            $("#search").addClass("search-fix");
            $(".search-fix").stop().animate({"top":0},500,"easeOutQuart");
        }else{
            $("#search").removeClass("search-fix").css({"top":""});
        }

        //楼梯
        if(oTop >= 2166) {
            timeout=setTimeout(function () {
                $(".lift").fadeIn(300,"easeInExpo");
            },300)
        }else{
            timeout=setTimeout(function () {
                $(".lift").fadeOut(300,"easeInExpo");
            },300)
        }


        if(flag){
            $(".lt").each(function (index,b) {
                var sHeight = $(b).offset().top;
                if(oTop+$(window).height()/2>=sHeight){
                    $(".lift-item").eq(index).addClass("lift-item-on").siblings().removeClass("lift-item-on");
                }else{
                    return false; //停止便利
                }
            })
        }
    })
    $(".lift").on("click",".lift-item",function (e) {
        flag=false;
        var index = $(this).index();
        var sTop = $(".lt").eq(index).offset().top; //每个lt 距离文档顶部的高度
        $("body").stop().animate({scrollTop:sTop-48},1000,"easeOutQuart",function () {
            flag=true;
        });//回到对应位置
        $(this).addClass("lift-item-on").siblings().removeClass("lift-item-on");
    });

    //回到顶部
    $(".lift-item-top").click(function () {
        $("body").stop().animate({scrollTop:0},1000,"easeOutQuart");
    })

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

    // var flag5 = true;
    //     $(document).click(function(){
    //         if(flag5){
    //             flag2 = true;
    //             //  flag3 = true;
    //             flag4 = true;
    //             $(".jd-toolbar-tab").children(".tab-text").css("display","block");
    //             $(".jd-toolbar-wrap").removeClass("jd-toolbar-wrap-on");
    //         }else{
    //
    //         }
    //     })
































})