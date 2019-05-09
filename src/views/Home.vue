<template>
  <div class="home">
    <img class="javalogo" alt="Java logo" src="../assets/logo.png">
    <GetStarted />
  </div>
</template>

<script>
// @ is an alias to /src
import GetStarted from '@/components/GetStarted.vue'

export default {
  name: 'getstarted',
  components: {
    GetStarted
  }
}
</script>

<style>

.javalogo {
  height: 200px;
  width: 200px;
}
</style>
