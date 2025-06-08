// 🔗 Footer - 사이트맵 2열 구조
// Figma 기준: 255px 높이

import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const sitemapLeft = [
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'UX/UI Design', href: '#uxui' },
    { label: 'Graphic Design', href: '#graphic' },
    { label: 'Visual Design', href: '#visual' }
  ];

  const sitemapRight = [
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
    { label: 'Resume', href: '#resume' },
    { label: 'LinkedIn', href: 'https://linkedin.com' }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* 사이트맵 2열 */}
        <div className="sitemap">
          <div className="sitemap-column">
            {sitemapLeft.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className="footer-link footer-text"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="sitemap-column">
            {sitemapRight.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className="footer-link footer-text"
                target={link.href.startsWith('http') ? '_blank' : '_self'}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* 카피라이트 */}
        <div className="footer-bottom">
          <p className="footer-text">
            © {currentYear} 이승욱. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;