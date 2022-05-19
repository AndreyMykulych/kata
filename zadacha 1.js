let word = 'ebbbrrwwq'
const result = []
const wordLenght= word.length  
 for (let i=0 ;i<wordLenght;) {
    let el1 = word[i]
    
    if (i+1 === wordLenght) {
        result.push('(') 
        
        break     
    }
    for (let j=i+1 ; j <wordLenght+1;j++) {
        
        let el2 = word[j]
        if (el1 !== el2)
        {
            let length = j-i
            if ( length == 1) 
            {
                result.push('(')
            } else {
                result.push(')')
            }
            i = j 
            break
        }
    }

}
console.log(result)
