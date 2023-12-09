import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/useAuth'

const PrivateRoute = ({ children }) => {
    const { user } = useAuth();

    if (user) {
       return children
   }
    return <Navigate to='/' />

}

export default PrivateRoute