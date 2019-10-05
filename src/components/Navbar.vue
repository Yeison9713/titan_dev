<template>
  <div>
    <input type="checkbox" class="toggle-check" id="toggle" hidden />
    <div class="container-menu">
      <nav class="menu">
        <ul>
          <li style="background: #D01;">
            <a href="#" class="item" style="padding: 14px;">ADMIN</a>
          </li>
          <li>
            <router-link to="/" class="item">Inicio</router-link>
          </li>
          <li>
            <router-link to="/empleados" class="item">Empleados</router-link>
          </li>
          <li>
            <router-link to="/tipo-empleado" class="item">Tipo empleado</router-link>
          </li>
          <li>
            <router-link to="/calendario" class="item">Eventos</router-link>
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
  </div>
</template>