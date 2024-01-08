import { Route, Routes } from 'react-router-dom';
import { Header } from '../components';
import { About, Hero, Reviews } from '../pages';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__layout">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/trainings" element={<Hero />} />
          <Route path="/club" element={<Hero />} />
          <Route path="/contacts" element={<Hero />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
