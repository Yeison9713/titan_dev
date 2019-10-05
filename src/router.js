import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/empleados',
      name: 'empleados',
      component: () => import('./views/Empleados.vue')
    },
    {
      path: '/tipo-empleado',
      name: 'tipo-empleado',
      component: () => import('./views/TipoEmpleado.vue')
    },
    {
      path: '/calendario',
      name: 'eventos',
      component: () => import('./views/Eventos.vue')
    }
  ]
})
