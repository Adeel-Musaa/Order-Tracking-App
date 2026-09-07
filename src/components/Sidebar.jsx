import { useContext } from 'react';
import { AppContext } from '../context/AppContext.jsx';
import StatusBadge from './StatusBadge.jsx';

const navLinks = [
  { icon: 'bi-speedometer2', label: 'Overview', path: '/overview' },
  { icon: 'bi-geo', label: 'Live map', path: '/livemap' },
  { icon: 'bi-truck', label: 'Shipments', path: '/shipments' },
  { icon: 'bi-people', label: 'Customers', path: '/customers' },
  { icon: 'bi-gear', label: 'Settings', path: '/settings' },
];

export default function Sidebar() {
  const { orders } = useContext(AppContext);
  const liveOrder = orders[0];

  return (
    <aside className="d-none d-lg-flex flex-column gap-3 glass-panel p-3 sidebar-panel">
      <div className="d-flex align-items-center justify-content-between">
        <span className="text-dim">Live status</span>
        <StatusBadge status={liveOrder.status} size="sm" />
      </div>
      <div className="d-flex flex-column gap-2">
        {navLinks.map((item) => (
          <a
            key={item.label}
            className="d-flex align-items-center gap-3 py-2 px-3 rounded-3 text-white text-decoration-none shadow-hover nav-soft"
            href={item.path}
          >
            <i className={`bi ${item.icon} text-warning`}></i>
            <span className="fw-semibold">{item.label}</span>
          </a>
        ))}
      </div>
      <div className="bg-card-dark p-3 rounded-4 position-relative overflow-hidden">
        <div className="floating-shape orange"></div>
        <div className="floating-shape purple"></div>
        <div className="position-relative">
          <p className="text-dim mb-1">Order in spotlight</p>
          <h6 className="mb-1">{liveOrder.title}</h6>
          <small className="text-dim">ETA {liveOrder.eta}</small>
          <div className="mt-3 d-flex align-items-center gap-2">
            <span className="badge-soft badge-soft-warm">{liveOrder.id}</span>
            <span className="badge-soft badge-soft-muted">{liveOrder.customer}</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
