import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-course-414f9.firebaseio.com/'
});

export default instance;