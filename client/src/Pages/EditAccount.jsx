// EditAccount.js
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditAccount = () => {
  const { id } = useParams(); // Get the account ID from the URL
  const navigate = useNavigate();
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

  useEffect(() => {
    const accounts = JSON.parse(localStorage.getItem('accounts')) || [];
    const accountToEdit = accounts.find((account) => account.id === parseInt(id));
    if (accountToEdit) {
      setFormData(accountToEdit);
    }
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const accounts = JSON.parse(localStorage.getItem('accounts')) || [];
    const updatedAccounts = accounts.map((account) =>
      account.id === parseInt(id) ? { ...formData, id: account.id } : account
    );
    localStorage.setItem('accounts', JSON.stringify(updatedAccounts));
    alert('Account updated successfully!');
    navigate('/');
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Edit Business Account</h2>

        <label htmlFor="companyName">Company Name</label>
        <input type="text" id="companyName" value={formData.companyName} onChange={handleChange} required />

        {/* Add remaining form fields similar to CreateBusinessAccount */}
        <button type="submit">Update Account</button>
      </form>
    </div>
  );
};

export default EditAccount;
