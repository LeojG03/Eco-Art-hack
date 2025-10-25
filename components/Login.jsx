'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loginData, setLoginData] = useState({
    usuario: '',
    password: ''
  });
  const [registerData, setRegisterData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const router = useRouter();

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías agregar lógica de autenticación
    alert("✅ ¡Bienvenido a EcoArt!");
    router.push('/productos');
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías agregar lógica de registro
    alert("✅ ¡Cuenta creada exitosamente!");
    router.push('/productos');
  };

  return (
    <div className="login-register-page">
      {isLogin ? (
        <div className="login-container" id="loginBox">
          <h1>Bienvenido</h1>
          <p>Inicia sesión para continuar</p>
          <form onSubmit={handleLoginSubmit}>
            <input
              type="text"
              name="usuario"
              placeholder="Usuario"
              value={loginData.usuario}
              onChange={handleLoginChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={loginData.password}
              onChange={handleLoginChange}
              required
            />
            <button type="submit">Iniciar sesión</button>
          </form>
          <div className="switch">
            ¿No tienes cuenta?{' '}
            <a href="#" onClick={(e) => { e.preventDefault(); setIsLogin(false); }}>
              Regístrate aquí
            </a>
          </div>
        </div>
      ) : (
        <div className="login-container" id="registerBox">
          <h1>Crear cuenta</h1>
          <p>Únete a EcoArt</p>
          <form onSubmit={handleRegisterSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Nombre de usuario"
              value={registerData.username}
              onChange={handleRegisterChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={registerData.email}
              onChange={handleRegisterChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={registerData.password}
              onChange={handleRegisterChange}
              required
            />
            <button type="submit">Registrarse</button>
          </form>
          <div className="switch">
            ¿Ya tienes cuenta?{' '}
            <a href="#" onClick={(e) => { e.preventDefault(); setIsLogin(true); }}>
              Inicia sesión
            </a>
          </div>
        </div>
      )}

      <style jsx global>{`
        body {
          background-color: #f5f0eb;
          color: #3e2f27;
          font-family: "Poppins", sans-serif;
          margin: 0;
          padding: 0;
          min-height: 100vh;
        }

        .login-register-page {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background: linear-gradient(
              rgba(60, 40, 20, 0.5),
              rgba(60, 40, 20, 0.5)
            ),
            url("https://images.unsplash.com/photo-1510626176961-4b37d6bbfabd?auto=format&fit=crop&w=1400&q=80")
              center/cover no-repeat;
          color: #3e2c1c;
          font-family: "Poppins", sans-serif;
        }

        .login-register-page .login-container {
          background-color: #f7f3efcc;
          backdrop-filter: blur(6px);
          border-radius: 20px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.25);
          width: 350px;
          padding: 40px 30px;
          text-align: center;
          animation: fadeIn 0.8s ease;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .login-register-page .login-container h1 {
          font-size: 1.8rem;
          margin-bottom: 10px;
          color: #3e2c1c;
        }

        .login-register-page .login-container p {
          font-size: 0.95rem;
          color: #6a4627;
          margin-bottom: 25px;
        }

        .login-register-page .login-container input {
          width: 90%;
          padding: 10px;
          margin: 8px 0;
          border: none;
          border-radius: 10px;
          background: #f0e5d8;
          outline: none;
          font-size: 1rem;
          color: #3e2c1c;
          font-family: "Poppins", sans-serif;
        }

        .login-register-page .login-container input:focus {
          box-shadow: 0 0 0 2px #a67b5b;
        }

        .login-register-page .login-container input::placeholder {
          color: #6a4627;
        }

        .login-register-page .login-container button {
          width: 90%;
          padding: 12px;
          border: none;
          border-radius: 30px;
          background-color: #a67b5b;
          color: white;
          font-size: 1rem;
          margin-top: 15px;
          cursor: pointer;
          transition: background-color 0.3s, transform 0.2s;
          font-family: "Poppins", sans-serif;
          font-weight: 500;
        }

        .login-register-page .login-container button:hover {
          background-color: #8b5e3c;
          transform: scale(1.05);
        }

        .login-register-page .switch {
          margin-top: 20px;
          font-size: 0.9rem;
        }

        .login-register-page .switch a {
          color: #6a4627;
          text-decoration: none;
          font-weight: bold;
          transition: color 0.3s;
        }

        .login-register-page .switch a:hover {
          color: #3e2c1c;
        }
      `}</style>
    </div>
  );
};

export default Login;
