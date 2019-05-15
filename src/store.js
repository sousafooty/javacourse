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
    javaCrashCourse: [],
    /**
     * La variable que contendrá el json de librerias externas
     * más utilizadas
     */
    javaMostWantedLibraries: [],
    /**
     * La variable que contendrá el json de librerias estandard
     * de Java más utilizadas.
     */
    javaMostUsedStandardLibraries: []
  },
  mutations: {
    setCrashCourse (state, payload) {
      state.javaCrashCourse = payload
    },
    setExternalLibraries (state, payload) {
      state.javaMostWantedLibraries = payload
    },
    setStandardLibraries (state, payload) {
      state.javaMostUsedStandardLibraries = payload
    }
  },
  actions: {
    getCourse ({ state, commit }) {
      fetch(this.state.urlApiJava, this.state.init)
        .then(course => course.json())
        .then(courseJson => {
          commit('setCrashCourse', courseJson[0].tutorials)
          commit('setExternalLibraries', courseJson[0].externallibraries.mostFamous)
          commit('setStandardLibraries', courseJson[0].standardlibraries.mostUsed)
        })
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
