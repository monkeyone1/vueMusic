import Vue from 'vue'
import Router from 'vue-router'
import Rank from '../components/reank/rank.vue'
import Recommend from '../components/recommend/recommend.vue'
import Search from '../components/search/search.vue'
import Singer from '../components/singer/singer.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend
      // children: [
      //   {
      //     path: ':id',
      //     component: Disc
      //   }
      // ]
    },
    {
      path: '/singer',
      component: Singer
      // children: [
      //   {
      //     path: ':id',
      //     component: SingerDetail
      //   }
      // ]
    },
    {
      path: '/rank',
      component: Rank
      // children: [
      //   {
      //     path: ':id',
      //     component: TopList
      //   }
      // ]
    },
    {
      path: '/search',
      component: Search
      // children: [
      //   {
      //     path: ':id',
      //     component: SingerDetail
      //   }
      // ]
    }
    // {
    //   path: '/user',
    //   component: UserCenter
    // }
  ]
})
