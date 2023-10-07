import './tag.css'

const Tag = (textTag = 'Empty Tag') => {
  return (`
    <span class="tag">
      ${textTag}
    </span>
  `)
}

export default Tag
