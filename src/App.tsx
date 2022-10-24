
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { Routes } from './routes';
import { ChatProvider } from './contexts/ChatContext';

function App() {
  return (
    <AuthProvider>
      <ChatProvider>
        <BrowserRouter>
          <ToastContainer autoClose={3000} theme='dark' />
          <Routes />
        </BrowserRouter>
      </ChatProvider>
    </AuthProvider>
  )
}

export default App