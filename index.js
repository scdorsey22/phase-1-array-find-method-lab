// const superbowlWin = function(record) {
//     record.find([1] => [1].result === "W")
//     return 
// }

// const superbowlWin = function(record) {
//     const winYear = (record.find(win => win.result === "W"))
//     return Object.values(winYear)[0]
        


// const superbowlWin = function(record) {
//     for(let i = 0; record.length; i++) 
//     {const winYear = (record.find(win => win.result === "W"))
//     return Object.values(winYear)[i]}
        
// }


// const superbowlWin = function(record) {
//     for(let winYear of record) 
//     {const winYear = (record.find(win => win.result === "W"))
//     return Object.values(winYear)[i]}
        
// }

const superbowlWin = function(record) {
    const winYear = record.find(win => win.result === "W")
    for (let key in winYear) {
        return winYear[key]
    }



// }

// function superbowlWin(record) {
//     const winYear = record.find(function(result) {
//         return result === "W"
//     })
//     return winYear
}
