import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/navBar/NavBar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <NavBar/>

      </div>
    </Router>
  );
}

export default App;
