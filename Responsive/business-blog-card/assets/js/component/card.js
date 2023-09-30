const Card = () => {
  return (`
  <div class="max-w-[23.2rem] justify-self-center bg-white rounded-xl grid gap-4 shadow-[0px_30px_100px_0px_rgba(17,23,41,0.05)]">
    <figure class="px-4 pt-4 grid gap-4">
      <img class="rounded-xl" src="/images/cactus_img.jpg" alt="catcus object-cover">
      <figcaption class="bg-purple-200 text-xs w-min text-purple-600 py-1 px-4 font-medium rounded-xl">
        Design
      </figcaption>
    </figure>
    <div class="px-4">
      <h1 class="font-medium text-xl text-gray-700">Embracing Minimalism</h1>
      <p class="text-gray-400 text-base py-1">
        From minimalist sculptures to minimalist paintings, this blog will inspire you to appreciate the beauty that lies in simplicity.
      </p>
    </div>
    <span class="text-gray-500 text-xs p-4 py-5 border-t text-gray-500">
      Annie Spratt
    </span>
  </div>
  `).trim();
};

export default Card
