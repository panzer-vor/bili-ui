<template>
  <div  class="pg-index">
    <div class="index-container">
      <img src="../assets/logo.png">
      <p>一款仿B站的前端 UI 组件库</p>
    </div>
    <div class="separate-panel">
      <div class="about">
        <router-link to="/block">开始使用</router-link>
        <a target="_blank" class="btn-github" href="https://github.com/xyk0279/bili-ui">GitHub</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        
      }
    }
  }
</script>
<style>
  .pg-index{
    position: absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
    margin:auto;
  }
  .index-container {
    text-align: center;
  }
  .separate-panel{
    text-align: center;
  }
  .index-container p {
    margin-top: 56px;
    color: #ccc;
    font-size: 32px;
  }
  .separate-panel a{
    color: #fff;
    background-image: linear-gradient(90deg,#00aeff,#3369e7);
    box-shadow: 0 2px 6px 0 rgba(51,105,231,.4);
    display: inline-block;
    width: 190px;
    height: 56px;
    margin: 0 35px;
    font-size: 18px;
    line-height: 56px;
    border-radius: 28px;
    -webkit-transition: all .3s;
    transition: all .3s;
    cursor: pointer;
  }
  .separate-panel a:last-child {
    background: #fff;
    color: #00aeff;
  }
</style>
