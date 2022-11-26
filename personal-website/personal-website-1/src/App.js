import './App.css';
import './css/pages.css'

import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {

  return (
    <>
      <Navbar />
      <section id="home" className="container">
        <Home />
        
      </section> 
      <section id="about" className="container">
        <About />
      </section>
      <section id="projects" className="container">
        <Projects />
      </section>
    </>
  );
}

export default App;


/* routes implementation
<div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
</div>
*/ 