<template>
  <div class="slide-wrapper">
    <div class="slide-head">
      <router-link to="/">Bili-UI</router-link>
    </div>

    <dl>
      <dt>基础组件</dt>
      <dd v-for="i in componentList">
        <router-link :to="{name:i.name}" :class="$route.name===i.name?'link-active':null">{{i.name}}</router-link>
      </dd>
    </dl>
  </div>

</template>

<script>
  import ComponentsRouters from '../nav.config.json'
  let componentsRouters = ComponentsRouters.Route
  export default {
    data () {
      return {
        componentList: componentsRouters
      }
    },

  }
</script>

<style scoped>
  *{
    box-sizing: border-box;
  }

  .slide-wrapper {
    position: fixed;
    width: 256px;
    height: 100vh;
    box-shadow: 5px 5px 5px #eee;
    text-align: left;
    transition: all .3s;
  }
  .slide-head {
    height: 64px;
    background: #00a1d6;
    line-height: 64px;
    padding-left: 16px;
    font-size: 24px;
    color: azure;
    text-align: left;
    font-weight: bolder;
    box-shadow: 2px 2px 2px #eee;
  }
  .slide-head a{
    color: azure;
  }
  dl{
    width: 100%;
    margin: 0;
  }
  dt{
    font-size: 16px;
    padding-left: 16px;
    height: 48px;
    font-weight: bolder;
    color: rgba(100, 0, 33, 0.8);
    line-height: 48px;
  }
  dd{
    font-size: 20px;
    height: 48px;
    margin: 0;
    transition: all .3s;
  }
  dd:hover{
    background: #eee;
  }
  dd a{
    display: block;
    width: 100%;
    height: 100%;
    padding-left: 26px;
    line-height: 48px;
  }


</style>
