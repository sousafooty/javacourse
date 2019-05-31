<template>
  <b-container fluid>
    <b-row align-h="center">
      <b-col sm="8" align-self="center">
        <b-card class="text-center" title="Chat" sub-title="comunity mini chat">
          <div class="bg-secondary text-light">
            <p v-for="(mesage, index) in allMesages" v-bind:key=index>
              {{ mesage }}
            </p>
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
      text: '',
      currentuser: '',
      allMesages: []
    }
  },
  methods: {
    sendMessage: function () {
      let userMessage = this.text
      let currentMessage = {
        message: userMessage,
        name: 'jose sousa'
      }
      firebase.database().ref('uslessMessages').push(currentMessage)
    },
    rescueMessages: function () {
      firebase.database().ref('uslessMessages').on('value', data => {
        this.allMesages = []
        for (let key in data.val()) {
          let messages = data.val()[key]
          messages = JSON.stringify(messages)
          messages = messages.replace(/[{}]/g, '')
          messages = messages.replace(',', ' ')
          messages = messages.replace(/"/g, '')
          this.allMesages.push(messages)
          console.log(messages)
        }
      })
    }
  },
  created () {
    this.rescueMessages()
  }
}
</script>

<style scoped>
.col-sm-5 {
  margin: 1.5%;
}
</style>
