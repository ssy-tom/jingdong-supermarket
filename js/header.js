/**
 * Created by Administrator on 2016/11/11 0011.
 */
var React = require("react");
var ReactDom = require("react-dom");
var $ = require("jquery");
var Header = React.createClass({
    componentWillMount: function () {
        //this.props.onTopResult(11);
    },
    render: function () {
        return <div className="head-inner">
            <div className="head-img">
                <img src="images/5823ea0bN8035f7aa.gif" width="190" className="img-position"/>
            </div>
            <div className="head-middle">
                <div className="search"></div>
                <div className="search-prompt"></div>
                <div className="head-nav"></div>
            </div>
            <div className="shopping-car"></div>
        </div>
    },
    componentDidMount: function () {
        //var ele = ReactDom.findDOMNode(this);
        //var eleTop = ele.offsetTop;
        //this.props.onTopResult(eleTop,"quality");
    }
});
module.exports = Header;