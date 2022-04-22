
function getInput(input){
    var nums = [];
    var letters = [];
    for (let i = 0; i < input.length; i++) {
        if (typeof(input[i])=="number") {
            nums.push(input[i])
        } else {
            letters.push(input[i])
        }
      }
      return [...nums,...letters]
}

console.log(getInput([2,'a',3,'b',2,3,4,5,5]))