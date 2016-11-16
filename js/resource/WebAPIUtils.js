/**
 * Created by Administrator on 2016/11/14 0014.
 */
var creator=require("./creators");
var Data=require("./getDataStream");

function initData(){
    creator.receiveTweet(Data)
}

module.exports={
    initData:initData
};
