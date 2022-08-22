import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/router'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// import style
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
