# Search
----
### 基础用法

<div class="demo-block">
  <b-search @click="clickParent"></b-search>
</div>

<script>
  export default {

    methods:{
      clickParent(v){
        alert(v)
      }
    }
  }
</script>
