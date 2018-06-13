# Count
----
### 基础用法


<div class="demo-block">
  <b-count :max-number='maxNumber' :baseNumber='baseNumber'></b-count>
</div>

<script>
  export default {
    data() {
      return {
        maxNumber: 3,
        baseNumber: 1,
      }
    },
  }
</script>

::: demo
```html
<div class="demo-block">
  <b-count :max-number='maxNumber' :base-number='baseNumber'></b-count>
</div>
```
```javascript
<script>
  export default {
    data() {
      return {
        maxNumber: 3,
        baseNumber: 1,
      }
    },
  }
</script>
```
:::

## API

| 参数      | 说明          | 类型      | 可选值                      | 默认值       |
|---------- |-------------- |---------- |-------------------------  |------------- |
| max-number | 计数器最大值 | Number | — | 99 |
| base-number | 计数器当前值 | Number | — | 1 |


## 事件

| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
| plus | 鼠标点击触发计数器数值加 | - |
| reduce | 鼠标点击触发计数器数值减 | - |

