<style scoped>
.container {
  border: 1px solid #f00;
}
h2 {
  color: #393;
}
</style>

<template>
    <div class="container">
        <h2>Hello from Component B!</h2>
    </div>

    <div><a class="btn btn-default" v-link="{ name: 'home', exact: true }"><i class="glyphicon glyphicon-home icon-white"></i> back</a></div>

</template>
