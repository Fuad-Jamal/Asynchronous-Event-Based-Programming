let ro = async (nit,not) => {
    console.log('starting,,')
    return new Promise((resolve)=> {
        setTimeout (() =>{
            resolve (nit+not)
        },1000)
    })
}
let rou = async (tim) => {
    return new Promise((resolve)=> {
        setTimeout (() =>{
            resolve (tim *= 2)
        },2000)
    })
}
let roun = async (sub) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(sub -= 5)
        },3000)
    })
}
let round = async () => {
    try{
        let one = await ro(2,2)
         console.log(one)
        let two = await rou(one)
         console.log(two)
        let three = await roun(two)
         console.log(three)
    }
    catch (error){
        console.log('neda')
    }
}
round()
setTimeout(() => {
 console.log('completed')   
},7000)
