import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/useAuth';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection, doc, setDoc, Timestamp } from 'firebase/firestore';
import { db } from '../../config/firebase';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const { userSignup } = useAuth();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await userSignup(email, password);
      const user = res.user
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name,
        authProvider: "local",
        email
      })
      navigate('/');
    } catch (err) {
      setError(err.message);
      console.log(err.message);
      alert(err.message)
    }
  };
  return (
    <div className='page auth-page'>
      <div className='background'>
        <div className='shape'></div>
        <div className='shape'></div>
      </div>
      <form className='register-form' onSubmit={handleRegister}>
        <h3 data-test='page-name'>Register Here</h3>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          placeholder='What to call you?'
          id='name'
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor='email'>Your Email</label>
        <input
          type='email'
          placeholder='You@Email.com'
          id='email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor='password'>Create a Password</label>
        <input
          type='password'
          placeholder='SecretPassword'
          id='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Sign Up</button>
        <div className='social'>
          <div className='go'>
            <i className='ri-google-fill'></i> Google
          </div>
          <div className='fb'>
            <i className='ri-facebook-circle-fill'></i> Facebook
          </div>
        </div>
        <p>
          Already have an account? <Link to='/login'>Log In</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
