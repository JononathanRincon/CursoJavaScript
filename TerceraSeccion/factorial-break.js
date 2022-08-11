let value = 10;
var i = 1;

do {
  if (i <= 10) {
    value = value * i;
    console.log(value);
    i++;
  }else if (i > 10) {
    break;
  }

} while (true);
