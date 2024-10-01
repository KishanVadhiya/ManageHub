import  { useState } from 'react';
import './Inventory.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [formVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    sold: '',
    qty: '',
    price: ''
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOption, setFilterOption] = useState('none');

  // Handle form input change
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  // Add item to the list
  const addItem = () => {
    const { name, description, sold, qty, price } = formData;
    if (name && description && sold && qty && price) {
      const newItem = {
        number: itemCount + 1,
        name,
        description,
        sold,
        qty,
        price
      };
      setItems([...items, newItem]);
      setItemCount(itemCount + 1);
      setFormData({
        name: '',
        description: '',
        sold: '',
        qty: '',
        price: ''
      });
      setFormVisible(false); // Hide form after adding item
    } else {
      alert('Please fill out all fields.');
    }
  };

  // Search items by product name
  const searchItems = () => {
    return items.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
  };

  // Filter items based on selected filter
  const applyFilter = (filteredItems) => {
    let sortedItems = [...filteredItems];
    if (filterOption === 'sold') {
      sortedItems = sortedItems.sort((a, b) => b.sold - a.sold);
    } else if (filterOption === 'qty') {
      sortedItems = sortedItems.sort((a, b) => b.qty - a.qty);
    } else if (filterOption === 'price') {
      sortedItems = sortedItems.sort((a, b) => b.price - a.price);
    }
    return sortedItems;
  };

  // Display filtered and searched items
  const displayItems = applyFilter(searchItems());

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>INVENTORY</h1>
      <header>
        <input
          type="text"
          id="search"
          className="search-bar"
          placeholder="Search by product name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          id="filter"
          className="filter-dropdown"
          value={filterOption}
          onChange={(e) => setFilterOption(e.target.value)}
        >
          <option value="none">Filter by</option>
          <option value="sold">Items Sold</option>
          <option value="qty">Quantity Available</option>
          <option value="price">Unit Price</option>
        </select>

        <button className="create-btn" onClick={() => setFormVisible(true)}>
          + Create new
        </button>

        <div className="user-icon">PP</div>
      </header>

      <div className="product-count">
        Total Products: <span id="product-count">{items.length}</span>
      </div>

      {formVisible && (
        <div id="add-item-form">
          <input
            type="text"
            id="name"
            placeholder="Item Name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            id="description"
            placeholder="Item Description"
            value={formData.description}
            onChange={handleInputChange}
          />
          <input
            type="number"
            id="sold"
            placeholder="Items Sold"
            value={formData.sold}
            onChange={handleInputChange}
          />
          <input
            type="number"
            id="qty"
            placeholder="Qty Available"
            value={formData.qty}
            onChange={handleInputChange}
          />
          <input
            type="number"
            id="price"
            placeholder="Unit Price"
            value={formData.price}
            onChange={handleInputChange}
          />
          <button onClick={addItem}>Add Item</button>
        </div>
      )}

      <table id="inventory-table">
        <thead>
          <tr>
            <th>Item number</th>
            <th>Item name</th>
            <th>Item description</th>
            <th>Items sold</th>
            <th>Qty available</th>
            <th>Unit price</th>
          </tr>
        </thead>
        <tbody id="table-body">
          {displayItems.map((item) => (
            <tr key={item.number}>
              <td>{item.number}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.sold}</td>
              <td>{item.qty}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
