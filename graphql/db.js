export let movies = [
    {
        id: 0,
        name: "Interstella",
        score: 10.0
    },
    {
        id: 1,
        name: "Catch me if you can",
        score: 9.9
    },
    {
        id: 2,
        name: "Your name is?",
        score: 9.9
    },
    {
        id: 3,
        name: "Taitanic",
        score:10.0
    },
    {
        id: 4,
        name: "Edge of tommorrow",
        score:10.0
    }
];

export const getMovies = () => movies;
export const getById = (id)=>{
    const filteredMovies = movies.filter(movie=> id === movie.id);
    return filteredMovies[0];
};
export const addMovie = (name,score) =>{
    const newMovie = {
        id:`${movies.length}`,
        name,
        score
    }
    movies.push(newMovie);
    return newMovie;
}
export const deleteMovie=(id) =>{
    const cleanedMovies = movies.filter(movie=> movie.id !== id);
    if(movies.length > cleanedMovies.length){
        movies = cleanedMovies;
        return true;
    }
    else
    return false;
};