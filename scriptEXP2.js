//Create an array called where the value is a list of your five favorite colors.colors
const Myfavoricolors= ["blue","red","green","yellow","white"]


//Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
for (let i = 0;i < Myfavoricolors.length;i++){
    

    console.log ('my #' + (i+1) + ' choice is ' + Myfavoricolors[i] )
}
//Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
const suffixe = ["st","nd","rd","th","th"]
for (let i = 0;i < Myfavoricolors.length;i++){
   
     
    //console.log ('my #' + suffixe.[i] + ' choice is ' + Myfavoricolors[i] )
}
