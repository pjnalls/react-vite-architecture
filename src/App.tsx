import Navbar from './components/navbar';
import './styles/App.css';

function App() {
  return (
    <>
      <img
        className="background-image"
        src="/culture.jpg"
        alt="Background Image"
      />
      <Navbar />
      <main>
        <section id="home">
          <h2>Home</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
        </section>
        <section id="about">
          <h2>About</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
        </section>
        <section id="services">
          <h2>Services</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
        </section>
      </main>
    </>
  );
}

export default App;
