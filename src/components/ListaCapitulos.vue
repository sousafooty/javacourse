<template>
  <div>
    <header>
      <h1>Course</h1>
      <h3>Get started!!</h3>
    </header>
    <section>
      <ul>
        <li v-for="chapter in getJavaCrashCourse" v-bind:key="chapter.name">
          <router-link v-bind:to="'/capitulo/' + chapter.name">{{ chapter.name }}</router-link>
        </li>
      </ul>
    </section>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'ListaCapitulos',
  computed: {
    getJavaCrashCourse () {
      return this.$store.getters.getJavaCrashCourse
    }
  },
  created () {
    this.$store.dispatch('getCourse')
  }
}
</script>

<style>
</style>
