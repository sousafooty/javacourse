<template>
  <div>
    <h1>Welcome to the chapter!!!</h1>
    <Capitulo></Capitulo>
  </div>
</template>

<script>

import Capitulo from '@/components/Capitulo.vue'

export default {
  props: ['chapter'],
  components: {
    Capitulo
  }
}
</script>
