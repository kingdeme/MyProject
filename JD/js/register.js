/**
 *
 * Created by Administrator on 2017/1/12.
 */
    /**
     * Created by Administrator on 2016/12/14.
     */


    /*------------------用户名验证---------------------------*/
    var oUserName = document.getElementById("userName");
    oUserName.onfocus = checkUserName;

    oUserName.onblur = checkUserName;

    oUserName.onkeyup = checkUserName;


//验证用户名
    function checkUserName(e) {
        var _e = window.event || e;
        var uName = oUserName.value;  //当前用户名的内容
        var oBox = oUserName.parentNode;  //表单项
        var oTip = oBox.nextElementSibling;  //提示信息项
        var oSpan = oTip.lastElementChild;  //span

        //_e.type  返回的是 事件名字
        if (_e.type == "focus") {     //获取焦点
            if (uName.length == 0) { // 用户名为空
                oBox.className = "box";
                oTip.className = "tip default"
                oSpan.innerHTML = "支持汉字、数字、字母、-、_的组合，4-20个字符";
            }
        }else if(_e.type == "blur"){//失去焦点
            if(uName.length == 0){        // 用户名为空
                oBox.className = "box";
                oTip.className = "tip hide";
            }
        }else {
            if(uName.length == 0){        // 用户名为空
                oBox.className = "box error";
                oTip.className = "tip error";
                oSpan.innerHTML = "请输入用户名";
            }else{
                var reg = /^[\u4e00-\u9fa5\w-]+$/;  //验证用户名的格式
                if(reg.test(uName)){  //格式正确时
                    if(uName.length >= 4 && uName.length<=20){ //长度符合时
                        oBox.className = "box right";
                        oTip.className = "tip hide";
                        return true;
                    }else{  //长度不符合
                        oBox.className = "box error";
                        oTip.className = "tip error";
                        oSpan.innerHTML = "请输入不小于4个且不大于20个字符"
                    }
                }else{
                    oBox.className = "box error";
                    oTip.className = "tip error";
                    oSpan.innerHTML = "格式错误，仅支持汉字、字母、数字、“-”“_”的组合，4-20个字符"
                }
            }
        }

    }

    /*--------------验证密码-----------------*/
    var oPwd = document.getElementById("pwd");
    oPwd.onfocus = checkPwd;
    oPwd.onblur = checkPwd;
    oPwd.onkeyup = checkPwd;

//验证密码
    function checkPwd(e) {
        var _e = window.event || e;
        var uPwd = oPwd.value;  //当前用户名的内容
        var oBox = oPwd.parentNode;  //表单项
        var oTip = oBox.nextElementSibling;  //提示信息项
        var oSpan = oTip.lastElementChild;  //span


        var uPwd2 = oPwd2.value;
        var oBox2 = oPwd2.parentNode;  //表单项
        var oTip2 = oBox2.nextElementSibling;  //提示信息项
        var oSpan2 = oTip2.lastElementChild;  //span

        //_e.type  返回的是 事件名字
        if (_e.type == "focus") {     //获取焦点
            if (uPwd.length == 0) { // 用户名为空
                oBox.className = "box";
                oTip.className = "tip default"
                oSpan.innerHTML = "建议使用数字、字母、特殊符号两种以上的组合，6-20个字符";
            }
        }else if(_e.type == "blur"){//失去焦点
            if(uPwd.length == 0){        // 密码为空
                oBox.className = "box";
                oTip.className = "tip hide";
            }else{
                if(uPwd2.length == 0){
                    oBox2.className = "box";
                    oTip2.className = "tip hide";
                }else{
                    if(oPwd2.value == oPwd.value){
                        oBox2.className = "box right";
                        oTip2.className = "tip hide";
                        return true;
                    }else{
                        oBox2.className = "box error";
                        oTip2.className = "tip error";
                        oSpan2.innerHTML = "两次输入的密码不一致";
                    }
                }
            }
        }else {  //用户输入时
            if(uPwd.length == 0){        // 密码为空
                oBox.className = "box error";
                oTip.className = "tip error";
                oSpan.innerHTML = "请输入密码";
            }else{  //密码不为空时
                if(uPwd.length >=6 &&uPwd.length <= 16){ //密码长度正确
                    oBox.className = "box right";

                    //密码强度提示
                    var level = getLevel(uPwd);
                    switch (level){
                        case 1:
                            oTip.className = "tip ruo";
                            oSpan.innerHTML = '有被盗风险,建议使用字母、数字和符号两种及以上组合';
                            break;
                        case 2:
                            oTip.className = "tip zhong";
                            oSpan.innerHTML = '安全强度适中，可以使用三种以上的组合来提高安全强度';
                            break;
                        case 3:
                            oTip.className = "tip qiang";
                            oSpan.innerHTML = '你的密码很安全';
                            break;
                    }
                    return true;

                }else{  //密码长度不正确
                    oBox.className = "box error";
                    oTip.className = "tip error";
                    oSpan.innerHTML = "请输入不小于6个且不大于16个字符的密码";
                }
            }
        }
    }

