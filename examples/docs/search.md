# Search
----
### 基础用法

<div class="demo-block">
  <b-search @search="searchParent" @del='delParent' :history-items='historyItems'></b-search>
</div>

<script>
  export default {
    data() {
      return {
        historyItems: [
          'i',
          'love',
          'bilibili',
        ]
      }
    },
    methods:{
      searchParent(val){
        alert(val)
      },
      delParent(val){
        alert(val)
      }
    }
  }
</script>
::: demo
```html
<div class="demo-block">
  <b-search @search="searchParent" @del='delParent' :history-items='historyItems'></b-search>
</div>
```
```javascript
<script>
  export default {
    data() {
      return {
        historyItems: [
          'i',
          'love',
          'bilibili',
        ]
      }
    },
    methods:{
      searchParent(val){
        alert(val)
      },
      delParent(val){
        alert(val)
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
| history-items | 历史搜索记录 | Array | — | — |

## 事件

| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
|  search  | 搜索事件鼠标点击触发(参数为搜索/点击字符串) | - |
|  cancel  | 搜索事件鼠标点击触发(参数为搜索/点击字符串) | - |
