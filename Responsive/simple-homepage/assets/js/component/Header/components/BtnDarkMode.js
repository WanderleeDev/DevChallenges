const BtnDarkMode = () => {
  
  return (`
    <button id="btnDark" class="bg-[#223344] border-[#fff] border-[1px] p-1 grid gap-2 grid-cols-2 rounded-3xl lg:border-0">
      <svg class="text-[var(--color-light-1)] bg-[var(--color-dark-2)] rounded-[50%]" width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M15 4C15.292 4 15.438 4 15.5781 4.04183C16.192 4.22522 16.4775 4.93111 16.1637 5.48976C16.0921 5.61719 15.8744 5.82779 15.4389 6.249C13.935 7.70352 13 9.74257 13 12C13 14.2574 13.935 16.2965 15.4389 17.751C15.8744 18.1722 16.0921 18.3828 16.1637 18.5102C16.4775 19.0689 16.192 19.7748 15.5781 19.9582C15.438 20 15.292 20 15 20V20C10.5817 20 7 16.4183 7 12C7 7.58172 10.5817 4 15 4V4Z" fill="currentColor"/>
      </svg>

      <svg class="bg-[var(--color-light-1)] text-[var(--color-dark-2)] p-1 rounded-[50%]" width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="4" fill="currentColor"/>
        <path d="M12 5V3" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
        <path d="M12 21V19" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
        <path d="M16.9498 7.04996L18.364 5.63574" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
        <path d="M5.63608 18.3644L7.05029 16.9502" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
        <path d="M19 12L21 12" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
        <path d="M3 12L5 12" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
        <path d="M16.9498 16.95L18.364 18.3643" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
        <path d="M5.63608 5.63559L7.05029 7.0498" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
      </svg>
    </button>
  `)
}

export default BtnDarkMode
