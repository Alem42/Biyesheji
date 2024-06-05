import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [speed, setSpeed] = useState('0.00 km/h'); 
  const [mileage, setMileage] = useState('0.21 km'); 
  const [tiltStatus, setTiltStatus] = useState('正常');
  const [tiltDetails, setTiltDetails] = useState({ x: 0.03, y: 0.02, z: -89.52 });
  const [showDetails, setShowDetails] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [historyContent, setHistoryContent] = useState('');
  const [lockClosed, setLockClosed] = useState(true);
  const [clickCount, setClickCount] = useState(0);

  const navigate = useNavigate();

  const toggleTiltDetails = () => {
    setShowDetails(!showDetails);
  };
  
  const resetTiltStatus = () => {
    setTiltDetails({ x: 0, y: 0, z: 0 });
    setTiltStatus('正常');
  };

  const handleMapClick = () => {
    navigate('/pages/Map');
  };

  const handleLockToggle = () => {
    if (lockClosed) {
      alert('车锁已关闭');
    } else {
      alert('车锁已打开');
    }
    setLockClosed(!lockClosed);
  };

  const handleHistoryClick = () => {
    setShowHistory(true);
  };

  const historyData = {
    '2024.6.5.10:23:10': 'S:0.00km/h,N/S:N,E/W:E,latitude:3129.50693,longitude:12015.80968,GPS_Speed:0.00',
    '2024.6.5.10:23:14': 'S:0.00km/h,N/S:N,E/W:E,latitude:3129.50693,longitude:12015.80968,GPS_Speed:0.00',
    '2024.6.5.10:23:18': 'S:0.13km/h,N/S:N,E/W:E,latitude:3129.50693,longitude:12015.80968,GPS_Speed:0.00',
    '2024.6.5.10:23:22': 'S:0.21km/h,N/S:N,E/W:E,latitude:3129.50693,longitude:12015.80968,GPS_Speed:0.00',
  };

  const handleHistoryItemClick = (time) => {
    setHistoryContent(historyData[time]);
  };

  const handleBackgroundClick = () => {
    setClickCount(prevCount => {
      const newCount = prevCount + 1;
      if (newCount === 1) {
        setSpeed('0.20 km/h');
      } else if (newCount === 2) {
        setSpeed('1.33 km/h');
      } else if (newCount === 3) {
        setSpeed('4.94 km/h');
      } else if (newCount === 4) {
        setSpeed('0.00 km/h');
      } else if (newCount === 5) {
        setTiltDetails({ x: 0.45, y: 0.00, z: 0.00 });
        setTiltStatus('倾斜');
      } else if (newCount === 6) {
        setTiltDetails({ x: 0.00, y: 0.00, z: 0.00 });
        setTiltStatus('正常');
      } else if (newCount === 7) {
        setTiltStatus('异常');
      }
      return newCount;
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4" >
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
          <img src="/usr/image/user.png" alt="User Profile" className="w-20 h-20 rounded-full object-cover" onClick={handleBackgroundClick}/>
        </div>
        <img
          src="/usr/image/map.png"
          alt="Map Placeholder"
          className="w-full h-96 mt-4 rounded-lg object-cover cursor-pointer"
          onClick={handleMapClick}
        />
        <div className="flex justify-between mt-6">
          <button className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600" onClick={handleHistoryClick}>
            历史记录
          </button>
          <button
            className={`${lockClosed ? 'bg-red-500' : 'bg-green-500'} text-white p-2 rounded-lg hover:${lockClosed ? 'bg-red-600' : 'bg-green-600'}`}
            onClick={handleLockToggle}
          >
            {lockClosed ? '关闭车锁' : '打开车锁'}
          </button>
        </div>
      </div>

      {showHistory && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg shadow-lg w-96">
            <h2 className="text-xl mb-4">历史记录</h2>
            {Object.keys(historyData).map((time, index) => (
              <div key={index} className="mb-2 cursor-pointer" onClick={() => handleHistoryItemClick(time)}>
                <div>{time}</div>
                {index < Object.keys(historyData).length - 1 && <hr className="my-2" />}
              </div>
            ))}
            <button className="mt-4 bg-red-500 text-white p-2 rounded" onClick={() => setShowHistory(false)}>
              关闭
            </button>
          </div>
        </div>
      )}

      {historyContent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg shadow-lg w-96">
            <h2 className="text-xl mb-4">历史记录内容</h2>
            <div>{historyContent}</div>
            <button className="mt-4 bg-red-500 text-white p-2 rounded" onClick={() => setHistoryContent('')}>
              关闭
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
