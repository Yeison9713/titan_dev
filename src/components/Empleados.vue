<template>
  <div id="empleados">
    <b-row>
      <b-col>
        <b-card>
          <h4>Datos empleados</h4>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
const fecth = require("node-fetch");
export default {
  created() {
    fecth("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => window.console.log(data));
  }
};
</script>