<template>
    <div>
        <div class="row">
            <div class="col-xs-6 col-lg-3" v-for="post in posts" :key="post._id">    
                <h4><b>{{ post.title }}</b></h4> 
                <p> {{ post.description }} </p> 
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
.col-lg-3 {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    height: 100px;
    padding: 1% 3%;
}

.col-md-4:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

</style>
