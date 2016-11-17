/**
 * Created by Administrator on 2016/11/7 0007.
 */
var React = require("react");
var ReactDom = require("react-dom");
var $ = require("jquery");
//var reactRouter = require('react-router');
var Header = require("./header");
var FloorLine = require("./floorLine");
var Nav = require("./nav");
var ShowPic = require("./showPic");
//var data=require("./resource/getDataStream");
var Frame = React.createClass({
    getInitialState: function () {
        return {
            //控制显示隐藏
            isShow: false,
            //楼层跳转的高度数组
            baseArr: [],
            //最外层容器控制楼层跳转
            frame: null
        }
    },

    render: function () {
        //console.log(this.state.isShow);
        var skeleton = <div className="frame" id='frame' onScroll={this.floorJump} ref="frame">
            <FloorLine onShow={this.state.isShow} baseArr={this.state.baseArr} frame={this.state.frame}></FloorLine>
            <div className="nav">
                <Nav></Nav>
            </div>
            <div className="header">
                <Header></Header>
            </div >
            <div className="show-pic">
                <ShowPic></ShowPic>
            </div >
            <div className="seckill"></div >
            <div className="enjoy-bg"></div >
            <div className="break-in-show"></div >
            <div className="get-paper-center"></div >
            <div className="pic-banner"></div>
            <div className="quality" ref="quality"></div >
            <div className="pic-small-baner"></div>
            <div className="clothes" ref="clothes"></div >
            <div className="invented" ref="invented"></div >
        </div>;
        return skeleton;
    },
    componentDidMount: function () {

        var baseArr = this.refs;
        var frame = baseArr['frame'];
        delete baseArr['frame'];
        var arr = [];
        for (var i in baseArr) {
            arr.push(Math.floor($(baseArr[i]).position().top))
        }

        this.setState({
            baseArr: arr,
            frame: frame
        });
    },
    floorJump: function (e) {
        //console.log("滑动");
        var frame = this.state.frame;
        //目前滑动的距离
        var baseScroll = $(frame).scrollTop() + $(window).height();
        //跳转模块数组
        var baseArr = this.state.baseArr;
        var that = this;
        var heightIterator = {
            baseArr: baseArr,
            baseScroll: baseScroll,
            baseIndex: 0,
            next: function () {
                this.baseIndex++;
                return this.baseArr[this.baseIndex];
            },
            thisplace: function () {
                return this.baseArr[this.baseIndex];
            },
            thisIndex: function () {
                return this.baseIndex;
            },
            reset: function () {
                this.baseIndex = 0;
            },
            find: function (index) {
                this.baseIndex = index;
                return this.baseArr[index];
            },
            length: function () {
                return this.baseArr.length;
            },
            initShow: function () {
                if (this.baseScroll > this.baseArr[0]) {
                    that.setState({isShow: true})
                } else {
                    that.setState({isShow: false})
                }
            }
        };
        heightIterator.initShow();
    },

    getTop: function (value, selectWhitchDom) {
        var changeAttr = {};
        changeAttr[selectWhitchDom] = value;
        this.setState(changeAttr);
    }
});

ReactDom.render(<Frame />, document.getElementById('general-frame'));


