export default function PaginationBar({ page, totalPages, onPageChange }) {
  const canPrev = page > 1;
  const canNext = page < totalPages;

  return (
    <div className="d-flex align-items-center justify-content-between mt-3">
      <button className="btn btn-ghost btn-sm" disabled={!canPrev} onClick={() => onPageChange(page - 1)}>
        <i className="bi bi-chevron-left me-1"></i> Prev
      </button>
      <span className="text-dim small">
        Page {page} of {totalPages}
      </span>
      <button className="btn btn-ghost btn-sm" disabled={!canNext} onClick={() => onPageChange(page + 1)}>
        Next <i className="bi bi-chevron-right ms-1"></i>
      </button>
    </div>
  );
}
