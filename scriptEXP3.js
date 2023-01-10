//1 Prompt the user for a number.
//Hint : Check the data type you receive from the prompt (ie. Use the method)typeof
let reponse = prompt("please enter un number")
let result = Number(reponse)
console.log('result :', result)

//2 While the number is smaller than 10 continue asking the user for a new number.
//Tip : Which loop is more relevant for this situation?while
let results = null
while (results != 10){
let reponses = prompt("please enter un number")
results = Number(reponses)
}