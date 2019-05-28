<template>
  <div>
    <b-container>
      <hgroup>
        <h1>Welcome to chapters!</h1>
        <h2>{{ chapter }}</h2>
        <h3>{{ bufferCourse.capitulo }}</h3>
      </hgroup>
    </b-container>
    <b-container v-for="(chapter, index) in bufferCourse.subCapitulo" v-bind:key="index">
      <b-link v-bind:to="'/skill/' + chapter" router-tag="a" v-show="!isSkillDoned(chapter)">
        {{ chapter }}
      </b-link>
      <input type="checkbox" class="mx-auto bg-info" v-bind:id="index" v-bind:value="chapter" v-model="setChapter">
      <label v-bind:for="index" v-show="isSkillDoned(chapter)">Readed!</label>
   </b-container>

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
