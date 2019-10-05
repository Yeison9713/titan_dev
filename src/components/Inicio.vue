<template>
  <div id="inicio">
    <b-row>
      <b-col>
        <b-card title class="mb-2">
          <div style="display: flex; justify-content: space-between;">
            <h4>Datos clientes</h4>
            <div>
              <b-button v-b-modal.modal-prevent-closing variant="primary">Registrar informacion</b-button>
            </div>
          </div>
        </b-card>
        <div>
          <b-row>
            <b-col cols="6" v-for="cliente in clientes" v-bind:key="cliente['key']" style="margin-bottom: 10px;">
              <b-card>
                <b-media no-body>
                  <b-media-aside vertical-align="center">
                    <b-img
                      blank-color="#ccc"
                      fluid
                      width="128"
                      height="256"
                      alt="HEX shorthand color (#ccc)"
                      src="https://cdn3.iconfinder.com/data/icons/users-6/100/user-men-2-512.png"
                    ></b-img>
                  </b-media-aside>

                  <b-media-body class="ml-1">
                    <b-form-group>
                      <b-row style="align-items: center;">
                        <b-col cols="7">
                          <h5 class="mt-0 text-uppercase">{{cliente.razon_social}}</h5>
                        </b-col>
                        <b-col cols="5">
                          <b-button variant="success">Act.</b-button>
                          <b-button variant="danger" v-on:click="removeCliente(cliente)">Det</b-button>
                        </b-col>
                      </b-row>
                    </b-form-group>
                    <b-form-group
                      style="margin-bottom: 7px;"
                      label-cols="6"
                      label-cols-lg="4"
                      label-size="sm"
                      label="Nit"
                      label-for="input-sm"
                    >
                      <b-form-input id="input-sm" size="sm" :value="cliente.nit" disabled></b-form-input>
                    </b-form-group>
                    <b-form-group
                      style="margin-bottom: 7px;"
                      label-cols="6"
                      label-cols-lg="4"
                      label-size="sm"
                      label="Correo"
                      label-for="input-sm"
                    >
                      <b-form-input id="input-sm" size="sm" :value="cliente.correo" disabled></b-form-input>
                    </b-form-group>
                    <b-form-group
                      style="margin-bottom: 7px;"
                      label-cols="6"
                      label-cols-lg="4"
                      label-size="sm"
                      label="Direccion"
                      label-for="input-sm"
                    >
                      <b-form-input id="input-sm" size="sm" :value="cliente.direccion" disabled></b-form-input>
                    </b-form-group>
                    <b-form-group
                      style="margin-bottom: 7px;"
                      label-cols="6"
                      label-cols-lg="4"
                      label-size="sm"
                      label="Telefono"
                      label-for="input-sm"
                    >
                      <b-form-input id="input-sm" size="sm" :value="cliente.telefono" disabled></b-form-input>
                    </b-form-group>
                    <b-form-group
                      style="margin-bottom: 7px;"
                      label-cols="6"
                      label-cols-lg="4"
                      label-size="sm"
                      label="Representante"
                      label-for="input-sm"
                    >
                      <b-form-input id="input-sm" size="sm" :value="cliente.representante" disabled></b-form-input>
                    </b-form-group>
                  </b-media-body>
                </b-media>
              </b-card>
            </b-col>
          </b-row>
        </div>
      </b-col>
    </b-row>
    <b-modal
      id="modal-prevent-closing"
      size="lg"
      centered
      static
      ref="modal"
      title="Registrar informacion"
      hide-footer
      @show="resetModal"
      @hidden="resetModal"
    >
      <b-form @submit.stop.prevent="onSubmit">
        <b-row>
          <b-col>
            <b-form-group
              label-cols="6"
              label-cols-lg="4"
              label-size="sm"
              label="Razon social"
              label-for="razon_social"
            >
              <b-form-input
                id="razon_social"
                name="razon_social"
                v-model="$v.form.razon_social.$model"
                :state="$v.form.razon_social.$dirty ? !$v.form.razon_social.$error : null"
                aria-describedby="razon_error_feedback"
              ></b-form-input>

              <b-form-invalid-feedback id="razon_error_feedback">Campo requerido.</b-form-invalid-feedback>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group
              label-cols="6"
              label-cols-lg="4"
              label-size="sm"
              label="Nit"
              label-for="nit_empr"
            >
              <b-form-input
              type="number"
                id="nit_empr"
                name="nit_empr"
                v-model="$v.form.nit.$model"
                :state="$v.form.nit.$dirty ? !$v.form.nit.$error : null"
                aria-describedby="nit_error_feedback"
              ></b-form-input>
              <b-form-invalid-feedback id="nit_error_feedback">Campo requerido.</b-form-invalid-feedback>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group
              label-cols="6"
              label-cols-lg="4"
              label-size="sm"
              label="Direccion"
              label-for="direccion_empr"
            >
              <b-form-input
                id="direccion_empr"
                name="direccion_empr"
                v-model="$v.form.direccion.$model"
                :state="$v.form.direccion.$dirty ? !$v.form.direccion.$error : null"
                aria-describedby="direccion_error_feedback"
              ></b-form-input>
              <b-form-invalid-feedback id="direccion_error_feedback">Campo requerido.</b-form-invalid-feedback>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group
              label-cols="6"
              label-cols-lg="4"
              label-size="sm"
              label="Telefono"
              label-for="telefono_empr"
            >
              <b-form-input
                id="telefono_empr"
                name="telefono_empr"
                v-model="$v.form.telefono.$model"
                :state="$v.form.telefono.$dirty ? !$v.form.telefono.$error : null"
                aria-describedby="telefono_error_feedback"
              ></b-form-input>
              <b-form-invalid-feedback id="telefono_error_feedback">Campo requerido.</b-form-invalid-feedback>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group
              label-cols="6"
              label-cols-lg="4"
              label-size="sm"
              label="E-mail"
              label-for="correo_empr"
            >
              <b-form-input
                type="email"
                id="correo_empr"
                name="correo_empr"
                v-model="$v.form.correo.$model"
                :state="$v.form.correo.$dirty ? !$v.form.correo.$error : null"
                aria-describedby="correo_error_feedback"
              ></b-form-input>
              <b-form-invalid-feedback id="correo_error_feedback">Campo requerido.</b-form-invalid-feedback>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group
              label-cols="6"
              label-cols-lg="4"
              label-size="sm"
              label="Representante legal"
              label-for="represent_legal_empr"
            >
              <b-form-input
                id="represent_legal_empr"
                name="represent_legal_empr"
                v-model="$v.form.representante.$model"
                :state="$v.form.representante.$dirty ? !$v.form.representante.$error : null"
                aria-describedby="representante_error_feedback"
              ></b-form-input>
              <b-form-invalid-feedback id="representante_error_feedback">Campo requerido.</b-form-invalid-feedback>
            </b-form-group>
          </b-col>
        </b-row>
        <div style="display: flex; justify-content: flex-end;">
          <b-button type="submit" variant="primary" :disabled="$v.form.$invalid" right>Submit</b-button>
        </div>
      </b-form>
    </b-modal>
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
    removeCliente(key){
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