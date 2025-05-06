document.addEventListener('DOMContentLoaded', async () => {
  const content = document.querySelector('#content')

  const url = 'https://rickandmortyapi.com/api/character'

  const hitAPI = async (url) => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      return data.results
    } catch (error) {
      console.error("Gagal ambil data:", error)
      return []
    }
  };

  const characters = await hitAPI(url)
  let dataHTML = ""
  characters.forEach(e => {
    dataHTML += `
      <div class="card">
        <img src="${e.image}" alt="${e.name}">
        <h3>${e.name}</h3>
        <p>Status: ${e.status}</p>
        <p>Species: ${e.species}</p>
      </div>
    `
  })
  content.innerHTML = dataHTML
})