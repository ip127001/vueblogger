<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6 col-md-offset-3 center">
                    <div class="container">
                        <h2>Add Post</h2>
                        <form @submit.prevent="postData">
                            <div class="form-group">
                                <label for="title">Title:</label>
                                <input type="title" class="form-control"
                                                    id="title" 
                                                    placeholder="Enter title" 
                                                    name="title" 
                                                    v-model="title">
                            </div>
                            <div class="form-group">
                                <label for="description">Description:</label>
                                <textarea class="form-control" 
                                                    id="description" 
                                                    rows="5" 
                                                    v-model="description"></textarea>
                            </div>
                            <button type="submit" class="btn btn-default">Submit</button>
                        </form>
                    </div>
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
            add: 'add',
            title: '',
            description: ''
        }
    },
    methods: {
        postData() {
            axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken')
            const formData = {
                title: this.title,
                description: this.description
            }
            console.log('form',formData)
            axios.post(`/posts/${this.add}`, formData)
                .then(res => console.log(res))
                .catch(error => console.log(error))
            this.$router.push('/posts')
        }
    }
}
</script>