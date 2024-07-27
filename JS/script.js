"use sctrict";

const logItems = function (array) {
    for (let l = 0; l < array.length; l++) {
      console.log(`${l + 1} - ${array[l]}`);
    }
  };
  let arr = ["Mango", "Poly", "Ajax"];
  logItems(arr);

const calculateEngravingPrice = (mess, priceOne) => {
    const letters = mess.split(" ");
    const countForOne = letters.length;
    const summa = countForOne * priceOne;
    return summa;
  };
  const mess = 'Напишіть номер';
  const priceOne = 10;
  const summa = calculateEngravingPrice(mess, priceOne);
  console.log(summa);


const findLongestWord = (string) => {
    const str = string.split(' ');
    let biggestLetter = '';
    for (const letter of str) {
      if (letter.length > biggestLetter.length) {
        biggestLetter = letter;
      }
    }
    return biggestLetter;
  };
  const string = "cheto tipo tak";
  const stringTwo = "cheto tipo tak asdasdasd";
  const biggestLetter = findLongestWord(string);
  const biggestLetterTwo = findLongestWord(stringTwo);
  console.log(biggestLetter);
  console.log(biggestLetterTwo);



  const formatString = (string) => {
    if(string.length <= 40) {
        console.log(string);
    } else {
        console.log(string.slice(0, 39) + '...');
    }
    return string
}
const str = 'qwertyuiop[]asdfgghjkl;zxcvbnm,./'
console.log(formatString(str));


const checkForSpam = function(message) {
  let check;
  let letter = message.toLowerCase();
  if (letter.includes("SALE") || letter.includes("SPAM")) {
    check = "true";
  } else {
    check = "false";
  }
  return check;
};
console.log(checkForSpam("Good morning and good pilesos SALE"));
console.log(checkForSpam("One two three SPAM"));
