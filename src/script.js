const API_KEY =`427831e0c241af4dae179660da6019b2`
const image_path =`https://image.tmdb.org/t/p/w1280`


const input = document.querySelector('.search input')
const btn = document.querySelector('.search button')
const main_grid_title = document.querySelector('.favorites h1')
const main_grid = document.querySelector('.movies-grid')


async function get_movie_by_search (search_term) {
    const resp = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search_term}`)
    const respData = await resp.json()
    return respData.results
}

btn.addEventListener('click', add_searched_movies_to_dom)

async function add_searched_movies_to_dom () {
    const data = await get_movie_by_search(input.value)
    console.log(data)

    main_grid_title.innerText = `Search Results...`
    main_grid.innerHTML = data.map(e => {
        return `
                <div class="card" data-id="${e.id}">
                    <div class="img">
                        <img src="${image_path + e.poster_path}">
                    </div>
                    <div class="info">
                        <h2>${e.title}</h2>
                        <div class="single-info">
                            <span>Rate:</span>
                            <span>${e.vote_avarage}</span>
                        </div>
                        <div class="single-info">
                            <span>Release Date:</span>
                            <span>${e.release_date}</span>
                        </div>
                    </div>
                </div>
        `
    }).join('')

    
}

