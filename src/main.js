import 'onsenui/css/onsenui.css'
import 'onsenui/css/dark-onsen-css-components.css'

import Vue from 'vue'
import VueOnsen from 'vue-onsenui';
import router from './router'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueOnsen)

const scr = document.createElement('script');
scr.src = 'https://spreadsheets.google.com/feeds/list/1UqgHRI2ADJyGsB3KQ8RjkLeGc6rVCf4gT1QFm5GpIbI/1/public/values?alt=json-in-script&callback=hi';
document.body.appendChild(scr);

window.hi = (data) => {
  const events = data.feed.entry.map((event, indx) => {
    const ret = {};
    Object.keys(event).filter((key) => key.match(/gsx\$/)).forEach((key) => {
      ret[key.replace('gsx$', '')] = event[key]['$t'];
      ret.index = indx;
      if (ret.starttime) {
        ret.sort_starttime = new Date(`2000-01-${ret.starttime.match(/AM/i) ? '2' : '1'} ${ret.starttime}`).getTime();
      } else {
        ret.sort_starttime = 40;
      }
      
    });
    return ret;
  });
  window.events = events;

  new Vue({
    render: h => h(App),
    router,
  }).$mount('#app')

}
