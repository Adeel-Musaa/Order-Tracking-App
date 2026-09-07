// Shipments page
import { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Shipments() {
  const [shipments, setShipments] = useState([
    { id: 1, tracking: 'TRK123', status: 'Delivered' },
    { id: 2, tracking: 'TRK456', status: 'In Transit' },
  ]);
  const [newShipment, setNewShipment] = useState({ tracking: '', status: '' });
  const [editId, setEditId] = useState(null);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newShipment.tracking || !newShipment.status) return;
    setShipments([...shipments, { id: Date.now(), ...newShipment }]);
    setNewShipment({ tracking: '', status: '' });
  };

  const handleDelete = (id) => {
    setShipments(shipments.filter((s) => s.id !== id));
  };

  const handleEdit = (shipment) => {
    setEditId(shipment.id);
    setNewShipment({ tracking: shipment.tracking, status: shipment.status });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    setShipments(shipments.map((s) => (s.id === editId ? { ...s, ...newShipment } : s)));
    setEditId(null);
    setNewShipment({ tracking: '', status: '' });
  };

  // Example stats
  const totalShipments = shipments.length;
  const delivered = shipments.filter((s) => s.status === 'Delivered').length;
  const inTransit = shipments.filter((s) => s.status === 'In Transit').length;
  const chartData = {
    labels: ['Delivered', 'In Transit'],
    datasets: [
      {
        label: 'Shipments',
        data: [delivered, inTransit],
        backgroundColor: ['#4caf50', '#ff9800'],
      },
    ],
  };
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Shipments Status' },
    },
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4">Shipments Dashboard</h2>
      <div className="row mb-4">
        <div className="col-md-4">
          <div className="bg-card-dark p-3 rounded-4 shadow-hover text-center">
            <h5>Total Shipments</h5>
            <div className="display-6 fw-bold">{totalShipments}</div>
          </div>
        </div>
        <div className="col-md-8">
          <Doughnut data={chartData} options={chartOptions} height={120} />
        </div>
      </div>
      <form className="mb-3" onSubmit={editId ? handleUpdate : handleAdd}>
        <div className="row g-2 align-items-end">
          <div className="col">
            <input
              className="form-control"
              placeholder="Tracking Number"
              value={newShipment.tracking}
              onChange={(e) => setNewShipment({ ...newShipment, tracking: e.target.value })}
              required
            />
          </div>
          <div className="col">
            <input
              className="form-control"
              placeholder="Status"
              value={newShipment.status}
              onChange={(e) => setNewShipment({ ...newShipment, status: e.target.value })}
              required
            />
          </div>
          <div className="col-auto">
            <button className="btn btn-brand" type="submit">
              {editId ? 'Update' : 'Add'}
            </button>
            {editId && (
              <button className="btn btn-secondary ms-2" type="button" onClick={() => { setEditId(null); setNewShipment({ tracking: '', status: '' }); }}>
                Cancel
              </button>
            )}
          </div>
        </div>
      </form>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>Tracking</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {shipments.map((s) => (
            <tr key={s.id}>
              <td>{s.tracking}</td>
              <td>{s.status}</td>
              <td>
                <button className="btn btn-sm btn-warning me-2" onClick={() => handleEdit(s)}>
                  Edit
                </button>
                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(s.id)}>
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