# SudokuSolver
sudoku solver algorithm using a non-recursive approach

## Run
Start a server and run `index.html`.

## Algorithm

*define* sudoku<br>
*while* sudoku not solved:<br>
  > *for* element of sudoku:<br>
  > > *if* element == 0:<br>
  > > > *for* i in (1,10):<br>
  > > > > *if* i fits:<br>
  > > > > > sudoku at element = that number<br>
*end while*
  
