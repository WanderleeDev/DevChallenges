import cardReview from "./cardReview.js"

const groupCard = () => {
  const cardsData = [
    {
      img: '/assets/img/google-testimonial.png',
      title: 'Samantha Lee',
      description: 'The checklist ensures that the review process is thorough',
      stars: 4
    },
    {
      img: '/assets/img/meta-testimonial.png',
      title: 'Rachel Patel',
      description: 'I highly recommend the Writecream Business Description',
      stars: 5
    }
  ]
  return (`
    <div class="grid gap-10 first:bg-red-100">
    ${cardsData.map(card => (`
      ${cardReview(card)}
    `)).join("")}
    </div>
  `)
}

export default groupCard
