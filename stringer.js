function array(string) {
  const arr=string.split(",")
  return arr.length>2? arr.slice(1,-1).join(" "): null
  
  }
  console.log(array('B2,C3'))