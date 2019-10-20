import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 322085f1a190d4a5e2aa46740c4edd6a23938d166cd45aa6dfc968f752163eec'
    }
});