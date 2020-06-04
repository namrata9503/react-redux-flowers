import axios from 'axios';
const instance= axios.create({
    baseURL: 'https://flowers-valley.firebaseio.com/'
});

export default instance;