<template>
  <div>
    <h1>Learn a new Skill in Java!</h1>
    <h2>{{ subchapter }}</h2>
    <section>
      <p v-for="(paragraph, index) in skill" v-bind:key="index">
        {{ paragraph }}
      </p>
      <!-- <p>{{ skill }}</p> -->
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
  methods: {
    findTheSkill () {
      let skillFounded = false

      for (let i = 0; i < this.javaCourseContent.length && !skillFounded; i++) {
        const course = this.javaCourseContent[i]

        for (let j = 0; j < course.content.length && !skillFounded; j++) {
          const subCap = course.content[j]

          if (subCap.name === this.subchapter) {
            this.skill = subCap.book
            skillFounded = true
          }
        }
      }
      // this.skill = this.skill.toString()
    },
    getJavaCrashCourse () {
      this.javaCourseContent = this.$store.getters.getJavaCrashCourse
    }
  },
  created () {
    this.getJavaCrashCourse()
    this.findTheSkill()
  }
}
</script>
