const app = Vue.createApp({
    data() {
      return {
        items: [
          { src: 'img/01.webp' },
          { src: 'img/02.webp' },
          { src: 'img/03.webp' },
          { src: 'img/04.webp' },
          { src: 'img/05.webp' },
        ],
        activeItem: 0,
      };
    },
    methods: {
      changeItem(index) {
        this.activeItem = index;
      },
      nextItem() {
        this.activeItem = (this.activeItem + 1) % this.items.length;
      },
      prevItem() {
        this.activeItem = (this.activeItem - 1 + this.items.length) % this.items.length;
      },
    },
   
  });
  
  app.mount('#app');
  