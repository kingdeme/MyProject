/**
 * Created by Administrator on 2017/1/10.
 */
$(function () {
    var url = "../json/index.json"  //json数据地址

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

    //数据加载
    //判断是否有数据 来显示隐藏购物车
    var oCount = getTotal();

    if(oCount){//有数据
        $(".cart-content").removeClass("hide");
        $(".cart-empty").addClass("hide");
    }else{//没有数据
        $(".cart-content").addClass("hide");
        $(".cart-empty").removeClass("hide");
    }

    //获取本地数据 并添加数据
    var arr = getGoodsList();
    for(var i=0,len=arr.length; i<len; i++){
        var good = arr[i];
        console.log(good);
        $(".shop-item-list").append('<div pid="'+good.pid+'" class="item-full"><div class="item-header clearfix"><div class="f-txt"><a href="javascript:void (0)"><span class="full-icon">换购<b></b></span>活动商品已购满¥2999.00，可加价换购商品1件</a><a href="javascript:void (0)" class="btn-1">换购商品</a><a href="javascript:void (0)" class="btn-2">&nbsp;去凑单&nbsp;></a></div><div class="f-price"><strong>￥'+(good.price*good.count).toFixed(2)+'</strong></div></div><div class="item-item clearfix"><div class="item-form"><div class="cell p-checkbox"><div class="cart-checkbox"><input type="checkbox" name="checkItem" checked="checked" class="itemcheckbox"><span class="line-cirlce"></span></div></div><div class="cell p-goods"><div class="goods-item clearfix"><div class="p-img"><a href="javascript:void (0)"><img src="'+good.imgSrc+'" alt=""></a></div><div class="item-msg"><div class="p-name"><a href="javascript:void (0)">'+good.pName+'</a></div><div class="p-extend"><span class="promise"></span><span class="promise"><i class="jd-service-icon"></i><a href="javascript:void (0)" class="jd-service">购买增值保障</a></span></div></div></div></div><div class="cell p-props"><div class="props-txt">颜色：'+good.desc+'</div></div><div class="cell p-price"><strong>￥'+good.price+'</strong><a href="javascript:void (0)" class="sales-promotion">更多促销</a></div><div class="cell p-quantity"><div class="quantity-form"><a href="javascript:void (0)" class="down disabled">-</a><input type="text" class="itxt" readonly value="'+good.count+'"><a href="javascript:void (0)" class="add">+</a></div><div class="quantity-txt">有货</div></div><div class="cell p-sum"><strong>￥'+(good.price*good.count).toFixed(2)+'</strong><span class="weight">'+(good.weight*good.count).toFixed(2)+'kg</span></div><div class="cell p-ops"><a href="javascript:void (0)" class="remove">删除</a><a href="javascript:void (0)" class="cart-follow">移到我的关注</a></div></div></div></div>')
        if(good.count > 1){
            $(".down").removeClass("disabled");
        }
    }
    //计算总价格
    getTotalPrice()
    function getTotalPrice() {
        var cks = $(".itemcheckbox");
        var total = 0;
        for(var i=0,len=cks.length; i<len; i++){
            if(cks[i].checked){
                var num = cks.eq(i).parents(".item-form");
                var subTotal = Number(num.children().eq(5).find("strong").html().split("￥")[1]);
                total = total+Number(subTotal);
                console.log(total)
            }
        }
        $(".price-new em").html("￥"+total.toFixed(2));
    }

    //点击checked按钮计算总价格  并且检测是否全选
    $(".itemcheckbox").change(function () {
        getTotalPrice();
        checkALL();
    })


//全选
    $(".jdchecked").change(function () {
        var flag = this.checked;
        var cks = $(".itemcheckbox");
        for (var i=0,len=cks.length; i<len; i++){
            cks[i].checked = flag;
        }
        $(".jdchecked")[0].checked = flag;
        $(".jdchecked")[1].checked = flag;
        $(".jdchecked")[2].checked = flag;
        getTotalPrice();
    })

//检测是否被全部选中

    function checkALL() {
        var flag = true;
        var cks = $(".itemcheckbox");
        for(var i=0, len=cks.length; i<len; i++){
            if(cks[i].checked == false ){
                flag = false;
                break;
            }
        }
        $(".jdchecked")[0].checked = flag;
        $(".jdchecked")[1].checked = flag;
        $(".jdchecked")[2].checked = flag;
        getTotalPrice();
    }


    //数量的增加

    $(".item-full").on("click",".add",function () {
        var count = Number($(this).prev().val()); //当前数量
        var weight = Number($(this).parents(".item-form").children().eq(5).find("span").html().split("kg")[0])/count;
        $(this).siblings(".down").removeClass("disabled");
        count += 1;
        if(count>99){
            count=99;
            $(this).addClass("disabled");
            return;
        }
        $(this).prev().val(count);
        $(this).parents(".item-form").children().find(".itemcheckbox")[0].checked = true;
        var price = Number($(this).parents(".item-form").children().eq(3).find("strong").html().split("￥")[1]).toFixed(2);//单价
        $(this).parents(".item-form").children().eq(5).find("strong").html("￥"+(price*count).toFixed(2));//小计
        $(this).parents(".item-full").children().eq(0).children().eq(1).find("strong").html("￥"+(price*count).toFixed(2));
        $(this).parents(".item-form").children().eq(5).find("span").html((weight*count).toFixed(2)+"kg");
        // $(this).parents(".cart-content").children(".cart-floatbar").find(".price-new em").html("￥"+(price*count).toFixed(2))//总价格
        // console.log($(this).parents(".item-form").children().eq(5).find("strong").html(price*count))
        checkALL();
        getTotalPrice();
        var pid = $(this).parents(".item-full").attr("pid");
        updateGoodCount(pid,1);
    })

    //

    $(".item-full").on("click",".down",function () {
        var count = Number($(this).next().val()); //当前数量
        var weight = Number($(this).parents(".item-form").children().eq(5).find("span").html().split("kg")[0])/count;
        $(this).siblings(".add").removeClass("disabled");
        count -= 1;
        $(this).parents(".item-form").children().find(".itemcheckbox")[0].checked = true;
        if(count<1){
            count=1;
            $(this).addClass("disabled");
            return;
        }
        $(this).next().val(count);

        var price = Number($(this).parents(".item-form").children().eq(3).find("strong").html().split("￥")[1]).toFixed(2);//单价
        $(this).parents(".item-form").children().eq(5).find("strong").html("￥"+(price*count).toFixed(2));//小计
        $(this).parents(".item-full").children().eq(0).children().eq(1).find("strong").html("￥"+(price*count).toFixed(2));
        $(this).parents(".item-form").children().eq(5).find("span").html((weight*count).toFixed(2)+"kg");
        // $(this).parents(".cart-content").children(".cart-floatbar").find(".price-new em").html("￥"+(price*count).toFixed(2))//总价格
        // console.log($(this).parents(".item-form").children().eq(5).find("strong").html(price*count))
        checkALL();
        getTotalPrice();
        var pid = $(this).parents(".item-full").attr("pid");
        updateGoodCount(pid,-1);

    })

    //删除
    $(".item-full").on("click",".remove",function () {
        if (confirm("你确定不要了吗？")) {
            var pid = $(this).parents(".item-full").attr("pid");
            //界面上的删除
            $(this).parents(".item-full").remove();
            //本地cookie的删除
            deleteGood(pid);
            var oCount = getTotal();
            if(oCount){//有数据
                $(".cart-content").removeClass("hide");
                $(".cart-empty").addClass("hide");
            }else{//没有数据
                $(".cart-content").addClass("hide");
                $(".cart-empty").removeClass("hide");
            }
            getTotalPrice();
        }
    })






})