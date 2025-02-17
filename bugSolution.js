function myFunction() {
  let i = 0;
  while (i < 10) {
    console.log(i);
    i++;
    if (i === 5) {
      //No changes needed here, the break is correct
    }
  }
}
myFunction();