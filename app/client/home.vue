/**
 * Created by donnie on 16/2/26.
 */

<template>
    <div>
        <h1>{{msg}}</h1>
        <a class="btn btn-default" v-link="{ name: 'a', exact: true }"><i class="glyphicon glyphicon-edit icon-white"></i> a</a>
        <a class="btn btn-default" v-link="{ name: 'b', exact: true }"><i class="glyphicon glyphicon-list-alt icon-white"></i> b</a>
        <a class="btn btn-default" v-link="{ name: 'c', exact: true }"><i class="glyphicon glyphicon-save icon-white"></i> c</a>
    </div>
</template>

<script>
export default {
    data () {
        return {
            msg: 'Hello from vue!'
        }
    },
    components: {
    }
}
</script>
