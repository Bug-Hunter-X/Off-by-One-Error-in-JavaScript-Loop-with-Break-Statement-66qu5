# Off-by-One Error in JavaScript Loop with Break Statement

This repository demonstrates a common off-by-one error in JavaScript loops. The error occurs when a loop's termination condition is not correctly aligned with the intended iterations. This specific example involves a `while` loop with a `break` statement, highlighting a potential source of confusion and mistakes.

## Bug Description
The provided JavaScript function `myFunction` uses a `while` loop to iterate from 0 up to 10. However, a `break` statement is introduced when the loop counter `i` reaches 5, causing the loop to stop early.

## Solution
The solution involves correctly managing the loop counter and the break condition to ensure the loop completes as expected.