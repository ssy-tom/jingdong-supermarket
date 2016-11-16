/**
 * Created by Administrator on 2016/11/14 0014.
 */
var AppDispatcher = require('./dispatcher');
function receiveTweet(tweet) {
    //console.log("调用推文");
    var action = {
        type: 'receive_tweet',
        tweet: tweet
    };
    AppDispatcher.dispatch(action);
}

module.exports = {
    receiveTweet: receiveTweet
};