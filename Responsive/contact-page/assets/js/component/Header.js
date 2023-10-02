const Header = () => {
  return (`
    <header class="grid gap-16 w-full">
      <img class="justify-self-start" src="/assets/img/contact-form-icon.svg" alt="icon-form">
      <div class="justify-self-center text-center grid gap-4">
        <h1 class="w-header text-4xl font-black w-header leading-snug md:text-[4rem] justify-self-center">
          Interested in our business pricing?
        </h1>
        <p class="font-medium leading-snug lg:text-3xl md:leading-relaxed md:w-[50rem] justify-self-center">
          Fill out the form to view details and we’ll contact you as soon as possible.
        </p>
      </div>
    </header>`)
}

export default Header