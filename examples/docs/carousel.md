# Carousel
----
### 基础用法
组件的宽高由父元素决定

<div class="demo-block" style="width:440px;height:220px">
  <b-carousel :active-style="activeStyle" :images="images" @handle-click="handleClick"></b-carousel>
</div>
<script>
  export default {
    data(){
      return {
        activeStyle:{
          backgroundColor:'red'
        },
        images:[
          {img:'/static/38008861.jpg',tit:'图一'},{img:'/static/38008861.jpg',tit:'图二'},{img:'/static/38008861.jpg',tit:'图三'},
        ]
      }
    },
    methods: {
      handleClick() {
        alert('我被点击了')
      }
    }
  }
</script>

::: demo
```html
<template>
  <div class="demo-block" style="width:440px;height:220px">
    <b-carousel :active-style="activeStyle" :images="images" @handleClick="handleClick"></b-carousel>
  </div>
<template>
```
```javascript
<script>
  export default {
    data(){
      return {
        activeStyle:{
          backgroundColor:'red'
        },
        images:[
          {img:'/static/38008861.jpg',tit:'图一'},{img:'/static/38008861.jpg',tit:'图二'},{img:'/static/38008861.jpg',tit:'图三'},
        ]
      }
    },
    methods: {
      handleClick() {
        alert('我被点击了')
      }
    }
  }
</script>
```
:::

## API

| 参数      | 说明          | 类型      | 可选值                      | 默认值       |
|---------- |-------------- |---------- |-------------------------  |------------- |
| baseStyle | 基础分页器样式(需要覆盖默认样式) | Object | — | {} |
| activeStyle | 活动分页器样式 | Object | — | {backgroundColor:'red'} |
| images | 图片和标题列表 | Array | {img:string,tit:string} | — |
| delay | 轮播间隔 | Number | — | 3000 |

## 事件

| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
| handle-click | 鼠标点击触发 | - |

