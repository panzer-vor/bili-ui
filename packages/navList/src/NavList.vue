<template>
  <div class="nav-list" ref="navList">
    <ul @mousemove="moveDrop">
      <li 
        v-for="(item,index) in list"
        :key="index" 
        :data="item.order"
        :style="{order:item.order}"        
        @click="sideLink(item.id,index)" 
        :class="index===choseIndex?'on':null"
        @mousedown="startDrop($event,item.order,index)"
        @mouseup="endDrop"
      >{{item.name}}</li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'BNavList',
    props: {
      pos: {
        type: Object,
      },
      list: {
        type: Array,
        default() {
          return [
            {
              id: 'a',
              name: 'red',
              order: 0
            },
            {
              order: 1,
              id: 'b',
              name: 'blue'
            },
            {
              order: 2,
              id: 'c',
              name: 'yellow'
            },
          ]
        }
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
        startOrder: 0,
      }
    },
    mounted() {
      for(let i in this.list){
        this.$set(this.list[i],'order',this.list[i].order)
      }
      this.onScroll()
      if (this.pos) {
        this.$refs.navList.style.top = pos.top + 'px'
        this.$refs.navList.style.right = pos.right + 'px'
      }
      let obj = {}
      this.list.forEach(v => {
        obj[v.id] = {}
        obj[v.id]['top'] = this.offsetTop(document.querySelector(`#${v.id}`))
        obj[v.id]['bottom'] = this.offsetTop(document.querySelector(`#${v.id}`)) + document.querySelector(`#${v.id}`).offsetHeight
      })
      this.elementMap = obj;
    },
    methods: {
      startDrop(e,order,inx){
        this.createEmptyEl(order)
        e.currentTarget.style.position = "absolute"
        this.elTop =  e.clientY - this.offsetTop(document.querySelector('.nav-list ul')) - e.currentTarget.offsetHeight/2
        e.currentTarget.style.top = this.elTop + "px"
        this.isDrop = true
        this.moveEl = e.currentTarget
        this.moveOrder = order
        this.moveIndex = inx
        this.startOrder = order
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
        this.isDrop = false
        this.moveEl.style.position = "static"
        this.moveEl.style.order = this.moveOrder
        document.querySelector('.nav-list ul').removeChild(this.emptyEl)
        let parent = document.querySelector(`#${this.list[this.moveIndex].id}`).parentNode,beforeNum = this.list.length-1,id = '',index = -1
        for(let i=0;i<this.list.length;i++){
          if(this.list[i].order === this.list[this.moveIndex].order){
            beforeNum = this.list[i].order  //移动的元素
            id = this.list[i].id  //移动的元素
          }
        }
        parent.insertBefore(document.querySelector(`#${this.list[this.moveIndex].id}`),document.querySelector(`#${this.list[beforeNum].id}`))
        parent.insertBefore(document.querySelector(`#${this.list[beforeNum].id}`),parent.childNodes[this.startOrder]) 
      },
      sideLink(id, index) {
        this.toEl(2, this.elementMap[id]['top'])
        this.choseIndex = index
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
    left: 50%;
    top: 232px;
    margin-left: 590px;
    -webkit-transition: top .3s;
    -o-transition: top .3s;
    transition: top .3s;
  }

  .nav-list ul {
    position: relative;
    background-color: #f6f9fa;
    border: 1px solid #e5e9ef;
    overflow: hidden;
    border-radius: 4px;
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

  .nav-list ul li:hover {
    background-color: #00a1d6;
    color: #fff;
  }

  .nav-list ul .on {
    background-color: #00a1d6;
    color: #fff;
  }
</style>