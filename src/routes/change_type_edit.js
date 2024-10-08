const express = require('express');
const router = express.Router();
const changeTypeController = require('../controllers/changeTypeController');
const apiController = require('../controllers/apiController');

router.get('/getCurrentTypeAPI', apiController.getCurrentTypeOfSavingAPI);
router.get('/', changeTypeController.renderChangeTypeEdit);
router.post('/', changeTypeController.edit);
router.get(
    '/getMinDepMoneyAndMinWithDaysAPI',
    apiController.getMinDepMoneyAndMinWithDaysAPI,
);
module.exports = router;
