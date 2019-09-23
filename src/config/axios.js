import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/angelicabel92/json-server-products'
});

export default axiosClient;
