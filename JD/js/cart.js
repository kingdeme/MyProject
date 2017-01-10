/**
 * Created by Administrator on 2017/1/10.
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

})