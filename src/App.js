import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import AuthPage from './pages/AuthPage';
function App() {
  return (
    <div className="App min-h-[100vh] ">
      <div className='blur -top-[18%] right-0'></div>
      <div className='blur top-[36%] -left-[8rem]'></div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/auth' element={<AuthPage />} />

      </Routes>
    </div>
  );
}

export default App;
