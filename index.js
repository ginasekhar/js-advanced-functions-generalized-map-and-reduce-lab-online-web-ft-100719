// Add your functions here
function map (myArray, myFunction) {
    let resultArray =  [];
    for (let i = 0; i < myArray.length; i++)
    {
        resultArray.push(myFunction(myArray[i]));
    }
    return resultArray;
}

function reduce (myArray, myFunction, starting_point) {
    
    let result = (!!starting_point) ? starting_point : myArray[0]
    let i = (!!starting_point) ? 0 : 1
  
    for (; i < myArray.length; i++)
    {
        result = myFunction(myArray[i], result);
    }
    return result;
}
