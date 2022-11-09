const {
  createApp
} = Vue
createApp({
  data() {
    return {
      emails: [],
      max: 10

    }
  },
  mounted() {
    console.log(axios);
    for (let i = 0; i < this.max; i++) {
      axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(resp => {
          console.log(resp);
          this.emails.push(resp.data.response)
        })
        .catch(e => {
          console.log(e.message);
        })
    }
  }
}).mount('#app')