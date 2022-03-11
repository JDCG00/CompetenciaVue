app.component('review-form', {
  template:
  /*html*/
  `<form class="review-form" @submit.prevent="onSubmit">
    <h3>Naves espaciales</h3>
    <label for="name">Nombre:</label>
    <input id="name" v-model="name">

    <label for="review">Potencia:</label>      
    <input type="number" min="0" id="review" v-model="review">

    <label for="rating">Raza:</label>
    <select id="rating" v-model.number="rating">
      <option>Alien</option>
      <option>Humano</option>
      <option>Predator</option>
    </select>

    <input class="button" type="submit" value="Enviar">  

  </form>`,
  data() {
    return {
      name: '',
      review: '',
      rating: null,
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

    }
  }
})