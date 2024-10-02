// CreateBusinessAccount.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateBusinessAccount = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    contactNumber: '',
    email: '',
    taxId: ''
  });

  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentAccounts = JSON.parse(localStorage.getItem('accounts')) || [];
    
    // Add createdAt and unique ID (can be timestamp or any unique logic)
    const newAccount = {
      ...formData,
      id: currentAccounts.length + 1,
      createdAt: new Date().toISOString().split('T')[0], // Store as YYYY-MM-DD
    };
    
    const updatedAccounts = [...currentAccounts, newAccount];
    localStorage.setItem('accounts', JSON.stringify(updatedAccounts)); // Save to localStorage

    alert('Business account created successfully!');
    navigate('/'); // Navigate back to the AllAccounts page
  };

  return (
    <div className="container">
      <form id="business-account-form" onSubmit={handleSubmit}>
        <h2>Create Business Account</h2>

        <label htmlFor="companyName">Company Name</label>
        <input type="text" id="companyName" value={formData.companyName} onChange={handleChange} placeholder="Company Name" required />

        <label htmlFor="street">Street</label>
        <input type="text" id="street" value={formData.street} onChange={handleChange} placeholder="Street" required />

        <label htmlFor="city">City</label>
        <input type="text" id="city" value={formData.city} onChange={handleChange} placeholder="City" required />

        <label htmlFor="state">State</label>
        <input type="text" id="state" value={formData.state} onChange={handleChange} placeholder="State" required />

        <label htmlFor="zip">Zip</label>
        <input type="text" id="zip" value={formData.zip} onChange={handleChange} placeholder="Zip Code" required />

        <label htmlFor="contactNumber">Contact Number</label>
        <input type="tel" id="contactNumber" value={formData.contactNumber} onChange={handleChange} placeholder="Contact Number" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required />

        <label htmlFor="taxId">Tax ID</label>
        <input type="text" id="taxId" value={formData.taxId} onChange={handleChange} placeholder="Tax ID" required />

        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default CreateBusinessAccount;
