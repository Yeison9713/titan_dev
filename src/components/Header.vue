<template>
  <div class="content">
    <input type="checkbox" class="toggle-check" id="toggle" hidden />
    <div class="main-menu">
      <nav class="navbar">
        <ul>
          <li>
            <a href="#" class="item">Inicio</a>
          </li>
          <li>
            <a href="#" class="item">Productos</a>
          </li>
          <li>
            <a href="#" class="item">Servicios</a>
          </li>
          <li>
            <a href="#" class="item">Usuarios</a>
          </li>
          <li>
            <a href="#" class="item">Contactenos</a>
          </li>
        </ul>
      </nav>
    </div>
    <section class="form-body">
      <div class="content-header">
        <div class="">
          <label class="toggle">Menu</label>
        </div>
        <div class="left">
          <input type="text" id="search" placeholder="Search" class="input-search" />
        </div>
        <div class="actions">
          <button>Settings</button>
          <button>Login</button>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.content {
  display: flex;
}

.main-menu {
  float: left;
  max-width: 0px;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  transition: 300ms;
  z-index: 9999;
  background: #4112d2d1;
}

.navbar {
  display: flex;
  flex-direction: column;
  height: 100%;
}

nav li a {
  color: white;
  display: block;
  text-decoration: none;
  padding: 0.5em 1em;
}

.item:hover{
  background: #8c77ccfd;
}

.form-body {
  width: 100%;
}

.content-header{
  display: flex;
  width: 100%;
  justify-content: space-between;
  background: #ffffff;
  align-items: center;
}

.toggle{
  display: inline-block;
  padding: 12px 16px;
  background: #1a93da;
  margin: 10px;
  transition: opacity 300ms;
}

.toggle:hover {
  opacity: 0.8;
}

.toggle-check:checked ~ .main-menu {
  max-width: 240px;
}

.toggle-check:checked ~ .main-menu .item{
  opacity: 1;
  transition-delay: 200ms;
  transform: translateX(0);
}


.col-md-3 {
  width: 25%;
  margin: 2px;
  padding: 1em;
  justify-content: space-between;
  flex: 1;
}

.col-md-4 {
  width: 33.3%;
  margin: 2px;
  padding: 1em;
}

.col-md-12 {
  display: flex;
  justify-content: space-between;
  flex: 1;
  margin: 2px;
  padding: 0.1em 1em;
}

.card {
  background: #ffffff;
}
</style>