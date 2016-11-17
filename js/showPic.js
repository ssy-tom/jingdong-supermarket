/**
 * Created by Administrator on 2016/11/11 0011.
 */
var React = require("react");
//var ReactDom = require("react-dom");
var $ = require("jquery");
var ShowPicContent = require("./showPicContent");
var ShowPicTab = require("./showPicTab");
var Carousel=require("./carousel");
var showPic = React.createClass({
    getInitialState: function () {
        return {
            isShow: false,
            tabData: ["家用电器", "手机/ 运营商/ 数码", "电脑办公", "家居/ 家具/ 家装/ 厨具"
                , "男装/ 女装/ 童装/ 内衣", "个护化妆/ 清洁用品/ 宠物", "鞋靴/ 箱包/ 珠宝/ 奢侈品"
                , "运动/ 户外/ 钟表", "汽车/ 汽车用品", "母婴/ 玩具乐器", "食品/ 酒类/ 生鲜/ 特产",
                "医药保健", "图书/ 音像/ 电子书", "彩票/ 旅行/ 充值/ 票务", "理财/ 众筹/ 白条/ 保险"]
        }
    },
    componentWillMount: function () {

    },
    render: function () {
        return <div className="show-inner">
            <div className="show-left" >
                <ShowPicTab></ShowPicTab>
                <ShowPicContent data={this.state.tabData}></ShowPicContent>
            </div>
            <div className="show-middle">
                <div className="middle-container">
                    <Carousel></Carousel>

                </div>
            </div>
            <div className="show-right">

            </div>
        </div>
    },

    componentDidMount: function () {
    }
});

module.exports = showPic;