import './App.css';
import NavBar from './Components/navigation/NavBar';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';
import Contact from './Pages/Contact';


function App() {
  return (
    <div id="home" className="App">
        <NavBar />
        <Home/>
        <About/>
        <Projects/>
        <Skills/>
        <Contact/>
    </div>
  );
}

export default App;
