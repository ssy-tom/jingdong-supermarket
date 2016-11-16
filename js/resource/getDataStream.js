/**
 * Created by Administrator on 2016/11/14 0014.
 */
var $ = require('jquery');
var creator=require("./creators");

//var arr=[1,2,3];
function getdata(){
    $.get("./js/resource/coffee.json", function (data) {
        creator.receiveTweet(data);
    });
}
module.exports=getdata;

