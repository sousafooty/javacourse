import Firebase from 'firebase'

let firebaseConfig = {
  apiKey: 'AIzaSyBzrVc2n9wc-_Zi6U8y2niokB4QUrekiM0',
  authDomain: 'javacourse-1.firebaseapp.com',
  databaseURL: 'https://javacourse-1.firebaseio.com',
  projectId: 'javacourse-1',
  storageBucket: 'javacourse-1.appspot.com',
  messagingSenderId: '632294768061',
  appId: '1:632294768061:web:f6af01201e089f32'
}
// Initialize Firebase
let app = Firebase.initializeApp(firebaseConfig)
export let db = app.database()
