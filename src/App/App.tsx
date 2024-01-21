import { Footer, Header } from '../components';
import { About, Hero, Trainings } from '../pages';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__layout">
        <Hero />
        <About />
        <Trainings />
      </div>
      <Footer />
    </div>
  );
}

export default App;
