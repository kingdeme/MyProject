/**
 * Created by Administrator on 2017/1/12.
 */
$(function () {
    $(".qrcode-main").mouseenter(function () {
        $(".qrcode-img").stop().animate({left:0},300,function () {
            $(".qrcode-help").css("display","block");
        });

    }).mouseleave(function () {
        $(".qrcode-help").css("display","none");
        $(".qrcode-img").stop().animate({left:64},300);

    })

    $(".login-tab").click(function () {
        $(this).children("a").addClass("checked");
        $(this).siblings().children("a").removeClass("checked");
        var index = $(this).index()
        console.log(index);
        $(".show").eq(index).removeClass("hide").siblings(".show").addClass("hide");
    })

    $(".login-btn").click(function () {
        var userName = $("#loginname").val();
        var userPwd = $("#pwd").val();
        if($("#pwd").val() == "" &&$("#loginname").val() == ""){
            $(".error-all").removeClass("hide").siblings(".msg-error").addClass("hide");
            $(".item-fore1").addClass("item-error");
            $(".item-fore2").addClass("item-error");
        }else{
            if($("#pwd").val() == ""){
                $(".error-pwd").removeClass("hide").siblings(".msg-error").addClass("hide");
                $(".item-fore1").removeClass("item-error");
                $(".item-fore2").addClass("item-error");
            }else if($("#loginname").val() == ""){
                $(".error-name").removeClass("hide").siblings(".msg-error").addClass("hide");
                $(".item-fore2").removeClass("item-error");
                $(".item-fore1").addClass("item-error");
            }else{
                $.post("../library/login1.php",{user:userName,pwd:userPwd},function (data) {
                    if(data == 0){
                        alert("登陆成功");
                        location.href = "../index.html";
                        $.cookie("userName",userName,{expires:7,path:"/"});
                    }else {
                        console.log(data)
                    }
                })
            }
        }
    })


    function fb() {
        $("#loginname").focus(function () {
            $(".item-fore1").removeClass("item-error");
        }).blur(function () {
            if($(this).val() == ""){
                $(".item-fore1").addClass("item-error");
                $(".error-name").removeClass("hide").siblings(".msg-error").addClass("hide");
            }else if($("#pwd").val() == ""){
                $(".item-fore2").addClass("item-error");
                $(".error-pwd").removeClass("hide").siblings(".msg-error").addClass("hide");
            }else{
                $(".item-fore1").removeClass("item-error");
                $(".error-name").addClass("hide");
            }
        })
        $("#pwd").focus(function () {
            $(".item-fore2").removeClass("item-error");
        }).blur(function () {
            if($(this).val() == ""){
                $(".item-fore2").addClass("item-error");
                $(".error-pwd").removeClass("hide").siblings(".msg-error").addClass("hide");
            }else if($("#loginname").val() == ""){
                $(".item-fore1").addClass("item-error");
                $(".error-name").removeClass("hide").siblings(".msg-error").addClass("hide");
            }else{
                $(".item-fore2").removeClass("item-error");
                $(".error-pwd").addClass("hide");
                $(".error-all").addClass("hide");
            }
        })
    }


    var flag = true;
    $(".jdcheckbox").change(function () {
        if(flag){
            flag = false;
            $(".msg-wran").removeClass("hide");
            $(".msg-error").addClass("hide")
        }else{
            flag = true;
            $(".msg-wran").addClass("hide")
            fb();
        }
    })
})