import axios from 'axios';

export default {
    login: function(postData) {
        return axios.post('/auth/login',postData);
    }
}