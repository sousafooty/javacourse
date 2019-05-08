<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
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
