# Icon
----
### 基础用法
语义化的矢量图形，```Bili-UI``` 使用开源的 [Iconfont](http://www.iconfont.cn/) 作为图标库。

通过 ```value``` 属性定义不同icon, 通过```klass```属性来给icon附加```class```。


<div class="demo-block">
  <p>
    <b-icon value="sort" klass="f20 mr20"></b-icon>  <b-icon value="sort" klass="f26 mr20"></b-icon>  <b-icon value="sort" klass="f32 red mr20"></b-icon>  <b-icon value="sort" klass="f38 yellow mr20"></b-icon>     
  </p>
  <p>
    <b-icon value="top" klass="f38 mr20"></b-icon>   <b-icon value="search" klass="f38 mr20"></b-icon>   <b-icon value="more" klass="f38 mr20"></b-icon>      
  </p> 
</div>

::: demo
```html
<template>
<div class="demo-block">
  <b-icon value="sort" klass="f20 mr20"></b-icon>  <b-icon value="sort" klass="f26 mr20"></b-icon>  <b-icon value="sort" klass="f32 red mr20"></b-icon>  <b-icon value="sort" klass="f38 yellow mr20"></b-icon>        
</div>

<div class="demo-block">
  <b-icon value="top" klass="f38 mr20"></b-icon>   <b-icon value="search" klass="f38 mr20"></b-icon>   <b-icon value="more" klass="f38 mr20"></b-icon>    
</div> 
<template>
```
```style
<style>
  .mr20{
    margin-right:20px;
  }
  .f20{
    font-size:20px;
  }
  .f26{
    font-size:26px;
  }
  .f32{
    font-size:32px;
  }
  .f38{
    font-size:38px;
  }
  .red{
    color:red
  }
  .yellow{
    color:yellow
  }
</style> 
```
:::

###### 组件点击事件

<div class="demo-block">
  <b-icon value="search" klass="f38" @iconClick="iconClick"></b-icon> 
</div>

::: demo
```html
<template>
<b-icon value="search" @iconClick="iconClick"></b-icon> 
<template>
```
```javascript
<script>
  export default {
    methods:{
      iconClick(){
        alert('开始搜索!')
      }
    }
  }
</script>
```
:::

### 图标示例
<template>
  <ul class="icon-wrapper">
    <li class="icons" v-for="icon in icons">
      <b-icon :value="icon"></b-icon>
      <p>{{icon}}</p>
    </li>
  </ul>
</template>



<style>
  *{
    padding:0;
    margin:0;
  }
  li{
    list-style:none;
  }
  .mr20{
    margin-right:20px;
  }
  .f20{
    font-size:20px;
  }
  .f26{
    font-size:26px;
  }
  .f32{
    font-size:32px;
  }
  .f38{
    font-size:38px;
  }
  .red{
    color:red
  }
  .yellow{
    color:yellow
  }
  .icon-wrapper{
    display:flex;
    flex-wrap:wrap;
    box-sizing:border-box;
    width:100%;
    border-radius:10px;
    border-top: 1px solid #eee;
    border-left: 1px solid #eee;
  }
  .icon-wrapper li{
    line-height:60px;
    width:calc(100% / 6 - 1px);
    height:120px;
    text-align:center;
    border-right:1px solid #eee;
    border-bottom:1px solid #eee;
    transition: all .3s;
  }
  .icon-wrapper li p{
    margin-top:20px;
    font-weight:bolder;
    line-height:1
  } 
  .icon-wrapper li:hover{
    color:#00a1d6;
  }
</style> 

<script>
  export default {
    data(){
      return{
        icons:[
          'home',
          'search',
          'top',
          'sort',
          'more',
          'shopcar-empty',
          'shopcar-fill',
        ]
      }
    },
    methods:{
      iconClick(){
        alert('开始搜索!')
      }
    }
  }
</script>




