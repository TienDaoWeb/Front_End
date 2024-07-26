// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';; // Import component của trang Home
import './App.css';
import './index.css';
import RedirectInterceptor from "./helpers/axios_provider"
import StoryDetail from './pages/StoryDetail';
import RankPage from './pages/RankPage';
import ChapDetail from './pages/ChapDetail';
import LoginRegister from './components/LoginRegister';

function App() {
  return (
    <Router>
      <RedirectInterceptor/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rank" element={<RankPage />} />
        <Route path="/story-detail/:storyID" element={<StoryDetail />} />
        <Route path="/story-detail/:storyID/:chapID" element={<ChapDetail />} />
        <Route path="/login-register" element={<LoginRegister />} />
      </Routes>
    </Router>
  );
}

export default App;