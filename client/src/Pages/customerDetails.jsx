import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import './customerDetails.css';

const CustomerDetails = () => {
  const location = useLocation();
  const { name, email, phone, balance } = location.state || {}; // Destructure data from location.state

  const [transactions, setTransactions] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    transactionId: '',
    transactionDate: '',
    transactionAmount: '',
    paymentType: '',
    transactionStatus: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmitTransaction = () => {
    if (
      formData.transactionId &&
      formData.transactionDate &&
      formData.transactionAmount &&
      formData.paymentType &&
      formData.transactionStatus
    ) {
      setTransactions([
        ...transactions,
        {
          id: formData.transactionId,
          date: formData.transactionDate,
          amount: parseFloat(formData.transactionAmount),
          paymentType: formData.paymentType,
          status: formData.transactionStatus,
        },
      ]);

      // Clear form and hide
      setFormData({
        transactionId: '',
        transactionDate: '',
        transactionAmount: '',
        paymentType: '',
        transactionStatus: '',
      });
      setShowForm(false);
    }
  };

  const totalTransactions = transactions.reduce((acc, cur) => acc + cur.amount, 0);
  const updatedBalance = balance - totalTransactions;

  return (
    <div className="container">
      <h1>Customer Details</h1>
      <div id="customerInfo">
        <h2>{name}</h2>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Outstanding Balance:</strong>  ₹{updatedBalance.toFixed(2)}</p>
      </div>

      <h3>Transaction History</h3>
      <button onClick={() => setShowForm(true)}>Add New Transaction</button>
      <table>
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Payment Type</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.id}</td>
              <td>{transaction.date}</td>
              <td> ₹{transaction.amount.toFixed(2)}</td>
              <td>{transaction.paymentType}</td>
              <td>{transaction.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {showForm && (
        <div id="transactionForm">
          <h3>Add Transaction</h3>
          <input
            type="text"
            id="transactionId"
            placeholder="Transaction ID"
            value={formData.transactionId}
            onChange={handleInputChange}
            required
          />
          <input
            type="date"
            id="transactionDate"
            value={formData.transactionDate}
            onChange={handleInputChange}
            required
          />
          <input
            type="number"
            id="transactionAmount"
            placeholder="Amount"
            value={formData.transactionAmount}
            onChange={handleInputChange}
            required
          />
          <select
            id="paymentType"
            value={formData.paymentType}
            onChange={handleInputChange}
            required
          >
            <option value="">Payment Type</option>
            <option value="Cash">Cash</option>
            <option value="Check">Check</option>
          </select>
          <select
            id="transactionStatus"
            value={formData.transactionStatus}
            onChange={handleInputChange}
            required
          >
            <option value="">Status</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
            <option value="Failed">Failed</option>
          </select>
          <button onClick={handleSubmitTransaction}>Add Transaction</button>
          <button onClick={() => setShowForm(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default CustomerDetails;
