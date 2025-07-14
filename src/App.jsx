import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import QuizPage from './pages/QuizPage';
import ResultPage from './pages/ResultPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/result/:type" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
