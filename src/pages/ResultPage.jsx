// src/pages/ResultPage.jsx

import { useParams, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import results from "../data/results";
import { useEffect } from "react";
import AdFitUnit from '../components/AdFitUnit';

function ResultPage() {
  const { type } = useParams(); // URL의 동물 타입
  const navigate = useNavigate();
  const result = results[type];

  useEffect(() => {
    if (!result) return;

    // 페이지 제목 설정
    document.title = `내 안의 동물은 ${result.name}?`;

    if (!document.querySelector("#kakao-sdk")) {
      const script = document.createElement("script");
      script.src = "https://developers.kakao.com/sdk/js/kakao.min.js";
      script.async = true;
      script.id = "kakao-sdk";
      script.onload = () => {
        if (window.Kakao && !window.Kakao.isInitialized()) {
          window.Kakao.init("a1430cbffb42965162f7212002ba0809"); // 여기에 본인 키
          // console.log("Kakao SDK initialized");
        }
      };
      script.onerror = () => {
        // console.error("Kakao SDK 로딩 실패");
      };
      document.head.appendChild(script);
    } else {
      if (window.Kakao && !window.Kakao.isInitialized()) {
        window.Kakao.init("a1430cbffb42965162f7212002ba0809");
        // console.log("Kakao SDK initialized (from existing)");
      }
    }
  }, [result]);

  const shareKakao = () => {
    if (window.Kakao) {
      window.Kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title: `내 안의 동물은 ${result.name}?`,
          description: result.description,
          imageUrl: window.location.origin + result.image,
          link: {
            mobileWebUrl: 'https://animal-test-site.vercel.app',
            webUrl: 'https://animal-test-site.vercel.app',
          },
        },
        buttons: [
          {
            title: "나도 테스트해보기",
            link: {
              mobileWebUrl: 'https://animal-test-site.vercel.app',
              webUrl: 'https://animal-test-site.vercel.app',
            },
          },
        ],
      });
    }
  };

  if (!result) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>결과를 찾을 수 없어요!</h2>
        <button onClick={() => navigate("/")}>홈으로 가기</button>
      </div>
    );
  }

  return (
    <div className="container">
      <AdFitUnit unit="DAN-g4Yf8bh8OygdzV7d" width="728" height="90" />
      <AdFitUnit unit="DAN-Pp1Md32up4KoG5gr" width="320" height="100" />
      <div className="result-container">
        <h1 className="result-title">당신은 <span style={{ color: "#4f46e5", backgroundColor: "#e5f4f9", padding: "4px 8px" }}>{result.name}</span> 타입!</h1>
        <img  className="result-image" 
          src={result.image}
          alt={result.name}
        />
        <p className="result-description">
          {result.description}
        </p>

        <div className="button-box">
          <button className="tip-button" onClick={() => navigate(`/guide/${type}`)}  style={{ marginBottom: "10px" }}>활용법 보기</button> <br />
          <button className="kakao-share-button" onClick={shareKakao} style={{ marginRight: "10px" }}>
            카카오톡 공유하기
          </button>
          <button onClick={() => navigate("/")}>다시 테스트하기</button>
        </div>
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

export default ResultPage;