//检测密码强度
    function getLevel(str){
        var regNumber = /\d+/;  //数字
        var regWord = /[a-zA-Z]+/;  //字母
        var regOther = /[^a-zA-Z\d]+/;  //其他
        var level = 0;

        if(regNumber.test(str)){
            level++;
        }

        if(regWord.test(str)){
            level++;
        }

        if(regOther.test(str)){
            level++;
        }
        return level;
    }

    /*----------------验证重复密码-----------*/
    var oPwd2 = document.getElementById("pwd2");
    oPwd2.onfocus = checkPwd2;
    oPwd2.onblur = checkPwd2;
    oPwd2.onkeyup = checkPwd2;

//再次验证密码
    function checkPwd2(e) {
        var _e = window.event || e;
        var uPwd2 = oPwd2.value;  //当前用户名的内容
        var oBox = oPwd2.parentNode;  //表单项
        var oTip = oBox.nextElementSibling;  //提示信息项
        var oSpan = oTip.lastElementChild;  //span
        var uPwd = oPwd.value;  //当前用户名的内容

        //_e.type  返回的是 事件名字
        if (_e.type == "focus") {     //获取焦点
            if (uPwd.length == 0) { // 用户名为空
                oBox.className = "box error";
                oTip.className = "tip error"
                oSpan.innerHTML = "请先设置密码";
            }else{
                if(uPwd2.length == 0){
                    oBox.className = "box";
                    oTip.className = "tip default"
                    oSpan.innerHTML = "请再次输入密码";
                }else{
                    if(oPwd2.value == oPwd.value){
                        oBox.className = "box right";
                        oTip.className = "tip hide";
                        return true;
                    }else{  //密码长度不正确
                        oBox.className = "box error";
                        oTip.className = "tip error";
                        oSpan.innerHTML = "两次输入的密码不一致";
                    }
                }
            }
        }else if(_e.type == "blur"){//失去焦点
            if(uPwd2.length == 0){        // 密码为空
                oBox.className = "box";
                oTip.className = "tip hide";
            }
        }else {  //用户输入时
            if(uPwd2.length == 0){        // 密码为空
                oBox.className = "box error";
                oTip.className = "tip error";
                oSpan.innerHTML = "请输入密码";
            }else{  //密码不为空时
                if(oPwd2.value == oPwd.value){
                    oBox.className = "box right";
                    oTip.className = "tip hide";
                    return true;
                }else{  //密码长度不正确
                    oBox.className = "box error";
                    oTip.className = "tip error";
                    oSpan.innerHTML = "两次输入的密码不一致";
                }
            }
        }
    }

    /*----------------验证邮箱-----------*/

    var oEmail = document.getElementById("email");
    oEmail.onfocus = checkEmail;
    oEmail.onblur = checkEmail;
    oEmail.onkeyup = checkEmail;

//验证邮箱
    function checkEmail(e){
        var _e = window.event || e;
        var uEmail = oEmail.value;  //当前用户名的内容
        var oBox = oEmail.parentNode;  //表单项
        var oTip = oBox.nextElementSibling;  //提示信息项
        var oSpan = oTip.lastElementChild;  //span

        //_e.type  返回的是 事件名字
        if (_e.type == "focus") {     //获取焦点
            if (uEmail.length == 0) { // 用户名为空
                oBox.className = "box";
                oTip.className = "tip default"
                oSpan.innerHTML = "完成验证后，你可以使用该邮箱登录和找回密码";
            }
        }else if(_e.type == "blur"){//失去焦点
            if(uEmail.length == 0){        // 用户名为空
                oBox.className = "box";
                oTip.className = "tip hide";
            }
        }else {
            if(uEmail.length == 0){        // 用户名为空
                oBox.className = "box error";
                oTip.className = "tip error";
                oSpan.innerHTML = "请输入正确的邮箱格式";
            }else{
                var reg = /^[\w]{6,20}@[\w]{2,6}\.(com|cn)$/;  //验证用户名的格式
                if(reg.test(uEmail)){  //格式正确时
                    oBox.className = "box right";
                    oTip.className = "tip hide";
                    return true;
                }else{
                    oBox.className = "box error";
                    oTip.className = "tip error";
                    oSpan.innerHTML = "格式错误，请输入正确的邮箱格式"
                }
            }
        }

    }

    /*----------------验证手机号-----------*/
    var oMobile = document.getElementById("mobile");
    oMobile.onfocus = checkMobile;
    oMobile.onblur = checkMobile;
    oMobile.onkeyup = checkMobile;

