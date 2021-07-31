import './App.css';
import Navbar from './components/Navbar'
import About from './components/About';
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

const Home=() => {
  return (
    <div className='section-body'>
      <header className='section-header'> 
        <h1>Home</h1>
        <h3> Hello. Welcome to my page. </h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> 
      </header>
    </div>
  )
}

export default App;
