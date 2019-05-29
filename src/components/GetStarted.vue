<template>
  <div>
    <b-container>
      <h1>Java Open Crash Course</h1>
      <h2>Learn how to code in Java</h2>
    </b-container>
    <b-container>
      <!--Boton de loguin-->
      <b-button pill variant="outline-secondary" v-on:click="addUser">
        Google Account
        <b-badge variant="dark">Get in</b-badge>
      </b-button>
    </b-container>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'GetStarted',
  methods: {
    addUser: function () {
      console.log('logeandose...')
      let provider = new firebase.auth.GoogleAuthProvider()

      firebase.auth().signInWithPopup(provider).then(() => console.log(firebase.auth()))
    }
  }
}
</script>
