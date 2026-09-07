export default function TrackButton({ text, icon, variant = 'primary', onClick, size = 'md' }) {
  const className = variant === 'ghost' ? 'btn btn-ghost' : 'btn btn-brand';
  const padding = size === 'sm' ? 'py-2 px-3' : 'py-3 px-4';

  return (
    <button type="button" className={`${className} ${padding} d-inline-flex align-items-center gap-2`} onClick={onClick}>
      {icon && <i className={`bi ${icon}`}></i>}
      <span className="fw-bold">{text}</span>
    </button>
  );
}
