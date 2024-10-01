import { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import './customerManage.css';

const CustomerManagement = () => {
  const [customers, setCustomers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    balance: 0.0,
  });

  const navigate = useNavigate();  // Initialize useNavigate

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmitCustomer = () => {
    if (formData.name && formData.email && formData.phone) {
      setCustomers([
        ...customers,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          balance: parseFloat(formData.balance).toFixed(2),
        },
      ]);

      // Clear form and hide it
      setFormData({
        name: '',
        email: '',
        phone: '',
        balance: 0.0,
      });
      setShowForm(false);
    }
  };

  const openCustomerDetails = (customer) => {
    navigate('/customer-details', {
      state: {
        name: customer.name,
        email: customer.email,
        phone: customer.phone,
        balance: customer.balance,
      },
    });  // Use navigate instead of window.location.href
  };

  return (
    <div className="container">
      <h1>Customer Management</h1>
      <div className="search-add-container">
        <input
          type="text"
          id="searchCustomers"
          placeholder="Search Customers..."
        />
        <button className="add-btn" onClick={() => setShowForm(true)}>
          Add New Customer
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Outstanding Balance</th>
            <th>Last Transaction</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index}>
              <td
                onDoubleClick={() => openCustomerDetails(customer)} // Double click event
                style={{ cursor: 'pointer' }} // Cursor change for better UX
              >
                {customer.name}
              </td>
              <td>{customer.email}</td>
              <td>{customer.phone}</td>
              <td>${customer.balance}</td>
              <td>-</td>
            </tr>
          ))}
        </tbody>
      </table>

      {showForm && (
        <div className="customer-form">
          <h3>Add Customer</h3>
          <input
            type="text"
            id="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            id="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
          <input
            type="number"
            id="balance"
            placeholder="Outstanding Balance"
            value={formData.balance}
            onChange={handleInputChange}
            required
          />
          <div className="form-buttons">
            <button onClick={handleSubmitCustomer}>Add Customer</button>
            <button onClick={() => setShowForm(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerManagement;
