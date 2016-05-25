<template>
    <div style="position:absolute;top:20%;bottom:20%;left:20%;right:20%;margin:auto;">
        <div class="alert alert-danger" v-if="message">
            <p>{{ message }}</p>
        </div>
        <div class="form-group">
            <input type="text" class="form-control" v-model="form.username">
        </div>
        <div class="form-group">
            <input type="password" class="form-control" v-model="form.password">
        </div>
        <button class="btn btn-primary" @click="doSubmit()">Login</button>
    </div>
</template>

<script>
    import {login} from '../services/auth'
    export default {
        data() {
            return {
                form: {
                    username:"admin",
                    password:"1"
                },
                message:""
            }
        },
        methods: {
            doSubmit() {
                if(!!this.form && !!this.form.username && !!this.form.password) {
                    var form = {
                        username:this.form.username,
                        password:this.form.password
                    };
                    login(this,form,'/home');
                } else {
                    alert('Username or Password is not correct');
                }
            }
        }
    }
</script>
