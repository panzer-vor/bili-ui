# Search
----
### 基础用法

<div class="demo-block">
  <b-search @search="searchParent" @del='delParent'></b-search>
</div>

<script>
  export default {

    methods:{
      searchParent(){
        console.log()
      },
      delParent(){
        console.log()
      }
    }
  }
</script>
::: demo
```html
<div class="demo-block">
  <b-search @search="searchParent" @del='delParent'></b-search>
</div>
```
```javascript
<script>
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
      //监听点击，如果点击的地方不在‘search’ 则不显示history
      document.body.addEventListener('click',(e) => {
        if(!document.querySelector('.search').contains(e.target)){
          this.isAllow = false
        }
      })
    },
    methods: {
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
```
:::

## API

| 参数      | 说明          | 类型      | 可选值                      | 默认值       |
|---------- |-------------- |---------- |-------------------------  |------------- |
| placeholder | 属性提供可描述输入字段预期值的提示信息（hint） | String | — | 请输入内容 |
| historyItem | 历史搜索记录 | Array | — |    |

## 事件

| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
|  search  | 搜索事件鼠标点击触发 | - |
|  cancel  | 搜索事件鼠标点击触发 | - |
