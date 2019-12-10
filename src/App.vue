<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background: #c5c4c46e !important;
  font-family: "font-family: Verdana, Geneva, sans-serif";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.content {
  display: flex;
}

.main {
  width: 100%;
  height: 100%;
}

.content-header {
  display: flex;
  justify-content: space-between;
  background: #fff;
  align-items: center;
}

.container-menu {
  float: left;
  max-width: 100%;
  width: 240px;
  height: 100vh;
  overflow: hidden;
  transition: 300ms;
  z-index: 9999;
}

.menu {
  display: flex;
  flex-direction: column;
  background: #aba3f1;
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

.toggle-check:checked ~ .container-menu {
  max-width: 0px;
}

.toggle-check:checked ~ .container-menu .item {
  opacity: 0;
  transition-delay: 200ms;
}

.left {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.input-search {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.btn {
  display: inline-block;
  padding: 12px;
  border: none;
  border-radius: 3px;
  margin: 3px;
  background: rgb(31, 50, 144);
  color: #fff;
  cursor: pointer;
  transition: opacity 300ms;
}

.btn:hover {
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
