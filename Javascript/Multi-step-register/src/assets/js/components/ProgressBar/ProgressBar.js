export const ProgressBar = (step) => {
  let stepPoint = ''
  for (let i = 0; i < 3; i++) {
    stepPoint += `<span class="w-3 h-3 rounded-[50%] bg-[#636363] 
    "></span>`
  }

  console.log(step)

  return (`
    <div class="absolute flex gap-4 justify-center items-center bottom-0 -translate-x-2/4 left-2/4 translate-y-12">
      <p class="w-max absolute text-label -translate-x-full mr-16 text-xs">
        Step 1 of 3
      </p>
        ${stepPoint}
    </div>
  `)
}

export default ProgressBar

//  bg-checked-bg  shadow-stepActive
