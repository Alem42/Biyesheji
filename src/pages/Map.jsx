// src/App.jsx
import React, { useEffect, useState } from 'react';

const App = () => {
    const [location, setLocation] = useState({ latitude: 39.915, longitude: 116.404 });

    useEffect(() => {
        const map = new BMapGL.Map("mapContainer"); 
        const point = new BMapGL.Point(location.longitude, location.latitude);
        map.centerAndZoom(point, 15);
        map.enableScrollWheelZoom(true);
        const marker = new BMapGL.Marker(point);
        map.addOverlay(marker);

        const fetchLocation = async () => {
            //const response = await fetch('http://localhost:3000/location');
            //const data = await response.json();
            const data = {
              "latitude": 30.6574,
              "longitude": 104.0658
            }
            setLocation({ latitude: data.latitude, longitude: data.longitude });
            map.panTo(new BMapGL.Point(data.longitude, data.latitude));
        };

        const intervalId = setInterval(fetchLocation, 50000); // 每5秒钟获取一次位置

        return () => clearInterval(intervalId);
    }, []);

    return <div id="mapContainer" style={{ height: '100vh', width: '900%' }} />;
};

export default App;
