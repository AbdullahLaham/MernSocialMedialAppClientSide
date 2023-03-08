import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
function App() {
  return (
    <div className="App min-h-[100vh] ">
      <div className='blur -top-[18%] right-0'></div>
      <div className='blur top-[36%] -left-[8rem]'></div>
      <Routes>
        <Route path='/' element={<HomePage />} />

      </Routes>
    </div>
  );
}

export default App;
