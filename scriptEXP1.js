/* Exercice 1 : List of people*/
const people=["Greg", "Mary", "Devon", "James"];
// 1.Write code to remove “Greg” from the array.people
people.shift()


// 2. Write code to replace “James” to “Jason”.

people[people.length -1]="james"

// 3 Write code to add your name to the end of the array
 people.push("Diby")
// 4 Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
console.log(people.indexOf("Mary"))
// 5 Write code to make a copy of the array using the method.people slice
 const newArray = people.slice(1)
 console.log('newArray:', newArray)
//6 Write code that gives the index of “Foo”. Why does it return -1 ?
console.log(people.indexOf("“Foo”")) // because there exception out
//7 Create a variable called which value is the last element of the array.
const last = people[people.length -1]
console.log('las:', last)
console.log(people)

// part 2

// 1 Using a loop, iterate through the array and console.log each person.
for (const pers of people){
    console.log("this person is :", pers)
}

// 2. Using a loop, iterate through the array and exit the loop after you console.log “Jason” 

for (const pers of people){
    console.log("this person is :", pers)
    if (pers==="james"){ break}
}