export const people = [
    {
        id: "0",
        name: "Hyeoung Dong",
        age: 27,
        gender: "male"
    },
    {
        id: "1",
        name: "Ji Hwan",
        age: 27,
        gender: "male"
    },
    {
        id: "2",
        name: "Su Hoo",
        age: 25,
        gender: "male"
    },
    {
        id: "3",
        name: "Gank me",
        age: 27,
        gender: "male"
    },
    {
        id: "4",
        name: "Tae Hyun",
        age: 26,
        gender: "male"
    }
];

export const getById = (id)=>{
    const filteredPeople = people.filter(person=> String(id) === person.id);
    return filteredPeople[0];
} 