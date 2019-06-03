<template>
  <div>
    <b-container>
      <h1>Learn a new Skill in Java!</h1>
      <h2>{{ subchapter }}</h2>
      <section>
        <p class="paragraph" v-for="(paragraph, index) in getFindTheSkill" v-bind:key="index" v-show="index < 10 || readMore">
          {{ paragraph }}
        </p>
      </section>
      <b-button variant="link" v-on:click="readMoreButton" v-if="!readMore">Read More</b-button>
      <b-button variant="link" v-on:click="readMoreButton" v-if="readMore">Read Less</b-button>
    </b-container>
  </div>
</template>

<script>
export default {
  props: ['subchapter'],
  data () {
    return {
      readMore: false
    }
  },
  methods: {
    readMoreButton: function () {
      this.readMore = !this.readMore
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

<style>
p.paragraph {
  font-family: times, Times New Roman, times-roman, georgia, serif;
 font-size: 18px;
 line-height: 20px;
 text-transform: uppercase, full-width;
 color: black;
}
</style>
