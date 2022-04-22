function getInput(input, input2) {
  answer = true;
  if (input.length != input2.length) {
    answer = false;
    return answer;
  }
  var inputArr = [];
  var inputArr2 = [];
  for (let i = 0; i < input.length; i++) {
    inputArr.push(input[i].toLowerCase());
    inputArr2.push(input2[i].toLowerCase());
  }

  inputArr.sort();
  inputArr2.sort();

  answer = "" + checkSimilarity(inputArr, inputArr2);

  return answer;
}

function checkSimilarity(input, input2) {
  var answer = true;
  for (let i = 0; i < input.length; i++) {
    if (input[i] != input2[i]) {
      i = input.length;
      answer = false;
    }
  }
  return answer;
}

console.log(getInput("fff", "fff"));
