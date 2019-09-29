<template>
  <div id="app">
    <header_stacti msg="Prueba de linkage" />
  </div>
</template>

<script>
import header_stacti from "./components/Header.vue";
export default {
  name: "app",
  components: {
    header_stacti
  }
};
</script>

<style>
body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background: #c5c4c46e !important;
  font-family: "font-family: Verdana, Geneva, sans-serif";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
