<template>
  <div>empleados</div>
</template>

<script>
const fecth = require("node-fetch");
export default {
  created() {
      fecth("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data=>window.console.log(data));
  }
};
</script>