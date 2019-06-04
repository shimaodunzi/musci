<template lang="html">
  <div class="">
    <TodayRecommend title="今日榜单" type="1"/>
    <NewsMusic />
    <SwiperBanner />
   <MusicListNav />
    <keep-alive> 
      <router-view />
    </keep-alive>
    <TodayRecommend title="热搜榜单" type="24"/>
  </div>
</template>

<script>

import TodayRecommend from "../components/Today_Recommend"
import NewsMusic from "../components/News_Music"
import SwiperBanner from "../components/Swiper_Banner"
import MusicListNav from "./musiclist/music_listnav"

export default {
  name:"home",
  components:{
    TodayRecommend,
    NewsMusic,
    SwiperBanner,
    MusicListNav
  }
}
</script>

<style lang="css">
</style>
