export default function MapPlaceholder() {
  return (
    <div className="map-placeholder rounded-4 bg-card-dark shadow-hover d-flex align-items-center justify-content-center text-dim">
      <div className="text-center">
        <div className="pill-icon bg-dark text-warning mb-2">
          <i className="bi bi-geo-alt"></i>
        </div>
        <p className="mb-0">Live map placeholder (integrate Maps SDK)</p>
      </div>
    </div>
  );
}
