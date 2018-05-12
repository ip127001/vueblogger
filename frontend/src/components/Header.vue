<template>
<div>
    <nav class="nav navbar-inverse">
    <div class="container-fluid">
        <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
        <router-link to="/" class="navbar-brand">VueTube</router-link>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
                <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
                <router-link to="/about" tag="li" active-class="active" exact><a>About</a></router-link>
                <router-link to="/posts" tag="li" active-class="active" exact><a>Show Posts</a></router-link>
                <router-link to="/posts/add" tag="li" active-class="active" exact><a>Add Posts</a></router-link>
            </ul>
            
            <ul class="nav navbar-nav navbar-right">
                <router-link to="/signup" tag="li" active-class="active" exact  v-if="isLogin"><a>Signup</a></router-link>
                <router-link to="/login" tag="li" active-class="active" exact  v-if="isLogin"><a>Login</a></router-link>
                <button class="btn btn-primary" @click="Logout" style="margin:7px" v-if="isLogout">Logout</button>
            </ul>

        </div>
    </div>
    </nav> 
</div>
</template>
    
<script>
    export default {
        data() {
            return {
                isLogout: '',
                isLogin: ''
            }
        },
        created() {
            let token = localStorage.getItem('jwtToken')
            if (token) {
                this.isLogout = true
                this.isLogin = false
            } else {
                this.isLogin = true
                this.isLogout = false
            }
        },
        methods: {
            Logout() {
                console.log('hi')
                localStorage.removeItem('jwtToken')
                this.$router.replace('/login')
            }
        }
    }
</script>

<style>

</style>
