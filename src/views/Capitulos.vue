<template>
  <div>
    <hgroup>
      <h1>Welcome to the chapter!</h1>
      <h2>{{ chapter }}</h2>
      <h3>{{ bufferCourse.capitulo }}</h3>
    </hgroup>
    <section>
      <ul>
        <li v-for="(chapter, index) in bufferCourse.subCapitulo" v-bind:key="index">
          <router-link v-bind:to="'/skill/' + chapter" v-show="!isSkillDoned(chapter)">{{ chapter }}</router-link>
          <input type="checkbox" v-bind:value="chapter" v-model="setChapter">
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
      chapterSkilled: []
    }
  },
  methods: {
    isSkillDoned (chapter) {
      let skillDominated = false
      let skill = this.chapterSkilled

      if (skill.indexOf(chapter) !== -1) {
        skillDominated = true
      }
      return skillDominated
    }
  },
  computed: {
    getJavaCourseContent () {
      return this.$store.getters.getJavaCrashCourse
    },
    bufferCourse () {
      let bufferCourse = {
        capitulo: '',
        subCapitulo: []
      }
      let capFinded = false
      const lengthJavaCourse = this.getJavaCourseContent.length

      for (let i = 0; i < lengthJavaCourse && !capFinded; i++) {
        const course = this.getJavaCourseContent[i]

        if (course.name === this.chapter) {
          bufferCourse.capitulo = course.description
          course.content.forEach(subCap => {
            bufferCourse.subCapitulo.push(subCap.name)
          })
          capFinded = true
        }
      }
      return bufferCourse
    },
    setChapter: {
      set: function setSkill (chapter) {
        this.chapterSkilled = chapter
      },
      get: function getSkill () {
        return this.chapterSkilled
      }
    }
  }
}
</script>

<style>

</style>
