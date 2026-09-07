import { useContext } from 'react';
import { AppContext } from '../context/AppContext.jsx';

export default function ToastStack() {
  const { toasts, setToasts } = useContext(AppContext);

  return (
    <div className="toast-container position-fixed top-0 end-0 p-3 toast-layer">
      {toasts.map((toast) => (
        <div key={toast.id} className="toast show glass-panel border-0 text-white mb-2">
          <div className="toast-body d-flex align-items-center justify-content-between gap-3">
            <div>
              <strong className="me-2">{toast.title}</strong>
              <span className="text-dim">{toast.detail}</span>
            </div>
            <button
              type="button"
              className="btn-close btn-close-white"
              aria-label="Close"
              onClick={() => setToasts((prev) => prev.filter((item) => item.id !== toast.id))}
            ></button>
          </div>
        </div>
      ))}
    </div>
  );
}
