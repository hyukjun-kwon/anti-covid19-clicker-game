import axios from 'axios';

export default {
    register: function(postData) {
        return axios.post('/auth/register', postData);
    },
    login: function(postData){
        return axios.post('/auth/login', postData);
    },
    easyScore: function(postData) {
        return axios.post('/player/easy', postData);
    },
    mediumScore: function(postData) {
        return axios.post('/player/medium', postData);
    },
    hardScore: function(postData) {
        return axios.post('/player/hard', postData);
    }
}