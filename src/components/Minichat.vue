<template>
  <b-container fluid>
    <b-row align-h="center">
      <b-col sm="8" align-self="center">
        <b-card id="nav-scroller" ref="content" class="text-center" bg-variant="dark" text-variant="white" title="Comunity Chat">
          <b-card-text class="speech-bubble" v-for="(mesage, index) in allMesages" v-bind:key="index">
            {{ mesage }}
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>

    <b-row align-h="center">
      <b-col sm="3" align-self="start">
        <!-- Using props -->
        <b-input-group size="sm" class="mt-3" prepend="Nickname">
          <b-form-input v-model="nickname" placeholder="your nickname"></b-form-input>
        </b-input-group>
      </b-col>
      <b-col sm="4" align-self="center">
        <!-- Using components -->
        <b-input-group class="mt-3">
          <b-form-input v-model="text" placeholder="your message"></b-form-input>
          <b-input-group-append>
            <b-button variant="outline-success" v-on:click="sendMessage" v-bind:disabled="text.length < 1 || nickname.length < 1">Send</b-button>
        </b-input-group-append>
        </b-input-group>
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
      nickname: '',
      allMesages: []
    }
  },
  methods: {
    sendMessage: function () {
      let currentMessage = {
        Mensaje: this.text,
        Por: this.nickname
      }
      this.text = ''
      // this.nickname = ''
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

<style>

#nav-scroller {
position: relative;
height: 300px;
overflow-y: scroll;
}

.speech-bubble {
position: relative;
background: #048ab7;
border-radius: .4em;
}

.speech-bubble:after {
content: '';
position: absolute;
bottom: 0;
left: 50%;
width: 0;
height: 0;
border: 13px solid transparent;
border-top-color: #048ab7;
border-bottom: 0;
border-right: 0;
margin-left: -6.5px;
margin-bottom: -13px;
}
</style>
