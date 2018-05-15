
<script>

export default {
  name: 'BIcon',
  props: {
    value: {
      type: String
    },
    klass: {
      type: String,
      default: ''
    },
  },
  render(h){
    const {value, klass} = this
    let c = klass.split(' ')
    return h('i', {
      class: [`b-${value}`,...[klass]],
      on:{
        '!click':this.onClick
      }
    })
  },
  methods:{
    onClick(){
      this.$emit('iconClick')
    }
  }
}
</script>

<style scoped>
  @font-face {
  font-family: 'iconfont';  /* project id 653599 */
  src: url('//at.alicdn.com/t/font_653599_phdnltqtcfvfgvi.eot');
  src: url('//at.alicdn.com/t/font_653599_phdnltqtcfvfgvi.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_653599_phdnltqtcfvfgvi.woff') format('woff'),
  url('//at.alicdn.com/t/font_653599_phdnltqtcfvfgvi.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_653599_phdnltqtcfvfgvi.svg#iconfont') format('svg');
}
  i{
    font-family:"iconfont" !important;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }
  .b-sort::after{
    content:"\e602"
  }
  .b-top::after{
    content:"\e67f"
  }
  .b-search::after{
    content:"\e697"
  }
  .b-more::after{
    content:"\e614"
  }
  .b-home::after{
    content:"\e660"
  }
  .b-shopcar-empty::after{
    content:"\e601"
  }
  .b-shopcar-fill::after{
    content:"\e600"
  }
</style>

