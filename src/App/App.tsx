import Header from '../components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Hero from '../pages/Hero/Hero';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__layout">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<Hero />} />
          <Route path="/reviews" element={<Hero />} />
          <Route path="/trainings" element={<Hero />} />
          <Route path="/club" element={<Hero />} />
          <Route path="/contacts" element={<Hero />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
