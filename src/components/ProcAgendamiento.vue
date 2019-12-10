<template>
  <div id="porAgenda">
    <b-card title="Reportes agendamiento">
      <form onsubmit=" rerurn false;" class="form">
        <div>
          <Label>Usuario</Label>
          <input v-model="usuario" />
        </div>
        <div>
          <Label>Contraseña</Label>
          <input v-model="clave" />
        </div>
      </form>
      <div class="footer-btn">
        <button class="btn" @click="enviar">Enviar</button>
      </div>
    </b-card>
  </div>
</template>

<script>
import post from "../methods.js";
export default {
  name: "procesos-agendamiento",
  data() {
    return {
      usuario: "52531556",
      clave: "123"
    };
  },
  methods: {
    enviar() {
      var datos = {
        url: "financiero/dlls/index1000.dll",
        data: this.usuario + "|" + this.clave + "|"
      };
      window.console.log(datos);
      post
        .postData(datos)
        .then(data => {
          window.console.log(data);
        })
        .catch(err => {
          window.console.log(err);
        });
    }
  }
};
</script>


<style>
.form {
  display: flex;
  justify-content: space-around;
}
.form div {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
input {
  padding: 12px;
  border: 1px solid #cccccc;
  border-radius: 6px;
}
.btn {
  padding: 12px;
  background-color: #555456 !important;
  color: #fff;
}
.footer-btn {
  display: flex;
  justify-content: space-around;
}
</style>