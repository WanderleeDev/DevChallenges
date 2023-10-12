import Error from '../../../img/404.webp'

const ErrorPage = () => {
  return (`    
  <section class="min-h-screen w-[100dvw] grid place-content-center place-items-center bg-black">
    <img class="select-none" src=${Error} alt="error img" />
    <h1>NOT FOUND</h1>
    <p class="text-white font-medium">
      The route you want to access does not exist: 
      <span class="underline cursor-not-allowed">
        ${window.location.pathname}
      </span> 
    </p>
    <a 
    class='my-4 hover:underline bg-slate-300/80 py-2 px-4 rounded-md text-slate-900 font-semibold outline-offset-2'
    title="to home"
    aria-label="to home"
    href="/">
      Back to Home
    </a>
  </section>`)
}

export default ErrorPage
