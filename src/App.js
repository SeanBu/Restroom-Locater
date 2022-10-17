import './App.css';
import { Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Main from './pages/Main';
import Navbar from './components/Navbar'
import AddLocation from './pages/AddLocation';
import Admin from './pages/Admin';
import Reports from './pages/Reports';
import Restrooms from './pages/Restrooms';
import Users from './pages/Users';
import Submissions from './pages/Submissions';
import EditRestroom from './pages/EditRestroom';

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
        <Route exact path="/admin/reports" element={<Reports />} />
        <Route exact path="/admin/restrooms" element={<Restrooms />} />
        <Route exact path="/admin/users" element={<Users />} />
        <Route exact path="/admin/submissions" element={<Submissions />} />
        <Route exact path="/admin/restrooms/edit/:restroomID" element={<EditRestroom />} />
      </Routes>
    </div>
  );
}

export default App;
