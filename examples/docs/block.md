# BlockView 基础展示块
----
### 基础用法
```mask``` 参数的```video```、```card```、```image```值分别对应```maskVideo```、```maskCard```、```maskImage```三个参数

<div class="demo-block">
  <div>
    <b-block :image="image" :bottom-title="bottomTitle" :desc="desc" :mask="card" :mask-card="maskCard">
    </b-block>
  </div>
</div>


<script>
  export default {
    data(){
      return {
        image:"",
        bottomTitle:"",
        desc:null,
        maskCard:null,
        maskVideo:null,
        card:'card',
        video:'video'
      }
    },
    mounted(){
      setTimeout(()=>{
        this.image = '/static/block-simple.jpg'
        this.bottomTitle = '我是底部标题部分'
        this.desc = {
          leftKeyword:'我是左部信息',
          rightKeyword:'我是右部信息'
        }
        this.maskCard = {
          title: '此处为标题',
          author: '作者',
          play: '杂项'
        }
      },500)
    },
    methods:{
      getMaskData(){
        setTimeout(()=>{
          this.maskVideo = {
            images: ['/static/38008861.jpg'],
            index: [0,0,28,40,54,64,75,89,99,110,120,131,141,151,162,173,183,193,203,214,224,235,246,257,267,277,287,303,309,346,358,369,386,397,403,427,438,448,459,469,480,490,501,511,521,531,543,553,567,574,585,595,605,615,650,663,674,686,699,710,725,737,747,755,768,778,785],
            barrage: ["可以的","辣鸡游戏32号就关服了","讲个笑话，四月番","起立！","5月5日马克思诞辰","你指尖跃动的电光，是我此生不变的信仰唯我超电磁炮永世长存","敬礼！！！","嗷嗷","姐姐大人生日快乐","110吗？还是那个人！","敬礼！","傲嗷","B站很多新用户的涌入，过去的好视频翻出来炒炒冷饭增加下粘度还是可取的","zzzzzzzz","zzzzzzzzzzzzzzzzz","恭喜忽悠 表白崔崔","敬礼！！！","俺妹的bgm果然好听","敬礼！！！敬礼！！！","啧"]
          }
        },500)
      }
    }
  }
</script>

::: demo
```html
<template>
<div class="demo-block">
  <div>
    <b-block :image="image" :bottom-title="bottomTitle" :desc="desc" :mask="'card'" :mask-card="maskCard">
    </b-block>
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
        image:"",
        bottomTitle:"",
        desc:null,
        maskCard:null,
      }
    },
    mounted(){
      setTimeout(()=>{
        this.image = '/static/block-simple.jpg'
        this.bottomTitle = '我是底部标题部分'
        this.desc = {
          leftKeyword:'我是左部信息',
          rightKeyword:'我是右部信息'
        }
        this.maskCard = {
          title: '此处为标题',
          author: '作者',
          play: '杂项'
        }
      },500)
    },
  }
</script>
```
:::

<div class="demo-block">
  <div>
    <b-block :image="image" :bottom-title="bottomTitle" :desc="desc" :mask="video" :mask-video="maskVideo" @mask-hover="getMaskData">
    </b-block>
  </div>
</div>

::: demo
```html
<template>
<div class="demo-block">
  <div>
    <b-block :image="image" :bottom-title="bottomTitle" :desc="desc" :mask="video" :mask-video="maskVideo" @mask-hover="getMaskData">
    </b-block>
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
        image:"",
        bottomTitle:"",
        desc:null,
        maskVideo:null,
      }
    },
    mounted(){
      setTimeout(()=>{
        this.image = '/static/block-simple.jpg'
        this.bottomTitle = '我是底部标题部分'
        this.desc = {
          leftKeyword:'我是左部信息',
          rightKeyword:'我是右部信息'
        }
      },500)
    },
    methods:{
      getMaskData(){
        setTimeout(()=>{
          this.maskVideo = {
            images: ['/static/38008861.jpg','/38160767-1.jpg'],
            index: [0,0,28,40,54,64,75,89,99,110,120,131,141,151,162,173,183,193,203,214,224,235,246,257,267,277,287,303,309,346,358,369,386,397,403,427,438,448,459,469,480,490,501,511,521,531,543,553,567,574,585,595,605,615,650,663,674,686,699,710,725,737,747,755,768,778,785,798,804,814,825,835,846,856,868,877,889,898,909,919,933,940,955,965,987,997,1020,1030,1035,1042,1052,1061,1066,1073,1079,1088,1096,1103,1109,1118,1147,1171,1206,1255,1297,1339],
            barrage: ["可以的","辣鸡游戏32号就关服了","讲个笑话，四月番","起立！","5月5日马克思诞辰","你指尖跃动的电光，是我此生不变的信仰唯我超电磁炮永世长存","敬礼！！！","嗷嗷","姐姐大人生日快乐","110吗？还是那个人！","敬礼！","傲嗷","B站很多新用户的涌入，过去的好视频翻出来炒炒冷饭增加下粘度还是可取的","zzzzzzzz","zzzzzzzzzzzzzzzzz","恭喜忽悠 表白崔崔","敬礼！！！","俺妹的bgm果然好听","敬礼！！！敬礼！！！","啧"]
          }
        },500)
      }
    }
  }
</script>
```
:::



## API

| 参数      | 说明          | 类型      | 可选值                      | 默认值       |
|---------- |-------------- |---------- |-------------------------  |------------- |
| lazyImg | 懒加载图片 | String | — | /static/block-simple.jpg |
| image | 正常图片 | String | — | — |
| bottomTitle | 底部标题 | String | — | — |
| desc | 底部追加信息 | Object | {desc.leftKeyword:String, desc.rightKeyword:String}  | — |
| mask | 是否有遮罩&&遮罩种类 | String | card/video/image  | — |
| maskCard | 卡片遮罩 | Object |  {maskCard.title:String, maskCard.author:String,  maskCard.play:String} | — |
| maskVideo | 视频遮罩 | Object | {maskVideo.images:Array, maskVideo.index:Array, maskVideo.barrage:Array}  | — |
| maskCard | 是否有遮罩&&遮罩种类 | String | card/video/image  | — |
| videoTime | 视频时长(单位:秒) | Number |  — | — |
| link | 跳转链接 | String | — | — |


## 事件

| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
| mask-hover | 鼠标移入触发 | - |