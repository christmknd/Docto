import { createRouter, createWebHistory } from 'vue-router'

//static
import Home from "../views/static/Home.vue";
import PageNotFound from "../views/static/PageNotFound.vue";
import Cgv from "../views/static/Cgv.vue"

//auth 
import Login from '../views/auth/Login.vue';
import Signup from '../views/auth/Signup.vue';


//admin 
import AdminApp from '../views/AdminApp.vue';

//patient
import PatientApp from '../views/PatientApp.vue';
import PatientProfile from '../components/patient/PatientProfile.vue';
import PatientConsultation from '../components/patient/PatientConsultation.vue';


//doctor
import DoctorApp from '../views/DoctorApp.vue';
import DoctorProfile from '../components/doctor/DoctorProfile.vue';
import DoctorConsultation from '../components/doctor/DoctorConsultation.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/admin', 
        component: AdminApp,
        children: [
        ]
    }, 
    {
        path: '/doctor',
        component: DoctorApp,
        children: [
            {
            path: 'doctor/:id',
            component: DoctorProfile
            },
        ]
    }, 
    {
        path: '/patient',
        component: PatientApp,
        children: [
            {
                path: 'patient/:id',
                component: PatientProfile
            }
        ]
    }, 
    //auth
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup
    },

    //static
    {
        path: '/cgv',
        name: 'Cgv',
        component: Cgv
    },
    {
        path: '/:catchAll(.*)',
        name: 'PageNotFound',
        component: PageNotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
