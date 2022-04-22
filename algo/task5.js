function getInput(input, input2) {
  answer = [];
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] + input[j] === input2) {
        answer.push([input[i], input[j]]);
      }
    }
  }

  return answer;
}

console.log(getInput([1, 2, 34, 5, 6, 8, 9, 2, 3], 10));
