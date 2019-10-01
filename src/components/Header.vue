<template>
  <div class="content">
    <input type="checkbox" class="toggle-check" id="toggle" hidden />
    <div class="container-menu">
      <nav class="menu">
        <ul>
          <li style="background: #D01;">
            <a href="#" class="item" style="padding: 14px;">ADMIN</a>
          </li>
          <li>
            <a href="#" class="item">Inicio</a>
            <!-- <router-link to="/body">Inicio</router-link> -->
          </li>
          <li>
            <a href="#" class="item">Empleados</a>
          </li>
          <li>
            <a href="#" class="item">Tipo empleado</a>
          </li>
          <li>
            <a href="#" class="item">Horario (laboral)</a>
          </li>
          <li>
            <a href="#" class="item">Parqueadero</a>
          </li>
          <li>
            <a href="#" class="item">Vehiculo</a>
          </li>
          <li>
            <a href="#" class="item">Tercero</a>
          </li>
          <li>
            <a href="#" class="item">Eventos</a>
          </li>
          <li>
            <a href="#" class="item">Noticias</a>
          </li>
          <li>
            <a href="#" class="item">Contactos</a>
          </li>
        </ul>
      </nav>
    </div>
    <section class="main">
      <div class="content-header">
        <div class="toggle-menu">
          <label for="toggle" class="toggle">Menu</label>
        </div>
        <div class="left">
          <label for="search" style="margin: 8px;">Buscar</label>
          <input type="text" id="search" placeholder="Search" class="input-search" />
        </div>
        <div class="actions">
          <button class="btn">Settings</button>
          <button class="btn">Login</button>
        </div>
      </div>
      <div class="content-main">
          <body_static />
        </div>
    </section>
  </div>
</template>

<script>
// import body_static from "./Body.vue";
// export default {
//   name: "app",
//   components: {
//     body_static
//   }
// };
</script>

<style scope>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.content{
    display: flex;
}

.main{
    width: 100%;
}

.content-header{
    display: flex;
    justify-content: space-between;
    background: #fff;
    align-items: center;
}

.container-menu {
  float: left;
  max-width: 240px;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  transition: 300ms;
  z-index: 9999;
}

.menu {
  display: flex;
  flex-direction: column;
  background: #111;
  height: 100%;
}

.item {
  display: block;
  color: #fff;
  font-size: 17px;
  padding: 10px 10px 5px 25px;
  text-decoration: none;
  position: relative;
  transition: all 300ms;
}

.item::before {
  content: "";
  position: absolute;
  width: 0px;
  height: 100%;
  background: white;
  transition: all 300ms;
}

ul li:hover {
  background: rgb(65, 60, 60);
}

.toggle-check:checked ~ .container-menu {
  max-width: 0px;
}

.toggle-check:checked ~ .container-menu .item {
  opacity: 0;
  transition-delay: 200ms;
}

.left{
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.input-search{
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.btn{
  display: inline-block;
  padding: 12px;
  border: none;
  border-radius: 3px;
  margin: 3px;
  background: #682bda;
  color: #fff;
  cursor: pointer;
  transition: opacity 300ms;
}

.btn:hover{
  opacity: 0.9;
}

.toggle {
  display: inline-block;
  margin: 3px;
  padding: 12px 16px;
  font-weight: 600;
  background: rgb(104, 43, 218);
  color: #fff;
  cursor: pointer;
  transition: opacity 300ms;
  border-radius: 3px;
}

.toggle:hover {
  opacity: 0.9;
}

</style>