const {
  createApp
} = Vue
createApp({
  data() {
    return {
      my_data: null,
      err: null,
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/int'

    }
  },
  methods: {
    callApi(url) {
      // Fai la chiamata qui
      axios
        .get(url)
        .then(response => {
          console.log(response); // <-- guardo cosa contiene
          console.log(response.data); // <-- seleziono i dati che sono sempre dentro la prop data
          this.my_data = response.data.response // <-- assegno ad una prop dell oggetto data il valore del reponso
        })
        .catch(err => {
          console.log(err.message);
          this.err = err.message
        })
    }
  },
  mounted() {
    // richiama metodo callApi()
    this.callApi(this.apiUrl)
    /*  axios
       .get(this.apiUrl)
       .then(response => {
         console.log(response); // <-- guardo cosa contiene
         console.log(response.data); // <-- seleziono i dati che sono sempre dentro la prop data
         this.my_data = response.data.response // <-- assegno ad una prop dell oggetto data il valore del reponso
       })
       .catch(err => {
         console.log(err.message);
         this.err = err.message
       }) */
  }
}).mount('#app')