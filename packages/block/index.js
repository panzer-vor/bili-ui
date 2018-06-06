/**
 * @author xyk
 * Date: 18/5/4
 */
import BBlock from './src/index.vue';

BBlock.install = function (Vue) {
  Vue.component(BBlock.name, BBlock);
};



export default BBlock;
