const multiplos = (number) => {
  arrayVacio = [];
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      if (i < 1000) {
        arrayVacio.push(i);
      }
    }
  }
  let resul = arrayVacio.reduce((a, b) => a + b);
  return resul;
};

console.log(multiplos(1000));













const fibonacci = (limit) => {
  const arrayFi = [0, 1];
  let result=[]

  let newElement = arrayFi[arrayFi.length - 1] + arrayFi[arrayFi.length - 2];

  while (limit >= newElement) {
    arrayFi.push(newElement);
    newElement += arrayFi[arrayFi.length - 2];
  }
  for (let i = 0; i < arrayFi.length; i++) {
    if(arrayFi[i] % 2 === 0 && arrayFi[i] < 10000000 ){
        result.push(arrayFi[i])
    }
    
  }

  let terms = result.reduce((a,b) => a+b)
  

      return terms
  
};

console.log(fibonacci(10000000));
