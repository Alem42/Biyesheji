import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginApi } from '../utils/host';

function Login() {
  const navigate = useNavigate();   // 用于后面的页面跳转
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    console.log({ username, password })
    const response = await fetch(loginApi, {  // 异步函数handleLogin，在用户点击登录按钮时被调用。
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    const res = await response.json()
    if (res.ok) {
      navigate('/pages/UserInfo');
    } else {
      setErrorMessage(res.message);
    }
  };


  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="p-8 bg-white shadow-md rounded">
        <div className="mb-4">
          <label className="block">用户名</label>
          <input type="text" className="p-2 border rounded w-full" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="mb-4">
          <label className="block">密码</label>
          <input type="password" className="p-2 border rounded w-full" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button onClick={handleLogin} className="bg-blue-500 text-white p-2 rounded w-full">登录</button>
        {errorMessage && <p className="text-red-500 text-center mt-2">{errorMessage}</p>}
      </div>
    </div>
  );
}

export default Login;
