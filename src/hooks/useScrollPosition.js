// 🔍 useScrollPosition - 스크롤 위치 감지 Hook
// Figma 기반: 스크롤 시 네비게이션 너비 변화 (924px → 640px)

import { useState, useEffect } from "react";

const useScrollPosition = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      // 100px 이상 스크롤 시 네비게이션 변경
      const scrollThreshold = 100;
      setIsScrolled(currentScrollY > scrollThreshold);
    };

    // 스크롤 이벤트 리스너 추가
    window.addEventListener("scroll", handleScroll, { passive: true });

    // cleanup 함수
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    scrollY,
    isScrolled,
  };
};

export default useScrollPosition;
