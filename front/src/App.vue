<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Evidentiranje prekršaja</router-link> |
      <router-link to="/modul2">Modul 2</router-link> |
      <router-link to="/about">Izmena pravila</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
