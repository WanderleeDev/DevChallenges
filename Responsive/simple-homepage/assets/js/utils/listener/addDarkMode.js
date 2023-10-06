const btnHandler = () => {
  const targetElement = document.querySelector('html'); 
  if (!targetElement) {
    throw  new Error ('asas')
  }
  targetElement.classList.toggle('dark');
};

export default btnHandler
