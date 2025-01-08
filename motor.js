function vehicles(){
   return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('we have a bike')
        },2000)
    })
}
function engine(){
    let pipe = false
    return new Promise((resolve, reject) => {
        if(pipe){
        setTimeout(()=>{
            resolve('we have an engine')
        },3000)
    }else{
        reject('no pipe')
    }
    })
}
vehicles ()
.then((message)=>{
    console.log(message)
    return engine(message)
})
.then((message)=>{
    console.log(message)
})
.catch((message)=>{
    console.error(message)
})
.finally((message)=>{
    console.log('vehicle available')
})