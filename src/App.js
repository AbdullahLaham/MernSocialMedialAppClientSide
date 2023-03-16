import logo from './logo.svg';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import AuthPage from './pages/AuthPage';
import { useSelector } from 'react-redux';
function App() {
  const {authData} = useSelector((state) => state?.authReducer);

  return (
    <div className="App min-h-[100vh] ">
      <div className='blur -top-[18%] right-0'></div>
      <div className='blur top-[36%] -left-[8rem]'></div>
      <Routes>
        <Route path='/' element={authData ? <Navigate to='home' /> : <Navigate to='auth' />} />
        <Route path='/home' element={authData ? <HomePage /> : <Navigate to='../auth' />} />

        <Route path='/profile/:id' element={authData ? <ProfilePage /> : <Navigate to='../auth' />} />
        <Route path='/auth' element={authData ? <Navigate to='../home' /> : <AuthPage />} />

        {/* <Route  */}
      </Routes>
    </div>
  );
}

export default App;
