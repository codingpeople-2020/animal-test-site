import { Link } from 'react-router-dom';
import AdFitUnit from '../components/AdFitUnit';

function Home() {
  return (
    <div className="container">
      <AdFitUnit unit="DAN-RGH7G9VOVyUYJJav" width="728" height="90" />
      <AdFitUnit unit="DAN-Pp1Md32up4KoG5gr" width="320" height="100" />

      <div className="start-container">
        <h1 className="start-title">🦊 내 안의 동물은?</h1>
        <p className="start-description">몇 가지 질문을 통해 당신의 성격을 <br />귀여운 동물로 알아보세요!</p>
        <Link to="/quiz">
          <button className="start-button">테스트 시작하기</button>
        </Link>
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
}

export default Home;

