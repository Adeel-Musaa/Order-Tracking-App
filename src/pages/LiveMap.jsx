// Live Map page
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

export default function LiveMap() {
  const [locations, setLocations] = useState([
    { id: 1, name: 'Warehouse', status: 'Active' },
    { id: 2, name: 'Delivery Point', status: 'Inactive' },
  ]);
  const [newLocation, setNewLocation] = useState({ name: '', status: '' });
  const [editId, setEditId] = useState(null);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newLocation.name || !newLocation.status) return;
    setLocations([...locations, { id: Date.now(), ...newLocation }]);
    setNewLocation({ name: '', status: '' });
  };

  const handleDelete = (id) => {
    setLocations(locations.filter((l) => l.id !== id));
  };

  const handleEdit = (location) => {
    setEditId(location.id);
    setNewLocation({ name: location.name, status: location.status });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    setLocations(locations.map((l) => (l.id === editId ? { ...l, ...newLocation } : l)));
    setEditId(null);
    setNewLocation({ name: '', status: '' });
  };

  // Example stats
  const totalLocations = locations.length;
  const active = locations.filter((l) => l.status === 'Active').length;
  const inactive = locations.filter((l) => l.status === 'Inactive').length;
  const chartData = {
    labels: ['Active', 'Inactive'],
    datasets: [
      {
        label: 'Locations',
        data: [active, inactive],
        backgroundColor: ['#4caf50', '#e91e63'],
      },
    ],
  };
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Location Status' },
    },
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4">Live Map Dashboard</h2>
      <div className="row mb-4">
        <div className="col-md-4">
          <div className="bg-card-dark p-3 rounded-4 shadow-hover text-center">
            <h5>Total Locations</h5>
            <div className="display-6 fw-bold">{totalLocations}</div>
          </div>
        </div>
        <div className="col-md-8">
          <Bar data={chartData} options={chartOptions} height={120} />
        </div>
      </div>
      <form className="mb-3" onSubmit={editId ? handleUpdate : handleAdd}>
        <div className="row g-2 align-items-end">
          <div className="col">
            <input
              className="form-control"
              placeholder="Location Name"
              value={newLocation.name}
              onChange={(e) => setNewLocation({ ...newLocation, name: e.target.value })}
              required
            />
          </div>
          <div className="col">
            <input
              className="form-control"
              placeholder="Status"
              value={newLocation.status}
              onChange={(e) => setNewLocation({ ...newLocation, status: e.target.value })}
              required
            />
          </div>
          <div className="col-auto">
            <button className="btn btn-brand" type="submit">
              {editId ? 'Update' : 'Add'}
            </button>
            {editId && (
              <button className="btn btn-secondary ms-2" type="button" onClick={() => { setEditId(null); setNewLocation({ name: '', status: '' }); }}>
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
          {locations.map((l) => (
            <tr key={l.id}>
              <td>{l.name}</td>
              <td>{l.status}</td>
              <td>
                <button className="btn btn-sm btn-warning me-2" onClick={() => handleEdit(l)}>
                  Edit
                </button>
                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(l.id)}>
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