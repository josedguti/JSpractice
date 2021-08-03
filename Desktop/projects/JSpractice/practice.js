function getPrimeNum(n) {
    if (n < 2) {
      return false;
    }
  
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  // console.log(getPrimeNum(13));
  
  
  function getPrimeFactors(n) {
    var factors = [];
    var divisor = 2;
  
    while (n > 2) {
      if (n % divisor === 0) {
        factors.push(divisor);
        n = n / divisor;
      } else {
        divisor++;
      }
    }
    return factors;
  }
  
  // console.log(getPrimeFactors(18))
  
  function checkNums(num1, num2) {
    if (num1 === num2) {
      return 'true';
    } else if (num1 < num2) {
      return 'false';
    } else if (num1 > num2) {
      return '-1';
    }
  }
  
  // console.log(checkNums(4, 1));
  
  function ArrayAddition(arr) {
    let tempArray = arr.sort(function(a, b) {
      return a - b;
    })
  
    let largest = tempArray.pop();
  
    let number = 0;
  
    tempArray.forEach(item => (number += item))
  
    return largest === number;
  }
  
  // console.log(ArrayAddition([1,2,3,4,11]));
  
  function removeDuplicate(arr) {
    const result = [];
    const map = {};
  
    for (let i = 0; i < arr.length; i++) {
      if (map[arr[i]]) {
        continue;
      } else {
        result.push(arr[i]);
        map[arr[i]] = true;
  
      }
    }
    return result;
  }
  
  // console.log(removeDuplicate(['a', 'b', 'b', 'a']));