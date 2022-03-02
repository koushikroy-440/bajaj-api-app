var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/bfhl', function (req, res, next) {
  var datas = req.body.data;
  var numbers = [];
  var alphabets = [];
  datas.map((d) => {
    if (isNaN(d)) {
      alphabets.push(d);
    } else {
      numbers.push(d);
    }
  })
  var response = {
    is_success: true,
    user_id: "koushik_roy_29052000",
    email: "koushikroy.cse19@chitkarauniversity.edu.in",
    roll_number: "1911981343",
    numbers,
    alphabets
  }
  // console.log({ numbers, alphabets });
  res.status(200);
  res.json(response)

});

module.exports = router;
