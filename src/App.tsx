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
        <h1>Hello World!</h1>
      </main>
    </>
  );
}

export default App;
