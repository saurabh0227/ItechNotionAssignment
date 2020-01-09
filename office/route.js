const express = require('express');
const { addOfficeaddress, getOfficeAddress, getSingleOfficeAddress, updateOfficeAddress, deteleOfficeAddress } = require('./collection');
const router = express.Router();

router.get('/office-list', getOfficeAddress);
router.get('/office-single', getSingleOfficeAddress);
router.post('/office-add', addOfficeaddress);
router.put('/office-update', updateOfficeAddress);
router.delete('/office-delete', deteleOfficeAddress);

module.exports = router;