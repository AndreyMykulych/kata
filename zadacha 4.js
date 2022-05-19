let number = '1 2 3 4 5'
 let result = []
length = number.length
 for (let i = 0; i < length; i++ ) {
     let num1 = i 
     let num2 = i + 1
     if (num1 < num2) {
         result.push(num2)
     }
 }
  console.log(result)