const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  // res.render('index', { title: 'Express' });

  res.json({
    data: "hello world by mingo",
  });

});

router.get('/about', (req, res) => {
  // throw new Error(" crashed app ");
  res.json({
    name: 'forum-app',
    version: '0.1.0',
  });

});

module.exports = router;
