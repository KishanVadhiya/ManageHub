import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import styles from './customerDetails.module.css'; // Import the CSS module

const CustomerDetails = () => {
  const location = useLocation();
  const { name, email, phone, balance } = location.state || {}; // Destructure data from location.state

  const [transactions, setTransactions] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    // transactionId: '',
    transactionDate: '',
    paymentType: '',
    transactionStatus: '',
  });

  const [products, setProducts] = useState([
    { productName: '', price: '', quantity: '', discount: '' }
  ]);

  // Handle transaction form changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // Handle product input change
  const handleProductChange = (index, e) => {
    const updatedProducts = [...products];
    updatedProducts[index][e.target.name] = e.target.value;
    setProducts(updatedProducts);
  };

  // Add a new product row
  const handleAddProduct = () => {
    setProducts([...products, { productName: '', price: '', quantity: '', discount: '' }]);
  };

  // Calculate the total amount for a transaction
  const calculateTotalAmount = () => {
    return products.reduce((acc, product) => {
      const price = parseFloat(product.price || 0);
      const quantity = parseInt(product.quantity || 0);
      const discount = parseFloat(product.discount || 0);
      const totalProductAmount = price * quantity * (1 - discount / 100);
      return acc + totalProductAmount;
    }, 0);
  };

  // Handle submission of a new transaction
  const handleSubmitTransaction = () => {
    if (
      // formData.transactionId &&
      formData.transactionDate &&
      formData.paymentType &&
      formData.transactionStatus &&
      products.every(product => product.productName && product.price && product.quantity)
    ) {
      const totalAmount = calculateTotalAmount();

      setTransactions([
        ...transactions,
        {
          // id: formData.transactionId,
          date: formData.transactionDate,
          paymentType: formData.paymentType,
          status: formData.transactionStatus,
          totalAmount,
          products,
        },
      ]);

      // Clear form and product fields
      setFormData({
        // transactionId: '',
        transactionDate: '',
        paymentType: '',
        transactionStatus: '',
      });
      setProducts([{ productName: '', price: '', quantity: '', discount: '' }]);
      setShowForm(false);
    } else {
      alert("Please fill out all transaction and product fields");
    }
  };

  const totalTransactions = transactions.reduce((acc, cur) => acc + cur.totalAmount, 0);
  const updatedBalance = (balance || 0) - totalTransactions;

  return (
    <div className={styles.containerDetails}>
      <h1>Customer Details</h1>
      <div className={styles.customerInfo}>
        <h2>Name: {name}</h2>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Outstanding Balance:</strong> ₹{updatedBalance.toFixed(2)}</p>
      </div>

      <h3>Transaction History</h3>
      <button onClick={() => setShowForm(true)} style={{backgroundColor:"#134074"}}>Add New Transaction</button>

      <table className={styles.tableDetails}>
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Date</th>
            <th>Total Amount</th>
            <th>Payment Type</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              {/* <td>{transaction.id}</td> */}
              <td></td>
              <td>{transaction.date}</td>
              <td>₹{transaction.totalAmount.toFixed(2)}</td>
              <td>{transaction.paymentType}</td>
              <td>{transaction.status}</td>
              {/* <td>
                <ul>
                  {transaction.products.map((product, i) => (
                    <li key={i}>
                      {product.productName} - Price: ₹{product.price}, Quantity: {product.quantity}, Discount: {product.discount}%
                    </li>
                  ))}
                </ul>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>

      {showForm && (
        <div className={styles.transactionForm}>
          <h3>Add Transaction</h3>
          {/* <input
            type="text"
            id="transactionId"
            placeholder="Transaction ID"
            value={formData.transactionId}
            onChange={handleInputChange}
            required
          /> */}
          <input
            type="date"
            id="transactionDate"
            value={formData.transactionDate}
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

          <h4>Products</h4>
          {products.map((product, index) => (
            <div key={index} className={styles.productRow}>
              <input
                type="text"
                name="productName"
                placeholder="Product Name"
                value={product.productName}
                onChange={(e) => handleProductChange(index, e)}
                required
              />
              <input
                type="number"
                name="price"
                placeholder="Price"
                value={product.price}
                onChange={(e) => handleProductChange(index, e)}
                required
              />
              <input
                type="number"
                name="quantity"
                placeholder="Quantity"
                value={product.quantity}
                onChange={(e) => handleProductChange(index, e)}
                required
              />
              <input
                type="number"
                name="discount"
                placeholder="Discount (%)"
                value={product.discount}
                onChange={(e) => handleProductChange(index, e)}
              />
            </div>
          ))}
          <div className={styles.addTransactionBtn}>
          <button onClick={handleAddProduct}>Add Another Product</button>

          <button onClick={handleSubmitTransaction}>Add Transaction</button>
          <button onClick={() => setShowForm(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerDetails;