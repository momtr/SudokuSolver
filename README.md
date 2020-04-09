# SudokuSolver
sudoku solver algorithm using a non-recursive approach

## Run
Start a server and run `index.html`.

## Algorithm

```
define sudoku
while sudoku not solved:
  for element of sudoku:
     if element == 0:
        for i in (1,10):
          if i fits:
            sudoku at element = that number
end while
```
