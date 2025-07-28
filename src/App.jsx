import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import QuizPage from './pages/QuizPage';
import ResultPage from './pages/ResultPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import About from './pages/About';
import Terms from './pages/Terms';
import Contact from './pages/Contact';
import GuidePage from './pages/GuidePage';
import MoreTests from './pages/MoreTests';
import NotFoundPage from './pages/NotFoundPage';

// ScrollToTop 컴포넌트
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/result/:type" element={<ResultPage />} />
        <Route path="/guide/:type" element={<GuidePage />} />
        <Route path="/more-tests" element={<MoreTests />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
