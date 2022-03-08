import './App.css';
import './components/Navbar';
import NavBar from './components/Navbar';
import hero from './images/hero.svg';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div>
        <img className='hero' src={hero} alt='Real Calculator'/>
        <form className='home-search'>
          <input type='text' />
        </form>
      </div>
    </div>
  );
}

export default App;
