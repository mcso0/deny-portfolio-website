// 🧭 Navigation - 반응형 네비게이션
// Figma 기준: 64px 높이, 32px border-radius, 햄버거 메뉴(모바일)
// 스크롤 인터랙션: 924px → 640px 너비 변화

import { useState } from "react";
import "./Navigation.css";
import useScrollPosition from "../../hooks/useScrollPosition";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Intro");

  // 스크롤 감지 Hook 사용
  const { isScrolled } = useScrollPosition();

  // 메뉴 항목은 항상 동일하게 유지
  const menuItems = ["Intro", "Project", "About", "Contact"];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // 부드러운 스크롤 함수
  const scrollToSection = sectionName => {
    const sectionId = sectionName.toLowerCase();
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });

      // 활성 탭 업데이트
      setActiveTab(sectionName);
    }
  };

  return (
    <nav className={`navigation ${isScrolled ? "scrolled" : ""}`}>
      {/* 로고 영역 */}
      <div className="nav-logo">
        <img
          src="/assets/logos/Logo container-1.png"
          alt="웹사이트 로고이미지"
          className="logo-image"
        />
      </div>

      {/* 데스크톱/패드: 전체 메뉴 */}
      <div className="nav-menu-desktop">
        {menuItems.map(item => (
          <button
            key={item}
            className={`nav-item navigation-text ${
              activeTab === item ? "active" : "inactive"
            }`}
            onClick={() => scrollToSection(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {/* 설정 버튼 */}
      <div className="nav-actions">
        <button className="settings-btn navigation-text">Settings</button>

        {/* 모바일: 햄버거 메뉴 */}
        <button
          className="hamburger-menu"
          onClick={toggleMenu}
          aria-label="메뉴 열기"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* 모바일 메뉴 드롭다운 */}
      {isMenuOpen && (
        <div className="nav-menu-mobile">
          {menuItems.map(item => (
            <button
              key={item}
              className={`nav-item-mobile navigation-text ${
                activeTab === item ? "active" : "inactive"
              }`}
              onClick={() => {
                scrollToSection(item);
                setIsMenuOpen(false);
              }}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
