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
            {{ index }} {{ user.username }}
        </div>

    </div>

    <div class="footer">
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
        created: function () {
            this.$watch('success', function(value) {
                if(!!value) {
                    if(value) {
                        this.getUsers();
                    } else {
                        alert(this.message);
                    }
                }
            });
        },
        ready: function() {
            this.getUsers();
        },
        data() {
            return {
                success: false,
                id: null,
                users: [],
                user: {},
                message: null,
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
                list(this);
            },

            loadUser() {
                this.success = null;
                load(this,this.id);
            },

            saveUser() {
                this.showModal = false;
                this.success = null;
                save(this,this.user)
            },

            deleteUser() {
                this.success = null;
                remove(this,this.id);
            }
        }
    }
</script>
