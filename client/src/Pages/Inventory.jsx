import { useState } from 'react';
import styles from './Inventory.module.css'; // Import CSS module
import { FaEdit, FaTrash } from "react-icons/fa";

const App = () => {
  const [items, setItems] = useState([]);
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
  const [editingItem, setEditingItem] = useState(null); // State for editing an item

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const addItem = () => {
    const { name, description, sold, qty, price } = formData;
    if (name && description && sold && qty && price) {
      // Calculate the next item number
      const nextItemNumber = items.length > 0 ? Math.max(...items.map(item => item.number)) + 1 : 1;

      const newItem = {
        number: nextItemNumber,
        name,
        description,
        sold,
        qty,
        price
      };
      setItems([...items, newItem]);
      resetForm();
    } else {
      alert('Please fill out all fields.');
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      sold: '',
      qty: '',
      price: ''
    });
    setEditingItem(null); // Reset editing state
    setFormVisible(false);
  };

  const searchItems = () => {
    return items.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
  };

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

  const displayItems = applyFilter(searchItems());

  const handleEdit = (item) => {
    setEditingItem(item);
    setFormData({
      name: item.name,
      description: item.description,
      sold: item.sold,
      qty: item.qty,
      price: item.price
    });
    setFormVisible(true);
  };

  const updateItem = () => {
    const { name, description, sold, qty, price } = formData;
    if (name && description && sold && qty && price) {
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.number === editingItem.number
            ? { ...item, name, description, sold, qty, price }
            : item
        )
      );
      resetForm();
    } else {
      alert('Please fill out all fields.');
    }
  };

  const handleDelete = (itemNumber) => {
    const updatedItems = items.filter((item) => item.number !== itemNumber);
    
    // Reset item numbers after deletion
    const resetItems = updatedItems.map((item, index) => ({
      ...item,
      number: index + 1 // Set new number based on index
    }));

    setItems(resetItems);
    // console.log(Deleted item with number: ${itemNumber});
  };

  return (
    <div className={styles.container}>
      <h1 style={{ textAlign: 'center' }}>INVENTORY</h1>
      <header className={styles.header}> 
        <input
          type="text"
          id="search"
          className={styles.searchBar} 
          placeholder="Search by product name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          id="filter"
          className={styles.filterDropdown} 
          value={filterOption}
          onChange={(e) => setFilterOption(e.target.value)}
        >
          <option value="none">Filter by</option>
          <option value="sold">Items Sold</option>
          <option value="qty">Quantity Available</option>
          <option value="price">Unit Price</option>
        </select>

        <button className={styles.createBtn} onClick={() => setFormVisible(true)}>
          + Create new
        </button>
      </header>

      <div className={styles.productCount}>
        Total Products: <span id="product-count">{items.length}</span>
      </div>

      {formVisible && (
        <div className={styles.addItemForm}>
          <input
            type="text"
            id="name"
            placeholder="Item Name"
            value={formData.name}
            onChange={handleInputChange}
            className={styles.formInput}
          />
          <input
            type="text"
            id="description"
            placeholder="Item Description"
            value={formData.description}
            onChange={handleInputChange}
            className={styles.formInput}
          />
          <input
            type="number"
            id="sold"
            placeholder="Items Sold"
            value={formData.sold}
            onChange={handleInputChange}
            className={styles.formInput} 
          />
          <input
            type="number"
            id="qty"
            placeholder="Qty Available"
            value={formData.qty}
            onChange={handleInputChange}
            className={styles.formInput} 
          />
          <input
            type="number"
            id="price"
            placeholder="Unit Price"
            value={formData.price}
            onChange={handleInputChange}
            className={styles.formInput} 
          />
          <button onClick={editingItem ? updateItem : addItem} className={styles.addItemBtn}>
            {editingItem ? 'Update Item' : 'Add Item'}
          </button> 
        </div>
      )}

      <table id="inventory-table" className={styles.inventoryTable}>
        <thead>
          <tr>
            <th>Item number</th>
            <th>Item name</th>
            <th>Item description</th>
            <th>Items sold</th>
            <th>Qty available</th>
            <th>Unit price</th>
            <th>Actions</th>
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
              <td>
                <FaEdit style={{ color: 'blue', cursor: 'pointer' }} onClick={() => handleEdit(item)} /> 
                <FaTrash style={{ color: 'red', cursor: 'pointer', marginLeft: '10px' }} onClick={() => handleDelete(item.number)} /> 
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;