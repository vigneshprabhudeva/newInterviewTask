import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import MovieInfo from './components/MovieInfo';
import Sample from './components/Sample';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
      <Route  exact path="/">
            <Homepage />
          </Route>
          <Route  exact path="/info">
            <Sample />
          </Route>


      </Router>
     
      
    
  
    </div>
  );
}

export default App;
