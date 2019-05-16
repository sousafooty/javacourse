<template>
  <div>
    <h1>Learn a new Skill in Java!</h1>
    <section>
      <p v-for="(paragraph, index) in skill" v-bind:key="index">
        <span>{{ paragraph }}</span>
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
  methods: {
    findTheSkill () {
      let skillFounded = false

      for (let i = 0; i < this.javaCourseContent.length && skillFounded === false; i++) {
        const course = this.javaCourseContent[i]

        for (let j = 0; j < course.content.length && skillFounded === false; j++) {
          const subCap = course.content[j]

          if (subCap.name === this.subchapter) {
            this.skill = subCap.book
            skillFounded = true
          }
        }
      }
      console.log(this.skill)
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
