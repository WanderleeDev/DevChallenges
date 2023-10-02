const BoxMessage = ({nameStyle, inputStyle, focusStyle}) => {
  return (`
    <label class="grid h-44 grid-rows-[auto_1fr] md:col-span-2">
      <span class="${nameStyle}">Message</span>
      <textarea class="${inputStyle} ${focusStyle} resize-none">
      </textarea>
    </label>
  `)
}

export default BoxMessage

