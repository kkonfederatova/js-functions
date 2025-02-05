const isNumberPrime = (number) => {
    if (number < 2) return false;
    if (number === 2 || number === 3) return true;
    if (number % 2 === 0 || number % 3 === 0) return false;
  
    for (let i = 5; i * i <= number; i += 6) {
      if (number % i === 0 || number % (i + 2) === 0) return false;
    }
  
    return true;
  };
  
  export default (n) => {
    const text = isNumberPrime(num) ? 'yes' : 'no';
    console.log(text);
  }
  