app.component('review-form', {
  template:
  /*html*/
  
  `
  <div class="product-container">
    <div class="product-image">
      <img v-bind:src="image">
    </div>     
  </div>
  <form class="review-form" @submit.prevent="onSubmit">
    <h3>Naves espaciales</h3>
    <label for="name">Nombre:</label>
    <input id="name" v-model="name">

    <label for="review">Potencia:</label>      
    <input type="number" min="0" id="review" v-model="review">

    <label for="rating">Raza:</label>
    <select id="rating" v-model.number="rating">
      <option v-for="(variant, index) in variants" 
        :key="variant.id" 
        @click="updateVariant(index)" 
        class="color-circle" 
        :style="{ backgroundColor: variant.color }"> {{variants[index].raza}} </option>
    </select>

    <input class="button" type="submit" value="Añadir">  

  </form>`,
  data() {
    return {
      name: '',
      review: '',
      rating: null,
      selectedVariant: 0,
      variants: [
        { id: 2234, raza: 'Alien', image: './assets/img/aliens.jpg'},
        { id: 2235, raza: 'Humano', image: './assets/img/humanos.webp'},
        { id: 2236, raza: 'Predator', image: './assets/img/predator.jpg'}
      ]
    }
  },
  methods: {
    onSubmit() {
      if (this.name === '' || this.review === '' || this.rating === null || this.recommend === null) {
        alert('Los campos no están completos, por favor, rellénelos.')
        return
      }      
      let productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating

      }
      this.$emit('review-submitted', productReview)

      this.name = ''
      this.review = ''
      this.rating = null
      
    },
    updateVariant(index) {
      this.selectedVariant = index
    }

  },
  computed: {
      image() {
          return this.variants[this.selectedVariant].image
      }
  }
})