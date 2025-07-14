import React from "react";
import { Link } from 'react-router-dom';
import AdFitUnit from '../components/AdFitUnit';

const Terms = () => {
  return (
    <div className="container">
        <AdFitUnit unit="DAN-g4Yf8bh8OygdzV7d" width="728" height="90" /> 
        <p className="home-button"><Link to="/">🏠 HOME</Link></p>
        <div className="footer-nav-container">
            <h1 className="title">🧾 이용 약관</h1>
            <h2 className="sub-title">1. 서비스 소개</h2>
            <p className="description">
              · 본 사이트는 <strong>성격 유형 테스트</strong> 및 결과 공유를 통해 사용자에게 재미와 통찰을 제공하는 비상업적 성향의 퍼스널 콘텐츠 플랫폼입니다.
            </p>

            <h2 className="sub-title">2. 이용자의 책임</h2>
            <p className="description">
              · 사용자는 서비스 이용 시 타인의 권리를 침해하거나, 부정확한 정보를 배포하지 않도록 주의해야 합니다. 또한 테스트 결과는 참고용이며, 개인의 성격을 절대적으로 판단하지 않습니다.
            </p>
            <h2 className="sub-title">3. 지적재산권</h2>
            <p className="description">
              · 본 사이트의 콘텐츠, 디자인, 결과 이미지 등은 <strong>CodingPeople</strong>의 소유이며, 무단 복제, 배포, 상업적 이용을 금합니다.
            </p>
            <h2 className="sub-title">4. 광고 및 외부 링크</h2>
            <p className="description">
              · 본 사이트는 광고 플랫폼과 제휴되어 일부 페이지에 광고가 포함될 수 있으며, 외부 링크 클릭 시 발생하는 문제에 대해서는 책임지지 않으며, 해당 사이트의 정책을 참고하시기 바랍니다.
            </p>
            <h2 className="sub-title">5. 약관 변경</h2>
            <p className="description">
              · 본 이용약관은 서비스 운영상 필요에 따라 변경될 수 있으며, 변경 사항은 본 페이지를 통해 사전 공지됩니다.
            </p>
            <h2 className="sub-title">6. 문의</h2>
            <p className="description">
              · 이용약관과 관련된 문의사항은 아래 이메일로 연락해주세요. <br />
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

export default Terms;
