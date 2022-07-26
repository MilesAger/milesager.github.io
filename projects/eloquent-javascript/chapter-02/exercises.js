
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) {
  for (var i = 1; i <= num + 1; i++) { 
    while (i < num + 1) {
      console.log("#".repeat(i));
      i++
    }
  }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() { //"should print numbers 1 to 15 with fizz/buzz in appropriate places" fizz on divisibles of 3 buzz on divisibles of 5
  //creating for loop to loop through num 1 - 15
  for (var i = 1; i <= 15; i++) { 
 //conditional for both 3 and 5
    if (i % 3 === 0 && i % 5 === 0) { 
console.log('fizzbuzz'); 
 }
 //conditional for divisible 3. 
else if (i % 3 === 0){
  console.log('fizz');
} //condtional for divisible 5
else if (i % 5 === 0) {
console.log('buzz');
}
else {console.log(i)} //print number if no other conditional.
}
}
////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//parameter is a number 
 function drawChessboard(num){
    var chess = []
    //creating for loop
    for (var i = 0; i < num; i++) 
    {        
        
        //creating loop within loop for pattern of each line
        for (var j = 0; j < num; j++) {
        if((i + j) % 2 === 0)
        {
        chess  += ' '
        }
        else
        {
        chess  += '#'
        }
        
    }
    chess += '\n'
} console.log(chess)
return chess;
}

console.log(drawChessboard(7));
////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
