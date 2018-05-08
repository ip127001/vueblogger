<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6 col-md-offset-3 center">
                    <div class="container-fluid">
                        <h2>Add Post</h2>
                        <form>
                            <div class="form-group">
                            <label for="title">Title:</label>
                            <input type="title" class="form-control" id="title" placeholder="Enter title" name="title">
                            </div>
                            <div class="form-group">
                            <label for="desc">Description:</label>
                            <textarea class="form-control" id="desc" rows="5"></textarea>
                            </div>
                            <button type="submit" class="btn btn-default" @click="addPost">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {

        }
    },
    methods: {
        addPost() {

        }
    }
}
</script>