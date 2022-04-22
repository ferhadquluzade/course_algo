
function getInput(input){
    var answr = [[],[],[]];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3 ; j++){
            answr[j][(2-i)] = input[i][j]
        }
      }
      printArr(answr)
}

function printArr(input){
    for (let j = 0; j < 3 ; j++){
        console.log(input[j])
        console.log("\n")
    }
}

getInput([[0,1,2],[3,4,5],[6,7,8]])