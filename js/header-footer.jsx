/* header-footer.jsx — Site header (sticky) + design-system footer. */

function LangToggle({ value = 'HE', onChange }) {
  return (
    <div className="lang-toggle" role="group" aria-label="Language">
      <button className={value === 'HE' ? 'is-active' : ''} onClick={() => onChange && onChange('HE')}>HE</button>
      <button className={value === 'EN' ? 'is-active' : ''} onClick={() => onChange && onChange('EN')}>EN</button>
    </div>
  );
}

function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [lang, setLang] = React.useState('HE');
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const items = [
    { id: 'findings', he: 'הממצאים', en: 'Findings', active: true },
    { id: 'explore',  he: 'חקור',    en: 'Explore',  active: false },
    { id: 'about',    he: 'אודות',   en: 'About',    active: false },
  ];
  return (
    <header className={'header' + (scrolled ? ' is-scrolled' : '')}>
      <div className="header-inner">
        <a className="mark" href="#">
          <span className="mark-he">צופן אור</span>
          <span className="mark-en">TSOFENOR</span>
        </a>
        <div className="nav-right">
          <nav className="nav-items" aria-label="Primary">
            {items.map(it => (
              <a key={it.id}
                 className={'nav-item' + (it.active ? ' is-active' : '')}
                 href={'#' + it.id}>
                <span className="ni-he">{it.he}</span>
                <span className="ni-en">{it.en}</span>
              </a>
            ))}
          </nav>
          <LangToggle value={lang} onChange={setLang} />
          <button className="nav-mobile" aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-cols">
          <div className="footer-col">
            <h4>מפת אתר</h4>
            <div className="col-sub">Site Map</div>
            <ul className="footer-links">
              <li><a href="#findings">הממצאים · Findings</a></li>
              <li><a href="#explore">חקור · Explore</a></li>
              <li><a href="#about">אודות · About</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>הפרויקט</h4>
            <div className="col-sub">Project</div>
            <p className="footer-prose" lang="en" dir="ltr" style={{ textAlign: 'left' }}>
              TsofenOr is an open Torah research platform investigating mathematical structures in the Masoretic text.
            </p>
            <p className="footer-prose">
              TsofenOr הוא פלטפורמת מחקר תורנית פתוחה החוקרת מבנים מתמטיים בטקסט המסורתי.
            </p>
          </div>
          <div className="footer-col">
            <h4>קוד פתוח</h4>
            <div className="col-sub">Open Source</div>
            <p className="footer-prose" lang="en" dir="ltr" style={{ textAlign: 'left' }}>
              All findings, methodology, and source code are openly available for verification, replication, and extension.
            </p>
            <p style={{ margin: '0 0 10px' }}><a className="btn-ghost" style={{ fontSize: 13 }}>GitHub Repository →</a></p>
            <p style={{ margin: 0 }}><a className="btn-ghost" style={{ fontSize: 13 }}>Methodology Documentation →</a></p>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="fb-cell">© 2026 TsofenOr · צופן אור</div>
          <div className="fb-cell center">Part of the Brain of Eliyahu research initiative · חלק מיוזמת המחקר 'מוח אליהו'</div>
          <div className="fb-cell right">v1.0 · MASORETIC TEXT</div>
        </div>
      </div>
    </footer>
  );
}

window.Header = Header;
window.Footer = Footer;
