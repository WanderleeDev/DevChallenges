import groupCard from "./groupCard.js"
import listCheck from "./listCheck.js"

export const Testimonial = () => {
  return (`
    <section class="grid gap-8">
      <div class="grid gap-4">
        <span class="block bg-imageStar w-10 h-10 rounded-[50%] bg-yellow-500"></span>
        <h1 class="text-3xl font-medium text-gray-800">
          Reviewers
        </h1>
        <p class="text-base">
          Reviewers is where people can access guidelines, checklists, and other tools to assist them in reviewing papers or manuscripts. It provides a structured approach to ensure that the review process is thorough, efficient, and consistent.
        </p>
      </div>
      ${listCheck()}
    </section>
    ${groupCard()}
  `).trim()
}

export default Testimonial

