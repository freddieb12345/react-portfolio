import './styles/App.css';
import Landing from './components/Landing';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { reveal } from "./js/reveal"
// import Logo from './components/ui/Logo';

function App() {
  window.addEventListener("scroll", reveal);

  // To check the scroll position on page load
  // reveal();
  return (
    <div className="App">
      <Nav />
      <Landing />
      <About />
      <Projects />
      <Footer />
      {/* <Logo unit="2px"/> */}
    </div>
  );
}

export default App;
