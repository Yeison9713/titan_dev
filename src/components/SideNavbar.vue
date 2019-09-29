<template>
  <div class="content">
    <input type="checkbox" class="toggle-check" id="toggle" hidden />
    <div class="container-menu">
      <nav class="menu">
        <a href="#" class="item">Inicio</a>
        <a href="#" class="item">Tutoriales</a>
        <a href="#" class="item">Servicios</a>
        <a href="#" class="item">Contactos</a>
      </nav>
    </div>
    <section class="main">
      <div class="content-header">
        <div class="toggle-menu">
          <label for="toggle" class="toggle">Menu</label>
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

<style scope>
.content{
    display: flex;
}
.main{
    width: 100%;
    /* position: fixed; */
}
.content-header{
    display: flex;
    justify-content: space-between;
    background: #fff;
    align-items: center;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container-menu {
  float: left;
  max-width: 0px;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  transition: 300ms;
  z-index: 9999;
}

.menu {
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #111;
  height: 100%;
}

.item {
  display: block;
  color: #fff;
  font-size: 18px;
  text-decoration: none;
  font-weight: 600;
  margin-bottom: 20px;
  position: relative;
  transform: translate(-30px);
  opacity: 0;
  transition: all 300ms;
}

.item::before {
  content: "";
  position: absolute;
  left: -20px;
  width: 0px;
  height: 100%;
  background: white;
  transition: all 300ms;
}

.item:hover:before {
  width: 6px;
}

.toggle {
  display: inline-block;
  margin: 10px;
  padding: 12px 16px;
  font-weight: 600;
  background: rgb(104, 43, 218);
  color: #fff;
  cursor: pointer;
  transition: opacity 300ms;
}

.toggle:hover {
  opacity: 0.8;
}

.toggle-check:checked ~ .container-menu {
  max-width: 240px;
}

.toggle-check:checked ~ .container-menu .item {
  opacity: 1;
  transition-delay: 200ms;
  transform: translateX(0);
}
</style>