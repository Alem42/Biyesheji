import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginApi } from '../utils/host';
import './Login.css';
import ButtonToggle from './ButtonToggle'; // 导入 ButtonToggle 组件

function Login() {
  const navigate = useNavigate();   // 用于后面的页面跳转
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isDay, setIsDay] = useState(true); // 管理日夜主题

  const handleLogin = async () => {
    console.log({ username, password });
    const response = await fetch(loginApi, {  // 异步函数handleLogin，在用户点击登录按钮时被调用。
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    const res = await response.json();
    if (res.ok) {
      navigate('/pages/UserInfo');
    } else {
      setErrorMessage(res.message);
    }
  };

  const handleForgotPassword = () => {
    navigate('/pages/Forgotpsd');
  };

  const handleRegister = () => {
    navigate('/pages/Register');
  };

  const handleClickisday = () => {
    setIsDay((prevIsDay) => !prevIsDay);

  };

  return (
    <div className={`flex justify-center items-center h-screen ${isDay ? 'day-background' : 'night-background'}`}>
      <div className="relative">
        <div className={`bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg p-10 rounded-lg ${isDay ? '' : 'text-white'}`}>
          <h1 className="text-2xl mb-10">自行车智能码表系统</h1>
          <div className="mb-4">
            <input 
              type="text" 
              className="p-2 border-b-2 border-gray-500 w-full bg-transparent placeholder-gray-500 outline-none focus:border-blue-500" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              placeholder="请输入用户名" 
            />
          </div>
          <div className="mb-4">
            <input 
              type="password" 
              className="p-2 border-b-2 border-gray-500 w-full bg-transparent placeholder-gray-500 outline-none focus:border-blue-500" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="请输入密码" 
            />
          </div>
          <div className="mb-4 text-left">
            <button onClick={handleForgotPassword} className="text-blue-500">忘记密码？</button>
          </div>
          <button onClick={handleLogin} className="bg-blue-500 text-white p-2 rounded-full w-full">登录</button>
          {errorMessage && <p className="text-red-500 text-center mt-2">{errorMessage}</p>}
          <div className="mt-4">
            <p>没有账号？ <button onClick={handleRegister} className="text-blue-500">点击注册用户！</button></p>
          </div>
          
        </div>
        <div className="relative bottom-[-20px] flex justify-end w-full">
          <ButtonToggle onClick={handleClickisday} />
        </div>
      </div>
    </div>
  );
}

export default Login;
