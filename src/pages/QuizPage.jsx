import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import questions from '../data/questions';

function QuizPage() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  const handleAnswer = (type) => {
    const updated = { ...answers };
    updated[type] = (updated[type] || 0) + 1;
    setAnswers(updated);

    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      // 가장 많이 선택된 type 구하기
      const result = Object.entries(updated).sort((a, b) => b[1] - a[1])[0][0];
      navigate(`/result/${result}`);
    }
  };

  const q = questions[current];

  return (
    <div className="container">
      <div className="quiz-container">
        <p className="progress-count">
          Q{current + 1} / {questions.length}
        </p>
        <div className="progress-bar">
        <div className="progress-piece" 
          style={{
            width: `${((current + 1) / questions.length) * 100}%`,
          }}
        ></div>
        </div> 
        <h2 className="question">{q.question}</h2>
        <div className="answer-box">
          {q.options.map((opt, idx) => (
            <button className="answer-button"
              key={idx}
              onClick={() => handleAnswer(opt.type)}
            >
              {opt.text}
            </button>
          ))}
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

export default QuizPage;

