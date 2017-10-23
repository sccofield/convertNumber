const numberConverter = function numberToStringConverter(number) {
  let result = "";

  if (isNaN(number)) return "Number not valid please enter a valid Number.";

  if (number % 3 !== 0 && number % 5 !== 0 && number % 7 !== 0) {
    return number.toString(10);
  } else {
    if (number % 3 === 0) {
      result += "Pling";
    }
    if (number % 5 === 0) {
      result += "Plang";
    }

    if (number % 7 === 0) {
      result += "Plong";
    }

    return result;
  }
};

export default numberConverter;
