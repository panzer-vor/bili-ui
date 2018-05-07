<template>
  <div id="app">
    <slide-bar v-if="!isIndex"></slide-bar>
    <main>
      <header v-if="!isIndex">{{$route.meta.desc}}</header>
      <div class="show-wrapper">
        
        <router-view/>
      </div>
    </main>
  </div>
</template>

<script>
  import SlideBar from './components/SlideBar'

  export default {
    name: 'App',
    data() {
      return {
        isIndex: true,
      }
    },
    watch: {
      $route() {
        console.log(this.$route)
        this.isIndex = this.$route.name === 'index'
      }
    },
    components: {
      SlideBar,
    }
  }
</script>

<style>
  #app {
    position: relative;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .code_inline {
    padding: .5em;
    margin: 0;
    background-color: rgba(0, 0, 0, .04);
    border-radius: 3px;
  }
  .language-javascript {
    color: #50bfff;
  }
  .language-javascript,.language-html {
    line-height: 1.6;
    font-size: 13px;
  }
  .hljs-name {
    color: violet;
  }
  .demo-container{
    transition: all .3s;
    overflow: hidden;
  }
  .docs-demo__triangle{
    display: block;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: rgba(0,0,0,.1);
    color: #50bfff;
    cursor: pointer;
    margin-bottom: 20px;
  }
  .hljs-attr {
    color: #2c3e;
  }
  .demo-block{
    margin-bottom: 16px;
  }
  .hljs-string {
    color: rgb(78, 50, 205);
  }

  .hljs-keyword {
    color: rgba(204, 34, 34, 0.933);
  }

  pre {
    padding: 16px;
    overflow: auto;
    background-color: #f7f7f7;
    border-radius: 3px;
  }

  main {
    transition: all .3s;
    width: calc(100% - 256px);
    margin-left: 256px;
    text-align: left;
  }

  .show-wrapper {
    padding: 0 30px;
  }

  header {
    height: 64px;
    background: #00a1d6;
    width: 100%;
    line-height: 64px;
    padding-left: 16px;
    font-size: 24px;
    color: azure;
    text-align: left;
    font-weight: bolder;
  }
  .table {
    border-spacing: 0;
    width: 100%;
  }
  .table th{
    color: #00a1d6;
    padding-bottom: 10px;
  }
  .table td{
    white-space: pre-wrap;
    color: #666;
    padding: 5px;
    border-top: 1px solid #00a1d6;
  }

  @media screen and (max-width:780px) {
    .slide-wrapper {
      transform: translateX(-256px);
    }
    main {
      margin-left: 0;
      width: 100%;
    }
  }
</style>