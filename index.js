function findMatching(source, sought){
    return source.filter(
        possibleMatch => possibleMatch.toUpperCase() === sought.toUpperCase()  
    )
}
function fuzzyMatch(source, testString){
    return source.filter(
        possibleMatch => 
        possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    )

}

function matchName(source, sought){
    return source.filter(
        possibleMatch => {
            
           return possibleMatch.name.toLowerCase() === sought.toLowerCase() 
        }
    ) 

}