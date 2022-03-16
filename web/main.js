let name = "Frat Quintero";
console.log(`My name is ${name}`);
for (let i=0; i<9; i++) {
    document.write(i+"<br>");
}

const todos = [
    {
        name: "Frat Quintero",
        age: 56,
        city: "Bogotá",
        id: true,
    },
    {
        name: "Sandra Vega",
        age: 50,
        city: "Bogotá",
        id: true,
    },
    {
        name: "Andrés Quintero",
        age: 14,
        city: "Los Angeles",
        id: false,
    }
];

const peopleWithID = todos.filter(function(todo) {
    return todo.id;
}).map(function (todo) {
    return todo.name;
    
})

console.log(peopleWithID);
