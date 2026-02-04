import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./component/Login";
import Register from "./component/Register";
import Dashboard from './component/Dashboard';

function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  )
}
export default App
