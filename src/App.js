import { Route, Routes } from 'react-router';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { Introduction } from './pages/Introduction/Introduction';
import { Portfolio } from './pages/Portfolio/Portfolio';
import { Services } from './pages/Services/Services';
import { Loader } from './components/Loader/Loader';
import { useEffect, useState } from 'react';
import { Footer } from './components/Footer/Footer';

function App() {
  const[loader,setLoader] = useState(true);
  useEffect(()=>{
    setTimeout(()=>setLoader(false),2100);
  },[])
  return (
    loader ? <Loader /> :
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<div><Introduction /></div>}></Route>
        <Route path='/portfolio' element={<Portfolio />}></Route>
      </Routes>
    </div>
  );
}

export default App;
