<template>
  <b-container fluid>
    <b-row align-h="center">
      <b-col sm="8" align-self="center">
        <b-card class="text-center" title="Chat" sub-title="comunity mini chat">
          <div class="bg-secondary text-light">
            This is some content within the default
            <samp>&lt;b-card-body&gt;</samp> block of the
            <samp>&lt;b-card&gt;</samp> component. Notice the padding between the card's border and this
            gray
            <samp>&lt;div&gt;</samp>.
          </div>
        </b-card>
      </b-col>
    </b-row>

    <b-row align-h="center">
      <b-col sm="5" align-self="center">
        <b-form-textarea
          id="textarea-small"
          size="sm"
          v-model="text"
          :state="text.length >= 10"
          placeholder="Your question (at least 10 characters)"
        ></b-form-textarea>
      </b-col>
      <b-col sm="1" align-self="center">
        <b-button variant="dark" v-on:click="sendMessage">Send</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'minichat',
  data () {
    return {
      text: ''
    }
  },
  methods: {
    sendMessage: function () {
      let userName = firebase.auth().currentUser.displayName
      let userMessage = this.text
      let currentMessage = {
        name: userName,
        message: userMessage
      }
      console.log(currentMessage)
      firebase.database().ref('uslessMessages').push(currentMessage)
    }
  },
  created () {
    console.log('rescatando mensajes')
    firebase.database().ref('uslessMessages').on('value', (data) => {
      for (let key in data.val()) {
        let messages = data.val()[key]
        messages = JSON.stringify(messages)
        console.log(messages)
      }
    })
  }
}
</script>

<style scoped>
.col-sm-5 {
  margin: 1.5%;
}
</style>
