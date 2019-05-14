<template>
  <div>
    <h1>Welcome to the chapter!!!</h1>
    <h3>{{$route.params.chapter}}</h3>
  </div>
</template>

<script>
export default {
  props: ['chapter']
}
</script>
