import home from '../components/jobseeker/Home/Home';

const route = [
    {
        path: '/',
        component: home,
        meta: {
            reqiuresAuth: true,
            recruiter:false, // for only admin component
            jobseeker:true
          }
    },
];

export default route;