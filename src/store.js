import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    /**
       * La url para hacer la petición del Json
       */
    urlApiJava: 'https://api.myjson.com/bins/llxe8',
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
    async getCourse ({ state, commit }) {
      await fetch(state.urlApiJava, state.init)
        .then(course => course.json())
        .then(courseJson => {
          commit('setCrashCourse', courseJson.josecoding[0].tutorials)
          commit('setExternalLibraries', courseJson.josecoding[0].externallibraries.mostFamous)
          commit('setStandardLibraries', courseJson.josecoding[0].standardlibraries.mostUsed)
        })
        .catch(error => alert(error))
    }
  },
  getters: {
    getJavaCrashCourse (state) {
      return state.javaCrashCourse
    },
    getStandardLibraries (state) {
      return state.javaMostUsedStandardLibraries
    },
    getExternalLibraries (state) {
      return state.javaMostWantedLibraries
    }
  }
})
