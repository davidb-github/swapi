fetch("http://swapi.dev/api/starships/")
  .then(res => res.json())
  .then(parsedStarships => {
      const starships = parsedStarships
      // console.table(starships)
      render(starships.results)
  })


  const render = starshipsArray => {
    const contentTarget = document.querySelector('#container')

    let starshipsHTML = starshipsArray.map(ship => {
      return `
      <section>
      <p>${ship.name}:  ${ship.manufacturer}</p>
      </section>
      `
    }).join("")

    contentTarget.innerHTML = `
    <article>
    <h3> Starships</h3>
    ${starshipsHTML}
    </article>
    `
  }

