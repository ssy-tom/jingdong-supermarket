/**
 * Created by Administrator on 2016/11/9 0009.
 */
var React = require("react");
//var ReactDom = require("react-dom");
var $ = require("jquery");
var nav = React.createClass({
    getInitialState: function () {
        return {
            page1:false,
            page2:false,
            page3:false
        }
    },
    render: function () {
        return <div className="nav-inner">
            <div className="location">北京</div>
            <ul className="nav-login">
                <li>
                    <span>你好，先登录</span>
                </li>
                <li className="division">&nbsp;</li>
                <li>
                    <span>免费注册</span>
                </li>
                <li className="division"> |</li>
                <li>
                    <span>我的订单</span>
                </li>
                <li className="division"> |</li>
                <li>
                    <div><span>我的京东</span></div>
                    <div className="openPage1">下拉页面1</div>
                </li>
                <li className="division"> |</li>
                <li>
                    <span>京东会员</span>
                </li>
                <li className="division"> |</li>
                <li>
                    <span>企业采购</span>
                </li>
                <li className="division"> |</li>
                <li>
                    <div><span>客户服务</span></div>
                    <div className="openPage2">下拉页面2</div>
                </li>
                <li className="division"> |</li>
                <li>
                    <div><span>网站导航</span></div>
                    <div className="openPage3">下拉页面3</div>
                </li>
            </ul>
        </div>
    }
});
// <div className="openPage2">下拉页面2</div>
//<div className="openPage1">下拉页面1</div>
module.exports = nav;