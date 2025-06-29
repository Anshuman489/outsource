const router = require('express').Router();
const { create, list } = require('../controllers/allocationController');

router.post('/', create);
router.get('/',  list);   // optional

module.exports = router;
