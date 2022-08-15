import logo from './logo.svg';
import './App.css';
// import Routes from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Header from  './Components/Auth/Header';
import HomePage from './Components/Master/HomePage';
import TopRated from './Components/Master/TopRated';
import Upcoming from './Components/Master/Upcoming';
import LoveThunder from './Components/SingleDeails/LoveThunder';
import Nope from './Components/SingleDeails/Nope';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/header' element={<Header/>}/>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/top' element={<TopRated/>}/>
        <Route path='/upcome' element={<Upcoming/>}/>
        <Route path='/love' element={<LoveThunder/>}/>
        <Route path='/nope' element={<Nope/>}/>

        


      </Routes>
     
         
    </div>
  );
}

export default App;
