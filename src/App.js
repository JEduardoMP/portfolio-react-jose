import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

//Components
import Navbar from './Components/Navbar';

//Views
import HomePage from './views/HomePage';
import AboutPage from './views/AboutPage';
import Portfolio from './views/Portfolio';
import Contact from './views/Contact';
import ErrorPage from './views/ErrorPage';

//Styles
import "./styles.css"

function App() {
  return (
   <Router>
     <Navbar />
     <Switch>
       <Route exact path="/" component={HomePage} />
       <Route exact path="/about" component={AboutPage} />
       <Route exact path="/portfolio" component={Portfolio} />
       <Route exact path="/contact" component={Contact} />
       <Route path="*" component={ErrorPage}/>
     </Switch>
   </Router>
  );
}

export default App;
