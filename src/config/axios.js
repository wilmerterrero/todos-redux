import axios from 'axios';

const axiosCliente = axios.create({
    baseURL: 'http://localhost:4000/'
});

export default axiosCliente;