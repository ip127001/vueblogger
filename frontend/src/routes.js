import Home from './components/Home.vue'
import About from './components/About.vue'
import Posts from './components/Posts.vue'
import Add from './components/Add.vue'
import Edit from './components/Edit.vue'
import Signup from './components/Signup.vue'
import Login from './components/Login.vue'

export const routes = [
    { path: '/', component: Home},
    { path: '/about', component: About},
    { path: '/posts', component: Posts, name: 'posts'},
    { path: '/posts/add', component: Add, name: 'postAdd'},
    { path: '/posts/edit/:id', component: Edit, name: 'postEdit'},
    { path: '/signup', component: Signup},
    { path: '/login', component: Login}
]