import home from '../components/admin/home/home';
import post from '../components/admin/post/post-list';
const route = [
    {
        path: '/',
        component: home,
        meta: {
            reqiuresAuth: true,
            Admin:true, // for only admin component
            User:false
          }
    },
    {
        path: '/post',
        component: post,
        meta: {
            reqiuresAuth: false,
            Admin:false, // for only admin component
            User:false
          }
    }
];

export default route; 