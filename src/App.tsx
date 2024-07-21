// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';; // Import component của trang Home
import './App.css';
import './index.css';
import TrendingPage from './pages/RankPage';
import StoryDetail from './pages/StoryDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/trending" element={<TrendingPage />} />
        <Route path="/story-detail/:slug" element={<StoryDetail />} />
      </Routes>
    </Router>
  );
}

export default App;