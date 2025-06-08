// ==============================================
// 🤖 Vercel Serverless Function - OpenAI 챗봇 API
// ==============================================

export default async function handler(req, res) {
  // CORS 헤더 설정 (다른 도메인에서 접근 허용)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // OPTIONS 요청 처리 (CORS 프리플라이트)
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // POST 요청만 허용
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      error: 'Method Not Allowed',
      message: 'POST 요청만 허용됩니다.' 
    });
  }

  try {
    const { message, timestamp } = req.body;

    // 입력 검증
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ 
        error: 'Bad Request',
        message: '메시지를 입력해주세요.' 
      });
    }

    if (message.trim().length === 0) {
      return res.status(400).json({ 
        error: 'Bad Request',
        message: '빈 메시지는 전송할 수 없습니다.' 
      });
    }

    if (message.length > 500) {
      return res.status(400).json({ 
        error: 'Bad Request',
        message: '메시지가 너무 깁니다. (최대 500자)' 
      });
    }

    // 환경 변수 확인
    if (!process.env.OPENAI_API_KEY) {
      console.error('OPENAI_API_KEY 환경 변수가 설정되지 않았습니다.');
      return res.status(500).json({ 
        error: 'Server Configuration Error',
        message: '서버 설정에 문제가 있습니다.' 
      });
    }

    // OpenAI API 호출
    const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: `너는 UX/UI 디자이너 이승욱의 포트폴리오 사이트 챗봇이야. 
            
역할:
- 이승욱의 포트폴리오, 프로젝트, 경력에 대해 친절하게 답변
- 한국어로 대화하며, 존댓말 사용
- 간결하고 핵심적인 답변 (3-4문장 내외)
- 모르는 정보는 솔직히 "더 자세한 정보는 직접 문의해주세요"라고 안내

답변 스타일:
- 친근하고 전문적인 톤
- 이모지 적절히 활용
- 구체적이고 도움이 되는 정보 제공`
          },
          {
            role: 'user',
            content: message.trim()
          }
        ],
        temperature: parseFloat(process.env.OPENAI_TEMPERATURE) || 0.7,
        max_tokens: parseInt(process.env.OPENAI_MAX_TOKENS) || 500,
        presence_penalty: 0.1,
        frequency_penalty: 0.1
      })
    });

    if (!openaiResponse.ok) {
      const errorText = await openaiResponse.text();
      console.error('OpenAI API 오류:', openaiResponse.status, errorText);
      
      return res.status(500).json({ 
        error: 'OpenAI API Error',
        message: 'AI 서비스에 일시적인 문제가 있습니다. 잠시 후 다시 시도해주세요.' 
      });
    }

    const data = await openaiResponse.json();

    if (!data.choices || data.choices.length === 0) {
      return res.status(500).json({ 
        error: 'No Response',
        message: 'AI로부터 응답을 받지 못했습니다.' 
      });
    }

    const answer = data.choices[0].message.content;

    // 성공 응답
    return res.status(200).json({ 
      answer: answer,
      timestamp: Date.now(),
      model: data.model,
      usage: data.usage 
    });

  } catch (error) {
    console.error('API 처리 중 오류:', error);
    
    return res.status(500).json({ 
      error: 'Internal Server Error',
      message: '서버에서 오류가 발생했습니다. 잠시 후 다시 시도해주세요.' 
    });
  }
}