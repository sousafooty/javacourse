<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
      <b-navbar-brand to="/">
      <img id="javaBrand" class="d-inline-block align-top" src="@/assets/javaBrand.png" alt="logo Java">
      Java Course
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-container>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/Documentation">Documentation</b-nav-item>
            <b-nav-item to="/Course">Course</b-nav-item>
            <b-nav-item to="/help">Help</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>

    <router-view/>
  </div>
</template>

<script>
export default {
  created () {
    this.$store.dispatch('getCourse')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 13%;
}
#nav {
  padding: 30px;
  margin-top: 20%;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

img#javaBrand {
  width: 30px;
}
</style>
