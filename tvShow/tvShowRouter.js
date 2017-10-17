const express = require('express');
const TvShow = require('./TvShow');
const tvShowService = require('./tvShowService')

const tvShowRouter =  express.Router();

//const tvShows =

tvShowRouter.get('/', (req,res) => {
  res.json(tvShowService.getAll());
});

tvShowRouter.get('/:tvShowId', (req,res) => {

  const tvShowId = req.params.tvShowId;
  console.log(`Fetching TV Show with id: ${tvShowId}`);
  res.send(tvShowService.getById(tvShowId));
})

module.exports = tvShowRouter;
