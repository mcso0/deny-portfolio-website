// 🛡️ 보안 강화: 서버리스 함수를 통한 안전한 API 호출
export async function fetchChatAnswer(userMessage) {
  // 입력 검증
  if (!userMessage || userMessage.trim().length === 0) {
    throw new Error('메시지를 입력해주세요.');
  }

  if (userMessage.length > 500) {
    throw new Error('메시지가 너무 깁니다. (최대 500자)');
  }

  try {
    // 🔒 안전한 방식: 내 서버의 API 엔드포인트 호출
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        message: userMessage.trim(),
        timestamp: Date.now() // 요청 추적용
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `서버 오류: ${response.status}`);
    }

    const data = await response.json();
    
    if (!data.answer) {
      throw new Error('AI 응답을 받지 못했습니다.');
    }

    return data.answer;
    
  } catch (error) {
    console.error('챗봇 API 오류:', error);
    
    // 사용자 친화적 오류 메시지
    if (error.message.includes('fetch')) {
      throw new Error('네트워크 연결을 확인해주세요.');
    }
    
    throw error;
  }
}