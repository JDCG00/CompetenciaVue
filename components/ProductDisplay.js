app.component('product-display', {
  template: 
  /*html*/
  `<div class="product-display">
    <review-form @review-submitted="addReview"></review-form>
    <review-list v-if="reviews.length" :reviews="reviews"></review-list>
  </div>`,
  data() {
    return {
        reviews: []
    }
  },
  methods: {
      addReview(review) {
        this.reviews.push(review)
      }
  }
})