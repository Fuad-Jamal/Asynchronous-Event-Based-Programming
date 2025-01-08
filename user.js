let user = new Promise((resolve, reject) => {
    const info = {
        name: 'web day',
        street: 'nigga'
    }
    resolve(info)
})
user
.then(function (info){
    console.log(`lets find ${info} for the user`)
    return new Promise((resolve, reject) => {
        setTimeout (function (){

        },2000)
    })
})