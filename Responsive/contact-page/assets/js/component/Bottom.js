const Bottom = ({inputStyle, focusStyle}) => {
  return (`
    <button class="${inputStyle} ${focusStyle} text-violet-800 font-semibold cursor-pointer md:col-span-2" type="submit">
      Contact Sales
    </button>   
  `)
}

export default Bottom
