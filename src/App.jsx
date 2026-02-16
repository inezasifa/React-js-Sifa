import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./component/Login";
import Register from "./component/Register";
import Dashboard from './component/Dashboard';
import NotFound from './component/NotFound';
import UsersTable from './component/UsersTable';

function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path="/register" element={<Register />} />
        <Route path="/users" element={<UsersTable />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}
export default App
