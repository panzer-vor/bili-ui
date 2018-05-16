# NavList 
----
### 基础用法

list参数的```id```对应锚链接元素的id,```name```为导航的文本,```order```为导航的排序,为了进行拖动导航对应的页面主体内容需要使用flex布局,```slot```插槽自定义排序提示


<b-nav-list v-if="list && list.length" :list="list" :styles="styles">
  <p style="width:60px">拖动可调整分区位置</p>
</b-nav-list>
<div style="margin-top:100px;display:flex;flex-direction:column">
<div id="a" style="width:100%;height:100vh;background:red;opacity:.3"></div>
<div id="b" style="width:100%;height:100vh;background:blue;opacity:.3"></div>
<div id="c" style="width:100%;height:100vh;background:yellow;opacity:.3"></div>
</div>


<script>
  export default {
    data(){
      return {
        list:null,
        styles:{
          top:'200px',
          right:'200px',
        }
      }
    },
    mounted(){
      setTimeout(()=>{
        this.list = [
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
      },500)
    },
  }
</script>

::: demo
```html
<template>
<div class="demo-block">
  <b-nav-list v-if="list && list.length" :list="list" :styles="styles">
    <p style="width:60px">拖动可调整分区位置</p>
  </b-nav-list>
  <div style="margin-top:100px;display:flex;flex-direction:column">
    <div id="a" style="width:100%;height:100vh;background:red;opacity:.3"></div>
    <div id="b" style="width:100%;height:100vh;background:blue;opacity:.3"></div>
    <div id="c" style="width:100%;height:100vh;background:yellow;opacity:.3"></div>
  </div>
</div>
<template>
```
```javascript
  //事例用定时器代替异步请求
<script>
  export default {
    data(){
      return {
        list: [
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
        ],
        styles:{
          top:'200px',
          right:'200px',
        }
      }
    },
  }
</script>
```
:::

## API

| 参数      | 说明          | 类型      | 可选值                      | 默认值       |
|---------- |-------------- |---------- |-------------------------  |------------- |
| list | 导航列表 | Array | {id:String, order:String, name:String} | — |
| styles | 位置 | Object | 父级对应样式的style对象 | — |
| slot | 自定义排序提示 | Nodes | — | — |



