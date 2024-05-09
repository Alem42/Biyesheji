import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login'; // 确保路径正确
import UserInfo from './pages/UserInfo';

const App = () => {
  return (
      <Router>
        <div>
          
          <Routes>
            {/* 重定向从根路径到/login */}
            <Route path="/" element={<Login />} />
            {/* 路由规则指向对应组件 */}
            <Route path="/login" element={<Login />} />
            <Route path="/pages/UserInfo" element={<UserInfo />} />
            {/* 这里可以根据需要添加更多路由规则 */}
          </Routes>
          
        </div>
      </Router>
  );
};

export default App;
