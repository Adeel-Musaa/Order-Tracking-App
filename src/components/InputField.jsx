export default function InputField({ label, placeholder, icon, type = 'text' }) {
  return (
    <div className="mb-3">
      {label && <label className="form-label text-dim">{label}</label>}
      <div className="input-group bg-card-dark border border-0 rounded-3 overflow-hidden">
        {icon && (
          <span className="input-group-text bg-transparent border-0 text-white">
            <i className={`bi ${icon}`}></i>
          </span>
        )}
        <input
          type={type}
          className="form-control bg-transparent border-0 text-white"
          placeholder={placeholder}
          aria-label={label || placeholder}
        />
      </div>
    </div>
  );
}
