const mongoose = require('mongoose');

const InvoiceSchema = new mongoose.Schema({
  clientName: {
    type: String,
    required: true,
  },
  products: [{
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Inventory', // Reference to the Inventory model
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  }],
  totalAmount: {
    type: Number,
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create and export the model
const Invoice = mongoose.model('Invoice', InvoiceSchema);
module.exports = Invoice;
