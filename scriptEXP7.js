const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

  // 1. A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.


for (let name of names){
  console.log(name)
  
}

  // Console.log the name of their secret society. The output should be “ABJKPS”
  let secretname = ""
  for (let namex of names.sort()){
   
    secretname =  secretname + namex[0]
  }
  console.log(secretname)