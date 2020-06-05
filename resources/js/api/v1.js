import axios from 'axios';
import store from '../store';
const api = axios.create({
    baseURL: '/api/',
    // headers: {'Authorization': `Bearer ${store.getters.token}`}
});

if(store.getters.token){
     api.defaults.headers.common = {'Authorization': `Bearer ${store.getters.token}`}
}
export {
    api,
} 

