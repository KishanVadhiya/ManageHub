import { useEffect, useState } from 'react';
import './Invoice.css';
const MyForm = () => {

  
  const [itemCount, setItemCount] = useState(0);
  const [items, setItems] = useState([]);
  const [totals, setTotals] = useState({
    totalBeforeTax: 0,
    tax: 0,
    totalAfterTax: 0,
  });


  useEffect(()=>{
    const token = localStorage.getItem('token');
    const repsonse = await axios.get('http://localhost:5000/api/channels',{
      // headers
      Authorisation: `${token}`
    });
    setItems(response.data)

  })

  const handleAddItem = () => {
    setItemCount(itemCount + 1);
    setItems([
      ...items,
      { id: itemCount + 1, name: '', price: 0, quantity: 0, amount: 0 },
    ]);
  };

  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = field === 'name' ? value : parseFloat(value);
    newItems[index].amount = newItems[index].price * newItems[index].quantity;
    setItems(newItems);
    updateTotals(newItems);
  };

  const updateTotals = (newItems) => {
    let totalBeforeTax = 0;
    newItems.forEach((item) => {
      totalBeforeTax += item.amount;
    });
    const tax = totalBeforeTax * 0.05;
    const totalAfterTax = totalBeforeTax + tax;
    setTotals({ totalBeforeTax, tax, totalAfterTax });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission (e.g., send data to the server)
    alert('Form submitted successfully!');
  };
  const handleDeleteItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
    updateTotals(newItems);
    setItemCount(itemCount - 1);
  };
  return (
    <div className="main-container">
      <form id="main-form" onSubmit={handleSubmit}>
        <div className="container1">
          <div className="container">
            <h2>
              <i
                className="fa-solid fa-rectangle-list"
                style={{
                  color: '#6d33ef',
                  backgroundColor: 'white',
                  fontSize: '25px',
                }}
              ></i>{' '}
              General Information
            </h2>
            <div className="mt-4">
              <label htmlFor="receipt-number">Receipt number</label>
              <input
                type="text"
                id="receipt-number"
                required
                placeholder="Receipt Number"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="date-issued">Date issued</label>
              <input type="date" id="date-issued" required />
            </div>
            <div className="mt-4">
              <label>Receipt type</label>
              <div className="mt-1">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio"
                    name="receipt-type"
                    value="paper-receipt"
                    required
                  />
                  <span>Paper receipt</span>
                </label>
                <label
                  className="inline-flex items-center"
                  style={{ marginLeft: '1.5rem' }}
                >
                  <input
                    type="radio"
                    className="form-radio"
                    name="receipt-type"
                    value="e-receipt"
                  />
                  <span>E-receipt</span>
                </label>
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="notes">Notes</label>
              <textarea
                id="notes"
                className="textarea"
                placeholder="Note Here..."
              ></textarea>
            </div>
          </div>

          <div className="container">
            <h2>
              <i
                className="bi bi-person-circle"
                style={{
                  color: '#6d33ef',
                  backgroundColor: 'white',
                  fontSize: '25px',
                }}
              ></i>{' '}
              Customer Information
            </h2>
            <div className="mt-4">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" required placeholder="Enter Name" />
            </div>
            <div className="mt-4">
              <label htmlFor="phone">Phone</label>
              <div className="phonesms">
                <input
                  type="text"
                  id="phone"
                  className=" phone1"
                  required
                  placeholder="Ex. 9876543210"
                />
                <div>
                  <input type="checkbox" className="form-checkbox" id="send-sms"/>
                  <span>Send SMS</span>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="email">Email</label>
              <div className="phonesms">
                <input
                  type="email"
                  id="email"
                  className=" phone1"
                  required
                  placeholder="Ex. abc@gmail.com"
                />
                <div>
                  <input type="checkbox" className="form-checkbox" id="send-email" />
                  <span>Send Email</span>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="tax-code">Tax code</label>
              <input
                type="text"
                id="tax-code"
                required
                placeholder="Ex. 1A238L"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                required
                placeholder="Enter Address"
              />
            </div>
          </div>
        </div>

        <div className="container2">
          <div className="containerItem">
            <div className="itemFlex">
              <h2><i className="bi bi-list-task"
              style={{
                fontSize:"25px",
                color:"#6d33ef"
              }}></i> Items</h2>
              <p>
                <i className="bi bi-download"></i> Import
              </p>
            </div>
            <table>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Items</th>
                  <th>Unit Price</th>
                  <th>Quantity</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody id="items-table-body">
                {items.map((item, index) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Item Name"
                          value={item.name}
                          onChange={(e) =>
                            handleItemChange(index, 'name', e.target.value)
                          }
                        />
                        <button
                          className="btn dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        ></button>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                    <td>
                      <input
                        type="number"
                        className="item-price"
                        required
                        placeholder="Enter Price"
                        value={item.price}
                        onChange={(e) =>
                          handleItemChange(index, 'price', e.target.value)
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="item-quantity"
                        required
                        placeholder="Quantity"
                        value={item.quantity}
                        onChange={(e) =>
                          handleItemChange(index, 'quantity', e.target.value)
                        }
                      />
                    </td>
                    <td className="item-amount">₹{item.amount.toFixed(2)}</td>
                    <td>
                      <i className="fa-regular fa-trash-can" style={{ color: '#ea3d1f', cursor:'pointer'}}
                      onClick={()=>handleDeleteItem(index)}></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="addItem">
              <button
                type="button"
                className="text-gray-700"
                id="add-item-button"
                onClick={handleAddItem}
              >
                <i
                  className="fa-light fa-plus"
                  style={{ color: 'rgb(113, 40, 196)', fontSize: '20px' }}
                ></i>{' '}
                Add Item
              </button>
              <div className="mt-4 itemTax">
                <label>Total before tax</label>
                <span id="total-before-tax">₹{totals.totalBeforeTax.toFixed(2)}</span>
              </div>
            </div>
            <div className="finalTax">
              <div className="mt-2 totalTax">
                <label>
                  Tax <span>5%</span>
                </label>
                <span id="tax">₹{totals.tax.toFixed(2)}</span>
              </div>
              <div className="mt-2 totalTax">
                <label>Total after tax</label>
                <span id="total-after-tax">₹{totals.totalAfterTax.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container3">
          <h2>
            <i className="bi bi-truck"></i> Shipment
          </h2>
          <div className="mt-4">
            <label htmlFor="ship-from">Ship from</label>
            <select id="ship-from" required>
              <option value="" selected disabled>
                Select location
              </option>
              {/* Options for Ship from */}
            </select>
          </div>
          <div className="mt-4">
            <label htmlFor="ship-to">Ship to</label>
            <div className="shipto">
              <input
                type="text"
                id="ship-to"
                required
                placeholder="Location"
              />
              <p>Edit</p>
            </div>
          </div>
          <div className="mt-4 shipmentCode">
            <div>
              <label htmlFor="center-code">Center code</label>
              <input
                type="text"
                id="center-code"
                required
                placeholder="Ex. 1234"
              />
            </div>
            <div>
              <label htmlFor="ship-code">Ship code</label>
              <input
                type="text"
                id="ship-code"
                required
                placeholder="Ex. 1234"
              />
            </div>
          </div>
        </div>

        <div className="container4">
          <h2>Payment</h2>
          <div
            className="btn-group"
            role="group"
            aria-label="Basic radio toggle button group"
          >
            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio2"
              autoComplete="off"
              checked
            />
            <label className="btn pay" htmlFor="btnradio1">
              Bank Transfer
            </label>

            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio1"
              autoComplete="off"
            />
            <label className="btn pay" htmlFor="btnradio2">
              Cash
            </label>
          </div>
          <div className="mt-4 paymentBank">
            <div>
              <label htmlFor="bank-name">Bank</label>
              <input
                type="text"
                id="bank-name"
                required
                placeholder="Enter Bank Name"
              />
            </div>
            <div>
              <label htmlFor="account-number">Account number</label>
              <input
                type="text"
                id="account-number"
                required
                placeholder="Enter Account Number"
              />
            </div>
          </div>
          <div className="mt-4 currencyCode">
            <div>
              <label htmlFor="currency">Currency</label>
              <select id="currency" required>
                <option value="" selected disabled>
                  Select currency
                  
                </option>
                <option value=""> ₹</option>
                {/* Currency options */}
              </select>
            </div>
            <div>
              <label htmlFor="transfer-code">Transfer code</label>
              <input
                type="text"
                id="transfer-code"
                required
                placeholder="Ex. 1234"
              />
            </div>
            <div className="save">
              <label>Save</label>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </div>

        <div className="container5">
        <i className="bi bi-exclamation-triangle" style={{ color: '#ee59a6' }}></i>{' '}
          <p>
            
            Individual often indicates not a considerable irregular merchant behavior. Cases
            prudent risk ratios, otherwise do dollar calculator hours even weeks companies
            its own methods to rule-out minimal.
          </p>
        </div>
        <div className="submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default MyForm;
