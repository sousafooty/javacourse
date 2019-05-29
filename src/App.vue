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
  },
  methods: {
    addBookMark: function () {
      console.log('add bookmark')
    }
  }
}
</script>

<style>
h1 {
  color: #b48608;
  font-family: 'Droid serif', serif;
  font-size: 36px;
  font-weight: 400;
  font-style: italic;
  line-height: 44px;
  margin: 0 0 12px;
  text-align: center;
}
h2 {
  color: #7c795d;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 28px;
  font-weight: 400;
  line-height: 32px;
  margin: 0 0 24px;
}
h3 {
  font-family: "Great Vibes", cursive;
  font-weight: normal;
  margin-bottom: 0px;
  margin-top: 40px;
  text-align: center;
  text-shadow: 0 1px 1px #fff;
  padding-bottom: 10px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 13%;
  background-color: rgb(252, 252, 252);
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
