/**
 * Created by Administrator on 2016/11/11 0011.
 */
var React = require("react");
var $ = require("jquery");
var creator1=require('./resource/allCreators/creator1');
var Header = React.createClass({
    render: function () {
        var tabData=this.props.data;
        return  <div className="container" onMouseOver={this.findIndex} onMouseOut={this.findIndexHidden}>
          {
                tabData.map(function(child,index){
                    return <div className="every-block" key={index} >{child}</div>
                })
            }
        </div>
    },
    findIndex:function(e){
        //e.stopPropagation();
        //console.log("123123123");
        if(e.target.className=="every-block"){
            var tapIndex=$(e.target).index();
            creator1.receiveTweet(tapIndex+1);
        }
    },
    findIndexHidden:function(e){

        creator1.receiveTweet(-1);

    },
    componentDidMount: function () {

    }
});
module.exports = Header;