// LoginForm.js
import React, { useState } from 'react';
import '../App.css';
import Image from '../images/logo.png';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Lógica de inicio de sesión aquí
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="container">
        <div className="backdrop"></div>
      <form className="form" onSubmit={handleLogin}>
        <div className='logo'><img src={Image} alt='logo' ></img></div>
        <h2 className="title">Iniciar Sesión</h2>
        <div className="input-container">
            <h4>Username</h4>
          <input
            className="input"
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-container">
        <h4>Password</h4>
          <input
            className="input"
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="button" type="submit">
          Ingresar
        </button>
        <p className='pass-olvide'>Olvide mi contraceña</p>
      </form>
    </div>
  );
};

export default LoginForm;
