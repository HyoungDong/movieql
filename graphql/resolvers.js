const Dong ={
    name:"Hyeoung Dong",
    age:27,
    gender:"male"
}

const resolvers = {
    Query:{
        person:()=>Dong
    }
}
export default resolvers;