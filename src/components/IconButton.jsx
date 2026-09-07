export default function IconButton({ icon, label, onClick, active }) {
  return (
    <button
      type="button"
      className={`btn btn-sm btn-ghost d-inline-flex align-items-center gap-2 ${active ? 'border-warning' : ''}`}
      onClick={onClick}
      aria-label={label}
    >
      <i className={`bi ${icon}`}></i>
      <span className="fw-semibold d-none d-sm-inline">{label}</span>
    </button>
  );
}
