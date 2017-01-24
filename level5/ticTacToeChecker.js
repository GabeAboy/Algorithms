// If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!
//
// Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an X, or 2 if it is an O, like so:
//
// [[0,0,1],
//  [0,1,2],
//  [2,1,0]]
//
// We want our function to return -1 if the board is not solved yet, 1 if X won, 2 if O won, or 0 if it's a cat's game (i.e. a draw).
//
// You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.
function ticChecker(matrix) {
  const gridSize = 3;
  const solutionArrays = {
    1:'000102',
    2:'101112',
    3:'202122',
    4:'001020',
    5:'011121',
    6:'021222',
    7:'001122',
    8:'021120'
  }
  let column1 = []
  let column2 = []
  let draw = []

  for (var i = 0; i < matrix.length; i++) {
    if(1 in matrix[i])column1.push([i,matrix[i].indexOf(1)])
    if(2 in matrix[i])column2.push([i,matrix[i].indexOf(2)])
    else if(matrix[i].indexOf(0)>-1)draw.push(0)
  }

  column2 = column2.join('').replace(/,/g,'')
  column1 = column1.join('').replace(/,/g,'')

  for (var variable in solutionArrays) {
    if (column1 === solutionArrays[variable]) return 1
    else if(column2 === solutionArrays[variable]) return 2
  }
  if(draw.length === 0)return 0
  else return -1
}
console.log(ticChecker([[1,0,2],
                       [2,1,1],
                       [2,1,1]]));
