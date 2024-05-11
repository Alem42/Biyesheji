require('dotenv').config();
const server_host = process.env.SERVER_HOST;

const loginApi = server_host + '/login';

export { loginApi, }