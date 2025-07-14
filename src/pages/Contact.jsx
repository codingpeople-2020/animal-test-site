import React from "react";
import { Link } from 'react-router-dom';
import AdFitUnit from '../components/AdFitUnit';

const Contact = () => {
  return (
    <div className="container">
        <AdFitUnit unit="DAN-g4Yf8bh8OygdzV7d" width="728" height="90" />
        <p className="home-button"><Link to="/">🏠 HOME</Link></p>
        <div className="footer-nav-container">
            <h1 className="title">📬 문의 하기</h1>
            <h2 className="sub-title">1. 문의하기</h2>
            <p className="description">
              · 궁금하신 점이나 개선 제안이 있으신가요? <strong>CodingPeople</strong> 은 언제든 여러분의 소중한 의견을 기다립니다.
            </p>

            <h2 className="sub-title">2. 이메일 문의</h2>
            <p className="description">
              · 아래 이메일로 문의 내용을 보내주시면, 최대한 빠르게 답변드리겠습니다. <br />
              · 이메일: codinglab_usdd@naver.co.kr
            </p>
            <h2 className="sub-title">3. 제안/피드백</h2>
            <p className="description">
              · 서비스 개선에 대한 아이디어, 불편 사항, 또는 따뜻한 응원의 메시지도 환영합니다! 모두가 함께 만드는 테스트 공간이 되길 바랍니다.
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

export default Contact;
