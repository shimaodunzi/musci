<template lang="html">
  <div class="art-list">
    <ul class="list">
      <router-link tag="li" :to="{name:'MusicPlay',params:{songid:item.song_id}}" class="song" v-for="(item,index) in listArr" :key="index">
        <div class="left">
          {{ item.title }}
        </div>
      </router-link>
      <button @click="more"> 加载更多</button>
    </ul>
  </div>
</template>

<script>
export default {
  name:"artlist",
  data(){
    return{
      listArr:[],
      limit:0
    }
  },
  props:{
    ting_uid:{
      type:String,
      default:"10"
    }
  },
  mounted(){
    const ArtList = this.HOST + "/v1/restserver/ting?method=baidu.ting.artist.getSongList&tinguid="+ this.ting_uid +"&limits=10&use_cluster=1&order=2"
    this.$axios.get(ArtList)
      .then(res => {
        this.listArr = res.data.songlist
      })
      .catch(error => {
        console.log(error);
      })
  },
    methods:{
    // 下拉的时候触发函数
    more: function() {
        var that = this;
        const ArtList = this.HOST + "/v1/restserver/ting?method=baidu.ting.artist.getSongList&tinguid="+ this.ting_uid +"&limits="+this.limit+"&use_cluster=1&order=2"
        return new Promise(function (resolve, reject) {
          setTimeout(() => {
            that.$axios.get(ArtList)
              .then(res => {
                console.log(res.data);
                that.limit >= res.data.songnums - 10 ? console.log("没数据了") : that.limit += 10,
                // that.moreListData = that.moreListData.concat(res.data.song_list)
                console.log(that.limit)
               that.listArr = res.data.songlist
                resolve();
              })
              .catch(error => {
                console.log(error);
              })
          })
        });
    }
  }
}
</script>

<style scoped>

.art-list{
  padding: 0 17px;
}

.song{
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #999;
}
.left{
  font-size: 18;
}


</style>
