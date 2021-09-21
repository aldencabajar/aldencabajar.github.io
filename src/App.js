import './App.css';
import Navbar from './components/Navbar'
import About from './components/About';
import Home from './components/Home';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume/Resume'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {slide as Menu} from 'react-burger-menu'
import { useEffect } from 'react';

const App=()=>{
  const stylePageWrap = {
    height:"100%",
  }
  useEffect(()=>{
    document.title = "Alden Cabajar"

  },[])
  const styleOther ={height:"100%"}
  return (
    <Router>
      <div className="App" id="outer-container" style={styleOther}>
        <Menu width={500} right={true} >
            <a id="about"  href="/about">about</a>
            <a id="contact" href="/contact">project</a>
            <a id="project"  href="/projects">resume</a>
        </Menu>
        <div id="page-wrap" style={stylePageWrap}>
            <Navbar/>
            <Switch>
              <Route path = "/" exact component ={Home}/>
              <Route path = "/about" component={About}/>
              <Route path = "/projects" component={Projects}/>
              <Route path = "/contact" component={Contact}/>
              <Route path = "/resume" component={Resume}/>
            </Switch>
        </div>
      </div>
    </Router>
  );
}
export default App

