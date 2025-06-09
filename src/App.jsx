// 🏁 Main App - 전체 레이아웃 구성
// Figma 디자인 시스템 기반 픽셀 퍼펙트 구현

import './App.css';

// Layout Components
import Container from './components/layout/Container';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';

// Section Components
import HeroSection from './components/sections/HeroSection';
import ContentsSection from './components/sections/ContentsSection';
import AboutSection from './components/sections/AboutSection';
import ContactSection from './components/sections/ContactSection';

// UI Components
import ChatBot from './components/ui/ChatBot';

function App() {
  return (
    <>
      {/* Navigation (Fixed 위치) */}
      <Navigation />
      
      {/* 메인 컨테이너 */}
      <Container>        
        {/* Hero Section */}
        <HeroSection />
        
        {/* Contents (프로젝트 카드들) */}
        <ContentsSection />
        
        {/* About Section */}
        <AboutSection />
      </Container>
      
      {/* Contact Section (흰색 배경으로 분리) */}
      <ContactSection />
      
      {/* Footer */}
      <Footer />
      
      {/* AI 챗봇 플로팅 버튼 */}
      <ChatBot />
    </>
  );
}

export default App;