import { useState } from 'react';
import TrackButton from './TrackButton.jsx';

export default function PlaceOrderForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="bg-card-dark p-4 rounded-4 shadow-hover text-center">
        <div className="pill-icon bg-warning text-black mb-3">
          <i className="bi bi-check2-circle"></i>
        </div>
        <h5 className="mb-2">Order placed successfully</h5>
        <p className="text-dim mb-3">We emailed your confirmation and started preparing your order.</p>
        <TrackButton text="Track order" icon="bi-truck" />
      </div>
    );
  }

  return (
    <form className="bg-card-dark p-4 rounded-4 shadow-hover">
      <div className="row g-3">
        <div className="col-12 col-md-6">
          <label className="form-label text-dim">Name</label>
          <input className="form-control bg-dark text-white border-0" placeholder="Full name" required />
        </div>
        <div className="col-12 col-md-6">
          <label className="form-label text-dim">Phone</label>
          <input className="form-control bg-dark text-white border-0" placeholder="Phone number" required />
        </div>
        <div className="col-12">
          <label className="form-label text-dim">Address</label>
          <input className="form-control bg-dark text-white border-0" placeholder="Delivery address" required />
        </div>
        <div className="col-12">
          <label className="form-label text-dim">Order items</label>
          <textarea className="form-control bg-dark text-white border-0" rows={3} placeholder="List your items" required></textarea>
        </div>
        <div className="col-12">
          <label className="form-label text-dim">Delivery instructions</label>
          <textarea className="form-control bg-dark text-white border-0" rows={2} placeholder="Gate code, notes"></textarea>
        </div>
        <div className="col-12 col-md-6">
          <label className="form-label text-dim">Payment method</label>
          <select className="form-select bg-dark text-white border-0">
            <option>Card on delivery</option>
            <option>Saved card</option>
            <option>PayPal</option>
          </select>
        </div>
        <div className="col-12 col-md-6">
          <label className="form-label text-dim">Upload image (optional)</label>
          <input type="file" className="form-control bg-dark text-white border-0" />
        </div>
      </div>
      <div className="d-flex gap-2 mt-4">
        <TrackButton text="Submit order" icon="bi-check2" onClick={(e) => { e.preventDefault(); setSubmitted(true); }} />
        <TrackButton text="Save draft" variant="ghost" />
      </div>
    </form>
  );
}
