/**
 * Created by Administrator on 2016/11/14 0014.
 */
var AppDispatcher = require('./dispatcher');
var EventEmitter = require('events').EventEmitter;

//console.log(EventEmitter);
var assign = require('object-assign');
var tweet = null;
var tapIndex;
function setTweet(receiveTweet) {
    tweet = receiveTweet;
}
function setTap(receiveTweet) {
    //console.log("调用settap")
    tapIndex = receiveTweet;
}
function emitChange() {
    TweetStore.emit('change');
}

var TweetStore = assign({}, EventEmitter.prototype, {
    addChangeListener: function (callback) {
        this.on('change', callback);
    },
    removeChangeListener: function (callback) {
        this.removeListener('change', callback);
    },
    getTweet: function () {
        return tweet;
    },
    getTap:function(){
        return tapIndex;
    }
});

function handleAction(action){
    if(action.type==="receive_tweet"){
        setTweet(action.tweet);
        emitChange();
    }else if(action.type==="show_tap_index"){
        setTap(action.tweet);
        emitChange();
    }
}
TweetStore.dispatchToken=AppDispatcher.register(handleAction);
module.exports=TweetStore;