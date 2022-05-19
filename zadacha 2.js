let word = 'eouyoea'
length = word.length
let k = 0
for (let i = 0; i < length; i++ ) {
  let el1 = word[i]
  if (el1 === 'a' || el1 === 'e' || el1 === 'i' || el1 === 'o' || el1 === 'u')  {
      k = k+1
  }  
  }
console.log('number=',k)