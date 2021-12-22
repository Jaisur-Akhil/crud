/** @format */

import './App.css';
import Navbar from './Components/Navbar';
import Crud from './Components/Crud'; //Landing Page
import Adduser from './Components/Adduser';
import Edituser from './Components/Edituser';
import Alluser from './Components/Alluser';
import Notfound from './Components/Notfound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Crud />} />
        <Route path='/all' element={<Alluser />} />
        <Route path='/add' element={<Adduser />} />
        <Route path='/edit/:id' element={<Edituser />} />
        {/* <Route path = '*' element={<Notfound/>} /> */}

        {/* <Crud/>
     <Adduser/>
     <Alluser/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// npm run json
//npm start
