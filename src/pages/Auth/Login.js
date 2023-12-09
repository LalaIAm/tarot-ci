import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/useAuth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const { userLogIn } = useAuth()
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await userLogIn(email, password)
      navigate('/')
    } catch (err) {
      console.log(err)
      setError(err.message)
    }
  }
  return (
    <div className='page auth-page'>
      <div className='background'>
        <div className='shape'></div>
        <div className='shape'></div>
      </div>
      <form onSubmit={handleSubmit}>
        <h3>Log In Here</h3>
        <label htmlFor='email'>Your Email</label>
        <input onChange={e => setEmail(e.target.value)} type='email' placeholder='You@Email.com' id='email' />
        <label htmlFor='password'>Password</label>
        <input onChange={e => setPassword(e.target.value)} type='password' placeholder='SecretPassword' id='password' />
        <button type='submit'>Log In</button>
        <div className='social'>
          <div className='go'>
            <i className='ri-google-fill'></i> Google
          </div>
          <div className='fb'>
            <i className='ri-facebook-circle-fill'></i> Facebook
          </div>
        </div>
        <p>
          Don't have an account? <Link to='/'>Sign Up</Link>
        </p>
      </form>
    </div>
  );
}

export default Login