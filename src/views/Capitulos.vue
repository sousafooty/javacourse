<template>
  <div>
    <h1>Welcome to the chapter!</h1>
  </div>
</template>

<script>

export default {
  props: ['chapter'],
  methods: {
    test: function () {
      console.log(this.chapter)
    }
  },
  created () {
    this.test()
  }
}
</script>
