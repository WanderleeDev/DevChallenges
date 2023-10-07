import './button.css'
import refresh from '../../../images/Regroup.svg'
import copy from '../../../images/link.svg'

const Button = () => {
  const images = [
    {
      id: 'btn-copy',
      img: refresh,
      alt: 'refresh quote'
    },
    {
      id: 'btn-refresh',
      img: copy,
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
