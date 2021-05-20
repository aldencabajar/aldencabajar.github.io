import './App.css';
import Navbar from './components/Navbar'
import About from './components/About';
import Projects from './components/Projects'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
          <Switch>
            <Route path = "/" exact component ={Home}/>
            <Route path = "/about" component={About}/>
            <Route path = "/projects" component={Projects}/>
          </Switch>
      </div>
    </Router>
  );
}

const Home=() => {
  return (
    <div>
      <header className='section-header'> 
        <h1>Home</h1>
      </header>
      <text className='section-text'>
      lorem ipsum dolor 
      </text>
    </div>
  )
}

export default App;
