const Btn = ({content = 'Empty', type}) => {
  const primary = 'bg-[var(--btn-clr)] text-white font-semibold uppercase rounded-xl hover:scale-95';
  const link = 'text-[var(--btn-clr)] font-semibold relative  before:absolute  before:w-[55%] before:bg-[var(--btn-clr)] before:h-[.15rem] before:bottom-[.8rem]';
  
  return (`
    <a class="${type === 'primary' ? primary : link} py-3 px-12" 
      href="#" 
      target="_blank" 
      rel="noopener noreferrer">
      ${content}
    </a>
  `)
}

export default Btn
