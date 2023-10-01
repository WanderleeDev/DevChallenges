const listCheck = () => {
  const listContent = [
    'Checklist to Review an Academic Paper',
    'Peer Review Checklist',
    'Checklist for Editors, Reviewers, and Authors of SPIE Journals'
  ];

  return (`
    <ul class="grid gap-3 text-xs">
      ${listContent.map(check => (`
        <li class="grid grid-cols-[auto_1fr] gap-3 items-center">
          <span class="bg-imageBasic w-8 h-8 block">
          </span>
          <span>
            ${check}
          </span>
        </li>
      `)).join("")}
    </ul>
  `)
}

export default listCheck
