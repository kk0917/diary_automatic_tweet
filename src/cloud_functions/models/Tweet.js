const Twitter = require('twitter');

class Tweet extends Twitter {
  consumer_key        = CONSUMER_KEY;
  consumer_secret     = CONSUMER_SECRET;
  access_token_key    = ACCESS_TOKEN_KEY;
  access_token_secret = ACCESS_TOKEN_SECRET;

  constructor(commit, tags) {
    this.message   = commit.message.concat('\n', commit.url);
    this.url       = commit.url;
    this.tags      = '#' + tags.join('\ #');
    this.media_ids = commit.media_ids;
  }

  get status() {
    return commit.message.concat('\n', commit.url).concat('\n\n', tags);
  }
};

export default Tweet;
