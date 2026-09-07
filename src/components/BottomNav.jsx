const links = [
  { icon: 'bi-house', label: 'Home', href: '#hero' },
  { icon: 'bi-truck', label: 'Track', href: '#tracking' },
  { icon: 'bi-list-check', label: 'Orders', href: '#dashboard' },
  { icon: 'bi-person', label: 'Profile', href: '#profile' },
];

export default function BottomNav() {
  return (
    <nav className="bottom-nav d-lg-none glass-panel">
      {links.map((link) => (
        <a key={link.label} href={link.href} className="bottom-nav-item">
          <i className={`bi ${link.icon}`}></i>
          <span>{link.label}</span>
        </a>
      ))}
    </nav>
  );
}
