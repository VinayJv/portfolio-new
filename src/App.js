import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { Introduction } from './pages/Introduction/Introduction';
import { Portfolio } from './pages/Portfolio/Portfolio';
import { Services } from './pages/Services/Services';

function App() {
  return (
    <div className="App">
          <NavBar />
          <Introduction />
          <Services />
          <Portfolio />
    </div>
  );
}

export default App;
