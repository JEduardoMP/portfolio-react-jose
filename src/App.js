import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Components
import Navbar from './Components/Navbar';

//Views
import HomePage from './views/HomePage';
import Portfolio from './views/Portfolio';
import Contact from './views/Contact';
import ErrorPage from './views/ErrorPage';

//Styles
import './App.css';
import "./styles.css"

function App() {
  return (
    <div className="w-5/6 mx-auto">
   <Router>
     <Navbar />
     <Switch>
       <Route exact path="/" component={HomePage} />
       <Route exact path="/portfolio" component={Portfolio} />
       <Route exact path="/contact" component={Contact} />
       <Route path="*" component={ErrorPage}/>
     </Switch>
   </Router>
    </div>
  );
}

export default App;
