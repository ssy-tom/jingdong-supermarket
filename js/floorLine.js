/**
 * Created by Administrator on 2016/11/8 0008.
 */
var React = require("react");
//var ReactDom = require("react-dom");
var $ = require("jquery");
var floor = React.createClass({
    getInitialState: function () {
        return {
            positionTop: 0,
            opacity: 0,
            eleArr: [],
            noumenon: null,
        }
    },
    componentWillReceiveProps: function (nextProps) {
        this.changeStyle(nextProps);
        this.changeHover(nextProps);
    },
    shouldComponentUpdate: function () {
        return true
    },
    clickJumpAnimation: function (e) {
        var targetDom = e.target;
        if(targetDom.id=="goToHead"){
            $('html,body,#frame').animate({scrollTop:0}, 200);
        }else{
            var arrIndex = this.state.eleArr;
            var baseArr = this.props.baseArr;
            arrIndex.length = Object.getOwnPropertyNames(arrIndex).length;
            var index = Array.prototype.indexOf.call(arrIndex, targetDom);
            var baseHeight = baseArr[index];
            $('html,body,#frame').animate({scrollTop: baseHeight + 'px'}, 300);
        }

    },
    changeStyle: function (nextProps) {
        if (nextProps.onShow == false) {
            this.setState({
                opacity: 0,
                top: this.state.positionTop
            })
        } else {
            this.setState({
                opacity: 1,
                top: this.state.positionTop
            })
        }
    },
    changeHover: function (nextProps) {
        var frame=this.props.frame;
        var baseScroll = $(frame).scrollTop() + $(window).height();
        var baseArr = nextProps.baseArr;
        var lineArr = this.state.eleArr;
        var BaseOperation = {
            baseArr: baseArr,
            baseScroll: baseScroll,
            lineArr: lineArr,
            findPosition: function (value) {
                var index;
                for (var i = 0; i <= this.baseArr.length; i++) {
                    if (value < this.baseArr[this.baseArr.length - 1]) {
                        if (this.baseArr[i] < value && value < this.baseArr[i + 1]) {
                            index = i;
                            break;
                        }
                    } else {
                        index = this.baseArr.length - 1;
                        break;
                    }
                }
                return index;
            },
            hover: function () {
                var hoverIndex = this.findPosition(this.baseScroll);
                var length = this.baseArr.length;

                if (hoverIndex != undefined && this.lineArr.length != 0) {
                    //console.log(hoverIndex, this.lineArr);
                    for (var i = 0; i < length; i++) {
                        this.lineArr[i].style.backgroundColor = ""
                    }
                    this.lineArr[hoverIndex].style.backgroundColor = "red"
                }

            }
        };
        BaseOperation.hover();
    },
    componentWillMount: function () {
        //this.changeStyle({onshow: true})
    },
    render: function () {
        var style = {
            opacity: this.state.opacity,
            left: '10px',
            top: this.state.positionTop
        };
        return <div className="global-line" style={style} ref="global-line">
            <div className="line-inner-block" ref="0" onClick={this.clickJumpAnimation}>享品质</div>
            <div className="line-inner-block" ref="1" onClick={this.clickJumpAnimation}>服饰美妆</div>
            <div className="line-inner-block" ref="2" onClick={this.clickJumpAnimation}>家电手机</div>
            <div className="line-inner-block"><span>电脑数码</span></div>
            <div className="line-inner-block"><span>3 C运动</span></div>
            <div className="line-inner-block"><span>爱吃</span></div>
            <div className="line-inner-block"><span>母婴家居</span></div>
            <div className="line-inner-block"><span>图书汽车</span></div>
            <div className="line-inner-block"><span>图书汽车</span></div>
            <div className="line-inner-block"><span>虚拟</span></div>
            <div className="line-bottom-block" onClick={this.clickJumpAnimation} id="goToHead">顶部</div>
        </div>
    },
    componentDidMount: function () {
        var ele = this.refs["global-line"];
        console.log(ele)
        var eleTop = ($(window).height() - $(ele).height()) / 2;
        var eleArr = this.refs;
        this.setState({
            noumenon: ele,
            positionTop: eleTop,
            eleArr: eleArr
        });
    }
});
module.exports = floor;