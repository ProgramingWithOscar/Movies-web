 
 const api = axios.create({
  baseURL : 'https://api.themoviedb.org/3/',
  headers:{
    'Content-Type': 'application/json;charset=utf-8',
  },
  params :{
    'api_key' : API_KEY,
  }
 })
 //Utils

 function createMovies(movies, container){
  container.innerHTML = "";

  movies.forEach(movie => {
        // llamamos al contenedor 
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
        trendingMoviesPreviewList.appendChild(movieContainer);
  });
 }

 function createCategories(categories,container){
      container.innerHTML = "";
     categories.forEach(category => {
    // llamamos al contenedor 
    const categoryContainer = document.createElement('div');

    categoryContainer.classList.add('category-container');

    //agregamos las propiedades de las imagenes desde js
    const categoryTitle = document.createElement('h3');
    categoryTitle.classList.add('category-title');
    categoryTitle.setAttribute('id','id' + category.id);
    categoryTitle.addEventListener('click' , () =>{
      location.hash = '#category=' + category.id +'-'+ category.name;
    })
    const categoryTitleText = document.createTextNode(category.name);

    categoryTitle.appendChild(categoryTitleText);
    categoryContainer.appendChild(categoryTitle);
    container.appendChild(categoryContainer);
})
 }
 // En esta funcion se crean los elementos HTML desde javascrip para que por cada iteracion se muestre un elemento
 async function getTrendingPreview(){
  //aca colocando { data } ya evitamos hcaer el res.json
    const { data } = await api('trending/movie/day');

    const movies = data.results;
     createMovies(movies, trendingMoviesPreviewList);
  
  }

  async function getCategoriesPreview(){
    const { data } = await api('genre/movie/list');

    const categories = data.genres;
    console.log({data, categories});


    createCategories(categories,categoriesPreviewList );
  }

  /*
    Location y hash{
      la propiedad de location (hash) permite leer la URL 
    }

    haschange{
      permite ejecutar cierto codigo cada vez que cambiemos el hash
    }
   */
   
    async function getMoviesByCategory(id){
      //aca colocando { data } ya evitamos hcaer el res.json
        const { data } = await api('discover/movie',{
          params :{
            with_genres : id,
          }
        });
    
        const movies = data.results;
        console.log({data, movies});
        genericSection.innerHTML = "";
        movies.forEach(movie => {
            // llamamos al contenedor 
            window.scrollTo(0,0);
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
            genericSection.appendChild(movieContainer);
        })
      }

      async function getMoviesBySearch(query){
        //aca colocando { data } ya evitamos hcaer el res.json
          const { data } = await api('search/movie',{
            params :{
              query : query,
            }
          });
      
          const movies = data.results;
          console.log({data, movies});
          genericSection.innerHTML = "";
          movies.forEach(movie => {
              // llamamos al contenedor 
              window.scrollTo(0,0);
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
              genericSection.appendChild(movieContainer);
          })
        }


        async function getTrendingMovies(){
          //aca colocando { data } ya evitamos hcaer el res.json
            const { data } = await api('trending/movie/day');
        
            const movies = data.results;
            genericSection.innerHTML = "";
            movies.forEach(movie => {
                // llamamos al contenedor 
                window.scrollTo(0,0);
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
                genericSection.appendChild(movieContainer);
            })
          }
          
    getTrendingPreview();
    getCategoriesPreview();
