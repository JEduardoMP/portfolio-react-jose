//Components
import Navbar from './Components/Navbar';

//Views
import HeroPage from './views/HeroPage';
import Contact from './views/Contact';
import Skills from './views/SkillsPage';

//Styles
import './App.css';
import "./styles.css"

function App() {
  return (
    <div className="w-screen">
      
      <Navbar />

      <HeroPage />

      <Skills />

      <Contact />


    </div>
  );
}

export default App;
