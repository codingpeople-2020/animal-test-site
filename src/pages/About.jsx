import React from "react";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="container">
        <p className="home-button"><Link to="/">🏠 HOME</Link></p>
        <div className="footer-nav-container">
            <h1 className="title">🎨 우리 이야기</h1>
            <p className="title-description">
              <strong>CodingPeople</strong>은 사람의 감성과 데이터를 연결하여,
              일상에 작은 재미와 통찰을 더하는 서비스를 만들고 있습니다.
            </p>

            <h2 className="sub-title">1. 우리가 추구하는 가치</h2>
            <p className="description">
              · 모든 사람은 저마다 다른 색을 지닌 존재입니다. <br />
              · 우리는 그 다양성을 존중하며, <strong>재미있고 의미 있는 콘텐츠</strong>를 통해 사람들 스스로를 돌아보고, 서로를 더 이해할 수 있도록 돕습니다.
            </p>

            <h2 className="sub-title">2. 내 안의 동물은?</h2>
            <p className="description">
              · 당신 안의 숨겨진 성격을 <strong>여우, 판다, 사자, 거북이</strong>와 같은 동물 캐릭터로 알아보는 테스트예요. <br />
              · 총 16개의 질문을 통해 성격을 분석하고, 결과는 감성적인 카드 형식으로 제공됩니다.
            </p>

            <h2 className="sub-title">3. 감성 디자인 + 공유 기능</h2>
            <p className="description">
              · 결과는 <strong>귀엽고 따뜻한 이미지 카드</strong>로 제공되며, 카카오톡과 SNS 공유를 통해 친구와 함께 즐길 수 있어요. <br />
              · 재미와 공감, 소통을 동시에 잡은 서비스랍니다!
            </p>
            <h2 className="sub-title">4. 문의</h2>
            <p className="description">
              · 회사 및 서비스 소개와 관련된 문의사항은 아래 이메일로 연락해주세요. <br />
              · 이메일: codinglab_usdd@naver.co.kr
            </p>
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

export default About;
