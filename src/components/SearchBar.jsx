import { useEffect, useState } from 'react';
import useDebounce from '../hooks/useDebounce.js';

export default function SearchBar({ onSearch, placeholder = 'Search orders', delay = 300 }) {
  const [value, setValue] = useState('');
  const debounced = useDebounce(value, delay);

  useEffect(() => {
    onSearch?.(debounced.trim());
  }, [debounced, onSearch]);

  return (
    <div className="input-group bg-card-dark border-0 rounded-3 shadow-hover">
      <span className="input-group-text bg-transparent border-0 text-white">
        <i className="bi bi-search"></i>
      </span>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="search"
        className="form-control bg-transparent border-0 text-white"
        placeholder={placeholder}
        aria-label={placeholder}
      />
    </div>
  );
}
