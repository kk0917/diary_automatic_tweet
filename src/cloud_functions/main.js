const Tweet = require('./models/Tweet');

/**
 * Responds to any HTTP request.
 *
 * @param {object} req  HTTP request context.
 * @param {object} resp HTTP response context.
 */
// eslint-disable-next-line consistent-return
exports.main = (req, resp) => {
  try {
    const tweet = new Tweet(req.head_commit, ['test', 'twitter', 'api']);

    tweet.post('statuses/update', tweet.status)
      .then(tweet => {
        return resp
        .status(200)
        .send(JSON.stringify({
          result: 'Tweet was successful!',
          return: tweet
        }));
      })
      .catch(error => {
        throw error;
    });
  } catch (e) {
    return resp.status(500).send(`Exception.. Please contact @kame_greenergy: ${e.message}`);
  }
};
