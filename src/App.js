import { Route, Routes } from 'react-router';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { Introduction } from './pages/Introduction/Introduction';
import { Portfolio } from './pages/Portfolio/Portfolio';
import { Loader } from './components/Loader/Loader';
import { useEffect, useState } from 'react';
import { NotFound } from './components/404/404';
import { Projects } from './pages/Projects/Projects';


function App() {
  const[loader,setLoader] = useState(true);
  useEffect(()=>{
    setTimeout(()=>setLoader(false),4200);
  },[])
  return (
    loader ? <Loader /> :
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='*' element={<NotFound />}></Route>
        <Route path='/' element={<Introduction />}></Route>
        <Route path='/portfolio' element={<Portfolio />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
      </Routes>
    </div>
  );
}

export default App;
