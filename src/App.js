import './App.css';
import { Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Main from './pages/Main';
import Navbar from './components/Navbar'
import AddLocation from './pages/AddLocation';
import Admin from './pages/Admin';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/addlocation" element={<AddLocation />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/admin/reports" />
        <Route exact path="/admin/restrooms" />
        <Route exact path="/admin/users" />
        <Route exact path="/admin/submissions" />
      </Routes>
    </div>
  );
}

export default App;
