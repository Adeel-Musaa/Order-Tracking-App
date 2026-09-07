// Customers page
import { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Customers() {
  const [customers, setCustomers] = useState([
    { id: 1, name: 'Ali Khan', phone: '0300-1234567' },
    { id: 2, name: 'Sara Ahmed', phone: '0321-9876543' },
  ]);
  const [newCustomer, setNewCustomer] = useState({ name: '', phone: '' });
  const [editId, setEditId] = useState(null);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newCustomer.name || !newCustomer.phone) return;
    setCustomers([...customers, { id: Date.now(), ...newCustomer }]);
    setNewCustomer({ name: '', phone: '' });
  };

  const handleDelete = (id) => {
    setCustomers(customers.filter((c) => c.id !== id));
  };

  const handleEdit = (customer) => {
    setEditId(customer.id);
    setNewCustomer({ name: customer.name, phone: customer.phone });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    setCustomers(customers.map((c) => (c.id === editId ? { ...c, ...newCustomer } : c)));
    setEditId(null);
    setNewCustomer({ name: '', phone: '' });
  };

  // Example stats
  const totalCustomers = customers.length;
  // Example: count customers by first letter of name
  const byLetter = customers.reduce((acc, c) => {
    const letter = c.name[0].toUpperCase();
    acc[letter] = (acc[letter] || 0) + 1;
    return acc;
  }, {});
  const chartData = {
    labels: Object.keys(byLetter),
    datasets: [
      {
        label: 'Customers by Name Initial',
        data: Object.values(byLetter),
        backgroundColor: [
          '#4caf50', '#ff9800', '#2196f3', '#e91e63', '#9c27b0', '#ffc107', '#00bcd4', '#8bc34a', '#f44336', '#607d8b',
        ],
      },
    ],
  };
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Customers by Name Initial' },
    },
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4">Customers Dashboard</h2>
      <div className="row mb-4">
        <div className="col-md-6">
          <div className="bg-card-dark p-3 rounded-4 shadow-hover text-center">
            <h5>Total Customers</h5>
            <div className="display-6 fw-bold">{totalCustomers}</div>
          </div>
        </div>
        <div className="col-md-6">
          <Pie data={chartData} options={chartOptions} height={120} />
        </div>
      </div>
      <form className="mb-3" onSubmit={editId ? handleUpdate : handleAdd}>
        <div className="row g-2 align-items-end">
          <div className="col">
            <input
              className="form-control"
              placeholder="Name"
              value={newCustomer.name}
              onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })}
              required
            />
          </div>
          <div className="col">
            <input
              className="form-control"
              placeholder="Phone"
              value={newCustomer.phone}
              onChange={(e) => setNewCustomer({ ...newCustomer, phone: e.target.value })}
              required
            />
          </div>
          <div className="col-auto">
            <button className="btn btn-brand" type="submit">
              {editId ? 'Update' : 'Add'}
            </button>
            {editId && (
              <button className="btn btn-secondary ms-2" type="button" onClick={() => { setEditId(null); setNewCustomer({ name: '', phone: '' }); }}>
                Cancel
              </button>
            )}
          </div>
        </div>
      </form>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((c) => (
            <tr key={c.id}>
              <td>{c.name}</td>
              <td>{c.phone}</td>
              <td>
                <button className="btn btn-sm btn-warning me-2" onClick={() => handleEdit(c)}>
                  Edit
                </button>
                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(c.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}