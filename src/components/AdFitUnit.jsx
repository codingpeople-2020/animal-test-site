// src/components/AdFitUnit.jsx
import React, { useEffect } from 'react';

const AdFitUnit = ({ unit, width, height }) => {
  useEffect(() => {
    const ins = document.createElement('ins');
    ins.className = 'kakao_ad_area';
    ins.style = 'display:none;';
    ins.setAttribute('data-ad-unit', unit);
    ins.setAttribute('data-ad-width', width);
    ins.setAttribute('data-ad-height', height);

    const script = document.createElement('script');
    script.async = true;
    script.type = 'text/javascript';
    script.src = '//t1.daumcdn.net/kas/static/ba.min.js';

    const container = document.getElementById(`adfit-${unit}`);
    if (container) {
      container.innerHTML = ''; // 중복 삽입 방지
      container.appendChild(ins);
      container.appendChild(script);
    }
  }, [unit, width, height]);

  return <div id={`adfit-${unit}`} style={{ textAlign: 'center', margin: '1rem 0' }} />;
};

export default AdFitUnit;
