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
  <section class="grid gap-8">
    <header class="text-[var(--color-dark-2)]">
      <span class="font-semibold uppercase text-sm">
        😎  Simple way to communicate
      </span>
      <h1 class="text-7xl font-black leading-normal">
        Actions for Accessibility in Design
      </h1>
    </header>
    <p class="font-semibold text-[var(--a)] text-lg max-w-md leading-relaxed">
      The fastest way to build and deploy websites with resusable components.
    </p>
    <div>
      ${linkName.map(link => Btn(link)).join("")}
    </div>
    ${ListDetails()}
  </section>`)
}

export default Presentation
