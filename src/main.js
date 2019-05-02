import App from './components/App.js';

Vue.use(Buefy)

new Vue({
  render: h => h(App),
}).$mount(`#app`);
