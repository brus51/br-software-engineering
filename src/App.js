import './App.css';
import { NavBar } from "./componets/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './componets/Banner';
import { Skills } from './componets/Skills';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Banner />
      <Skills />
    </div>
  );
}

export default App;
