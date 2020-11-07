import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes.map'

Vue.use(VueRouter)

//Vai levar o arquivo com as rotas como parametro
const router = new VueRouter({
    routes,
    mode:'history'
});

export default router;