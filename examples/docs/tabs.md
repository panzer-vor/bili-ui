# Tabs
----
### 基础用法

<div class="demo-block">
  <b-tabs :tabs="tabs" @tabClick="changeTab"></b-tabs>
</div>

<script>
  export default {
    data() {
      return {
        tabs: [
          {
            content: '有新动态',
            id: 0
          },
          {
            content: '最新投稿',
            id: 1
          }
        ]
      }
    },
    methods:{
      changeTab(id){
        alert(id)
      },
    }
  }
</script>

::: demo
```html
<div class="demo-block">
  <b-tabs :tabs="tabs" @tabClick="changeTab"></b-tabs>
</div>
```
```javascript
<script>
  export default {
    data() {
      return {
        tabs: [
          {
            content: '有新动态',
            id: 0
          },
          {
            content: '最新投稿',
            id: 1
          }
        ]
      }
    },
    methods:{
      changeTab(id){
        alert(id)
      },
    }
  }
</script>
```
:::

## API

| 参数      | 说明          | 类型      | 可选值                      | 默认值       |
|---------- |-------------- |---------- |-------------------------  |------------- |
| tabs | tab标题 | Array | {content:string,id} | — |

## 事件

| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
| change | 点击切换tab(参数为tabs对应id) | - |
