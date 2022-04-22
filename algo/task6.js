function getInput(input) {
    answer = 0;
      for (let j = 1; j < 101; j++) {
        if (!input.includes(j) ) {
            answer = j
            break
        }
      }
    
  
    return answer;
  }
  
  console.log(getInput([1, 2, 3,4,5,6,7,8,9]));
  