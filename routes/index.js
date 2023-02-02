var express = require('express');
var router = express.Router();

const PunkAPIWrapper =  require('punkapi-javascript-wrapper')
const punkAPI = new PunkAPIWrapper()



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.hbs', { title: 'Express' });
});

router.get('/beers', ((req,res,next)=>{

  punkAPI
  .getBeers()
  .then((beersFromApi) =>{ 
    res.render("beers.hbs", {beersFromApi})
  })
  .catch(error => console.log(error));

}))


router.get('/random-beers', ((req,res,next)=>{

  punkAPI
  .getRandom()
  .then((beersFromApi) =>{ 
    res.render("random-beers.hbs", {beersFromApi})
  })
  .catch(error => console.log(error));

}))


module.exports = router;
