import { useContext } from 'react';
import { AppContext } from '../context/AppContext.jsx';

const variants = {
  PENDING: { bg: '#f5c542', icon: 'bi-hourglass-split' },
  PROCESSING: { bg: '#1b8ef2', icon: 'bi-cpu' },
  DISPATCHED: { bg: '#ff7a00', icon: 'bi-send' },
  OUT_FOR_DELIVERY: { bg: '#9b6bff', icon: 'bi-truck' },
  COMPLETED: { bg: '#2ecc71', icon: 'bi-check-lg' },
  CANCELLED: { bg: '#ff4d4f', icon: 'bi-x-circle' },
  ORDER_PLACED: { bg: '#f5c542', icon: 'bi-bag-check' },
  CONFIRMED: { bg: '#1b8ef2', icon: 'bi-shield-check' },
  PREPARING: { bg: '#ff7a00', icon: 'bi-egg-fried' },
  DELIVERED: { bg: '#2ecc71', icon: 'bi-box-seam' },
};

export default function StatusBadge({ status, size = 'md' }) {
  const { statusOptions } = useContext(AppContext);
  const variant = variants[status] || variants.PENDING;
  const label = statusOptions?.[status]?.label || status;

  return (
    <span className={`status-pill status-${status?.toLowerCase()} ${size === 'sm' ? 'status-sm' : ''}`}>
      <i className={`bi ${variant.icon}`}></i>
      {label}
    </span>
  );
}
