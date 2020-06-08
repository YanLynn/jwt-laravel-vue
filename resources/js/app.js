require('./bootstrap');
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import * as VeeValidate from 'vee-validate';
import  routes  from  './route';
import store from '../js/store/index';
import Index from './components/index'; 
import axios from 'axios'
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios)
Vue.use(VeeValidate);
Vue.use(VueRouter);

Vue.use(Vuex);


const router = new VueRouter({
    routes,
    mode: 'history'
}); 


router.beforeEach((to, from, next) => {
    // login component
    
    if(to.meta.reqiuresAuth){
      const authUser = store.getters.currentUser
      if(!authUser || !authUser.token){
        next({name:'login'})
      }
      else if(authUser || authUser.token){
        // for admin 
         if(to.meta.recruiter){
          //  console.log('re')
          const authUser = store.getters.currentUser
          if(authUser.role === 2){
            next()
          }else{
            alert('1')
            next({name:'Unauthorized'})
          }
        }
        // for User component
       if(to.meta.jobseeker){
        const authUser = store.getters.currentUser
        if(authUser.role === 3){
          next()
        }else{
          alert('2')
          next({name:'Unauthorized'})
        }
      }
        next()
      }
    }
    else{
      next()
    }
  })
// important script for component permission
Vue.component('Index',Index)



const app = new Vue({
    el: '#app',
    router,
    store,

});
