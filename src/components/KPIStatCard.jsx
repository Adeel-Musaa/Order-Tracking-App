export default function KPIStatCard({ icon, value, label, accent = 'orange' }) {
  return (
    <div className="bg-card-dark p-3 rounded-4 shadow-hover h-100 kpi-card">
      <div className="d-flex align-items-center justify-content-between mb-2">
        <div className={`pill-icon icon-accent-${accent}`}>
          <i className={`bi ${icon}`}></i>
        </div>
        <span className="badge-soft badge-soft-muted">Realtime</span>
      </div>
      <h3 className="mb-0">{value}</h3>
      <p className="text-dim mb-0">{label}</p>
    </div>
  );
}
