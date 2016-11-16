/**
 * Created by Administrator on 2016/11/15 0015.
 */
var AppDispatcher = require('../dispatcher');
function receiveTweet(tweet) {
    //console.log("调用推文");
    var action = {
        type: 'show_tap_index',
        tweet: tweet
    };
    AppDispatcher.dispatch(action);
}

module.exports = {
    receiveTweet: receiveTweet
};