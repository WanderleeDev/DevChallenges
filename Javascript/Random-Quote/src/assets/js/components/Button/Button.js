import './button.css'

const Button = () => {
  const images = [
    {
      id: 'btn-copy',
      img: '/src/assets/images/Regroup.svg',
      alt: 'refresh quote'
    },
    {
      id: 'btn-refresh',
      img: '/src/assets/images/link.svg',
      alt: 'copy quote'
    }
  ]

  return (`
    <div class="container">
      ${images.map(img => (`
        <button 
          id="${img.id}"
          class="container-btn"
          type="button"
          title="${img.alt}" 
          aria-label="${img.alt}"
          style="background-image: url(${img.img})">
        </button>
      `)).join('')}
    </div>
  `)
}

export default Button
