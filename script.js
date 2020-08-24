function rangeOfNumbers(startNum, endNum) {
    //if both params are equal return the number in an arr
      if (startNum === endNum) {
          return [startNum];
      } else {       
      //else recursive call
          const numbers = rangeOfNumbers(startNum, endNum - 1);
          //push the endNum to the array
          numbers.push(endNum);
  
          return numbers;
      }
  }
  
  var data = rangeOfNumbers(1, 5);
  
  console.log(data)