const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Express',
  });
});

module.exports = router;

/**
 * The router object is a utility method that is built on top of express to make
 * RESTful APIs even easier.
 * When sending templates (like ejs), rather than using res.send or res.json which
 * are the most common, we use res.render.
 */
