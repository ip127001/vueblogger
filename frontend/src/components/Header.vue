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
                <li><a href="#">Signup</a></li>
                <li><a href="#">Login</a></li>
            </ul>
        </div>
    </div>
    </nav>
</div>
</template>
    
<script>
    
</script>

<style>

</style>
