import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume/Resume'
import {HashRouter as Router, Switch, Route, Link} from 'react-router-dom'
import {slide as Menu} from 'react-burger-menu'
import { useEffect, useState} from 'react';
import ScrollToTop from './ScrollToTop';


const App=()=>{
  const stylePageWrap = {
    height:"100%",
  }
  const [menuStateOpen, menuSetState] = useState(false)

  const handleMenuClick=(e)=>{menuSetState(false)}
  const handleMenuStateOnChange=(state)=>{
    menuSetState(state.isOpen)
  }


  useEffect(()=>{
    document.title = "Alden Cabajar"
    console.log(menuStateOpen)
  },[menuStateOpen])
  const styleOther ={height:"100%"}
  return (
    <Router>
      <div className="App" id="outer-container" style={styleOther}>
        <Menu width={500} right={true} isOpen={menuStateOpen}
        onStateChange={handleMenuStateOnChange}>
            <Link to='/' onClick={handleMenuClick}>home</Link>
            <Link to='/projects' onClick={handleMenuClick}>projects</Link>
            <Link to='/resume' onClick={handleMenuClick}>resume</Link>
        </Menu>
        <div id="page-wrap" style={stylePageWrap}>
            <Navbar/>
            <ScrollToTop>
              <Switch>
                <Route path = "/" exact component ={Home}/>
                <Route path = "/projects" component={Projects}/>
                <Route path = "/contact" component={Contact}/>
                <Route path = "/resume" component={Resume}/>
              </Switch>
            </ScrollToTop>
        </div>
      </div>
    </Router>
  );
}
export default App

