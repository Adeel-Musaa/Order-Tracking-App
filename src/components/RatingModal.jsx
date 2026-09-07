import { useState } from 'react';

export default function RatingModal({ open, onClose }) {
  const [rating, setRating] = useState(5);
  const [note, setNote] = useState('');

  if (!open) return null;

  return (
    <div className="modal fade show d-block" tabIndex="-1" role="dialog" aria-modal="true">
      <div className="modal-dialog">
        <div className="modal-content bg-card-dark text-white glass-border">
          <div className="modal-header border-0">
            <h5 className="modal-title">Rate your delivery</h5>
            <button type="button" className="btn-close btn-close-white" aria-label="Close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <div className="d-flex gap-2 mb-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className={`btn btn-ghost ${rating >= star ? 'text-warning' : 'text-dim'}`}
                  onClick={() => setRating(star)}
                  aria-label={`Rate ${star}`}
                >
                  <i className="bi bi-star-fill"></i>
                </button>
              ))}
            </div>
            <textarea
              className="form-control bg-dark text-white border-0"
              rows={3}
              placeholder="Leave a quick note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            ></textarea>
          </div>
          <div className="modal-footer border-0">
            <button className="btn btn-ghost" onClick={onClose}>Maybe later</button>
            <button className="btn btn-brand" onClick={onClose}>Submit</button>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show" onClick={onClose}></div>
    </div>
  );
}
