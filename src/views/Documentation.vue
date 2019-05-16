<template>
  <div>
    <h1>Documentation</h1>
    <section>
      <article>
        <h2>The Most Widely Used Java Libraries</h2>
        <p>
          A typical Java project relies on third-party libraries.
          This page summarizes the most popular and widely used Java libraries for a variety of different applications.
          A simple example is also provided for some of them, if it can be found on
          <a href="https://www.programcreek.com/">ProgramCreek.</a>
        </p>

        <p>
          Java SDK is surely the #1 widely used library. So the focus of this list is the
          <strong>most popular</strong> libraries.
          The list may not not perfect.
        </p>

        <h3>Third Party Libraries</h3>
        <ol>
          <li v-for="library in getStandardLibraries" v-bind:key="library.id">
            <code>{{ library.library }}</code>
          </li>
        </ol>

        <h3>Standard Libraries</h3>
        <ol>
          <li v-for="externalLibrary in getExternalLibraries" v-bind:key="externalLibrary.id">
            <code>{{ externalLibrary.library }}</code>
          </li>
        </ol>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    getStandardLibraries () {
      return this.$store.getters.getStandardLibraries
    },
    getExternalLibraries () {
      return this.$store.getters.getExternalLibraries
    }
  }
}
</script>
