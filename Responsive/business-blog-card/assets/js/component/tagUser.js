export const tagUser = () => {
  return (`
  <div class="text-gray-500 text-xs p-8 border-gray-150 border-t text-gray-500 grid grid-cols-[auto_1fr] gap-4 items-center">
    <img class="object-cover w-10 h-10 rounded-[50%]" src="/assets/img/avatar-image-business-card.png" alt="catcus">
    <div>
      <span class="block font-black text-base">
        Amy Burgess
      </span>
      <span class="block text-xs">
        Customer Manger, Solution Oy
      </span>
    </div>
  </div>`).trim()
}

export default tagUser
