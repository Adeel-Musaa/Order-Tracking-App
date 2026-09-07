import { useContext } from 'react';
import { AppContext } from '../context/AppContext.jsx';
import TrackButton from './TrackButton.jsx';
import IconButton from './IconButton.jsx';

export default function TopNavBar() {
  const { isDark, setIsDark, language, setLanguage, setShowModal } = useContext(AppContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark px-3 py-3 glass-panel shadow-hover">
      <div className="container-fluid">
        <div className="d-flex align-items-center gap-2">
          <div className="pill-icon bg-black border border-0" aria-hidden="true">
            <i className="bi bi-geo-alt text-warning"></i>
          </div>
          <div className="d-flex flex-column lh-1">
            <span className="fw-bold text-uppercase text-gradient">TrackFlow™</span>
            <small className="text-dim">Order Intelligence Cloud</small>
          </div>
        </div>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <div className="ms-auto d-flex flex-column flex-lg-row align-items-lg-center gap-3 w-100 w-lg-auto mt-3 mt-lg-0">
            <div className="d-flex gap-2 align-items-center flex-wrap">
              <IconButton icon="bi-moon" label="Dark mode" onClick={() => setIsDark(!isDark)} active={isDark} />
              <IconButton
                icon="bi-translate"
                label="Language"
                onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
              />
              <IconButton icon="bi-bell" label="Notifications" onClick={() => setShowModal(true)} />
            </div>
            <div className="d-flex flex-column flex-lg-row gap-2 align-items-lg-center w-100 w-lg-auto">
              <div className="input-group bg-black border border-0 rounded-3 overflow-hidden">
                <span className="input-group-text bg-transparent border-0 text-white">
                  <i className="bi bi-search"></i>
                </span>
                <input
                  type="text"
                  className="form-control bg-transparent border-0 text-white"
                  placeholder="Search orders, customers, invoices"
                  aria-label="Search orders"
                />
              </div>
              <TrackButton text="New shipment" icon="bi-plus-lg" />
              <div className="dropdown">
                <button className="btn btn-ghost dropdown-toggle d-flex align-items-center gap-2" data-bs-toggle="dropdown">
                  <span className="avatar-sm bg-warning text-black fw-bold rounded-circle d-inline-flex align-items-center justify-content-center">
                    AC
                  </span>
                  <span className="d-none d-sm-inline">Alex Carter</span>
                </button>
                <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end">
                  <li><span className="dropdown-item">Profile</span></li>
                  <li><span className="dropdown-item">Saved addresses</span></li>
                  <li><span className="dropdown-item">Logout</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
