<template>
  <div>
    <h1>Welcome to the chapter!</h1>
    <h3>{{ chapter }}</h3>
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

      for (let i = 0; i < lengthJavaCourse && capFinded === false; i++) {
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
