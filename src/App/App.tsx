import { Route, Routes } from 'react-router-dom';
import { Footer, Header } from '../components';
import { About, Hero, Reviews } from '../pages';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__layout">
        <Hero />
        <About />
      </div>
      <Footer />
    </div>
  );
}

export default App;
