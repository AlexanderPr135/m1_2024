function digitize(n) {
   return String(n).split('').map(Number).reverse()
  }

  console.log(digitize(56766560))