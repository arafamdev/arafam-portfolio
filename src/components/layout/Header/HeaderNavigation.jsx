import { navigationLinks } from './headerData';

function HeaderNavigation() {
  return (
    <nav aria-label="Main navigation">
      <ul className="flex items-center gap-7">
        {navigationLinks.map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              className="text-muted hover:text-foreground focus-visible:outline-foreground rounded-sm text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default HeaderNavigation;
