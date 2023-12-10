interface IListenerButtons {
  parentContainer: string;
  buttonChild: string;
  classActive: string;
}

export function setListenerButtons(params: IListenerButtons) {
  const containerControl = document.querySelector(`.${params.parentContainer}`) as HTMLDivElement;
  const listBtnControl = containerControl.querySelectorAll(`.${params.buttonChild}`);
  listBtnControl[1].classList.add( params.classActive );
  
  const handlerContainer = (e: Event) => {
    const element = e.target as HTMLElement;

    if (element.classList.contains( params.buttonChild )) {
      listBtnControl.forEach(btn => btn.classList.remove( params.classActive ));
      element.classList.add( params.classActive );
    }
  }

  containerControl?.addEventListener('click', (e: Event) => handlerContainer(e))
}
