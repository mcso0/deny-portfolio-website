// 📞 Contact Section - 연락처 섹션 (흰색 배경)
// Figma 기준: 데스크톱 405px, 모바일 248px 높이

import './ContactSection.css';

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <h2 className="contact-title">Contact</h2>
        <div className="contact-info">
          <p className="contact-text">
            새로운 프로젝트나 협업 기회가 있으시면<br/>
            언제든 연락해 주세요.
          </p>
          <div className="contact-links">
            <a href="mailto:seungwook@example.com" className="contact-link">
              seungwook@example.com
            </a>
            <a href="tel:+821012345678" className="contact-link">
              +82 10-1234-5678
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;