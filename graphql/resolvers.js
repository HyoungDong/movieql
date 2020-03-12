import { getMovies } from "./db2";

const resolvers = { 
    Query:{
        movies:(_,{limit,rating})=>getMovies(limit,rating)
    }
}
export default resolvers;