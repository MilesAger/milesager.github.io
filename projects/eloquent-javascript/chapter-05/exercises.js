// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) {
  let flat = [];
for (let i = 0; i < array.length; i++){
  for (let j = 0; j < array[i].length; j++){
    flat.push(array[i][j]);
  }
}
return flat;
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(max, min, inc, func) {
  let down = min.toString().split('')
  let d = down.slice(-2).join('')
  let up = inc.toString().split('')
  let u = up.slice(-2).join('')
  var D;
  var U = Math.floor(u);
  for (let j = 0; j > -10; j--){
    if (j == d){
     D = j;
    }
  }
  for (let i = max; i > D; i -= U){
    func(i);
  }
}


// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test) {
  for (let i = 0; i < array.length; i++){
   if (!test(array[i])){
    return false;
  }
}
  return true;
}
console.log(every([1, 3, 5], n => n < 10))

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(string) {
  let ltr = [];
  let rtl = [];

  for (let i = 0; i < string.length; i++){
    let scriptName = characterScript(string.charCodeAt(i));

    if (scriptName !== null){
      if (scriptName.direction === 'ltr'){
        ltr.push(scriptName);
      } else {
        rtl.push(scriptName);
      }
    }
  }
  if (ltr.length> rtl.length){
    return 'ltr';
  } else {
    return 'rtl';
  }

}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
