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
        <h2 class="red">User</h2>
    </div>

    <div class="container">

        <div v-for="(index, user) in users">
            {{ index }} | {{ user.username }}  |  <i class="glyphicon glyphicon-remove icon-white" @click="deleteUser(user.id)"></i> &nbsp;&nbsp; <i class="glyphicon glyphicon-pencil icon-white" @click="editUser(user.id)"></i>
        </div>

    </div>

    <div class="footer">
        <a class="btn btn-default" @click="getMoreUsers()"><i class="glyphicon glyphicon-download icon-white"></i> load more</a>
        <a class="btn btn-default" @click="addUser()"><i class="glyphicon glyphicon-plus icon-white"></i> add</a>
        <a class="btn btn-default" v-link="{ name: 'home', exact: true }"><i class="glyphicon glyphicon-home icon-white"></i> back</a>
    </div>

    <modal :show.sync="showModal">
        <h3 slot="header">new user</h3>
        <div slot="body">
            <div class="form-group">
                <input type="text" class="form-control" v-model="user.username" placeholder="username">
            </div>
            <div class="form-group">
                <input type="password" class="form-control" v-model="user.password" placeholder="password">
            </div>
        </div>
        <div slot="footer">
            <button class="modal-default-button" @click="saveUser()">OK</button>
            <button class="modal-default-button" @click="doCancel()">Cancel</button>
        </div>
    </modal>

</template>

<script>
    import {list,load,remove,save} from '../services/user'

    import modal from './modal.vue'

    export default {
        components: {
            modal
        },
        ready: function() {
            this.page = 1;
            this.size = 10;
            this.getUsers();
        },
        data() {
            return {
                page: 1,
                size: 10,
                users: [],
                user: {},
                showModal: false
            }
        },
        methods: {

            addUser() {
                this.user = {
                    username:"",
                    password:""
                }
                this.showModal = true;
            },

            doCancel() {
                this.showModal = false;
            },

            getUsers() {
                var page = this.page;
                var size = this.size;

                var self = this;

                var params = {page,size};

                list(this,params).then(function(res) {
                    if(res.data.success==1 && !!res.data.users) {
                        if(page===1) {
                            self.users = res.data.users;
                        } else {
                            self.users = self.users.concat(res.data.users);
                        }
                    } else {
                        alert(res.data.message);
                    }

                },function(e){
                    alert(e.message);
                });
            },

            getMoreUsers() {
                this.page++;
                this.getUsers();
            },

            editUser(id) {
                var self = this;

                var params = {id};

                load(this,params).then(function(res) {
                    if(res.data.success==1 && !!res.data.user) {
                        self.user = res.data.user;
                        self.showModal = true;
                    } else {
                        alert(res.data.message);
                    }
                },function(e){
                    alert(e.message);
                });
            },

            saveUser() {
                this.showModal = false;

                var params = this.user;

                var self = this;

                save(this,params).then(function(res) {
                    if (res.data.success == 1) {
                        self.page = 1;
                        self.size = 10;
                        self.getUsers();
                    } else {
                        alert(res.data.message);
                    }
                },function(e) {
                    alert(e.message);
                });
            },

            deleteUser(id) {
                var params = {id};

                var self = this;

                remove(this,params).then(function(res) {
                    if(res.data.success==1) {
                        self.page = 1;
                        self.size = 10;
                        self.getUsers();
                    } else {
                        alert(res.data.message);
                    }
                },function(e) {
                    alert(e.message);
                });
            }
        }
    }
</script>
