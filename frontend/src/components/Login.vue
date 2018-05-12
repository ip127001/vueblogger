<template>
        <div class="container">
        <div class="row">
            <div class="col-xs-12 col-lg-8 col-lg-offset-2">
                <h2>Login Form</h2>
                <form @submit.prevent="onLogin">
                    <div class="form-group" :class="{invalid: $v.email.$error}">
                        <label for="email">Email:</label>
                        <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" @blur="$v.email.$touch()" v-model="email">
                        <p v-if="!$v.email.email">Please provide a valid email address</p>
                    </div>

                    <div class="form-group" :class="{invalid: $v.password.$error}">
                        <label for="pwd">Password:</label>
                        <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd" @blur="$v.password.$touch()" v-model="password">
                    </div>

                    <button type="submit" :disabled="$v.$invalid">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>


<script>
    import { required, email, numeric, minValue, minLength } from 'vuelidate/lib/validators'
    import axios from '../axios-auth.js'

    export default {
        data() {
            return {
                email: '',
                password: ''
            }
        },
        validations: {
            email: {
                required,
                email
            },
            password: {
                required,
                minLen: minLength(6)
            }
        },
        methods: {
            onLogin() {
                const formData = {
                    email: this.email,
                    password: this.password
                }
                axios.post('/auth/login', formData)
                .then(res => {
                    localStorage.setItem('jwtToken', res.data.token)
                    this.$router.push('/posts')
                })
                .catch(error => {
                    console.log(error)
                })
            }
        }
    }
</script>


<style scoped>
    .col-lg-8 {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    height: auto;
    margin-top: 50px;
    padding: 2vh;
}

div.invalid input {
    border: 1px solid red;
    background-color: #ffc9aa;  
}
div.invalid label {
    color: red;
}
</style>