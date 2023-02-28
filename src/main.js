 
 // En esta funcion se crean los elementos HTML desde javascrip para que por cada iteracion se muestre un elemento
 async function getTrendingPreview(){
    const res = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=' +API_KEY);
    const data = await res.json();

    const movies = data.results;
    console.log({data, movies});

    movies.forEach(movie => {
        // llamamos al contenedor 
        const trendingPreviewMoviesContainer = document.querySelector('#trendingPreview .trendingPreview-movieList');
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');

        //agregamos las propiedades de las imagenes desde js
        const movieImage = document.createElement('img');
        movieImage.classList.add('movie-img');
        movieImage.setAttribute('alt', movie.title);
        movieImage.setAttribute(
            'src',
            'https://image.tmdb.org/t/p/w300/' + movie.poster_path,
        );

        movieContainer.appendChild(movieImage);
            trendingPreviewMoviesContainer.appendChild(movieContainer);
    })
  }

  getTrendingPreview();
  async function getCategoriesPreview(){
    const res = await fetch('https://api.themoviedb.org/3//genre/movie/list?api_key=' +API_KEY);
    const data = await res.json();

    const categories = data.genres;
    console.log({data, categories});

    categories.forEach(category => {
        // llamamos al contenedor 
        const PreviewCategoriesContainer = document.querySelector('#categoriesPreview .categoriesPreview-list');
        const categoryContainer = document.createElement('div');

        categoryContainer.classList.add('category-container');

        //agregamos las propiedades de las imagenes desde js
        const categoryTitle = document.createElement('h3');
        categoryTitle.classList.add('category-title');
        categoryTitle.setAttribute('id','id' + category.id);
        const categoryTitleText = document.createTextNode(category.name);

        categoryTitle.appendChild(categoryTitleText);
        categoryContainer.appendChild(categoryTitle);
        PreviewCategoriesContainer.appendChild(categoryContainer);
    })
  }
  getCategoriesPreview();