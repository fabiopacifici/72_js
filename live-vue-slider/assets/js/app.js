const {
  createApp
} = Vue
createApp({
  data() {
    return {
      activeImage: 0,
      intervalId: null,
      play: null,
      movie: {
        title: 'Mandalorian',
        category: 'Action',
        length: 60,
        images: [
          'https://www.themoviedb.org/t/p/w500/b3zVRZ9R2QyV0klRESMLKaBwQqm.jpg',
          'https://www.themoviedb.org/t/p/w220_and_h330_face/BbNvKCuEF4SRzFXR16aK6ISFtR.jpg',
          'https://www.themoviedb.org/t/p/w220_and_h330_face/AhifyrSNkRVFMJ94CEMfBv1FaMz.jpg',
          'https://www.themoviedb.org/t/p/w220_and_h330_face/msx02cHuCa33PUQV6Ez5KhaJa4Q.jpg',
          'https://www.themoviedb.org/t/p/w220_and_h330_face/9VdgIj9R9Z9dfDoO76v57V6FF6y.jpg'

        ]

      }
    }
  },
  methods: {
    prevImage() {
      this.activeImage--
      if (this.activeImage < 0) {
        this.activeImage = this.movie.images.length - 1
      }
    },
    nextImage() {
      console.log('slide to next image');
      this.activeImage++
      if (this.activeImage === this.movie.images.length) {
        this.activeImage = 0
      }
    },
    changeImage(index) {
      //console.log(index);
      this.activeImage = index
    },
    startAutoPlay() {
      this.play = true
      this.intervalId = setInterval(() => {
        this.nextImage()
      }, 1000)

    },
    stopAutoPlay() {
      this.play = false
      clearInterval(this.intervalId)
    }

  },
  mounted() {
    //console.log(this.movie)
    this.startAutoPlay()
  }
}).mount('#app')