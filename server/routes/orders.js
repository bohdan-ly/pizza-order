var express = require('express');
const AppError = require('../utils/appError');
const Order = require('../models/orderModel');
const SENDMAIL = require('../utils/email');
var router = express.Router();

/* POST new order. */
router.post('/', async (req, res, next) => {
  try {
    const doc = await Order.create(req.body);
    if (!doc) {
      return next(new AppError('No document created', 500));
    }

    SENDMAIL(
      {
        to: doc.user_details.email,
        firstName: doc.user_details.name,
        subject: 'Order Details',
        orderDetails: { order_details: doc.order_details, user_data: doc.user_details },
        template: 'orderDetails',
      },
      (info) => {
        console.log('Email sent successfully');
        console.log('MESSAGE ID: ', info.messageId);
      },
    );

    res.status(201).json({ status: 'success', data: doc });
  } catch (err) {
    console.log(err);
    return next(new AppError('No document created', 500));
  }
});

module.exports = router;
