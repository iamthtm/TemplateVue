/*global Vue*/
var app = new Vue({
  el: '#app',
  data: {
    vuejs: 'Hello Vue.js!'
  },
  methods: {
    getApi : function () {
      var url = 'https://sheetsu.com/apis/v1.0/a56386b650d1'
      this.$http.get(url).then(function (res) {
        console.log(res)
      })

    }
  },
  ready: function () {
    this.getApi()
  }

})
console.log(app)
