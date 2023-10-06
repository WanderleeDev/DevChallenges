import ListDetails from "./components/ListDetails.js"
import Btn from "./components/Btn.js"

const Presentation = () => {
  const linkName = [
    {
      content: 'get started',
      type: 'primary' 
    },
    {
      content: 'Get live demo',
      type: 'link'
    }
  ]

  return (`
  <section class="grid gap-8 xl:col-start-1 xl:col-end-2 xl:row-start-2 xl:row-end-3 sm:px-12 xl:px-0">
    <header class="text-[var(--color-dark-2)]">
      <span class="font-semibold uppercase text-sm">
        😎  Simple way to communicate
      </span>
      <h1 class="text-5xl sm:text-7xl font-bold sm:leading-normal">
        Actions for Accessibility in Design
      </h1>
    </header>
    <p class="font-semibold text-[var(--text-clr)] text-lg max-w-md leading-relaxed">
      The fastest way to build and deploy websites with resusable components.
    </p>
    <div class="py-4">
      ${linkName.map(link => Btn(link)).join("")}
    </div>
    ${ListDetails()}
  </section>`)
}

export default Presentation
