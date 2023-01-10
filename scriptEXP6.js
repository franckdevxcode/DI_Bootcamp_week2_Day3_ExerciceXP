const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }

  // 1. Given the object above and using a , console.log “my name is Rudolf the raindeer”for loop
let phrase = ""
  for (let item in details){
   
    phrase = phrase + " " + item + " " + details[item]
  }
  console.log(phrase)