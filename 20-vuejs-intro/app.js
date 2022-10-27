 const {
   createApp
 } = Vue

 createApp({
   data() {
     return {
       message: 'Welcome to Vue 3 Classe 72',
       user_name: '',
       css_classes: 'bg-dark text-white p-4',
       is_disabled: false,
       css_attributes: {
         id: 'my_image',
         class: 'img-fluid',
         src: 'https://picsum.photos/400/200'
       }

     }
   }
 }).mount('#app')

 // Istanze multiple di Vue 
 /*  createApp({
    data() {
      return {
        message: 'Hello Vue 3!'
      }
    }
  }).mount('#site_header')

  createApp({
    data() {
      return {
        message: 'site main!'
      }
    }
  }).mount('#site_main') */
