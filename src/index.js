module.exports = function toReadable(n) {
  const numbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  // 21, 31 , 41, 51 --> 0 1 2 3
  const tens = [
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  const arr = n.toString().split('');
  let res = '';

  if (n < 20) {
    res = numbers[n];
    return res;
  }

  if (n < 100) {
    res += tens[+arr[0] - 2];
    res += ' ';
    res += +arr[1] !== 0 ? numbers[+arr[1]] : '';
    return res.trim();
  }

  if (n >= 100) {
    res += `${numbers[+arr[0]]} hundred ${n % 100 === 0 ? '' : toReadable(n % 100)}`;
    return res.trim();
  }

  return n;
};
