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
    location.hash
 }

 function homePage(){
    console.log('Home!!');
    
    getTrendingPreview();
    getCategoriesPreview();
 }

 function categoriesPage(){
    console.log('Categories');
 }

 function moviesPage(){
    console.log('Movie');
 }

 function searchPage(){
    console.log('seacrh');
 }

 function trendsPage(){
    console.log('TRENDS!') ;
}
 navigation();