/**
 * Created by Administrator on 2016/12/30.
 */

//------------------------获取本地cookie中存在的数据------------------------//
function getGoodsList(){
    var jsonStr = $.cookie("goods");   //字符串  或  undefined
    if(!jsonStr){  //如果本地没有这个cookie存在
        $.cookie("goods","[]",{expires:7,path:"/"});
        jsonStr = $.cookie("goods");
    }
    var list = JSON.parse(jsonStr);
    return list;
}

 //---------------------------计算本地购物车商品的总数量---------------------//
function getTotal(){
    var list = getGoodsList();
    var total = 0;  //总数量
    for(var i = 0,len = list.length;i<len;i++){
        total+=list[i].count;
    }
    return total;
}

//-------------------------------检测商品编号是否存在-------------------//
function checkGoodsId(id,color) {
    var list = getGoodsList();
    var isHas = false;
    for(var i=0 ; i<list.length; i++){
        if(list[i].pid == id&&list[i].desc == color){
            isHas = true;
            break;
        }
    }
    return isHas;
}

//
// function checkGoodscolor(color) {
//     var list = getGoodsList();
//     var isHasc = false;
//     for(var i=0 ; i<list.length; i++){
//         if(list[i].desc == color){
//             isHasc = true;
//             break;
//         }
//         // else{
//         //     list[i].desc.push(color);
//         // }
//     }
//     return isHasc;
// }
//-------------------------添加商品到购物车-----------------------------//
function addGoodToCar(good) {
    var list = getGoodsList();
    list.push(good);
    var jsonStr = JSON.stringify(list);
    $.cookie("goods",jsonStr,{expires:7,path:"/"});
}

//------------------------根据商品编号跟新本地商品数量---------------------//
function updateGoodCount(id,color,num) {
    var list = getGoodsList();
    for(var i=0; i<list.length; i++){
        if(list[i].pid == id&&list[i].desc == color){
            list[i].count = list[i].count+num;
            break;
        }
    }
    var jsonStr = JSON.stringify(list);
    $.cookie("goods",jsonStr,{expires:7,path:"/"});
}


 //根据商品编号删除指定商品

function deleteGood(id){
    var list = getGoodsList();
    for(var i = 0,len = list.length;i<len;i++){
        if(list[i].pid==id){
            list.splice(i,1);
            break;
        }
    }
    var jsonStr = JSON.stringify(list);
    $.cookie("goods",jsonStr,{expires:7,path:"/"});
}











































