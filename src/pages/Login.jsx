import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();   // 用于后面的页面跳转
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    // const response = await fetch('/api/login', {  // 异步函数handleLogin，在用户点击登录按钮时被调用。
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ username, password })
    // });
    // if (response.ok) {
      // 通过验证，导航到地图界面
      navigate('/pages/UserInfo');
    // } else {
    //   // 显示错误消息
    //   const errorData = await response.json();
    //   setErrorMessage(errorData.message);
    // }
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