//验证手机号
    function checkMobile(e) {
        var _e = window.event || e;
        var uMobile = oMobile.value;  //当前用户名的内容
        var oBox = oMobile.parentNode;  //表单项
        var oTip = oBox.nextElementSibling;  //提示信息项
        var oSpan = oTip.lastElementChild;  //span

        //_e.type  返回的是 事件名字
        if (_e.type == "focus") {     //获取焦点
            if (uMobile.length == 0) { // 用户名为空
                oBox.className = "box";
                oTip.className = "tip default"
                oSpan.innerHTML = "完成验证后，你可以使用该手机登录和找回密码";
            }
        }else if(_e.type == "blur"){//失去焦点
            if(uMobile.length == 0){        // 用户名为空
                oBox.className = "box";
                oTip.className = "tip hide";
            }
        }else {
            if(uMobile.length == 0){        // 用户名为空
                oBox.className = "box error";
                oTip.className = "tip error";
                oSpan.innerHTML = "请输入正确的手机号码";
            }else{
                var reg=/^1[\d]{10}/;  //验证用户名的格式
                if(reg.test(uMobile)){  //格式正确时
                    oBox.className = "box right";
                    oTip.className = "tip hide";
                    return true;
                }else{
                    oBox.className = "box error";
                    oTip.className = "tip error";
                    oSpan.innerHTML = "格式错误，请输入正确的手机号码"
                }
            }
        }
    }

    /*----------------验证验证码-----------*/
    var oCode = document.getElementById("code");
    var oUpdateCode = document.getElementById("updateCode");
    oCode.onfocus = checkCode;
    oCode.onblur = checkCode;
    oCode.onkeyup = checkCode;

//验证验证码
    function checkCode(e) {
        var _e = window.event || e;
        var uCode = oCode.value;  //当前用户名的内容
        var oBox = oCode.parentNode;  //表单项
        var oTip = oBox.nextElementSibling;  //提示信息项
        var oSpan = oTip.lastElementChild;  //span
        var updateCode = oUpdateCode.innerHTML;

        //_e.type  返回的是 事件名字
        if (_e.type == "focus") {     //获取焦点
            if (uCode.length == 0) { // 用户名为空
                oBox.className = "box";
                oTip.className = "tip default"
                oSpan.innerHTML = "请输入正确的验证码";
            }
        }else if(_e.type == "blur"){//失去焦点
            if(uCode.length == 0){        // 用户名为空
                oBox.className = "box";
                oTip.className = "tip hide";
            }
        }else {
            if(uCode.length == 0){        // 用户名为空
                oBox.className = "box error";
                oTip.className = "tip error";
                oSpan.innerHTML = "请输入正确的验证码";
            }else{
                if(oCode.value == updateCode){  //格式正确时
                    oBox.className = "box right";
                    oTip.className = "tip hide";
                    return true;
                }else{
                    oBox.className = "box error";
                    oTip.className = "tip error";
                    oSpan.innerHTML = "验证码输入错误，请重新输入"
                }
            }
        }
    }

    /*--------------点击注册按钮时-----------------*/
    var oCk = document.getElementById("ck");
    var oBtn = document.getElementById("btn")
    oBtn.onclick = function () {
        var flag = oCk.checked;
        var success = checkUserName() && checkPwd() && checkPwd2() && checkEmail() && checkMobile() && checkCode();
        if(success){
            if(!flag){
                alert("请确认《京东用户注册协议》");
            }else{
                alert("恭喜你，注册成功！");
                location.href = "login.html";
            }
        }else{
            // alert("你输入的信息不正确，请重新输入！");
        }
    }