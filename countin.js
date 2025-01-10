function display(begin,next){
    let start=0
    let loop = setInterval(()=>{
        start++
        next(start)
        if(start==begin){
            clearInterval(loop)
        }
    },1000)
}
display(5,countin)
function countin(begin){
    console.log(`count ${begin}`)
}