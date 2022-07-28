import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/dashboard/Dashboard';
import ErrorPage from './pages/homepage/ErrorPage';
import Homepage from './pages/homepage/Homepage';
import ProtectedRoutes from './pages/homepage/ProtectedRoutes';
import SharedComp from './pages/homepage/SharedComp';
import Terms from './pages/homepage/Terms';
import Login from './pages/loginPage/Login';
import SignUp from './pages/signUp/SignUp';

function App() {
  return (
    <div className="App">
        
        <Routes>
          <Route path ={'/'} element={<SharedComp/>} >
            <Route index element ={<Homepage/>} />
            <Route path ={'/signup'} element ={<SignUp/>} />
            <Route path ={'/login'} element ={<Login/>} />
            <Route path ={'/terms'} element ={<Terms/>} />
            <Route element ={<ProtectedRoutes/>}>
              <Route path ={'/dashboard'} element ={<Dashboard/>} />
            </Route>
            <Route path ={'*'} element ={<ErrorPage/>} />
      
          </Route>
        </Routes>
    </div>
  );
}

export default App;
