import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ExplorePage from './pages/ExplorePage';
import MapPage from './pages/MapPage';
import SavedPage from './pages/SavedPage';
import BottomNav from './components/BottomNav';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Navigate to="/explore" replace />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/saved" element={<SavedPage />} />
        </Routes>
      </div>
      <BottomNav />
    </BrowserRouter>
  );
}

export default App;
