const mongoose = require('mongoose');
const { SENDMAIL } = require('../utils/email');

const orderSchema = new mongoose.Schema({
  user_details: {
    name: String,
    email: String,
    address: String,
    phone: String,
  },
  order_details: {
    size: String,
    dough: String,
    crust: String,
    toppings: Array,
  },
  created_at: { type: Date, default: new Date(Date.now()) },
});

// orderSchema.pre(/^create/, async function (next) {
//   this.tempOrder = await this.clone().findOne();
//   next();
// });

// orderSchema.post(/^create/, async function () {
//   if (this.tempOrder && this.tempOrder.user_data.email) {
//     SENDMAIL(
//       {
//         to: this.tempOrder.user_data.email,
//         firstName: this.tempOrder.user_data.name,
//         subject: 'Order Details',
//         firstName: this.tempOrder.user_data.name,
//         orderDetails: this.tempOrder.order_details,
//         template: 'orderDetails',
//       },
//       (info) => {
//         console.log('Email sent successfully');
//         console.log('MESSAGE ID: ', info.messageId);
//       },
//     );
//   }
// });

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
