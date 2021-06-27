<template>
  <f7-app v-bind="f7params">
    <f7-navbar>
      <f7-link icon-f7="house" href="/"> Home</f7-link>
      <f7-link icon-f7="doc" href="/about/">About</f7-link>
      <f7-link icon-f7="calendar_today" href="/schedule/">Schedule</f7-link>
    </f7-navbar>
    <f7-view main url="/" />
  </f7-app>
</template>

<script>
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Schedule from '@/views/Schedule.vue'

export default {
  name: 'App',
  data() {
    return {
      f7params: {
        name: 'My Calendar',
        id: 'com.myapp.test',
        routes: [
          {
            path: '/',
            component: Home
          },
          {
            path: '/about/',
            component: About
          },
          {
            path: '/schedule/',
            component: Schedule
          }
        ]
      }
    }
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
</style>
