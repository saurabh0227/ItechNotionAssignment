const express = require('express');
const { addHomeaddress, getHomeAddress, getSingleHomeAddress, updateHomeAddress, deteleHomeAddress } = require('./controller');
const router = express.Router();

router.get('/home-list', getHomeAddress);
router.get('/home-single', getSingleHomeAddress);
router.post('/home-add', addHomeaddress);
router.put('/home-update', updateHomeAddress);
router.delete('/home-delete', deteleHomeAddress);

module.exports = router;