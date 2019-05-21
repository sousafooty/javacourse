<template>
  <div>
    <h1>Learn a new Skill in Java!</h1>
    <h2>{{ subchapter }}</h2>
    <section>
      <p v-for="(paragraph, index) in getFindTheSkill" v-bind:key="index">
        {{ paragraph }}
      </p>
    </section>
  </div>
</template>

<script>
export default {
  props: ['subchapter'],
  data () {
    return {
      skill: [],
      javaCourseContent: Array
    }
  },
  computed: {
    getJavaCrashCourse () {
      return this.$store.getters.getJavaCrashCourse
    },
    getFindTheSkill () {
      let skillFounded = false
      let skill = []

      for (let i = 0; i < this.getJavaCrashCourse.length && !skillFounded; i++) {
        const course = this.getJavaCrashCourse[i]

        for (let j = 0; j < course.content.length && !skillFounded; j++) {
          const subCap = course.content[j]

          if (subCap.name === this.subchapter) {
            skill = subCap.book
            skillFounded = true
          }
        }
      }
      return skill
    }
  }
}
</script>
