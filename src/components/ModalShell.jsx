import { useContext } from 'react';
import { AppContext } from '../context/AppContext.jsx';
import StatusBadge from './StatusBadge.jsx';

export default function ModalShell() {
  const { showModal, setShowModal, orders } = useContext(AppContext);

  if (!showModal) return null;

  return (
    <div className="modal fade show d-block" tabIndex="-1" role="dialog" aria-modal="true">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content bg-card-dark text-white glass-border">
          <div className="modal-header border-0">
            <h5 className="modal-title">Notifications</h5>
            <button type="button" className="btn-close btn-close-white" aria-label="Close" onClick={() => setShowModal(false)}></button>
          </div>
          <div className="modal-body">
            <div className="d-flex flex-column gap-3">
              {orders.slice(0, 3).map((order) => (
                <div key={order.id} className="d-flex align-items-center justify-content-between p-3 rounded-4 bg-glow position-relative overflow-hidden">
                  <div className="position-relative">
                    <p className="mb-0 text-dim small">{order.id}</p>
                    <h6 className="mb-1">{order.title}</h6>
                    <small className="text-dim">{order.customer}</small>
                  </div>
                  <StatusBadge status={order.status} />
                </div>
              ))}
            </div>
          </div>
          <div className="modal-footer border-0">
            <button type="button" className="btn btn-ghost" onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show" onClick={() => setShowModal(false)}></div>
    </div>
  );
}
