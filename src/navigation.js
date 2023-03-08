 searchFormBtn.addEventListener('click', () =>{
   

   location.hash = '#search=' + searchFormInput.value.trim();
    })
 trendingBtn.addEventListener('click', () =>{
    location.hash = '#trends';
 })

 arrowBtn.addEventListener('click', () =>{
    if(document.domain !== 'localhost'){
      location.hash = '#home';
    }else{
      history.back();
    }
 })
 window.addEventListener('hashchange', navigation, false);
 window.addEventListener('DOMContentLoaded', navigation, false);
 
 function navigation (){
    console.log({location});
    if(location.hash.startsWith('#trends')){
        trendsPage();
    }else if (location.hash.startsWith('#search=')){
        searchPage();
    }else if (location.hash.startsWith('#movie=')){
        moviesPage();
    }else if (location.hash.startsWith('#category=')){
        categoriesPage();
    }else{
        homePage();
    }
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
 }

 function homePage(){
    console.log('Home!!');
    
    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.add('inactive');
    headerTitle.classList.remove('inactive');

    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.remove('inactive');

    trendingPreviewSection.classList.remove('inactive');
    categoriesPreviewSection.classList.remove('inactive');

    genericSection.classList.add('inactive');
    movieDetailSection.classList.add('inactive');

    getTrendingPreview();
    getCategoriesPreview();
 }

 function categoriesPage(){
    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    headerTitle.classList.add('inactive');

    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');

    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');
    console.log('Categories');
    const [ _, categoryData] = location.hash.split('=');
    
    const [categoryId, categoryName] = categoryData.split('-');
    const newName = decodeURI(categoryName);
    headerCategoryTitle.innerHTML = newName;
    getMoviesByCategory(categoryId);
 }

 function moviesPage(){
    headerSection.classList.add('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.add('header-arrow--white');
    headerTitle.classList.add('inactive');

    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');

    genericSection.classList.add('inactive');
    movieDetailSection.classList.remove('inactive');
    console.log('Movie');
 }

 function searchPage(){
    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    headerTitle.classList.add('inactive');

    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.remove('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');

    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');
    console.log('seacrh');

    const [ _, query] = location.hash.split('=');
    getMoviesBySearch(query);

 }

 function trendsPage(){
    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    headerTitle.classList.add('inactive');

    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');

    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');
    console.log('TRENDS!') ;

    headerCategoryTitle.innerHTML = 'Tendencias';
    getTrendingMovies();
}

 navigation();