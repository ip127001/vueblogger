<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-lg-8 col-lg-offset-2">
                <h2>SignUp Form</h2>
                <form @submit.prevent="onSubmit">
                    <div class="form-group" :class="{invalid: $v.email.$error}">
                        <label for="email">Email:</label>
                        <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" @blur="$v.email.$touch()" v-model="email">
                        <p v-if="!$v.email.email">Please provide a valid email address</p>
                        <p v-if="!$v.email.required">This field is required</p>
                    </div>

                    <div class="form-group" :class="{invalid: $v.age.$error}">
                        <label for="age">Age:</label>
                        <input type="number" class="form-control" id="age" placeholder="enter your age" name="age" @blur="$v.age.$touch()" v-model="age">
                        <p v-if="!$v.age.minVal">You have to be atleast {{ $v.age.$params.minVal.min }} years old</p>
                    </div>

                    <div class="form-group" :class="{invalid: $v.password.$error}">
                        <label for="pwd">Password:</label>
                        <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd" @blur="$v.password.$touch()" v-model="password">
                    </div>
    
                    <div class="form-group" :class="{invalid: $v.confirmPassword.$error}">
                        <label for="pwd">Confirm Password:</label>
                        <input type="password" class="form-control" id="pwd" placeholder="Confirm password" name="pwd" @blur="$v.confirmPassword.$touch()" v-model="confirmPassword">
                        <p v-if="$v.confirmPassword.$error">Password doesn't match</p>
                    </div>

                    <button type="submit" :disabled="$v.$invalid">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import { required, email, numeric, minValue, minLength, sameAs } from 'vuelidate/lib/validators'
    export default {
        data() {
            return {
                email: '',
                age: null,
                password: '',
                confirmPassword: ''
            }
        },
        validations: {
            email: {
                required,
                email
            },
            age: {
                required,
                numeric,
                minVal: minValue(18)
            },
            password: {
                required,
                minLen: minLength(6)
            },
            confirmPassword: {
                //sameAs: sameAs('password')
                sameAs: sameAs(vm => {
                    return vm.password
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
