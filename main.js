  const app = new Vue({
    el: '#app',
    data: {
      contact: 'name'
    },
    methods: {
      call: function() {
        axios.get('./src/data/data.json')
        .then(function (response) {
          app.contact = response.data.contact.name
        })
      }
    }
  })

app.call()
