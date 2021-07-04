
import './App.css';
import Navs from './components/Navs/Navs.js';
import Home from './components/Home/Home.js';
import Skills from './components/Skills/Skills.js';
import Education from './components/Education/Education.js';
import Contact from './components/Contact/Contact.js';

import  { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
 // <div className="App"> 
 //</div> 
 return (
 <Router>
<Navs/>  

<main>

    <Switch>
    <Route path="/" exact component = { Home } />
    <Route path="/skills" component= { Skills } />
    <Route path="/education" component = { Education } />
    <Route path="/contact" component = { Contact } />
    </Switch>
    
  </main>

  </Router>
);
    
}

export default App;
