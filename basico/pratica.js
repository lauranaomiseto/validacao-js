let name, age, isHuman
name = "Laura"
age = 20
isHuman = true

console.log(name, age, isHuman)
//concatenando (aspas simples não pode interpolar)
console.log('A ' + name + ' tem ' + age + ' anos')
//interpolando com crase
console.log(`A ${name} tem ${age} anos`)


//OBJECTS
const person = {
    name: 'Julia',
    age: 10,
    height: 165,
    isAdmin: true
}

console.log(`A ${person.name} tem ${person.age}`)

//ARRAYS
//array pode ter tipos de dados diferentes
const animals = [
    'leao wrarrr',
    'mamaco',
    {
        name: 'catu',
        age: 100
    }
]

console.log(`eu tenho ${animals.length} animais, e um deles é um ${animals[1]}`)
console.log(`o meu ${animals[2].name} é centenário`)