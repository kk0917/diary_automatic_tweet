class Tweet {
  constructor(commit, tags) {
    this.message   = commit.message.concat('\n', commit.url);
    this.url       = commit.url;
    this.tags      = '#' + tags.join('\ #');
    this.media_ids = commit.media_ids;
  }

  get status() {
    return this.message.concat('\n', this.url).concat('\n\n', this.tags);
  }
}

export default Tweet;
