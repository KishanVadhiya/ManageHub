const mongoose = require('mongoose');

// Define the Inventory Schema
const InventorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  stockQuantity: { type: Number, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the user
});

// Export the Inventory model
module.exports = mongoose.model('Inventory', InventorySchema);
