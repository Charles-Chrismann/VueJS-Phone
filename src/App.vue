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
    <router-view/>
    <nav>
      
      
      <router-link to="/journal"><span class="icon"><font-awesome-icon icon="fa-solid fa-clock-four" /></span><span class="text">Journal</span></router-link>
      <router-link to="/"><span class="icon dots"></span><span class="text">Clavier</span></router-link>
      <router-link to="/contact"><span class="icon"><font-awesome-icon icon="fa-solid fa-circle-user" /></span><span class="text">Contact</span></router-link>
    </nav>
  </IphoneComp>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  user-select: none;
  font-family: 'Poppins', sans-serif;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  border-top: solid 1px #e9e9e9;
  /* height: 5%; */
  display: flex;
  width: 100%;
  justify-content: space-around;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  text-decoration: none;

  .icon {
    font-size: 1.25rem;

    &.dots {
      height: 1.875rem;
      aspect-ratio: 1 / 1;
      display: grid;
      place-items: center;

      &::before {
        content: '';
        height: 0.375rem;
        aspect-ratio: 1 / 1;
        border-radius: 50%;
        background-color: #2c3e50;
        box-shadow: -10px -10px 0px, 0px -10px 0px, 10px -10px 0px,
        -10px 0px 0px, 10px 0px 0px,
        -10px 10px 0px, 0px 10px 0px, 10px 10px 0px;
      }
    }
  }

  .text {
    font-size: 0.75rem;
  }
}

nav a.router-link-exact-active {
  color: #42b983;

  .icon.dots::before {
    background: #42b983;
  }
}
</style>
