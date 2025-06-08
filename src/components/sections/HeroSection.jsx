// 🎯 Hero Section - 탭 + 큰 타이포그래피
// Figma 기준: 모바일 80px → 패드/데스크톱 160px

import { useState } from "react";
import "./HeroSection.css";

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("For anyone👋");

  const tabs = [
    "For anyone👋",
    "Recruiters",
    "Designers",
    "Product Managers",
    "Engineers",
  ];

  const heroTexts = {
    "For anyone👋":"Hi, I'm Deny 😄\nI'm a product designer working in Seoul, Korea.",
    "Recruiters": "I'm looking for a new challenge",
    "Designers": "I'm looking for a new challenge",
    "Product Managers": "I'm looking for a new challenge", // 추후 수정
    "Engineers": "I'm looking for a new challenge", // 추후 수정
  };

  return (
    <section id="intro" className="hero-section">
      {/* 탭 영역 */}
      <div className="hero-tabs">
        {tabs.map(tab => (
          <button
            key={tab}
            className={`tab-item tab-text ${
              activeTab === tab ? "active" : "inactive"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 메인 타이포그래피 */}
      <h1 className="hero-title">
        {heroTexts[activeTab].split("\n").map((line, index) => (
          <div key={index} className="hero-line">
            {line}
          </div>
        ))}
      </h1>
    </section>
  );
};

export default HeroSection;
