import Home from './components/Home.vue'
import About from './components/About.vue'
import Posts from './components/Posts.vue'

export const routes = [
    { path: '/', component: Home},
    { path: '/about', component: About},
    { path: '/posts', component: Posts}
]