<template>
  <div class="help">
    <b-container>
      <b-row align-h="center">
        <header>
          <h1>Are you lost?</h1>
          <h2>You think this isn't for you?</h2>
        </header>
        <Minichat></Minichat>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Minichat from '@/components/Minichat.vue'

export default {
  components: {
    Minichat
  }
}
</script>
