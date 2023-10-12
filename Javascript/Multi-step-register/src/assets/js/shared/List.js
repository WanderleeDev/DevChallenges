const List = (topics = []) => {
  return (`
    <div>
      <span class="text-label py-1 block">
        Topics:
      </span>
      <ul class="list-disc translate-x-6">
        ${topics.map(t => (`
          <li class="py-1">${t}</li>
        `)).join('')}
      </ul>
    </div>
  `)
}

export default List
