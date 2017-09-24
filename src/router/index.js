import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import elh from '@/components/elh'
import map from '@/components/dojo/map'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/elh',
      name: 'elh',
      component: elh
    },
    {
      path: '/map',
      name: 'appmap',
      component: map
    }
  ]
})
