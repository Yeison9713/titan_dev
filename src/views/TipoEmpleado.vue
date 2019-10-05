<template>
  <div class="content">
    <navbar_static />
    <section class="main">
      <header_stacti />
      <div style="margin: 25px;">
        <body_empleados />
      </div>
    </section>
  </div>
</template>

<script>
import navbar_static from "../components/Navbar.vue";
import header_stacti from "../components/Header.vue";
import body_empleados from "../components/TipoEmpleado.vue";
export default {
  name: "app",
  components: {
    navbar_static,
    header_stacti,
    body_empleados
  }
};
</script>