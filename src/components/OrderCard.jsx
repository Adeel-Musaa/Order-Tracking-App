import StatusBadge from './StatusBadge.jsx';

export default function OrderCard({ order, onSelect }) {
  const progressLookup = {
    PENDING: 12,
    PROCESSING: 32,
    DISPATCHED: 56,
    OUT_FOR_DELIVERY: 78,
    COMPLETED: 100,
  };
  const progress = progressLookup[order.status] || 60;

  return (
    <div className="bg-card-dark p-3 rounded-4 shadow-hover h-100 d-flex flex-column gap-2">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <small className="text-dim">{order.id}</small>
          <h6 className="mb-1">{order.title}</h6>
          <p className="text-dim mb-0">{order.customer}</p>
        </div>
        <StatusBadge status={order.status} />
      </div>
      <div className="d-flex align-items-center gap-2">
        <img src={order.image} alt={order.title} className="rounded-3 img-square-72" />
        <div className="flex-fill">
          <div className="progress bg-dark-subtle" role="progressbar" aria-label="Order progress">
            <div className={`progress-bar progress-bar-striped progress-bar-animated bg-warning progress-${progress}`}></div>
          </div>
          <small className="text-dim">ETA {order.eta}</small>
        </div>
      </div>
      <div className="d-flex gap-2 mt-auto">
        <button className="btn btn-brand flex-fill" onClick={() => onSelect(order)}>
          View timeline
        </button>
        <button className="btn btn-ghost" onClick={() => onSelect(order)}>
          <i className="bi bi-chat-dots"></i>
        </button>
      </div>
    </div>
  );
}
