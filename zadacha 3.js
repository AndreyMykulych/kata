 
 let number = 9414 ;
 let result = []
let array = (""+number).split("").map(Number)
console.log(array);
 length = array.length
 for (i = 0; i < length; i++) {
     let el = array[i]
     let el2 = el * el
      result.push(el2)
 }
 console.log(result.join())
