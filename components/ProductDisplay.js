app.component('product-display', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: 
  /*html*/
  `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img v-bind:src="image">
      </div>
      <div 
          v-for="(variant, index) in variants" 
          :key="variant.id" 
          @click="updateVariant(index)" 
          class="color-circle" 
          :style="{ backgroundColor: variant.color }">
        </div>
      <div class="product-info">
        <h1>{{ title }}</h1>
      </div>
    </div>
    <review-form @review-submitted="addReview"></review-form>
    <review-list v-if="reviews.length" :reviews="reviews"></review-list>
  </div>`,
  data() {
    return {
        product: 'Naves espaciales',
        selectedVariant: 0,
        variants: [
          { id: 2234, raza: 'alien', image: './assets/img/aliens.jpg'},
          { id: 2235, raza: 'humano', image: './assets/img/humanos.webp'},
          { id: 2236, raza: 'predator', image: './assets/img/predator.jpg'}
        ],
        reviews: []
    }
  },
  methods: {
      updateVariant(index) {
          this.selectedVariant = index
      },
      addReview(review) {
        this.reviews.push(review)
      }
  },
  computed: {
      title() {
          return this.product
      },
      image() {
          return this.variants[this.selectedVariant].image
      }
  }
})