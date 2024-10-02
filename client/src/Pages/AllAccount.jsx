// AllAccounts.js
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Import icons
import styles from './allAccount.module.css'; // Import your CSS module

const AllAccounts = () => {
  const [accounts, setAccounts] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    const storedAccounts = JSON.parse(localStorage.getItem('accounts')) || [];
    setAccounts(storedAccounts);
  }, []);

  // Handler for editing an account
  const handleEdit = (id) => {
    console.log(`Edit account with ID: ${id}`);
    navigate(`/edit-account/${id}`); // Navigate to edit page
  };

  // Handler for deleting an account
  const handleDelete = (id) => {
    const updatedAccounts = accounts.filter((account) => account.id !== id);
    setAccounts(updatedAccounts); // Update local state
    localStorage.setItem('accounts', JSON.stringify(updatedAccounts)); // Update localStorage
  };

  return (
    <div className={styles.container}>
      <h2>All Accounts</h2>
      {accounts.length === 0 ? (
        <p>No accounts available.</p> // Message when there are no accounts
      ) : (
        <table className={styles.accountTable}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Company Name</th>
              <th>Email</th>
              <th>Created At</th>
              <th>Actions</th> {/* New Actions column */}
            </tr>
          </thead>
          <tbody>
            {accounts.map((account) => (
              <tr key={account.id}>
                <td>{account.id}</td>
                <td>{account.companyName}</td>
                <td>{account.email}</td>
                <td>{account.createdAt}</td>
                <td>
                  <button onClick={() => handleEdit(account.id)} className={styles.actionButton}>
                    <FaEdit /> {/* Edit icon */}
                  </button>
                  <button onClick={() => handleDelete(account.id)} className={styles.actionButton}>
                    <FaTrash /> {/* Delete icon */}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AllAccounts;
