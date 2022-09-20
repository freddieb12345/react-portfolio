import './styles/App.css';
import Landing from './components/Landing';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
// import Logo from './components/ui/Logo';

function App() {
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
