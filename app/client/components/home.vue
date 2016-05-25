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
        <h2 class="red">{{msg}}</h2>
    </div>

    <div class="container">
    </div>

    <div class="footer">
        <a class="btn btn-default" v-link="{ name: 'about', exact: true }"><i class="glyphicon glyphicon-edit icon-white"></i> about</a>
        <a class="btn btn-default" v-link="{ name: 'user', exact: true }"><i class="glyphicon glyphicon-list-alt icon-white"></i> user</a>
        <a class="btn btn-default" @click="doLogout()"><i class="glyphicon glyphicon-save icon-white"></i> logout</a>
    </div>
</template>

<script>
    import {logout} from '../services/auth'
    export default {
        data () {
            return {
                msg: 'Hello from vue!'
            }
        },
        components: {
        },
        methods: {
            doLogout() {
                logout(this);
            }
        }
    }
</script>
