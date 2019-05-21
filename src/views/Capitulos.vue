<template>
  <div>
    <hgroup>
      <h1>Welcome to the chapter!</h1>
      <h2>{{ chapter }}</h2>
      <h3>{{ javaCourse.capitulo }}</h3>
    </hgroup>
    <section>
      <ul>
        <li v-for="(chapter, index) in javaCourse.subCapitulo" v-bind:key="index">
          <router-link v-bind:to="'/skill/' + chapter">{{ chapter }}</router-link>
          <input type="checkbox" id="skilled">
        </li>
      </ul>
    </section>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  props: ['chapter'],
  data () {
    return {
      javaCourse: []
    }
  },
  methods: {
    recorrerCrashCourse () {
      let bufferCourse = {
        capitulo: '',
        subCapitulo: []
      }
      let capFinded = false
      let lengthJavaCourse = this.getJavaCourseContent.length
      console.log('holi antes del for' + 'tamaño del array de java course: ' + lengthJavaCourse)

      for (let i = 0; i < lengthJavaCourse && !capFinded; i++) {
        const course = this.getJavaCourseContent[i]
        console.log('holi en el for')

        if (course.name === this.chapter) {
          bufferCourse.capitulo = course.description
          course.content.forEach(subCap => {
            bufferCourse.subCapitulo.push(subCap.name)
          })
          capFinded = true
        }
      }
      this.javaCourse = bufferCourse
      console.log('holi antes del for' + 'tamaño del array de java course: ' + lengthJavaCourse)
    }
  },
  computed: {
    getJavaCourseContent () {
      return this.$store.getters.getJavaCrashCourse
    }
  },
  created () {
    if (this.javaCourse.length === 0) {
      this.recorrerCrashCourse()
    }
  }
}
</script>
