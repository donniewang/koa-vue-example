/**
 * Created by donnie on 16/2/26.
 */

<style scoped>
    .header {
    }
    .container {
    }
    .footer {
    }
    .red {
        color: red;
    }
</style>

<template>
    <div class="header">
        <h2 class="red">About</h2>
    </div>

    <div class="container">
    </div>

    <div class="footer">
        <a class="btn btn-default" v-link="{ name: 'home', exact: true }"><i class="glyphicon glyphicon-home icon-white"></i> back</a>
    </div>
</template>

<script>
    export default {
    }
</script>
