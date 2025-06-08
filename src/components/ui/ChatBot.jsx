// 🤖 ChatBot - AI 챗봇 플로팅 버튼
// Figma 기준: 데스크톱 48px, 모바일 63px

import { useState } from 'react';
import './ChatBot.css';
import chatbotImage from '../../assets/chatbot/Mask group@x1.5.png';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* 챗봇 버튼 */}
      <button 
        className="chatbot-button"
        onClick={toggleChat}
        aria-label="AI 챗봇 열기"
      >
        <img 
          src={chatbotImage} 
          alt="AI 챗봇 아이콘" 
          className="chatbot-icon"
        />
      </button>

      {/* 챗봇 모달 (간단한 구현) */}
      {isOpen && (
        <div className="chatbot-modal">
          <div className="chatbot-header">
            <h3>AI Assistant</h3>
            <button 
              className="chatbot-close"
              onClick={toggleChat}
            >
              ×
            </button>
          </div>
          <div className="chatbot-content">
            <p>안녕하세요! 무엇을 도와드릴까요?</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;