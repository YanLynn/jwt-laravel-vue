import PublicPage from '../components/public/public-layout';
import recruiterPage from '../components/recruiter/recruiter-layout';
import jobseekerPage from '../components/jobseeker/jobseeker-layout';
import Public from './public';
import recruiter from './recruiter';
import jobseeker from './jobseeker';
import Register from '../components/auth/Register.vue';
import Login from '../components/auth/Login.vue';
import Unauthorized from '../components/Unauthorized.vue'; 
const route = [
    {
        path: '/',
        component: PublicPage,
        children: Public,
        
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/Unauthorized',
        name: 'Unauthorized',
        component: Unauthorized,
    },
    {
        path: '/recruiter',
        component: recruiterPage,
        children: recruiter,
        
    },
    {
        path: '/jobseeker',
        component: jobseekerPage,
        children: jobseeker,
       
    },
    
   
];

export default route;