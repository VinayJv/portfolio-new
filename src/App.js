import { Route, Routes } from 'react-router';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { Introduction } from './pages/Introduction/Introduction';
import { Portfolio } from './pages/Portfolio/Portfolio';
import { Services } from './pages/Services/Services';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<div>
          <Introduction />
          <Services /></div>}></Route>
        <Route path='/portfolio' element={<Portfolio />}></Route>
      </Routes>
    </div>
  );
}

export default App;
