/**
 * Created by Administrator on 2016/11/16 0016.
 */
var React = require("react");
var ReactDom = require("react-dom");
var $ = require("jquery");
var carousel = React.createClass({
    getInitialState: function () {
        return {
            buttonShow: false,
            carouselObj: null,
            currentIndex: 0
        }
    },
    render: function () {
        //console.log("12314")
        return <div className="carousel" onMouseEnter={this.changeButtonShow} onMouseLeave={this.changeButtonShow}>
            <img src="images/582a7cb0N668fc5aa.jpg" style={{display:'inline'}}/>
            <img src="images/582a63ddN2383464a.jpg"/>
            <img src="images/582ab579Nb4fec783.jpg"/>
            <img src="images/582ae15cNd5552103.png"/>
            <img src="images/5823ea0bN8035f7aa.gif"/>
            <img src="images/5829a258N53b0a17e.jpg"/>
            <img src="images/58292a17Na7495411.jpg"/>
            <img src="images/582945b9N4b43a740.jpg"/>
            <img src="images/582971e0Nf524c907.jpg"/>
            <ImgButton ifShow={this.state.buttonShow} carouselObj={this.state.carouselObj}></ImgButton>
            <PositionShowLine carouselObj={this.state.carouselObj}
                              currentIndex={this.state.currentIndex}
                              circleHover={this.circleHover}
            ></PositionShowLine>
        </div>
    },
    changeButtonShow: function (e) {
        if (e.type === "mouseenter") {
            //console.log("123");
            this.setState({
                buttonShow: true
            })
        } else {
            this.setState({
                buttonShow: false
            })
        }
    },
    circleHover: function (e) {
        var carouselObj = this.state.carouselObj;

        if(e.type=="mouseenter"){
            carouselObj.stopMove();
            var index = $(e.target).index();
            carouselObj.currentIndex = index;
            carouselObj.selectMove(index);
            this.setState({
                carouselObj: carouselObj,
                currentIndex: carouselObj.currentIndex
            });
            console.log("enter")
        }else{
            console.log("leave")
            carouselObj.moveByTime();
        }


    },
    componentDidMount: function () {
        //console.log("123123");
        //所有图片放入全局变量 基本参数设置
        var imgArr = $(ReactDom.findDOMNode(this)).children('img');
        //轮播时间和背景渐变时间 单位秒
        var carouselTime = 5;
        var fadeTime = 0.5;
        var that = this;
        //轮播类
        var Carousel = function (imgArr, carouselTime, fadeTime, that) {
            this.imgArr = imgArr;
            this.imgTime = carouselTime * 1000;
            this.fadeTime = fadeTime * 1000;
            this.timeGo = null;
            this.currentIndex = 0;
            this.moveByTime = function () {
                this.timeGo = setInterval(function () {
                    var imgArr = this.imgArr;
                    var ele = null;
                    if (this.currentIndex >= imgArr.length - 1) {
                        this.currentIndex = -1;
                    }
                    ele = imgArr[this.currentIndex + 1];
                    var leaveEle = null;
                    for (var i = 0; i < imgArr.length; i++) {
                        //console.log(imgArr[i].style.display);
                        if (imgArr[i].style.display === "inline") {
                            leaveEle = imgArr[i];
                            //console.log(leaveEle);
                        }
                    }
                    //完成本轮动画
                    $(ele).fadeIn(this.fadeTime);
                    $(leaveEle).fadeOut(this.fadeTime);
                    //设置当前图片的index
                    this.currentIndex++;
                    that.setState({
                        currentIndex: this.currentIndex
                    })
                }.bind(this), this.imgTime)
            };
            this.stopMove = function () {
                var ele = this.timeGo;
                if (ele) {
                    clearInterval(ele);
                }
            };
            this.prevMove = function () {
                //console.log("prev");
                var imgArr = this.imgArr;
                var leavePage = this.currentIndex;
                if (this.currentIndex != 0) {
                    this.currentIndex--;
                } else {
                    this.currentIndex = imgArr.length - 1;
                }
                $(imgArr[this.currentIndex]).stop().fadeIn(this.fadeTime);
                $(imgArr[leavePage]).stop().fadeOut(this.fadeTime);
            };
            this.nextMove = function () {
                //console.log("next");
                var imgArr = this.imgArr;
                var leavePage = this.currentIndex;
                if (this.currentIndex != imgArr.length - 1) {
                    this.currentIndex++;
                } else {
                    this.currentIndex = 0;
                }
                $(imgArr[this.currentIndex]).stop().fadeIn(this.fadeTime);
                $(imgArr[leavePage]).stop().fadeOut(this.fadeTime);
            };
            this.selectMove = function (index) {
                var imgArr = this.imgArr;

                var leavePage = that.state.currentIndex;

                this.currentIndex = index;
                $(imgArr[this.currentIndex]).stop().fadeIn(this.fadeTime);
                $(imgArr[leavePage]).stop().fadeOut(this.fadeTime);
            }
        };
        //轮播对象
        var carouselOBJ = new Carousel(imgArr, carouselTime, fadeTime, that);
        this.setState({
            carouselObj: carouselOBJ
        });
        carouselOBJ.moveByTime();

    }
});
var ImgButton = React.createClass({
    getInitialState: function () {
        return {}
    },
    componentWillReceiveProps: function (nextProps) {

    },
    render: function () {
        var style;
        if (this.props.ifShow == true) {
            style = {
                display: 'block'
            }
        } else {
            style = {
                display: 'none'
            }
        }
        return <div style={style}>
            <div className="carousel-button button-left" onClick={this.prevPage}>11</div>
            <div className="carousel-button button-right" onClick={this.nextPage}>22</div>
        </div>
    },
    prevPage: function () {
        var carouselObj = this.props.carouselObj;
        carouselObj.stopMove();
        carouselObj.prevMove();
        carouselObj.moveByTime();
    },
    nextPage: function () {
        var carouselObj = this.props.carouselObj;
        carouselObj.stopMove();
        carouselObj.nextMove();
        carouselObj.moveByTime();
    }
});
var PositionShowLine = React.createClass({
    getInitialState: function () {
        return {
            carouselObj: null,
            currentIndex: 0
        }
    },
    propTypes: {
        carouselObj: React.PropTypes.object
    },
    componentWillReceiveProps: function (nextProps) {
        this.setState({
            carouselObj: nextProps.carouselObj,
            currentIndex: nextProps.currentIndex
        });
    },
    componentWillUpdate:function(){
        //var circles_number = this.state.carouselObj;
        //var circleArr= [];
        //if (circles_number) {
        //    circles_number = circles_number.imgArr.length;
        //    for (var i = 0; i < circles_number; i++) {
        //        if (this.state.currentIndex == i) {
        //            circleArr.push(<div className="item-circle" key={i} onMouseOver={this.circleHover}
        //                                style={{backgroundColor:'red'}}
        //            ></div>);
        //            continue;
        //        }
        //        circleArr.push(<div className="item-circle" key={i} onMouseOver={this.circleHover}></div>)
        //    }
        //    var left = -(circles_number * 22 + 10) / 2 + 'px';
        //}
    },
    render: function () {
        var circles_number = this.state.carouselObj;
        if (circles_number) {
            circles_number = circles_number.imgArr.length;
            var circleArr = [];
            for (var i = 0; i < circles_number; i++) {
                if (this.state.currentIndex == i) {
                    circleArr.push(<div className="item-circle" key={i}
                                        onMouseEnter={this.props.circleHover}
                                        onMouseLeave={this.props.circleHover}
                                        style={{backgroundColor:'red'}}
                    ></div>);
                    continue;
                }
                circleArr.push(<div className="item-circle" key={i}
                                    onMouseEnter={this.props.circleHover}
                                    onMouseLeave={this.props.circleHover}
                ></div>)
            }

            var left = -(circles_number * 22 + 10) / 2 + 'px';
            return <div className="position-show-line" style={{marginLeft:left}}>
                {
                    circleArr

                }
            </div>
        }
        return null
    },
    circleHover:function(e){
        var event=window.event||e;
        //console.log(event.movementX);
    }
});
module.exports = carousel;
