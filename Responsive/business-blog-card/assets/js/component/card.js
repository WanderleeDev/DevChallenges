import tagUser from "./tagUser.js";

const Card = () => {
  return (`
  <div class="max-w-[23.2rem] justify-self-center bg-white rounded-xl grid gap-4 shadow-[0px_30px_100px_0px_rgba(17,23,41,0.05)]">
    <div class="grid gap-4 relative before:absolute before:inset-0  before:bg-imageBasic before:w-full">
      <img class="rounded-xl object-cover" src="/assets/img/hero-image-business-card.png" alt="catcus">
    </div>
    <div class="px-8 grid gap-2">
      <h1 class="font-medium text-2xl text-gray-700 leading-normal">
        Perfect solution for small business
      </h1>
      <p class="text-gray-500 text-base py-1">
      Small businesses need to generate leads to grow. You can use tools like Ringy.
      </p>
    </div>
    ${tagUser()}
  </div>
  `).trim();
};

export default Card
