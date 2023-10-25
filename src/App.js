import './App.css';
import NavBar from './Components/navigation/NavBar';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';
import Contact from './Pages/Contact';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PagesRouter from './Components/Routes/PagesRouter';



function App() {
  return (
    <Router>
        <NavBar />
        <PagesRouter/>
    </Router>
  );
}

export default App;