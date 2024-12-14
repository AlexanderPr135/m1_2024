function squareOrSquareRoot(array) {
    return array.map(i=>Math.sqrt(i)%1===0 ? Math.sqrt(i): i**2)

  }
  console.log(squareOrSquareRoot([81,3,9,81,49]))