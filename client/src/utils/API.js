import axios from 'axios';

export default {
    register: function(postData) {
        return axios.post('/auth/register',postData);
    },
    login: function(postData){
        return axios.post('/auth/login',postData);
    }
}