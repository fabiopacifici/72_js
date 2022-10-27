const {
  createApp
} = Vue


createApp({
  data() {
    return {
      is_visible: true,
      //movies: ['matrix', 'ritorno al futuro', 'dogma', 'esorcista'],
      movies: [{
          name: 'Matrix',
          category: 'Action'
        },
        {
          name: 'Matrix 2',
          category: 'Action'
        },
        {
          name: 'Matrix 3',
          category: 'Action'
        }
      ],

    }
  },
  /*  methods: {
     showText() {
       this.is_visible = true
     }
   } */
}).mount('#app')