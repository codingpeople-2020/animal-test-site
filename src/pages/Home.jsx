import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <div className="start-container">
        <h1 className="start-title">🦊 내 안의 동물은?</h1>
        <p className="start-description">몇 가지 질문을 통해 당신의 성격을 <br />귀여운 동물로 알아보세요!</p>
        <Link to="/quiz">
          <button className="start-button">테스트 시작하기</button>
        </Link>
      </div>
      
      <div>
        <ins
          className="kakao_ad_area"
          style={{ display: 'none' }}
          data-ad-unit="DAN-XXXXXX"
          data-ad-width="300"
          data-ad-height="250"
        ></ins>
        <script
          async
          type="text/javascript"
          src="//t1.daumcdn.net/kas/static/ba.min.js"
        ></script>
        </div>
        <p className="copy">© 2025. CodingPeople All rights reserved</p>
    </div>
  );
}

export default Home;

