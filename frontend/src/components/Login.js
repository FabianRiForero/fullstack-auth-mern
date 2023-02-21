import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const history = useHistory();

  const Auth = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/login', { email, password });
      history.push('/dashboard');
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  }

  return (
    <section className='hero has-background-grey-light is-fullheight is-fullwidth'>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns is-centered'>
            <div className='column is-4-desktop'>
              <form onSubmit={Auth} className='box'>
                <p className='has-text-centered'>{msg}</p>
                <div className='field mt-5'>
                  <label className='label' htmlFor='email'>Email</label>
                  <div className='controls'>
                    <input type='text' className='input' placeholder='Username' name='email' value={email} onChange={e => setEmail(e.target.value)} />
                  </div>
                </div>
                <div className='field mt-5'>
                  <label className='label' htmlFor='password'>Password</label>
                  <div className='controls'>
                    <input type='password' className='input' placeholder='*********' name='password' value={password} onChange={e => setPassword(e.target.value)} />
                  </div>
                </div>
                <div className='field mt-5'>
                  <button className='button is-success is-fullwidth'>Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login