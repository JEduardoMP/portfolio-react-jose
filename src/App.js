//Components
import Navbar from './Components/Navbar';

//Views
import HeroPage from './views/HeroPage';
import Contact from './views/Contact';
import Skills from './views/SkillsPage';
import Portfolio from './views/Portfolio';
import Footer from './Components/Footer';

//Styles
import './App.css';
import "./styles.css"

function App() {
  return (
    <div className="w-full">
      
      <Navbar />

      <HeroPage />

      <Skills />

      <Portfolio />

      <Contact />

      <Footer />

    </div>
  );
}

export default App;
