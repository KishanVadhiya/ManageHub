import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './customerManage.module.css'; // Import CSS module

const CustomerManagement = () => {
  const [customers, setCustomers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    balance: 0.0,
  });
  const [editIndex, setEditIndex] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmitCustomer = () => {
    if (formData.name && formData.email && formData.phone) {
      if (editIndex !== null) {
        const updatedCustomers = [...customers];
        updatedCustomers[editIndex] = {
          ...formData,
          balance: parseFloat(formData.balance).toFixed(2),
        };
        setCustomers(updatedCustomers);
      } else {
        setCustomers([
          ...customers,
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            balance: parseFloat(formData.balance).toFixed(2),
          },
        ]);
      }

      // Clear form and reset
      setFormData({
        name: '',
        email: '',
        phone: '',
        balance: 0.0,
      });
      setShowForm(false);
      setEditIndex(null);
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

  const handleEditCustomer = (index) => {
    setFormData(customers[index]);
    setShowForm(true);
    setEditIndex(index);
  };

  const handleDeleteCustomer = (index) => {
    const updatedCustomers = customers.filter((_, i) => i !== index);
    setCustomers(updatedCustomers);
  };

  return (
    <div className={styles.container}>
      <h1>Customer Management</h1>

      <div className={styles.searchAddContainer}>
        <input
          type="text"
          id="searchCustomers"
          placeholder="Search Customers..."
          className={styles.searchInput}
        />
        <button className={styles.addBtn} onClick={() => setShowForm(true)}>
          + Add New Customer
        </button>
      </div>

      {showForm && (
        <div className={styles.customerForm}>
          <input
            type="text"
            id="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            className={styles.formInput}
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className={styles.formInput}
          />
          <input
            type="text"
            id="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleInputChange}
            className={styles.formInput}
          />
          <input
            type="number"
            id="balance"
            placeholder="Outstanding Balance"
            value={formData.balance}
            onChange={handleInputChange}
            className={styles.formInput}
          />
          <div className={styles.formButtons}>
            <button onClick={handleSubmitCustomer} className={styles.submitBtn}>
              {editIndex !== null ? 'Update Customer' : 'Add Customer'}
            </button>
            <button onClick={() => setShowForm(false)} className={styles.closeBtn}>
              Close
            </button>
          </div>
        </div>
      )}

      <table className={styles.customerTable}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Outstanding Balance</th>
            <th>Last Transaction</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index}>
              <td
                onDoubleClick={() => openCustomerDetails(customer)}
                style={{ cursor: 'pointer' }}
              >
                {customer.name}
              </td>
              <td>{customer.email}</td>
              <td>{customer.phone}</td>
              <td>${customer.balance}</td>
              <td>-</td>
              <td className={styles.actionsCell}>
                <i
                  className="fas fa-edit"
                  onClick={() => handleEditCustomer(index)}
                  style={{ cursor: 'pointer', marginRight: '10px' }}
                ></i>
                <i
                  className="fas fa-trash"
                  onClick={() => handleDeleteCustomer(index)}
                  style={{ cursor: 'pointer', color: 'red' }}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerManagement;