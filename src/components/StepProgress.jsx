import StatusBadge from './StatusBadge.jsx';

export default function StepProgress({ steps, currentIndex = 0 }) {
  return (
    <div className="d-flex flex-column gap-3">
      {steps.map((step, idx) => {
        const isActive = idx <= currentIndex;
        return (
          <div key={step.name} className="d-flex gap-3 align-items-start">
            <div className="d-flex flex-column align-items-center timeline-icon-col">
              <div className={`pill-icon ${isActive ? 'bg-warning text-black' : 'bg-dark text-white'}`}>
                <i className={`bi ${isActive ? 'bi-check2' : 'bi-dot'}`}></i>
              </div>
              {idx < steps.length - 1 && <div className="timeline-line flex-fill"></div>}
            </div>
            <div className="flex-fill bg-card-dark p-3 rounded-4 shadow-hover">
              <div className="d-flex justify-content-between align-items-center mb-1 flex-wrap gap-2">
                <h6 className="mb-0">{step.name}</h6>
                {step.time ? <span className="text-dim small">{step.time}</span> : <StatusBadge status="PENDING" size="sm" />}
              </div>
              <p className="mb-0 text-dim">{step.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
