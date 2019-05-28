import Vue from 'vue'
import { rtdbPlugin } from 'vuefire'

Vue.use(rtdbPlugin)

// Get a RTDB instance
// eslint-disable-next-line no-undef
export const db = firebase
  .initializeApp({ databaseURL: 'MY PROJECT URL' })
  .database()
