import logo from './logo.svg';
import './App.css';
import { NavBar, Navbar } from "./componets/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './componets/Banner';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Banner />
    </div>
  );
}

export default App;


{/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          CrackHack <code>IN THE HOUSE</code> with buttfuck
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn how to code
        </a>
      </header>
    </div> */}
