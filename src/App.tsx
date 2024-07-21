// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';; // Import component của trang Home
import './App.css';
import './index.css';
import StoryDetail from './pages/StoryDetail';
import RankPage from './pages/RankPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rank" element={<RankPage />} />
        <Route path="/story-detail/:slug" element={<StoryDetail />} />
      </Routes>
    </Router>
  );
}

export default App;