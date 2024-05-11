// host.jsx
const server_host = import.meta.env.VITE_SERVER_HOST;
const loginApi = server_host + '/login';

export { loginApi };
