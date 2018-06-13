<template>
  <div class="ticket-count">
    <!-- 减号 -->
    <div
      class="count-reduce-plus"
      @click = 'reduce'>
      <b-icon value="reduce" v-bind:class="countNumber > 0 ? 'f25d8e' : 'ccd0d7'"></b-icon>
    </div>
    <!-- 数字 -->
    <div class="count-number">
      {{countNumber}}
    </div>
    <!-- 加号 -->
    <div
      class="count-reduce-plus"
      @click = 'plus'>
      <b-icon value="plus" v-bind:class="countNumber >= maxNumber ? 'ccd0d7' : 'f25d8e'"></b-icon>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'BCount',
    props: {
      maxNumber:{
        type:Number,
        default:99
      },
      baseNumber: {
        type:Number,
        default:1
      }
    },
    data() {
      return {
        countNumber:1,
      }
    },
    created() {
      this.countNumber = this.baseNumber
    },
    methods: {
      plus:function(){
        var max = this.maxNumber

        if(this.countNumber < max ){
          this.countNumber ++
        }else{
          this.countNumber = max
        }
        this.$parent.baseNumber = this.countNumber
        this.$emit('plus')
      },
      reduce:function(){
        if( this.countNumber > 1 ){
          this.countNumber -= 1
        } else {
          this.countNumber = 0
        }
        this.$parent.baseNumber = this.countNumber
        this.$emit('reduce')
      }
    }
  }
</script>

<style scoped>

  .ticket-count{
    display: flex;
    align-items: center;
    height: 38px;
    line-height: 38px;
    border-radius: 3px;
    border: 1px solid #ccd0d7;
    width: 156px;
  }

  .f25d8e{
    color: #f25d8e;
  }

  .ccd0d7{
    color: #ccd0d7;
  }

  .count-reduce-plus{
    width: 54px;
    height: 38px;
    line-height: 38px;
    cursor: pointer;
    text-align: center;
  }

  .count-number{
    width: 48px;
    height: 38px;
    line-height: 38px;
    text-align: center;
    font-size: 18px;
  }



</style>
