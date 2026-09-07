// Settings page
import { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Settings() {
  const [settings, setSettings] = useState([
    { id: 1, key: 'Theme', value: 'Dark' },
    { id: 2, key: 'Language', value: 'English' },
  ]);
  const [newSetting, setNewSetting] = useState({ key: '', value: '' });
  const [editId, setEditId] = useState(null);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newSetting.key || !newSetting.value) return;
    setSettings([...settings, { id: Date.now(), ...newSetting }]);
    setNewSetting({ key: '', value: '' });
  };

  const handleDelete = (id) => {
    setSettings(settings.filter((s) => s.id !== id));
  };

  const handleEdit = (setting) => {
    setEditId(setting.id);
    setNewSetting({ key: setting.key, value: setting.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    setSettings(settings.map((s) => (s.id === editId ? { ...s, ...newSetting } : s)));
    setEditId(null);
    setNewSetting({ key: '', value: '' });
  };

  // Example stats
  const totalSettings = settings.length;
  // Example: count settings by value
  const byValue = settings.reduce((acc, s) => {
    acc[s.value] = (acc[s.value] || 0) + 1;
    return acc;
  }, {});
  const chartData = {
    labels: Object.keys(byValue),
    datasets: [
      {
        label: 'Settings by Value',
        data: Object.values(byValue),
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
      title: { display: true, text: 'Settings by Value' },
    },
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4">Settings Dashboard</h2>
      <div className="row mb-4">
        <div className="col-md-6">
          <div className="bg-card-dark p-3 rounded-4 shadow-hover text-center">
            <h5>Total Settings</h5>
            <div className="display-6 fw-bold">{totalSettings}</div>
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
              placeholder="Setting Key"
              value={newSetting.key}
              onChange={(e) => setNewSetting({ ...newSetting, key: e.target.value })}
              required
            />
          </div>
          <div className="col">
            <input
              className="form-control"
              placeholder="Value"
              value={newSetting.value}
              onChange={(e) => setNewSetting({ ...newSetting, value: e.target.value })}
              required
            />
          </div>
          <div className="col-auto">
            <button className="btn btn-brand" type="submit">
              {editId ? 'Update' : 'Add'}
            </button>
            {editId && (
              <button className="btn btn-secondary ms-2" type="button" onClick={() => { setEditId(null); setNewSetting({ key: '', value: '' }); }}>
                Cancel
              </button>
            )}
          </div>
        </div>
      </form>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>Key</th>
            <th>Value</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {settings.map((s) => (
            <tr key={s.id}>
              <td>{s.key}</td>
              <td>{s.value}</td>
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