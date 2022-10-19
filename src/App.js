import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartingPage from './components/StartingPage';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Globalprovider from './store/Globalprovider';
import Users from './components/Users';
import Appointment from './components/Appointment';
import Prescription from './components/Prescription';
import Edituser from './components/Edituser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Globalprovider>
          <Navbar></Navbar>
          <Routes>
            <Route path='/' element={<StartingPage></StartingPage>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/register' element={<Register></Register>}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/users' element={<Users></Users>}></Route>
            <Route path='/appointment' element={<Appointment></Appointment>}></Route>
            <Route path='/prescription' element={<Prescription></Prescription>}></Route>
            <Route path='/edituser' element={<Edituser/>}></Route>
          </Routes>
        </Globalprovider>
      </BrowserRouter>
    </div>
  );
}

export default App;
