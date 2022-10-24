
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { Routes } from './routes';

function App() {
  return (
    <AuthProvider>
        <BrowserRouter>
          <ToastContainer autoClose={3000} theme='dark' />
          <Routes />
        </BrowserRouter>
    </AuthProvider>
  )
}

export default App