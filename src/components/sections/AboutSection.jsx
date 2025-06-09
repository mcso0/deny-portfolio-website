// 👤 About Section - 프로필 + 소개 텍스트
// Figma 기준: 2열(데스크톱) vs 1열(모바일) 구조

import "./AboutSection.css";
import profileImage from "../../assets/profile.png";

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* 프로필 영역 */}
        <div className="profile-area">
          <div className="profile-image">
            {/* 프로필 이미지 자리 */}
            <img
              src={profileImage}
              alt="이승욱 프로필 사진"
              className="profile-img"
            />
          </div>
        </div>

        {/* 소개 텍스트 영역 */}
        <div className="about-text-area">
          <div className="about-content">
            <h2 className="about-title">About Me</h2>
            <p className="about-text">
              안녕하세요, UX/UI 디자이너 이승욱입니다.
              <br />
              사용자의 니즈를 깊이 이해하고, 그것을 직관적이고 아름다운
              디자인으로 표현하는 것에 큰 즐거움을 느낍니다.
            </p>
            <p className="about-text">
              5년간의 디자인 경험을 통해 모바일 앱, 웹 플랫폼, 브랜드 아이덴티티
              등 다양한 영역에서 사용자 중심의 디자인을 제공해왔습니다.
            </p>
            <p className="about-text">
              복잡한 문제를 단순하고 명확한 솔루션으로 해결하는 것, 그리고
              사용자가 진정으로 원하는 경험을 만들어내는 것이 저의 목표입니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
