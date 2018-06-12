# Tabs
----
### 基础用法

<div class="demo-block">
  <b-tabs></b-tabs>
</div>

::: demo
```html
<template>
  <div class="demo-block">
    <b-tabs></b-tabs>
  </div>
</template>
```
```javascript
<script>
  export default {
    name: 'BTabs',
    props: {

    },
    data() {
      return {
        tabs:[
          {content:"有新动态"},
          {content:"最新投稿"}
        ],
        active:0,
      }
    },
    mounted() {

    },
    methods: {
      change(index){
        this.active = index
      }
    }
  }
</script>
```
:::

## API

| 参数      | 说明          | 类型      | 可选值                      | 默认值       |
|---------- |-------------- |---------- |-------------------------  |------------- |
| tabs | tab标题 | Array | — | “有新动态”；“最新投稿” |

## 事件

| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
| change | 点击更换样式 | - |
