import Sidebar from './Sidebar.jsx';
import TopNavBar from './TopNavBar.jsx';

export default function LayoutWrapper({ children }) {
  return (
    <div className="container-fluid py-3">
      <TopNavBar />
      <div className="d-flex gap-3 mt-3 flex-column flex-lg-row">
        <Sidebar />
        <main className="flex-fill">{children}</main>
      </div>
    </div>
  );
}
