<template>
    <div class="counter">
        <h1>I am a C Component. Edit me in dev mode.</h1>
        <p>Current count: {{count}}</p>
    </div>

    <div><a class="btn btn-default" v-link="{ name: 'home', exact: true }"><i class="glyphicon glyphicon-home icon-white"></i> back</a></div>

</template>

<script>
export default {
  data () {
    return { count: 0 }
  },
  ready () {
    this.handle = setInterval(() => {
      this.count++
    }, 1000)
  },
  destroyed () {
    clearInterval(this.handle)
  }
}
</script>
