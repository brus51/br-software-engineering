import './App.css';
import { NavBar } from "./componets/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './componets/Banner';
import { Skills } from './componets/Skills';
import { Projects } from './componets/Projects';
import { Contact } from './componets/Contact';
import { Footer } from './componets/Footer';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
