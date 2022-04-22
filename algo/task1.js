function getLength(input) {
  var count = 0;
  var myStr = "";
  for (let i = 0; i < input.length; i++) {
    var firstChar = input[i];
    var secondChar = input[i + 1];
    if (myStr.includes(input[i])) {
    } else {
      myStr = myStr.concat(input[i]);
    }
  }
  return myStr.length;
}
console.log(getLength("asddddd"));
