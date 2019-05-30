<template>
  <b-container fluid>
    <b-row align-h="center">
      <b-col sm="5">
        <b-form-textarea
          id="textarea-small"
          size="sm"
          v-model="text"
          :state="text.length >= 10"
          placeholder="Your question (at least 10 characters)?"
        ></b-form-textarea>
      </b-col>
      <b-col sm="1">
        <b-button variant="dark">Send</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'minichat',
  data () {
    return {
      text: ''
    }
  }
}
</script>
