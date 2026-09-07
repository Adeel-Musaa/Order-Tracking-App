export function Error404() {
  return (
    <div className="bg-card-dark p-4 rounded-4 shadow-hover text-center">
      <div className="pill-icon bg-warning text-black mb-3">
        <i className="bi bi-compass"></i>
      </div>
      <h5 className="mb-2">Page not found</h5>
      <p className="text-dim mb-0">The page you are looking for does not exist.</p>
    </div>
  );
}

export function Error500() {
  return (
    <div className="bg-card-dark p-4 rounded-4 shadow-hover text-center">
      <div className="pill-icon bg-danger text-white mb-3">
        <i className="bi bi-bug"></i>
      </div>
      <h5 className="mb-2">Server hiccup</h5>
      <p className="text-dim mb-0">Our systems hit a bump. Retry shortly.</p>
    </div>
  );
}
