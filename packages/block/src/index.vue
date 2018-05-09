<template>
    <div 
      class="block" 
      :style="!bottomTitle?{'height':'100px'}:null"
      @mouseenter="createBarrage"
      @mousemove="startShow"
      @mouseout="endShow"  
    >
      <a :href="link">
        <div class="pic" ref="maskBox" :style="{'backgroundImage':`url(${lazyImg})`}">
          <img  :src="image" alt="">
          <div class="card-mask" v-if="mask && mask === 'card'">
              <p v-if="maskCard" class="title" v-html="maskCard.title">
              </P>
              <p v-if="maskCard" class="author" v-html="maskCard.author"></p>
              <p v-if="maskCard" class="play" v-html="maskCard.play"></p>
          </div>
          <div class="video-mask" v-else-if="mask && mask === 'video'">
            <div class="progress-bar">
              <span :style="{'width':`${progressBarWidth}%`}"></span>
            </div>
            <div class="cover-preview-module" :style="{'backgroundImage':`url(${videoImage})`,'backgroundPosition':videoPos}">
            </div>
            <div class="video-mask"></div>
            <span class="time">{{formatTime(time)}}</span>  
            <div class="barrage-mode"></div>
          </div>
          <div class="image-mask" v-else="mask && mask === 'image'">
             <img :src="maskImage" alt="">
          </div>
        </div>
        <p v-if="bottomTitle" class="b" :style="desc?{'height':'20px'}:null">
          {{bottomTitle}}
        </p>
        <p  v-if="desc" class="tit">
          <span v-html="desc.leftKeyword"></span>
          <span v-html="desc.rightKeyword"></span>
        </p>
        
      </a>
      
      
    </div>
</template>
<script>
export default {
  name: "BBlock",
  props: {
    lazyImg: {
      type: String,
    },
    image: {
      type: String,
    },
    bottomTitle: {
      type: String,
    },
    desc: {
      type: Object,
    },
    mask: {
      type: String,
    },
    maskCard: {
      type: Object,
    },
    maskVideo: {
      type: Object,
    },
    maskImage: {
      type: String,
    },
    videoTime: {
      type: Number,
    },
    link: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      progressBarWidth: 0,
      time:  this.videoTime || '',
      videoPos: '',
      videoImage: '',
      barrageMove: null,
      barrageEls: [],
      barrageNum: 0,
      boxWidth:0,
      boxHeight:0,
    };
  },
  watch: {
    maskVideo(){
      if(this.barrageNum) return 
      this.createBarrage()
    }
  },
  mounted(){
    this.boxWidth = this.$refs.maskBox.offsetWidth
  },
  methods:{
    startShow(e){
      this.boxHeight = this.$refs.maskBox.offsetHeight
      if(!this.mask === 'video' || !this.maskVideo) return
      this.progressBarWidth = (e.clientX - e.currentTarget.offsetLeft)/this.boxWidth*100
      let w = this.progressBarWidth/100*this.maskVideo.index[this.maskVideo.index.length-1],n,weak=5
      this.maskVideo.index.forEach((v,i,arr)=>{
        weak =arr[i+1] - v;
        if(w+weak>v && w-weak<v){
          n = i;
        }
      })
      let total = this.maskVideo.img_x_len*this.maskVideo.img_y_len;
      let ns = n%total
      this.videoImage = this.maskVideo.images[~~(n/total)]
      if(ns<this.maskVideo.img_x_len) this.videoPos = `${-ns*this.maskVideo.img_x_size}px 0`
      else this.videoPos = `${-ns%this.maskVideo.img_x_len*this.maskVideo.img_x_size}px ${-(~~(ns/this.maskVideo.img_y_len))*this.maskVideo.img_y_size}px`
    },
    createBarrage(e){
      this.$emit('mask-hover')
      if(this.mask !== 'video' || !this.maskVideo) return
      this.createEle()
      let t = 0;
      this.barrageMove = setInterval(()=>{
        t++;
        if(t===3) this.createEle()
        if(t===5) t = 0
      },1000)
    },
    createEle(){
      if(this.barrageNum>this.maskVideo.barrage.length-1) this.barrageNum = 0
      let b = document.createElement('div')
      b.innerText = this.maskVideo.barrage[this.barrageNum]
      b.style.color = '#fff'
      b.style.position = 'absolute'
      b.style.left = '100%'
      b.style.top = Math.random()*40+'px'
      b.style.whiteSpace = 'pre'
      b.style.textShadow = '1px 1px 2px #001'
      b.style.transition = 'left 5s linear'
      document.querySelector('.barrage-mode').appendChild(b)
     
      b.style.left = -(b.offsetWidth) +'px'
      this.barrageEls.push(b)
      this.barrageNum++     
    },
    endShow(){
      if(this.mask !== 'video' || !this.maskVideo) return
      let barrageParent = document.querySelector('.barrage-mode');
      clearInterval(this.barrageMove)
      for(let i = 0;i<barrageParent.children.length;i++){
        barrageParent.removeChild(barrageParent.children[i])
        this.barrageEls.unshift()
      }
    },
    formatTime(time){
      let h=0,m=0,s=0
      h = time>3600?~~time/3600:0
      m = time>60?~~((time - h*3600)/60):0
      s = time - (h*3600 + m*60)
      if(m<10) m = '0'+`${m}`
      if(s<10) s = '0'+`${s}`
      if(h){
        if(h<10) h = '0'+`${h}`
        return `${h}:${m}:${s}`
      }else{
        return `${m}:${s}`
      }
    }
  }
}
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.block {
  position: relative;
  width: 100%;
  height: 100%;
  font-size: 12px;
  overflow: hidden;
}

