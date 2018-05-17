<template>
  <div class="nav-list" ref="navList" :style="styles">
    <div class="b-nav-mask" v-if="showMask" @click.stop="showMask=!showMask"></div>
    <div class="b-nav-bg" v-if="showMask">
        <slot></slot>
    </div>
    <ul @mousemove="moveDrop">
      <li 
        v-for="(item,index) in list"
        :key="index" 
        :data="item.order"
        :style="{
          order:item.order,
        }"        
        @click="sideLink(item.id,index)" 
        :class="index===choseIndex?'on':null"
        @mousedown="startDrop($event,item.order,index)"
        @mouseup="endDrop"
        @mouseout="endDrop"
      >{{item.name}}</li>
    </ul>
    <div class="b-sort-wrapper" @click="showMask=!showMask">
      <b-icon value="sort" klass="sort-icon"></b-icon>
      排序
    </div>
    <div class="s-line"></div>
    <div class="back-to-top" @click="toEl(2,0)">
      <b-icon value="top" ></b-icon>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'BNavList',
    props: {
      styles:{
        type: Object,
      },
      list: {
        type: Array,
      },
    },
    data() {
      return {
        elementMap: null,
        choseIndex: -1,
        elTop: 0,
        isDrop: false,
        moveEl: null,
        emptyEl: null,
        moveOrder: 0,
        moveIndex: null,
        showMask:false,
      }
    },
    mounted() {
      for(let i in this.list){
        this.$set(this.list[i],'order',this.list[i].order)
      }
      this.onScroll()
      this.getElsTop()
    },
    methods: {
      getElsTop(){
        let obj = {}
        this.list.forEach(v => {
          obj[v.id] = {}
          obj[v.id]['top'] = this.offsetTop(document.querySelector(`#${v.id}`))
          obj[v.id]['bottom'] = this.offsetTop(document.querySelector(`#${v.id}`)) + document.querySelector(`#${v.id}`).offsetHeight
        })
        this.elementMap = obj;
      },
      startDrop(e,order,inx){
        if(this.showMask){
          this.createEmptyEl(order)
          e.currentTarget.style.position = "absolute"
          this.elTop =  e.clientY - this.offsetTop(document.querySelector('.nav-list ul')) - e.currentTarget.offsetHeight/2
          e.currentTarget.style.top = this.elTop + "px"
          this.isDrop = true
          this.moveEl = e.currentTarget
          this.moveOrder = order
          this.moveIndex = inx
        }
      },
      createEmptyEl(order){
        this.emptyEl = document.createElement('li')
        document.querySelector('.nav-list ul').appendChild(this.emptyEl)
        this.emptyEl.style = order
        this.emptyEl.style.height = "32px"
      },
      moveDrop(e){
        if(this.isDrop){
          this.elTop = e.clientY - this.offsetTop(e.currentTarget) - this.moveEl.offsetHeight/2
          this.moveEl.style.top = this.elTop + "px"
          let index = Math.round(this.elTop/this.moveEl.offsetHeight)
          this.moveOrder = index
          this.emptyEl.style.order = this.moveOrder
          for(let i=0;i<this.list.length;i++){
            if(this.list[i].order === index){
              this.list[i].order = this.list[this.moveIndex].order
            }
          } 
          this.list[this.moveIndex].order = this.moveOrder
        }
      },
      endDrop(e){
        if(this.isDrop){
          this.isDrop = false
          this.moveEl.style.position = "static"
          this.moveEl.style.order = this.moveOrder
          document.querySelector('.nav-list ul').removeChild(this.emptyEl)
          let parent = document.querySelector(`#${this.list[this.moveIndex].id}`).parentNode,childrens = parent.children
          for(let i = 0;i<childrens.length;i++){
            for(let j in this.list){
              if(childrens[i].getAttribute("id")===this.list[j].id){
                childrens[i].style.order = this.list[j].order
              }
            }
          }
          this.getElsTop()
        } 
      },
      sideLink(id, index) {
        if(!this.showMask){
          this.toEl(2, this.elementMap[id]['top'])
          this.choseIndex = index
        }
      },
      onScroll(){
        const doc = document.body.scrollTop ? document.body : document.documentElement
        let scrollNow = doc.scrollTop
        window.addEventListener('scroll', this.debounce(this.isInside,100),false)
      },
      isInside(){
        const doc = document.body.scrollTop ? document.body : document.documentElement
        let s = doc.scrollTop,index = 0
        for(let i in this.elementMap){
          if(s>this.elementMap[i].top-20 && s<this.elementMap[i].bottom -20){
            this.choseIndex = index
          }
          index++
        }
      },
      debounce(func,wait,immediate){
        let timeout
        return ()=>{
          clearTimeout(timeout)
          timeout = setTimeout(func,wait)
        }
      },
      toEl(rate, scrollTop) {
        this.choseIndex = -1
        const doc = document.body.scrollTop ? document.body : document.documentElement
        let scrollNow = doc.scrollTop
        let top = () => {
          scrollNow = scrollNow + (scrollTop - scrollNow) / (rate || 2)
          if (Math.abs(scrollNow - scrollTop) < 1) {
            doc.scrollTop = scrollNow
            return;
          }
          doc.scrollTop = scrollNow
          requestAnimationFrame(top)
        }
        top()
      },
      offsetTop(ele) {
        let top = 0
        while (ele) {
          top += ele.offsetTop
          ele = ele.offsetParent
        }
        return top
      }
    }
  }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .nav-list {
    position: fixed;
    z-index: 10;
    -webkit-transition: top .3s;
    -o-transition: top .3s;
    transition: top .3s;
  }

  .nav-list ul {
    position: relative;
    background-color: #f6f9fa;
    border: 1px solid #e5e9ef;
    border-bottom: 0;
    overflow: hidden;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    display: flex;
    flex-direction: column;
  }

  .nav-list ul li {
    width: 48px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    -webkit-transition: background-color .3s, color .3s;
    -o-transition: background-color .3s, color .3s;
    transition: background-color .3s, color .3s;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .nav-list ul li:hover,.b-sort-wrapper:hover,.back-to-top:hover {
    background-color: #00a1d6;
    color: #fff;
  }

  .nav-list ul .on {
    background-color: #00a1d6;
    color: #fff;
  }
  .b-sort-wrapper{
    height: 38px;
    line-height: 20px;
    padding: 8px 0;
    border-top: 1px solid #e5e9ef;
    transition: background-color .3s,color .3s;
    background-color: #f6f9fa;
    text-align: center;
    cursor: pointer;
    font-size: 14px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  
  .sort-icon{
    display: block;
    margin: 0 auto 4px;
    font-size: 18px;
    color: #aaa;
  }
  .b-sort-wrapper:hover .sort-icon{
    color: #fff;
  }
  .b-nav-bg{
    right: -20px;
    width: 0px;
    opacity: 1;
    top: -15px;
    height: 100%;
    padding-bottom: 20px;
    position: absolute;
    background: hsla(0,0%,100%,.8);
    border-radius: 4px;
    overflow: hidden;
    -webkit-transition: all .3s cubic-bezier(.68,-.55,.27,1.55);
    -o-transition: all .3s cubic-bezier(.68,-.55,.27,1.55);
    transition: all .3s cubic-bezier(.68,-.55,.27,1.55);
    z-index: -1;    
    animation: wither .3s 1;
    animation-fill-mode: forwards;
  }
  @keyframes wither{
    0%{
      width: 0px;
    }
    80%{
      width: 200px;
    }
    90%{
      width: 190px;
    }
    100%{
      width: 200px;
    }
  }
  .b-nav-mask{
    background: rgba(0,0,0,.3);
    position: fixed;
    width: 0;
    height: 100vh;
    top: 0;
    right: 0;
    z-index: -1;   
    animation: wither-mask .2s 1;
    animation-fill-mode: forwards;
  }
  @keyframes wither-mask{
    from{
      width: 0;
    }
    to{
      width: 100vw;
    }
  }
  .s-line{
    position: relative;
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
    height: 9px;
    width: 30px;
    margin: 0 auto;
  }
  .back-to-top{
    position: relative;
    display: block;
    cursor: pointer;
    height: 48px;
    color: #aaa;
    background-color: #f6f9fa;
    overflow: hidden;
    border-radius: 4px;
    text-align: center;
    line-height: 48px;
    font-size: 20px;
  }
</style>