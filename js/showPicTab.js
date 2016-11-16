/**
 * Created by Administrator on 2016/11/11 0011.
 */
var React = require("react");

var $ = require("jquery");
var stores = require("./resource/stores");
var getData = require('./resource/getDataStream');
getData();
var tab = React.createClass({
    getInitialState: function () {
        return {
            isShow: false,
            show_data: null
        }
    },
    //getDefaultProps:function(){
    //    return {
    //        isShow:false
    //    }
    //},
    componentWillReceiveProps: function () {
        //var tabData = this.props.data;
        //this.setState({
        //    tabData: tabData
        //})
    },
    render: function () {
        var style;
        if (this.state.isShow) {
            style = {
                'display': 'block'
            }
        } else {
            style = {
                'display': 'none'
            }
        }
        //console.log(this.state);
        return <div className="tab" style={style} onMouseEnter={this.show} onMouseLeave={this.hide} >
            {this.state.show_data}
        </div>
    },
    show:function(){
        //console.log(this.state);
        this.setState({isShow: true})
    } ,
    hide:function(){
        this.setState({isShow: false})
    },
    getWhitchData: function () {
        var index = stores.getTap();
        //console.log(index);

        if (index) {
            if (index == -1) {
                this.setState({

                    isShow: false
                });
                return;
            }
            var alldata = stores.getTweet()[0];
            var show_data = alldata["tap" + index];
            if (show_data) {
                this.setState({
                    show_data: show_data,
                    isShow: true
                });
            }
        }
    },
    componentDidMount: function () {
        stores.addChangeListener(this.getWhitchData)
    }
});
module.exports = tab;