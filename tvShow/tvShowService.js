const TvShow = require('./TvShow')

class TvShowService {
  constructor() {
    this.tvShows = [new TvShow(1,'Mr roboto','Drama'),  new TvShow(2, 'Block Mirror', 'Drama')];
  }
  getAll() {
    return this.tvShows;
  }

  getById(checkid) {
    return this.tvShows.find(show => show.id == checkid);
  }

}
module.exports = new TvShowService;
