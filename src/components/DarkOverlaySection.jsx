export default function DarkOverlaySection({ children }) {
  return (
    <section className="position-relative overflow-hidden rounded-4 bg-card-dark p-4 p-md-5 shadow-hover">
      <div className="floating-shape orange"></div>
      <div className="floating-shape purple"></div>
      <div className="position-relative">{children}</div>
    </section>
  );
}
