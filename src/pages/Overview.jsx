// Overview page
import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Overview() {
  const [items, setItems] = useState([
    { id: 1, name: 'Order #1', status: 'Delivered' },
    { id: 2, name: 'Order #2', status: 'In Transit' },
  ]);
  const [newItem, setNewItem] = useState({ name: '', status: '' });
  const [editId, setEditId] = useState(null);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newItem.name || !newItem.status) return;
    setItems([...items, { id: Date.now(), ...newItem }]);
    setNewItem({ name: '', status: '' });
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleEdit = (item) => {
    setEditId(item.id);
    setNewItem({ name: item.name, status: item.status });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    setItems(items.map((item) => (item.id === editId ? { ...item, ...newItem } : item)));
    setEditId(null);
    setNewItem({ name: '', status: '' });
  };

  // Example stats
  const totalOrders = items.length;
  const delivered = items.filter((i) => i.status === 'Delivered').length;
  const inTransit = items.filter((i) => i.status === 'In Transit').length;

  // Chart data
  const chartData = {
    labels: ['Delivered', 'In Transit'],
    datasets: [
      {
        label: 'Orders',
        data: [delivered, inTransit],
        backgroundColor: ['#4caf50', '#ff9800'],
      },
    ],
  };
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Order Status Overview' },
    },
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4">Overview Dashboard</h2>
      <div className="row mb-4">
        <div className="col-md-4">
          <div className="bg-card-dark p-3 rounded-4 shadow-hover text-center">
            <h5>Total Orders</h5>
            <div className="display-6 fw-bold">{totalOrders}</div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="bg-card-dark p-3 rounded-4 shadow-hover text-center">
            <h5>Delivered</h5>
            <div className="display-6 fw-bold text-success">{delivered}</div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="bg-card-dark p-3 rounded-4 shadow-hover text-center">
            <h5>In Transit</h5>
            <div className="display-6 fw-bold text-warning">{inTransit}</div>
          </div>
        </div>
      </div>
      <div className="mb-5">
        <Bar data={chartData} options={chartOptions} height={120} />
      </div>
      <form className="mb-3" onSubmit={editId ? handleUpdate : handleAdd}>
        <div className="row g-2 align-items-end">
          <div className="col">
            <input
              className="form-control"
              placeholder="Name"
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
              required
            />
          </div>
          <div className="col">
            <input
              className="form-control"
              placeholder="Status"
              value={newItem.status}
              onChange={(e) => setNewItem({ ...newItem, status: e.target.value })}
              required
            />
          </div>
          <div className="col-auto">
            <button className="btn btn-brand" type="submit">
              {editId ? 'Update' : 'Add'}
            </button>
            {editId && (
              <button className="btn btn-secondary ms-2" type="button" onClick={() => { setEditId(null); setNewItem({ name: '', status: '' }); }}>
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
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.status}</td>
              <td>
                <button className="btn btn-sm btn-warning me-2" onClick={() => handleEdit(item)}>
                  Edit
                </button>
                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(item.id)}>
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