import { useState } from 'react';

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="chat-widget">
      {open && (
        <div className="chat-panel bg-card-dark text-white glass-border shadow-hover">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <strong>Support</strong>
            <button className="btn btn-ghost btn-sm" onClick={() => setOpen(false)} aria-label="Close chat">
              <i className="bi bi-x-lg"></i>
            </button>
          </div>
          <div className="chat-messages">
            <div className="chat-bubble agent">Hi! Need help with your delivery?</div>
            <div className="chat-bubble user">I want to update my address.</div>
          </div>
          <div className="input-group bg-dark rounded-3 overflow-hidden">
            <input className="form-control bg-transparent border-0 text-white" placeholder="Type a message" />
            <button className="btn btn-brand" type="button">
              <i className="bi bi-send"></i>
            </button>
          </div>
        </div>
      )}
      <button className="btn btn-brand rounded-circle chat-toggle" onClick={() => setOpen(!open)} aria-label="Open chat">
        <i className="bi bi-chat-dots"></i>
      </button>
    </div>
  );
}
