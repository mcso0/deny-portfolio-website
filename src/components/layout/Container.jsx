// 🏗️ Container - 메인 레이아웃 컨테이너
// Figma 기준: 데스크톱(1240px) → 패드(972px) → 모바일(366px)

import './Container.css';

const Container = ({ children, className = '' }) => {
  return (
    <div className={`main-container ${className}`}>
      {children}
    </div>
  );
};

export default Container;