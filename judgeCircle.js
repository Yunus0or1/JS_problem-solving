var judgeCircle = function (moves) {
  let u = 0 
  let r = 0
  let l = 0 
  let d = 0

  for(let i = 0; i < moves.length; i++){
    if(moves[i] === 'U') u++
    if(moves[i] === 'R') r++
    if(moves[i] === 'L') l++
    if(moves[i] === 'D') d++
  }

  if(u != d || l!= r) return false

  return true

};

moves = "UD"
console.log(judgeCircle(moves))