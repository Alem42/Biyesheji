import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login'; // 确保路径正确
import UserInfo from './pages/UserInfo';
import Map from './pages/Map';
import Register from './pages/Register';
import Forgotpsd from './pages/forgotpsd';

const App = () => {
  return (
      <Router>
        <div>
          
          <Routes>
            {/* 重定向从根路径到/login */}
            <Route path="/" element={<Login />} />
            {/* 路由规则指向对应组件 */}
            <Route path="/pages/login" element={<Login />} />
            <Route path="/pages/UserInfo" element={<UserInfo />} />
            <Route path="/pages/Map" element={<Map />} />
            <Route path="/pages/Register" element={<Register/>} />
            <Route path="/pages/forgotpsd" element={<Forgotpsd />} />
            {/* 这里可以根据需要添加更多路由规则 */}
          </Routes>
          
        </div>
      </Router>
  );
};

export default App;
