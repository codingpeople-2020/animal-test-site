import React from "react";
import { Link } from 'react-router-dom';
import AdFitUnit from '../components/AdFitUnit';

const PrivacyPolicy = () => {
  return (
    <div className="container">
        <AdFitUnit unit="DAN-g4Yf8bh8OygdzV7d" width="728" height="90" />
        <p className="home-button"><Link to="/">🏠 HOME</Link></p>
        <div className="footer-nav-container">
            <h1 className="title">📜 개인 정보 처리 방침</h1>
            <h3 className="title-description">
                <strong>CodingPeople</strong>은(는) 이용자의 개인정보를 중요하게 생각하며,
                아래와 같은 방침에 따라 개인정보를 처리하고 있습니다.
                본 방침은 관련 법령 및 내부 정책에 따라 변경될 수 있습니다.
            </h3>

            <h2 className="sub-title">1. 수집하는 개인정보 항목</h2>
            <p className="description">· 본 사이트는 성격 테스트만을 운영하며 별도의 개인정보를 수집하지 않습니다.</p>

            <h2 className="sub-title">2. 개인정보의 수집 및 이용 목적</h2>
            <p className="description">
                · 본 사이트는 방문자의 정보를 수집하지 않으며, 사용자의 응답 결과는 통계 및 분석 용도로만 사용되고 저장되지 않습니다.
            </p>

            <h2 className="sub-title">3. 쿠키(Cookie)의 사용</h2>
            <p className="description">
                · 본 사이트는 Google AdSense 및 카카오 애드핏과 같은 제3자 광고 서비스를 사용하고 있으며,
                이 과정에서 쿠키를 통해 사용자 정보를 수집할 수 있습니다. 이는 더 나은 광고 제공 및 사용자 경험 향상을 위한 것입니다.
            </p>

            <h2 className="sub-title">4. 외부 링크 및 광고</h2>
            <p className="description">
                · 본 사이트에는 외부 사이트로 연결되는 링크나 광고가 포함되어 있을 수 있습니다.
                해당 사이트에서 제공하는 개인정보 처리방침을 확인하시기 바랍니다.
                당사는 외부 링크의 개인정보 처리에 책임지지 않습니다.
            </p>

            <h2 className="sub-title">5. 개인정보 보호 책임자</h2>
            <p className="description">
                · 개인정보 관련 문의는 아래 연락처로 연락 주시기 바랍니다. <br />
                · 이름: 김민석 <br />
                · 이메일: codinglab_usdd@naver.co.kr
            </p>
            <AdFitUnit unit="DAN-flhH6MuBurZtwCKc" width="320" height="50" />
            </div>
            
        <footer>
            <ul className="footer-nav">
                <li><Link style={{ color:"#999" }} to="/about">About Us</Link></li>
                <li><Link style={{ color:"#999" }} to="/privacy">Privacy Policy</Link></li>
                <li><Link style={{ color:"#999" }} to="/terms">Terms of Service</Link></li>
                <li><Link style={{ color:"#999" }} to="/contact">Contact Us</Link></li>
            </ul>
            <p className="copy">© 2025. CodingPeople All rights reserved</p>
        </footer>
    </div>
  );
};

export default PrivacyPolicy;
