<template>
  <f7-app>
    <f7-navbar>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/schedule">Schedule</router-link>
    </f7-navbar>
    <router-view/>
  </f7-app>
</template>

<script>
import { 
  f7App,
  f7Navbar,
  // f7NavTitle,
  // f7Page,
} from 'framework7-vue';

export default {
  name: 'App',
  components: {
    f7App,
    f7Navbar,
    // f7NavTitle,
    // f7Page,
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
