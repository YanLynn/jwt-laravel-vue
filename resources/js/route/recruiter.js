import home from '../components/recruiter/Home/Home';
import post from '../components/recruiter/post/post-list';
const route = [
    {
        path: '/',
        component: home,
        meta: {
            reqiuresAuth: true,
            recruiter:true, // for only admin component
            jobseeker:false
          }
    },
    {
        path: '/post',
        component: post,
        meta: {
            reqiuresAuth: false,
            recruiter:true, // for only admin component
            jobseeker:false
          }
    }
];

export default route; 