/**
 * @author xyk
 * Date: 17/11/9
 */
import BCarousel from './src/index.vue';

BCarousel.install = function (Vue) {
  Vue.component(BCarousel.name, BCarousel);
};

export default BCarousel;
