# Count
----
### 基础用法


<div class="demo-block">
  <b-count></b-count>
</div>


::: demo
```html
<template>
  <div class="demo-block">
    <b-count></b-count>
  </div>
<template>
```
```javascript
<script>
  export default {
    name: 'BCount',
    props: {
      maxNumber:{
        type:Number,
        default:999
      },
    },
    data() {
      return {
        countNumber:1,
      }
    },
    mounted() {

    },
    methods: {
      plus:function(){
        var max = this.maxNumber

        if(this.countNumber < max ){
          this.countNumber ++
        }else{
          this.countNumber = max
        }
      },
      reduce:function(){
        if( this.countNumber > 1 ){
          this.countNumber -= 1
        } else {
          this.countNumber = 0
        }
      }
    }
  }
</script>
```
:::

## API

| 参数      | 说明          | 类型      | 可选值                      | 默认值       |
|---------- |-------------- |---------- |-------------------------  |------------- |
| maxNumber | 计数器最大值 | Number | — | 999 |

## 事件

| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
| plus | 鼠标点击触发计数器数值加 | - |
| reduce | 鼠标点击触发计数器数值减 | - |

