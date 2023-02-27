import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import FetchAllMedicines from './Components/FetchAllMedicines';
import AddingMed from './Components/AddingMed';
import FetchMedById from './Components/FetchMedById';
import UpdateMedicine from './Components/UpdateMedicine';
import DeleteMedicine from './Components/DeleteMedicine';
import Home from './Components/Home';
import Login from './Components/Login';
import Customer from './Components/Customer';
import Admin from './Components/Admin';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/customer/dashboard' element={<Customer/>}/>
    <Route path='/admin/dashboard' element={<Admin/>}/>
    <Route path='/counter' element={<Counter/>}/>
    <Route path='/medicine/allMedicines' element={<FetchAllMedicines/>}/>
    <Route path='/medicine/add' element={<AddingMed/>}/>
    <Route path='/medicine/details/:medid' element={<FetchMedById/>}/>
    <Route path='/medicine/update/:medid' element={<UpdateMedicine/>}/>
    <Route path='/medicine/delete/:medid' element={<DeleteMedicine/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
