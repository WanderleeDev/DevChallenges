const showMenuMobile = () => {
  const targetElement = document.querySelector('#listOption'); 
  const iconClose = document.querySelector('#openIcon'); 
  const iconOpen = document.querySelector('#closeIcon'); 
  targetElement.classList.toggle('showMenuMobile');
  iconClose.classList.toggle('scaleIcon');
  iconOpen.classList.toggle('scaleIcon');
};

export default showMenuMobile
