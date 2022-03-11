app.component('review-list', {
  props: {
    reviews: {
      type: Array,
      required: true
    }
  },
  template:
  /*html*/
  `
  <div class="review-container">
  <h3>Datos:</h3>
    <ul>
      <li v-for="(review, index) in reviews" :key="index">
        {{ review.name }} de raza {{ review.rating }} conduce una nave con potencia de: 
        <br/>
        --{{ review.review }}-- caballos.
        <br/>
      </li>
    </ul>
  </div>
`
})