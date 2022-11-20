const express = require('express');
const voucherRouter = express.Router();

// const Vouchers = require('../Models/vouchers.models');

const { getVouchers, addVouch, updateVouch, deleteVouch } = require('../Controllers/vouchers.controllers')

voucherRouter.post('/voucher', addVouch)

voucherRouter.delete("/:id", deleteVouch)
voucherRouter.patch("/:id", updateVouch)

module.exports = voucherRouter;