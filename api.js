const tide = new Promise((resolve, reject) => {
    setTimeout(()=>resolve('something'),1000)
})
const tidy = new Promise((resolve, reject) => {
    setTimeout(()=>resolve('somethin'),2000)
})
const tidee = new Promise((resolve, reject) => {
    setTimeout(()=>resolve('somethings'),3000)
})
const papa = Promise.all([tide,tidy,tidee])
// papa.then((value)=>{
//     console.log(value)
// })
const all = async () => {
 const them = await Promise.race([tide,tidee,tidy])
 console.log(them)
 them.forEach(them=>{
    console.log(them)
 })   
}
all()