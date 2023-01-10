// 1 Create an object called family with a few key value pairs.
let family ={
    pere: "diby",
    mere: "viviane",
    soeur: "ange"
}
// 2 Using a loop, console.log the keys of the object.for in
for (let keys in family){
console.log('key:', keys)
}
// 3Using a loop, console.log the values of the object.for in

for (let value in family){
    console.log("value : ",family[value])
    }