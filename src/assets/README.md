# 🎨 Assets 폴더 사용 가이드

## 📁 폴더 구조

```
src/assets/
├── images/          # 일반 이미지 파일
├── logos/           # 로고 파일들
├── icons/           # 아이콘 파일들
├── svg/             # SVG 파일들
├── index.js         # 리소스 관리 파일
└── README.md        # 이 파일

public/assets/
├── images/          # 정적 이미지
├── logos/           # 정적 로고
└── icons/           # 정적 아이콘
```

## 🔧 사용 방법

### 1️⃣ src/assets/ 사용 (추천)
번들링되는 리소스 - import로 사용

```jsx
// 개별 import
import logo from '../assets/logos/logo.png';

// index.js를 통한 import
import { assets } from '../assets';

// 컴포넌트에서 사용
<img src={logo} alt="로고" />
<img src={assets.logos.main} alt="로고" />
```

### 2️⃣ public/assets/ 사용
정적 리소스 - 직접 경로 사용

```jsx
// 직접 경로 사용
<img src="/assets/logos/logo.png" alt="로고" />
<img src="/assets/icons/hamburger.svg" alt="메뉴" />
```

## 📋 권장 파일 명명 규칙

### 로고
- `logo.png` - 메인 로고
- `logo-white.png` - 흰색 버전
- `logo-dark.png` - 다크 버전
- `logo.svg` - SVG 버전

### 아이콘
- `hamburger.svg` - 햄버거 메뉴
- `settings.svg` - 설정 아이콘
- `chatbot.svg` - 챗봇 아이콘
- `arrow-right.svg` - 화살표

### 이미지
- `profile.jpg` - 프로필 사진
- `hero-bg.jpg` - Hero 배경
- `project-{번호}.jpg` - 프로젝트 이미지

## 💡 최적화 팁

1. **이미지 최적화**: WebP 형식 사용 권장
2. **SVG 최적화**: SVGO를 사용해 크기 줄이기
3. **반응형 이미지**: 여러 크기 버전 준비
4. **Lazy Loading**: 필요시 지연 로딩 적용