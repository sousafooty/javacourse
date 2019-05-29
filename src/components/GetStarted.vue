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
import { db } from '@/firebase'

let userRef = db.ref('user')

export default {
  name: 'GetStarted',
  firebase: {
    user: userRef
  },
  methods: {
    addUser: function () {
      userRef.push('new user')
    }
  }
}
</script>
