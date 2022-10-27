const {
  createApp
} = Vue

createApp({

  data() {
    return {
      image: 'https://picsum.photos/400/200',
      message: 'Welcome to Vue 3 part 2'
    }
  }

}).mount('#app')