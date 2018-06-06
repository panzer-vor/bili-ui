<template>
  <div class="b-carousel" @mouseover="handleHover" @mouseout="handleOut">
    <div class="b-carousel-box" ref="carouselBox">
      <ul class="b-carousel-wrapper" :style="{left:-activeNum*boxWidth+'px'}">
        <li :style="{width: boxWidth?boxWidth+'px':'440px'}" v-for="(item,index) in images" :key="index" @click="clickEvent">
          <img :src="item.img" alt="">
        </li>
      </ul>
      <ul class="b-carousel-title">
        <span>{{images[activeNum].tit}}</span>
      </ul>
      <ul class="b-carousel-btns">
        <li
          v-for="(num,index) in images"
          :key="index"
          :style="[baseStyle,activeNum===index?activeStyle:null]"
          @click="slipping(index)"></li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'BCarousel',
    props: {
      baseStyle: {
        type: Object,
        default() {
          return {}
        }
      },
      delay: {
        type: Number,
        default: 3000,
      },
      loop: {
        type: Boolean,
        default: true,
      },
      activeStyle: {
        type: Object,
        default() {
          return {
            backgroundColor:'red'
          }
        }
      },
      images: {
        type: Array,
        default() {
          return [
            {
              img:'/static/38008861.jpg',
              tit:'',
            }
          ]
        }
      }
    },
    data() {
      return {
        boxWidth: 0,
        activeNum: 0,
        timeout:-1,
      }
    },
    mounted() {
      this.boxWidth = this.$refs.carouselBox.offsetWidth
      this.autoplay()
    },
    methods: {
      clickEvent() {
        this.$emit('handleClick')
      },
      slipping(i) {
        this.activeNum = i
      },
      autoplay() {
        this.timeout = setTimeout(()=>{
          this.activeNum++
          if(this.activeNum>=this.images.length) {
            this.activeNum = 0
          }
          this.autoplay()
        },this.delay)
      },
      handleHover() {
        clearTimeout(this.timeout)
      },
      handleOut() {
        this.autoplay()
      },
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
  .b-carousel {
    width: 100%;
    height: 100%;
  }
  .b-carousel-box {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    cursor: pointer;
  }
  .b-carousel-wrapper{
    display: flex;
    width: auto;
    height: 100%;
    position: absolute;
    top: 0;
    border-radius: 10px;
    transition: all .3s;

  }
  .b-carousel-wrapper li {
    height: 100%;
  }
  .b-carousel-wrapper li img{
    width: 100%;
    height: 100%;
  }
  .b-carousel-title span{
    display: block;
    width: 60%;
    overflow: hidden;
    white-space: nowrap;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    color: #fff;
    text-decoration: none;
    padding-left: 10px;
    transition: all .3s;
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
  .b-carousel-btns {
    position: absolute;
    z-index: 3;
    bottom: 10px;
    right: 20px;
    display: flex;
  }
  .b-carousel-btns li{
    width: 18px;
    height: 18px;
    background-color: transparent;
    -webkit-transition: none;
    -o-transition: none;
    transition: none;
    margin-left: 8px;
    border-radius: 50%;
    background: #fff;
    cursor: pointer;
  }
</style>
