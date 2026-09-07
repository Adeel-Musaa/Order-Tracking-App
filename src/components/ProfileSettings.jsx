export default function ProfileSettings({ savedAddresses }) {
  return (
    <div className="bg-card-dark p-3 rounded-4 shadow-hover" id="profile">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <p className="text-dim mb-1">Profile</p>
          <h6 className="mb-0">Settings</h6>
        </div>
        <button className="btn btn-brand btn-sm">Save</button>
      </div>
      <div className="row g-3">
        <div className="col-12 col-md-6">
          <label className="form-label text-dim">Full name</label>
          <input className="form-control bg-dark text-white border-0" defaultValue="Alex Carter" />
        </div>
        <div className="col-12 col-md-6">
          <label className="form-label text-dim">Email</label>
          <input className="form-control bg-dark text-white border-0" defaultValue="alex@trackflow.io" />
        </div>
        <div className="col-12 col-md-6">
          <label className="form-label text-dim">Phone</label>
          <input className="form-control bg-dark text-white border-0" defaultValue="+1 202 555 0134" />
        </div>
        <div className="col-12 col-md-6">
          <label className="form-label text-dim">Language</label>
          <select className="form-select bg-dark text-white border-0">
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
          </select>
        </div>
      </div>
      <div className="divider-light my-3"></div>
      <h6 className="mb-2">Saved addresses</h6>
      <div className="d-flex flex-wrap gap-2">
        {savedAddresses.map((addr) => (
          <span key={addr.label} className="badge-soft badge-soft-muted">
            <i className="bi bi-geo-alt me-1"></i>
            {addr.label}: {addr.detail}
          </span>
        ))}
      </div>
    </div>
  );
}
