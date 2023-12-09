import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import { AuthProvider } from './context/useAuth';
import PrivateRoute from './components/PrivateRoute';
import { useAuth } from './context/useAuth';

import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';

import Dashboard from './pages/Dashboard';

const App = () => {
  const { user } = useAuth();

  return (
    <Routes>
      {user ? (
        <Route path='/' element={<Layout />}>
          <Route index element={<Dashboard />} />
        </Route>
      ) : (
        <>
          <Route path='/' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </>
      )}
    </Routes>
  );
};

export default App;
