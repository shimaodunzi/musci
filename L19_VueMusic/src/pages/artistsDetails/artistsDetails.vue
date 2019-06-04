<template lang="html">
  <div class="">
    <Title :name="this.$route.params.name" :avatar="this.$route.params.avatar"/>
    <List :ting_uid="this.$route.params.ting_uid"/>
  </div>
</template>

<script>

import Title from "../../components/details/title"
import List from "../../components/details/list"

export default {
  name:"details",
  data(){
    return{

    }
  },
  components:{
    Title,
    List
  }
}
</script>

<style lang="css">
</style>
