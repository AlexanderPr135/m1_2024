function arrayMadness(a, b) {
    const sumSquare = a.reduce((acc, el)=> acc+el**2 ,0) 
    const sumCube = b.reduce((acc, el)=> acc+el**3 ,0)
    console.log(`kvadrati ${sumSquare}, kubes ${sumCube}`)
    return sumSquare<sumCube ? false:true

  }
  console.log(arrayMadness([2,3,4],[1,2,3]))