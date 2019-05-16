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
      javaCourse: [],
      javaCourseContent: Array
    }
  },
  methods: {
    recorrerCrashCourse () {
      let bufferCourse = {
        capitulo: String,
        subCapitulo: []
      }
      let capFinded = false
      let lengthJavaCourse = this.javaCourseContent.length

      for (let i = 0; i < lengthJavaCourse && !capFinded; i++) {
        const course = this.javaCourseContent[i]

        if (course.name === this.chapter) {
          bufferCourse.capitulo = course.description
          course.content.forEach(subCap => {
            bufferCourse.subCapitulo.push(subCap.name)
          })
          capFinded = true
        }
      }
      this.javaCourse = bufferCourse
    },
    getJavaCrashCourse () {
      this.javaCourseContent = this.$store.getters.getJavaCrashCourse
    }
  },
  created () {
    this.getJavaCrashCourse()
    this.recorrerCrashCourse()
  }
}
</script>
