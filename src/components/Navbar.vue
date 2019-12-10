<template>
  <div>
    <input type="checkbox" class="toggle-check" id="toggle" hidden />
    <div class="container-menu">
      <nav class="menu">
        <ul class="menu">
          <li style="background: rgb(104, 43, 218); padding: 12px; color: #fff; font-size: 20px;">
            <router-link to="/" class="item">Titan soluciones</router-link>
          </li>
          <li class="list">
            <a href="#">Procesos</a>
            <ul class="items">
              <li>
                <router-link to="/menuadmin/procesos-agendamiento" class="item">Agendamiento</router-link>
              </li>
              <li class="list">
                <a href="#">Facturacion</a>
                <ul class="items">
                  <li>
                    <router-link
                      to="/menuadmin/procesos-generarFactura"
                      class="item"
                    >Generar factura</router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="list">
            <a href="#">Reportes</a>
            <ul class="items">
              <li>
                <router-link to="/menuadmin/reportes-facturacion" class="item">Facturacion</router-link>
              </li>
            </ul>
          </li>
          <li class="list">
            <a href="#">Configuracion</a>
            <ul class="items">
              <li class="list">
                <a href="#">Facturacion</a>
                <ul class="items">
                  <li>
                    <router-link
                      to="/menuadmin/configuracion-facturacion-ent"
                      class="item"
                    >Entidades</router-link>
                  </li>
                  <li>
                    <router-link
                      to="/menuadmin/configuracion-facturacion-contr"
                      class="item"
                    >Contratacion</router-link>
                  </li>
                  <li>
                    <router-link
                      to="/menuadmin/configuracion-facturacion-serv"
                      class="item"
                    >Contratacion</router-link>
                  </li>
                  <li>
                    <router-link to="/menuadmin/configuracion-facturacion-cups" class="item">Cups</router-link>
                  </li>
                </ul>
              </li>
              <li class="list">
                <a href="#">Gestion del usuario</a>
                <ul class="items">
                  <li>
                    <router-link
                      to="/menuadmin/configuracion-gestion-agendas"
                      class="item"
                    >Activacion de agendas</router-link>
                  </li>
                  <li>
                    <router-link
                      to="/menuadmin/configuracion-gestion-usuarios"
                      class="item"
                    >Usuarios</router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const list = document.querySelectorAll(".list");
    function accordion(e) {
      e.stopPropagation();
      if (this.classList.contains("active")) {
        this.classList.remove("active");
      } else if (
        this.parentElement.parentElement.classList.contains("active")
      ) {
        this.classList.add("active");
      } else {
        for (var i = 0; i < list.length; i++) {
          list[i].classList.remove("active");
        }
        this.classList.add("active");
      }
    }
    for (var i = 0; i < list.length; i++) {
      list[i].addEventListener("click", accordion);
    }
  }
};
</script>

<style>
ul.menu {
  padding: 0;
  list-style: none;
  width: 400px;
  /* margin: 20px auto; */
  font-family: "Century Gothic";
  box-shadow: 0px 0px 25px #00000070;
  clear: both;
  display: table;
  margin-bottom: 100px;
}
ul.menu .list {
  font-size: 14px;
  border-bottom: 1px solid #324252;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  height: 50px;
  vertical-align: sub;
  /* background: #3e5165; */
  clear: both;
}
ul.menu .list:after {
  content: "\f105";
  font-family: FontAwesome;
  position: absolute;
  right: 17px;
  top: 17px;
  padding: 0px 5px;
  color: #fff;
}
ul.menu .list:before {
  content: "\f07b";
  font-family: FontAwesome;
  position: absolute;
  left: 17px;
  top: 17px;
  padding: 0px 5px;
  color: #fff;
}
ul.menu .list a {
  text-decoration: none;
  color: #fff;
  padding: 17px 0px 17px 45px;
  display: block;
  height: 100%;
  box-sizing: border-box;
}
ul.menu .list a:hover {
  background-color: #324252;
  transition: 300ms all;
  color: #09fbd2;
}
ul.menu .list .items {
  height: 0px;
  overflow: hidden;
}
ul.menu .list .items a {
  padding: 17px;
}
ul.menu .list .items a:hover {
  background-color: #3f5d79;
  color: #fff;
  transition: 300ms all;
}
ul.menu .list:last-child {
  border-bottom: none;
}
ul.menu .active:after {
  content: "\f106";
  font-family: FontAwesome;
  position: absolute;
  right: 17px;
  top: 17px;
  padding: 0px 5px;
  color: #fff;
}
ul.menu .active:before {
  content: "\f07c";
  font-family: FontAwesome;
  position: absolute;
  left: 17px;
  top: 17px;
  padding: 0px 5px;
  color: #fff;
}
ul.menu .active > .items {
  display: block;
  background: #23313f;
  padding: 0px;
  height: auto;
  color: #fff;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  transition: all 200ms;
  clear: both;
  float: left;
  width: 100%;
}
ul.menu .active > .items li {
  padding: 0px;
  border-bottom: 1px solid #324252;
  list-style: none;
}
ul.menu .active > .items li:last-child {
  border-color: transparent;
  padding-bottom: 0px;
}
ul.menu .active > .items .active > .items {
  background-color: #2f4b67;
}
ul.menu .active > a {
  color: #46efa4;
  text-transform: uppercase;
  font-weight: bold;
}
ul.menu .active .list {
  background: #697d92;
}
ul.menu .active .list a {
  padding: 17px 0px 17px 45px;
}
</style>