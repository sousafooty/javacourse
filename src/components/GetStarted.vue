<template>
  <div>
    <b-container>
      <h1>Java Open Crash Course</h1>
      <h2>Learn how to code in Java</h2>
    </b-container>
    <b-container>
      <!--Boton de loguin-->
      <b-button pill variant="outline-secondary">Google Account
        <b-badge variant="dark">Get in</b-badge>
      </b-button>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'GetStarted',
  methods: {
    addBookMark: function () {
      console.log('add bookmark')
    }
  }
}
</script>
