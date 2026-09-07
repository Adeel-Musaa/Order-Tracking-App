export default function LoaderSkeleton({ lines = 3 }) {
  return (
    <div className="d-flex flex-column gap-2">
      {Array.from({ length: lines }).map((_, idx) => (
        <div key={idx} className="placeholder-wave">
          <span className="placeholder col-12 bg-secondary opacity-50 skeleton-line"></span>
        </div>
      ))}
    </div>
  );
}
