<template>
  <div class="search">
    <form action="#" class="search-form">
      <input type="text" v-bind:placeholder='placeholder' class="search-keyword" v-on:focus='open' >
      <button type="submit" class="search-submit" @click='search'></button>
    </form>
    <div class="search-history" v-if='historyItem.length && isAllow == true'>
      <div class="search-title">
        历史搜索
      </div>
      <ul>
        <li v-for='(item,index) in historyItem' :key='index'>
          <a href="#" @click='search'>{{item.content}}</a>
          <div class="cancel" @click='cancel(index)'></div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'BSearch',
    props: {
      placeholder:{
        type:String,
        default:'请输入内容'
      },
      historyItems: {
        type: Array,
        default() {
          return [

          ]
        }
      }
    },
    data() {
      return {
        isAllow:false,
        historyItem:null
      }
    },
    watch: {
      historyItems(val) {
        this.historyItem = val
      }
    },
    created() {
      this.historyItem = this.historyItems
    },
    mounted() {
      document.body.addEventListener('click',this.addClick)
    },
    destroyed() {
      document.body.removeEventListener('click',this.addClick)
    },
    methods: {
      addClick(e) {
        if(!document.querySelector('.search').contains(e.target)){
          this.isAllow = false
        }
      },
      open(){
        this.isAllow = true
      },
      close(){
        this.isAllow = false
      },
      search(){
        this.$emit('search')
      },
      cancel(index){
        this.historyItem.splice(index,1)
        this.$emit('del')
      }
    }
  }
</script>

<style scoped>

*:focus{
  outline: none;
}

ul li{
  list-style: none;
}

.search{
  width: 268px;
}

.search-form{
  width: 268px;
  background-color: hsla(0,0%,100%,.88);
  height: 34px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.search-form:hover{
  background: #fff;
}

.search-keyword{
  width: 202px;
  height: 30px;
  line-height: 30px;
  color: #222;
  font-size: 12px;
  padding: 0 10px;
  background: transparent;
  border-color: transparent;
  float: left;
}

.search-submit{
  width: 42px;
  height: 34px;
  background: url(//static.hdslb.com/images/base/icons.png) -652px -721px;
  border-color: transparent;
  float: right;
  cursor: pointer;
}

.search-title{
  width: 100%;
  text-align: center;
  font-size: 12px;
  color: #222;
  margin: 1% 0;
}

.search-history{
  width: 268px;
  border: 1px solid #e5e9ef;
  border-radius: 6px;
  margin-top: 2px;
  padding: 0 0 5px 0;
}

.search-history ul {
  width: 100%;
  overflow: hidden;
  padding: 0;
  margin: 0;
}

.search-history ul li {
  padding: 3px 10px;
  cursor: pointer;
  word-wrap: break-word;
  word-break: break-all;
  display: flex;
  justify-content: space-between;
  color: #222;
  height: 22px;
  line-height: 22px;
}

.search-history ul li:hover {
  background-color: #e5e9ef;
}

.search-history ul li a{
  width: 200px;
  color: #222;
}

.cancel{
  width: 38px;
  height: 22px;
  background: url(//static.hdslb.com/images/base/icons.png) -461px -532px no-repeat;
}

</style>
