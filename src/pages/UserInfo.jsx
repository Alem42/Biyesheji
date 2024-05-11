import React, { useState } from 'react';

function Dashboard() {
  const [speed, setSpeed] = useState('10.2 km/h'); // 静态显示，可改为动态
  const [mileage, setMileage] = useState('56.3 km'); // 静态显示，可改为动态
  const [tiltStatus, setTiltStatus] = useState('正常');
  const [tiltDetails, setTiltDetails] = useState({ x: 2, y: 7, z: 0 });
  const [showDetails, setShowDetails] = useState(false);

  const toggleTiltDetails = () => {
    setShowDetails(!showDetails);
  };

  const resetTiltStatus = () => {
    setTiltDetails({ x: 0, y: 0, z: 0 });
    setTiltStatus('正常');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-4" style={{ gap: '1.5rem' }}>
        <div className="flex justify-between mb-6">
          <div>
            <div className="mb-4">车辆速度: {speed}</div>
            <div className="mb-4">车辆行驶公里数: {mileage}</div>
            <div className="mb-4 cursor-pointer" onClick={toggleTiltDetails}>
              <span>倾斜状态: </span>
              <span className={`font-bold ${tiltStatus === '正常' ? 'text-green-500' : 'text-red-500'}`}>{tiltStatus}</span>
            </div>
            {showDetails && (
              <div className="bg-gray-200 p-2 rounded-lg">
                <div>X轴: {tiltDetails.x}</div>
                <div>Y轴: {tiltDetails.y}</div>
                <div>Z轴: {tiltDetails.z}</div>
                <button className="mt-2 bg-blue-500 text-white p-1 rounded" onClick={resetTiltStatus}>
                  重置倾斜状态
                </button>
              </div>
            )}
          </div>
          <img src="/usr/image/user.png" alt="User Profile" className="w-20 h-20 rounded-full object-cover" />
        </div>
        <img src="/usr/image/map.png" alt="Map Placeholder" className="w-full h-96 mt-4 rounded-lg object-cover" />
        <div className="flex justify-between mt-6">
          <button className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">历史记录</button>
          <button className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600">关闭车锁</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
