import { useEffect, useState } from "react";
import { NAV_LINKS } from "../Data";
const Nav = ({ active, setActive }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleLinkClick = (link) => {
    setActive(link);
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
        <span className="nav__logo">
          {`GH`}
        </span>

        <ul className="nav__links">
          {NAV_LINKS.map((link) => (
            <li key={link} >
              <a href={`#${link.toLowerCase()}`} className={`nav__link ${active === link ? "nav__link--active" : ""}`} onClick={() => handleLinkClick(link)} style={{fontSize:"15px"}}>
                {link}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`nav__hamburger ${menuOpen ? "nav__hamburger--open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`nav__mobile ${menuOpen ? "nav__mobile--open" : ""}`}>
        <ul className="nav__mobile-links">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className={`nav__mobile-link ${active === link ? "nav__mobile-link--active" : ""}`} onClick={() => handleLinkClick(link)}>
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Nav;