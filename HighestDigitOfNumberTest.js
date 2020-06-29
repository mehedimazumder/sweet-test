const highestDigitInNumber = (number) => {
  let arrayOfDigits = number
    .toString(10)
    .replace(/\D/g, '0')
    .split('')
    .map(Number);

  console.log(Math.max(...arrayOfDigits));
};

highestDigitInNumber(3774019);
