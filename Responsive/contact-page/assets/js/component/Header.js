const Header = () => {
  return (`
    <header class="grid gap-16 w-full">
      <img class="justify-self-start" src="/assets/img/contact-form-icon.svg" alt="icon-form">
      <div class="w-header text-center justify-self-center grid gap-4 lg:w-[30rem]">
        <h1 class="text-4xl font-black leading-snug lg:text-5xl lg:leading-normal">
          Interested in our business pricing?
        </h1>
        <p class="font-medium lg:text-xl">
          Fill out the form to view details and we’ll contact you as soon as possible.
        </p>
      </div>
    </header>`)
}

export default Header