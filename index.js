/*
Sudoku Background
Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with digits from 1 to 9, so that each column, each row, and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9.
(More info at: http://en.wikipedia.org/wiki/Sudoku)

Sudoku Solution Validator
Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.

*/

function sudokuSolution(board){
  // validate rows
  for (let row = 0; row < 9; row++) {
    console.log (board[row]);
    if (!validateSection(board[row])) return false;
  }
  // validate columns
  for (let column = 0; column < 9; column++){
    let columnArray = [];
    for (let row = 0; row < 9; row++){
      columnArray.push(board[row][column]);
    }
    if (!validateSection(columnArray)) return false;
  }
  // validate blocks
  console.log ('blocks:');
  for (let column = 0; column < 9; column += 3){
    for (let row = 0; row < 9; row += 3) {
      if (!validateSection (getBlock(row, column, board))) return false;
    }
  }
  return true;
}

function getBlock(row, column, board) {
  const array = [];
  for (c = 0; c < 3; c++) {
    for (r = 0; r < 3; r++) {
      array.push(board[row + r][column + c]);
    }
  }
  return array;
}

function validateSection(unsorted) {
  const sorted = unsorted.slice().sort();
  for (let i = 0; i < 9; i++) {
    if (sorted[i] != i + 1) return false;
  }
  return true;
}
