const express = require('express');
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
  res.redirect("/catalog");
});


// Original route
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
