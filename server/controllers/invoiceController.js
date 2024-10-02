const Invoice = require('../models/Invoice'); // Import the Invoice model

// Create a new invoice
const createInvoice = async (req, res) => {
  const { clientName, products, totalAmount } = req.body; // Destructure request body
  const userId = req.user.id; // Get the authenticated user's ID

  // Validate input
  if (!clientName || !products || !totalAmount) {
    return res.status(400).json({ message: 'Client name, products, and total amount are required.' });
  }

  try {
    const newInvoice = new Invoice({
      clientName,
      products,
      totalAmount,
      createdBy: userId // Set the createdBy field
    });

    await newInvoice.save(); // Save invoice to the database
    res.status(201).json({ message: 'Invoice created successfully', invoice: newInvoice });
  } catch (error) {
    console.error("Error while creating invoice:", error); // Log the error
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Retrieve all invoices created by the authenticated user with optional filters
const getAllInvoices = async (req, res) => {
  const userId = req.user.id; // Get the authenticated user's ID
  const { status } = req.query; // Optional filter by status

  // Create a filter object
  const filters = { createdBy: userId }; // Filter by createdBy

  if (status) {
    filters.status = status; // Filter by status if provided
  }

  try {
    const invoices = await Invoice.find(filters); // Find invoices based on filters
    res.status(200).json(invoices); // Return filtered invoices
  } catch (error) {
    console.error("Error while retrieving invoices:", error); // Log the error
    res.status(500).json({ message: 'Server error' });
  }
};

// Get a specific invoice by ID
const getInvoiceById = async (req, res) => {
  const { id } = req.params; // Get ID from request params

  try {
    const invoice = await Invoice.findOne({ _id: id, createdBy: req.user.id }); // Find invoice by ID and createdBy
    if (!invoice) {
      return res.status(404).json({ message: 'Invoice not found' });
    }
    res.status(200).json(invoice); // Return invoice details
  } catch (error) {
    console.error("Error while retrieving invoice:", error); // Log the error
    res.status(500).json({ message: 'Server error' });
  }
};

// Update an existing invoice
const updateInvoice = async (req, res) => {
  const { id } = req.params; // Get ID from request params
  const { clientName, products, totalAmount } = req.body; // Destructure request body

  try {
    const updatedInvoice = await Invoice.findOneAndUpdate(
      { _id: id, createdBy: req.user.id }, // Find invoice by ID and createdBy
      { clientName, products, totalAmount },
      { new: true } // Return the updated document
    );
    if (!updatedInvoice) {
      return res.status(404).json({ message: 'Invoice not found' });
    }
    res.status(200).json({ message: 'Invoice updated successfully', invoice: updatedInvoice });
  } catch (error) {
    console.error("Error while updating invoice:", error); // Log the error
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete an invoice
const deleteInvoice = async (req, res) => {
  const { id } = req.params; // Get ID from request params

  try {
    const deletedInvoice = await Invoice.findOneAndDelete({ _id: id, createdBy: req.user.id }); // Delete invoice by ID and createdBy
    if (!deletedInvoice) {
      return res.status(404).json({ message: 'Invoice not found' });
    }
    res.status(200).json({ message: 'Invoice deleted successfully' });
  } catch (error) {
    console.error("Error while deleting invoice:", error); // Log the error
    res.status(500).json({ message: 'Server error' });
  }
};

// Export the controller functions
module.exports = {
  createInvoice,
  getAllInvoices,
  getInvoiceById,
  updateInvoice,
  deleteInvoice,
};
