const User = (userData) => {
  return (`
    <div class="grid gap-2">
      ${userData.map(user => (`
        <div class="flex flex-wrap gap-2 overflow-hidden">
          <span class="text-label capitalize">${user.data}:</span>
          <p class="">${user.content}</p>
        </div>`)).join('')}
    </div>
  `)
}

export default User
