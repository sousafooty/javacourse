<template>
  <div>
    <b-container>
      <h1>Java Open Crash Course</h1>
      <h2>Learn how to code in Java</h2>
    </b-container>
    <b-container>
      <!--Boton de loguin-->
      <b-button pill variant="outline-secondary" v-on:click="addBookMark">
        Google Account
        <b-badge variant="dark">Get in</b-badge>
      </b-button>
    </b-container>
  </div>
</template>

<script>
import { db } from '@/firebase'

export default {
  name: 'GetStarted',
  data () {
    return {
      users: {}
    }
  },
  methods: {
    addBookMark: function () {
      console.log('add bookmark')
    }
  },

  firebase: {
    users: {
      source: db.ref('users'),
      // handle errors
      cancelCallback (err) {
        console.error(err)
      }
    }
  }
}
</script>
