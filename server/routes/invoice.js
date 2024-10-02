const express = require('express');
const router = express.Router();
const { createInvoice, getAllInvoices, getInvoiceById, updateInvoice, deleteInvoice } = require('../controllers/invoiceController');
const verifyToken = require('../middleware/authMiddleware');

// Apply the middleware to protect the routes
router.use(verifyToken);

// Define the routes
router.post('/', createInvoice); // Create a new invoice
router.get('/', getAllInvoices); // Retrieve all invoices
router.get('/:id', getInvoiceById); // Get invoice by ID
router.put('/:id', updateInvoice); // Update an invoice
router.delete('/:id', deleteInvoice); // Delete an invoice

module.exports = router;
