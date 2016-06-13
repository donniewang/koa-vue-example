<template>
    <div style="position:absolute;top:20%;bottom:20%;left:20%;right:20%;margin:auto;">
        <div class="form-group">
            <input type="text" class="form-control" v-model="username">
        </div>
        <div class="form-group">
            <input type="password" class="form-control" v-model="password">
        </div>
        <button class="btn btn-primary" @click="doLogin()">Login</button>
    </div>
</template>

<script>
    import service from '../services/auth'
    export default {
        data() {
            return {
                username:"admin",
                password:"1"
            }
        },
        methods: {
            doLogin() {
                if(!!this.username && !!this.password) {
                    var self = this;

                    var params = {
                        username:this.username,
                        password:this.password
                    };

                    service.login(this,params).then(function(res){
                        if(res.data.success==1 && !!res.data.token) {
                            //can save to cookie
                            self.$router.app.$token = res.data.token;
                            self.$router.go('/home');
                        } else {
                            alert(res.data.message);
                        }
                    },function(e){
                        alert(e.message);
                    });
                } else {
                    alert('Username or Password is not correct');
                }
            }
        }
    }
</script>
