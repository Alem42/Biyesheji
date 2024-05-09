import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function UserInfo() {
  const [speed, setSpeed] = useState(0); // 车速
  const [tilt, setTilt] = useState({ x: 0, y: 0, z: 0 }); // 车辆倾斜状态
  const navigate = useNavigate(); // 用于页面导航

  // 假设从API获取数据
  useEffect(() => {
    // 这里我们假设数据是静态的，实际应用中应从后端获取
    setSpeed(80); // 假设车速为80
    setTilt({ x: 5, y: 10, z: 3 }); // 假设倾斜状态
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="mb-4">
        <span>车速：</span>
        <span>{speed} km/h</span>
      </div>
      <div className="mb-4">
        <button className="bg-blue-500 text-white p-2 rounded" onClick={() => navigate('/pages/Map')}>
          点击查看车辆位置
        </button>
      </div>
      <div className="mb-4">
        <div>车辆倾斜状态：</div>
        <div>X: {tilt.x}</div>
        <div>Y: {tilt.y}</div>
        <div>Z: {tilt.z}</div>
      </div>
      <button className="bg-gray-500 text-white p-2 rounded">
        历史记录
      </button>
    </div>
  );
}

export default UserInfo;
