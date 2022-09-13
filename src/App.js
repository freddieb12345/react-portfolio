import './styles/App.css';
import Landing from './components/Landing';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <About />
      <Projects />
    </div>
  );
}

export default App;
