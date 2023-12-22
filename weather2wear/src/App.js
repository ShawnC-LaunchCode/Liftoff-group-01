import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import './Pages/UserHomepage.js'
import Login from './Pages/Login.js';
import Register from './Pages/Register.js';
import UserHomepage from './Pages/UserHomepage.js';
import Home from './Pages/Home.js';
import Events from './Pages/Events.js';
import LogOut from './Pages/LogOut.js';
import MyCloset from './Pages/MyCloset.js';
import Notifications from './Pages/Notifications.js';
import Settings from './Pages/Settings.js';



function App() {
  
  return (
    <div className="App">
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/HomePage" element={<UserHomepage/>} />
        <Route path="/Notifications" element={<Notifications/>} />
        <Route path="/Settings" element={<Settings/>} />
        <Route path="/LogOut" element={<LogOut/>} />
        <Route path="/Events" element={<Events/>} />
        <Route path="/MyCloset" element={<MyCloset/>} />
      </Routes>
    

    </div>
  );
}
//TODO: add react files to the src folder

export default App;
 