import Navbar from './components/navbar';

import Home from './components/sections/home';
import About from './components/sections/about';
import Services from './components/sections/services';
import Contact from './components/sections/contact';

import Footer from './components/footer';

import './styles/App.css';

function App() {
  return (
    <>
      <img
        className="background-image"
        src="culture.jpg"
        alt="Background Image"
      />
      <Navbar />
      <main>
        <Home />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
