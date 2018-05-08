import Home from './components/Home.vue'
import About from './components/About.vue'
import Posts from './components/Posts.vue'
import Add from './components/Add.vue'

export const routes = [
    { path: '/', component: Home},
    { path: '/about', component: About},
    { path: '/posts', component: Posts},
    { path: '/posts/add', component: Add}
]