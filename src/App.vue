<script>
import IphoneComp from './components/IphoneComp.vue';
export default {
  components: {
    IphoneComp
  }
}
</script>

<template>
  <IphoneComp>
    <nav>
      <router-link to="/journal">Journal</router-link> |
      <router-link to="/">Clavier</router-link> |
      <router-link to="/contact">Contact</router-link>
    </nav>
    <router-view/>
  </IphoneComp>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
