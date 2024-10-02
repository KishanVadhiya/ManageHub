import { useState } from 'react';
import { useNavigate } from 'react-router-dom';  
import styles from './customerManage.module.css'; // Import the CSS module

const CustomerManagement = () => {
  const [customers, setCustomers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',     
    balance: 0.0,
  });

  const navigate = useNavigate();

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
    });
  };

  return (
    <div className={styles.container}> {/* Use module styles */}
      <h1>Customer Management</h1>
      <div className={styles.searchAddContainer}> {/* Updated class names */}
        <input
          type="text"
          id="searchCustomers"
          placeholder="Search Customers..."
          className={styles.searchInput}
        />
        <button className={styles.addBtn} onClick={() => setShowForm(true)}> {/* Updated class name */}
          Add New Customer
        </button>
      </div>

      <table className={styles.customerTable}> {/* Use module styles */}
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
                onDoubleClick={() => openCustomerDetails(customer)}
                style={{ cursor: 'pointer' }}
                className={styles.customerName}
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
        <div className={styles.customerForm}> {/* Updated class */}
          <h3>Add Customer</h3>
          <input
            type="text"
            id="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className={styles.formInput} 
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className={styles.formInput} 
          />
          <input
            type="text"
            id="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className={styles.formInput} 
          />
          <input
            type="number"
            id="balance"
            placeholder="Outstanding Balance"
            value={formData.balance}
            onChange={handleInputChange}
            required
            className={styles.formInput}
          />
          <div className={styles.formButtons}>
            <button onClick={handleSubmitCustomer} className={styles.submitBtn}>Add Customer</button>
            <button onClick={() => setShowForm(false)} className={styles.closeBtn}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerManagement;
