<template>
  <div>
    <header>
      <h1>Course</h1>
      <h3>Get started!!</h3>
    </header>
    <section>
      <ul>
        <li v-for="chapter in javaCrashCourse" v-bind:key="chapter.name">{{ chapter.name }}</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ListaCapitulos',
  data () {
    return {
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
    }
  },
  methods: {
    /**
     * Metodo que ejectura el fetch
     */
    getJavaInfo () {
      fetch(this.urlApiJava, this.init)
        .then(javaResult => {
          if (!javaResult.ok) {
            throw new Error('HTTP error, status: ' + javaResult.status)
          } else {
            return javaResult.json()
          }
        })
        /**
         * Rescatamos la informacion del array con el Json
         */
        .then(JavaresultJson => {
          this.javaCrashCourse = JavaresultJson[0].tutorials
          return true
        })
        .catch(error => alert(error))
    }
  },
  created () {
    this.getJavaInfo()
  }
}
</script>

<style>
</style>
