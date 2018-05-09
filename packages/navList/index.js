/**
 * @author monkeywang
 * Date: 17/11/9
 */
import BNavList from './src/NavList.vue';

BNavList.install = function (Vue) {
  Vue.component(BNavList.name, BNavList);
};

export default BNavList;
