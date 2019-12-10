import Vue from 'vue'
import VueRouter from 'vue-router'
import MenuAdmin from '@/views/MenuAdmin.vue'

import ProcAgendamiento from '@/components/ProcAgendamiento.vue'
import ProcGenerarFactura from '@/components/ProcGenerarFactura.vue'
import ReportesFacturacion from '@/components/ReportesFacturacion.vue'
import ConfigFactEntidades from "@/components/ConfigFactEntidades.vue"
import ConfigFactContratacion from "@/components/ConfigFactContratacion.vue"
import ConfigFactServicios from "@/components/ConfigFactServicios.vue"
import ConfigFactCups from "@/components/ConfigFactCups.vue"
import ConfigGestAgendas from "@/components/ConfigGestAgendas.vue"
import ConfigGestUsuarios from "@/components/ConfigGestUsuarios.vue"


Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/menuadmin"
  },
  {
    path: '/menuadmin',
    name: 'menuadmin',
    component: MenuAdmin,
    children: [
      {
        path: "procesos-agendamiento",
        name: "procesos-agendamiento",
        component: ProcAgendamiento
      },
      {
        path: "procesos-generarFactura",
        name: "procesos-generarFactura",
        component: ProcGenerarFactura
      },
      {
        path: "reportes-facturacion",
        name: "reportes-facturacion",
        component: ReportesFacturacion
      },
      {
        path: "configuracion-facturacion-ent",
        name: "configuracion-facturacion-ent",
        component: ConfigFactEntidades
      },
      {
        path: "configuracion-facturacion-contr",
        name: "configuracion-facturacion-contr",
        component: ConfigFactContratacion
      },
      {
        path: "configuracion-facturacion-serv",
        name: "configuracion-facturacion-serv",
        component: ConfigFactServicios
      },
      {
        path: "configuracion-facturacion-cups",
        name: "configuracion-facturacion-cups",
        component: ConfigFactCups
      },
      {
        path: "configuracion-gestion-agendas",
        name: "configuracion-gestion-agendas",
        component: ConfigGestAgendas
      },
      {
        path: "configuracion-gestion-usuarios",
        name: "configuracion-gestion-usuarios",
        component: ConfigGestUsuarios
      }
    ]
  }
]

const router = new VueRouter({
  mode: "history",
  routes
});

router.afterEach(() => {
  window.console.log("Cargado");
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;