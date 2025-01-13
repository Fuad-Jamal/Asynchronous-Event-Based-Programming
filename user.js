let user = new Promise((resolve, reject) => {
    const info = {
        name: 'web day',
        street: 'band',
        nation: ['unkwown','fate']
    }
    resolve(info)
})
user
.then(function (info){
    console.log(`lets find ${info.name} for the user`)
    return new Promise((resolve, reject) => {
        setTimeout (function (){
            resolve('ding')
        },2000)
    })
    if (info.nation.includes('unknown')){
        throw new Error('that is bad')
    }
})
.then(function (street){
    console.log(`user uses the word ${street}`)
})
.catch(function (error){
    console.log(error)
})

const yup = new Promise((resolve, reject) => {
    resolve(10)
})
yup.then(function (value){
    value++
    return value
}).then(function (value){
    value+ 10
    return value
}).then(function (value){
    value = value+20
    console.log(value)
    return value
})

const wordi = new Promise((resolve, reject) => {
    resolve('finalStep')
})
wordi.finally(function(){
    console.log('clear')
}).then(function (value){
    console.log(value)
})