import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { Introduction } from './pages/Introduction/Introduction';
import { Services } from './pages/Services/Services';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <Introduction />
        <Services />
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