.block:hover .b {
  color: #00a1d6;
  height: 40px !important;
}
.block:hover .card-mask{
  background: rgba(0, 0, 0, 0.7);
  top: 0;
}
.block:hover .card-mask .play,.block:hover .card-mask .author,.block:hover .video-mask,.block:hover .image-mask{
  opacity: 1;
}
image{
  border: 0;
  outline: 0;
}
.tit {
  display: flex;
  justify-content: space-between;
  margin: 0;
  width: 100%;
  height: 20px;
  line-height: 20px;
  color: #9ba3ab;
  background-color: #fff;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}
.pic {
  position: relative;
  width: 100%;
  height: calc(100% - 48px);
  overflow: hidden;
  border-radius: 4px;
  font-size: 12px;
  background-repeat: no-repeat;
  background-position: center;
}
.pic img {
  width: 100%;
  height: 100%;
}
.b {
  margin: 0;
  padding-top: 8px;
  height: 40px;
  line-height: 20px;
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
  color: #222;
  word-wrap: break-word;
  word-break: break-all;
  overflow: hidden;
  text-align: left;
}
.video-mask{
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.2);
    -webkit-transition: opacity .3s;
    -o-transition: opacity .3s;
    transition: opacity .3s;
}
.card-mask {
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  font-size: 12px;
  line-height: 20px;
  padding: 10px 5px;
  overflow: hidden;
  top: calc(100% - 32px);
  height: 100%;
  background: linear-gradient(transparent,rgba(0,0,0,.1) 20%,rgba(0,0,0,.2) 35%,rgba(0,0,0,.6) 65%,rgba(0,0,0,.9));
}
.card-mask .title{
  display: flex;
    color: #fff;
    height: 40px;
    overflow: hidden;
    margin-bottom: 5px;
    word-break: break-all;
    word-wrap: break-word;
}
.card-mask .author{
  opacity: 0;
  color: #99a2aa;
  height: 20px;
  line-height: 20px;
  overflow: hidden;
  -webkit-transition: all .6s;
  -o-transition: all .6s;
  transition: all .6s;
}
.card-mask .play{
    opacity: 0;
    color: #99a2aa;
    height: 20px;
    line-height: 20px;
    overflow: hidden;
    -webkit-transition: all .6s;
    -o-transition: all .6s;
    transition: all .6s;
}
.video-mask .cover-preview-module{
    position: absolute;
    left: 0;
    top: 7px;
    height: calc(100% - 7px);
    width: 100%;
    margin-top: 2px;
}
.video-mask .progress-bar{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 10px;
    border-width: 4px 8px;
    border-style: solid;
    border-color: #000;
    background: #444;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.video-mask .progress-bar span{
  display: block;
  background: #fff;
  height: 2px;
}
.video-mask .time {
    position: absolute;
    bottom: 2px;
    left: 6px;
    color: #fff;
    height: 12px;
    line-height: 12px;
    padding: 0 5px 1px 0;
    -webkit-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;
}
.barrage-mode{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  -webkit-transition: all .3s;
  -o-transition: all .3s;
  transition: all .3s;
  pointer-events: none;
}
.barrage{
    position: absolute;
    color: #fff;
    left: 100%;
    top: 8px;
    white-space: pre;
    text-shadow: 1px 1px 2px #001;
    transition: left 5s linear;
}
.image-mask{
  position:absolute;
  top:0;
  bottom:0;
  width: 100%;
  height: 100%;
  opacity: 0;
}
.image-mask img{
  width: 100%;
  height: 100%;
}
</style>
