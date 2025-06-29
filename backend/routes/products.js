const router = require('express').Router();
const { seed, list, one } = require('../controllers/productController');

router.post('/seed', seed);
router.get('/',       list);
router.get('/:id',    one);

module.exports = router;
