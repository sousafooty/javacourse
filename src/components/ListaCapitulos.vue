<template>
  <div>
    <header>
      <h1>Course</h1>
      <h2>Get started!!</h2>
    </header>
    <b-container>
      <b-list-group>
        <b-list-group-item v-for="chapter in getJavaCrashCourse" v-bind:key="chapter.name" v-bind:to="'/capitulo/' + chapter.name">
          {{ chapter.name }}
        </b-list-group-item>
      </b-list-group>
    </b-container>
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
  }
}
</script>

<style scoped>

</style>
