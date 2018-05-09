<template>
  <div class="nav-list" ref="navList">
    <ul>
      <li v-for="(item,index) in list" @click="sideLink(item.id,index)" :class="index===choseIndex?'on':null">{{item.name}}</li>
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
              name: '1'
            },
            {
              id: 'b',
              name: '2'
            },
            {
              id: 'c',
              name: '3'
            },
          ]
        }
      },
    },
    data() {
      return {
        elementMap: null,
        choseIndex: -1,
      }
    },
    mounted() {
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
        let s = doc.scrollTop
        for(let i in this.elementMap){
          if(s>this.elementMap[i].top && s<this.elementMap[i].bottom){
            console.log(i)
          }
        }
      },
      debounce(func,wait,immediate){
        let timeout
        return ()=>{
          clearTimeout(timeout)
          timeout = setTimeout(func,wait)
        }
      },
      addClass(){
        
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
          requestAnimationFrame(top);
        };
        top();
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