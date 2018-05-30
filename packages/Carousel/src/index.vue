<template>
  <div style="width: 440px;height: 220px;">
    <div class="b-carousel-box" ref="carouselBox">
      <ul class="b-carousel-wrapper">
        <li :style="{width: boxWidth+'px'}"></li>
      </ul>
      <ul class="b-carousel-title"></ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'BCarousel',
    props: {
      
    },
    data() {
      return {
        boxWidth:0,  
      }
    },
    mounted() {
      this.boxWidth = this.$refs.carouselBox.offsetWidth

    },
    methods: {
      
      
      
    }
  }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
  }
  .b-carousel-box{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .b-carousel-wrapper{
    height: 100%;
    position: absolute;
    top: 0;
  }
  .b-carousel-wrapper li{
    width: 440px;
    height: 100%;
  }
  .b-carousel-title{
    z-index: 2;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 35px;
    line-height: 35px;
    font-size: 14px;
    background: linear-gradient(transparent,rgba(0,0,0,.5));
    
  }
</style>