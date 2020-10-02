module.exports = function toReadable (number) {
  let strNumber = number.toString();
  let result = '';

  if (strNumber.length === 1) {
    return numberCase(strNumber[0]);
  }

  if (strNumber.length === 2) {
      if (strNumber[0] !== '1' && strNumber[1] !== '0') {
          return numberCase(strNumber[0] + '0') + ' ' + numberCase(strNumber[1]);
      }

    return numberCase(strNumber);
  }

  if (strNumber.length === 3) {
      result += numberCase(strNumber[0]) + ' hundred';

      if (strNumber.substr(1) === '00') {
          return result;
      }

      if (strNumber[1] === '0') {
          return result + ' ' + numberCase(strNumber[2]);
      }

      if (strNumber[1] !== '1' && strNumber[2] !== '0') {
      return result + ' ' + numberCase(strNumber[1] + '0') + ' ' + numberCase(strNumber[2]);
    }

  return result + ' ' + numberCase(strNumber.substr(1));
  }
}

function numberCase(n) {
    switch (n) {
        case '0': return 'zero';
        case '1': return 'one';
        case '2': return 'two';
        case '3': return 'three';
        case '4': return 'four';
        case '5': return 'five';
        case '6': return 'six';
        case '7': return 'seven';
        case '8': return 'eight';
        case '9': return 'nine';
        case '10': return 'ten';
        case '11': return 'eleven';
        case '12': return 'twelve';
        case '13': return 'thirteen';
        case '14': return 'fourteen';
        case '15': return 'fifteen';
        case '16': return 'sixteen';
        case '17': return 'seventeen';
        case '18': return 'eighteen';
        case '19': return 'nineteen';
        case '20': return 'twenty';
        case '30': return 'thirty';
        case '40': return 'forty';
        case '50': return 'fifty';
        case '60': return 'sixty';
        case '70': return 'seventy';
        case '80': return 'eighty';
        case '90': return 'ninety';
    }
}
