import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    /**
       * La url para hacer la petición del Json
       */
    urlApiJava: 'http://localhost:3000/josecoding',
    /**
       * La cabecera del fetch
       */
    init: {
      method: 'GET'
    },
    /**
     * La variable que contendrá el json de los tutoriales
     */
    javaCrashCourse: []
  },
  mutations: {
    setCrashCourse (state, payload) {
      state.javaCrashCourse = payload
    }
  },
  actions: {
    getCourse ({ state, commit }) {
      fetch(this.state.urlApiJava, this.state.init)
        .then(course => course.json())
        .then(courseJson => commit('setCrashCourse', courseJson[0].tutorials))
        .catch(error => alert(error))
    }
  },
  getters: {
    getUrlApiJava (state) {
      return state.javaCrashCourse
    },
    getInit (state) {
      return state.init
    },
    getJavaCrashCourse (state) {
      return state.javaCrashCourse
    }
  }
})
