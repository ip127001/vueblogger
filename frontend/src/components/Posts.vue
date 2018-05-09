<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-xs-12 col-md-4" v-for="post in posts" :key="post._id">
                    <h2>title = {{ post.title}}</h2>
                    <h3>description  = {{ post.description }}</h3>
                </div>
          </div>
      </div>
  </div>
</template>

<script>
import axios from '../axios-auth';

export default {
    data() {
        return {
            posts: []
        }
    },
    created() {
        axios.get('http://localhost:8081/posts')
        .then(res => {
            console.log(res.data)
            this.posts = res.data
        })
        .catch(error => console.log(error))
    }
}
</script>

<style scoped> 
.col-xs-12 {
    border: 1px solid black;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.19);

}
</style>
