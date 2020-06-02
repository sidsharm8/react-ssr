const express = require("express");
const router = express.Router();
const Character = require("../models/character");
const requireLogin = require("../middlewares/requireLogin");
const limit = 40;

/* GET home page. */
router.post("/", requireLogin,  function (req, res, next) {
  console.log(req.user)
  const page = req.query.page || 1;
  const query = contructQuery(req);
  Character.paginate(query, { page: 1, limit : limit * Number(page) }, (err, {docs, ...info}) => {
  	const response = { results : docs, info };

  	res.send(response);
  });
});

const contructQuery = (req) => {
  const query = {};
  const { body : { searchText, selectedFilters } } = req;
  if(searchText) query.name = RegExp(String.raw`^${searchText}`, 'i');
  if(selectedFilters){
      const { species, origin, gender } = selectedFilters;
      if(species.length){
          query.species = { $in:  (species.map(species => species.value)).flat() }  ;
      }
      if(origin.length){
          query["origin.name"] = { $in: (origin.map(origin => origin.value)).flat()};
      }
      if(gender.length){
          query.gender = { $in: (gender.map(gender => gender.value)).flat()};
      }
  }
  return query;
}
module.exports = router;
