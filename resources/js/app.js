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
import VueI18n from 'vue-i18n';
import en from '../js/lang/en';
import ja from '../js/lang/ja';
Vue.use(VueAxios, axios)
Vue.use(VeeValidate);
Vue.use(VueRouter);
Vue.use(Vuex);


const router = new VueRouter({
    routes,
    mode: 'history'
}); 


router.beforeEach((to, from, next) => {
    if(to.meta.reqiuresAuth){
      const authUser = store.getters.currentUser
      if(!authUser || !authUser.token){
        next({name:'login'})
      }
      else if(authUser || authUser.token){
        // for admin 
         if(to.meta.recruiter){
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


const languages = {
  en: en,
  ja: ja,
}
Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: 'ja',
  messages: languages,
})

Vue.component('Index',Index)



const app = new Vue({
    el: '#app',
    router,
    store,
    i18n,

});
