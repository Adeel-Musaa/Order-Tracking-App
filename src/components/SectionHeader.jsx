export default function SectionHeader({ eyebrow, title, subtitle, action }) {
  return (
    <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3 mb-4">
      <div>
        {eyebrow && <div className="pill text-uppercase small mb-2">{eyebrow}</div>}
        <h3 className="mb-1">{title}</h3>
        {subtitle && <p className="mb-0 text-dim">{subtitle}</p>}
      </div>
      {action && <div className="d-flex align-items-center gap-2">{action}</div>}
    </div>
  );
}
