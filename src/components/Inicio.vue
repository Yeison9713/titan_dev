<template>
  <div id="inicio">
    <b-row>
      <b-col>
        <b-card title class="mb-2">
          <div style="display: flex; justify-content: space-between;">
            <h4>Dessarollo</h4>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<style>
.col-admin {
  display: flex;
  justify-content: space-around;
  width: 100%;
}
</style>

<script>
import { validationMixin } from "vuelidate";
import { required, email, minLength } from "vuelidate/lib/validators";
import Firebase from "firebase";

let config = {
  apiKey: "AIzaSyDFEC7okdjPodOFjtFtnY2wLAE8Ef0Bsgg",
  authDomain: "admin-1a69d.firebaseapp.com",
  databaseURL: "https://admin-1a69d.firebaseio.com",
  projectId: "admin-1a69d",
  storageBucket: "admin-1a69d.appspot.com",
  messagingSenderId: "471678726817",
  appId: "1:471678726817:web:6dc0b05430a1fd1715b6e0",
  measurementId: "G-38HQ3TGJB9"
};

let app = Firebase.initializeApp(config);
let db = app.database();

let clientesRef = db.ref("clientes");

export default {
  mixins: [validationMixin],
  name: "inicio",
  data() {
    return {
      form: {
        razon_social: "",
        nit: "",
        direccion: "",
        telefono: "",
        correo: "",
        representante: ""
      },
      clientes: []
    };
  },
  validations: {
    form: {
      razon_social: { required, minLength: minLength(3) },
      nit: { required },
      direccion: { required },
      telefono: { required },
      correo: { required, email },
      representante: { required }
    }
  },
  methods: {
    addCliente() {
      clientesRef.push(this.form);
    },
    removeCliente(key) {
      clientesRef.child(key.key).remove();
    },
    onSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      this.$nextTick(() => {
        this.$refs.modal.hide();
        this.addCliente();
      });
    },
    resetModal() {
      this.form.razon_social = "";
      this.form.nit = "";
      this.form.direccion = "";
      this.form.telefono = "";
      this.form.correo = "";
      this.form.representante = "";
    }
  },
  created() {
    db.ref("clientes").on("value", e => {
      var temp = e.val();
      if (temp) {
        Object.getOwnPropertyNames(temp).forEach(function(val) {
          temp[val].key = val;
        });
        this.clientes = temp;
      }
    });
  }
};
</script>