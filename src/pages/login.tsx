import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { setToken } from './store';
import { useRouter } from 'next/router';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogin = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      // Логирование данных для отладки
      console.log('Sending login request with data:', { username, password });

      const { data } = await axios.post('https://fakestoreapi.com/auth/login', {
        username,
        password,
      });

      // Логирование данных ответа
      console.log('Login response data:', data);

      Cookies.set('token', data.token);
      dispatch(setToken(data.token));

      // Переход на главную страницу после успешного входа
      router.push('/');
    } catch (error) {
      console.error('Login failed', error);
      // Логирование ошибки
      if (axios.isAxiosError(error)) {
        console.error('Response data:', error.response?.data);
      }
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
