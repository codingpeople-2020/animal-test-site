import React from "react";
import { Link } from "react-router-dom";
import AdFitUnit from '../components/AdFitUnit';

const MoreTests = () => {
  return (
    <div className="container">
      <AdFitUnit unit="DAN-g4Yf8bh8OygdzV7d" width="728" height="90" />
      <AdFitUnit unit="DAN-Pp1Md32up4KoG5gr" width="320" height="100" />
      <div className="more-tests-container" style={{backgroundColor: "#f3f4f6"}}>
        <h1 style={{ textAlign: "center", margin: "20px 0" }}>🎯 더 재미있는 테스트</h1>
          <ul className="tests-section">
            <li>
              <a href="https://me-in-the-drama.vercel.app" target="_blank" rel="noopener noreferrer" >
                <img src="/images/me-in-the-drama.png" alt="" />
              </a>
            </li>
            <li>
              <a href="https://love-ability-score.vercel.app/" target="_blank" rel="noopener noreferrer" >
                <img src="/images/love-ability-score.png" alt="" />
              </a>
            </li>
            <li>
              <AdFitUnit unit="DAN-ABEG1PZdCwzILxek" width="300" height="250" />
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer" >
                <img src="/images/preparing.png" alt="" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer" >
                <img src="/images/preparing.png" alt="" />
              </a>
            </li>
            <li>
              <AdFitUnit unit="DAN-GLqnkhGHSFG4AByO" width="300" height="250" />
            </li>
          </ul>
        <Link to="/">
            <button style={{ marginTop: "30px", backgroundColor: "#eb782b", color: "#fff", padding: "12px 20px", borderRadius: "8px" }}>🏠 HOME</button>
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
};

export default MoreTests;