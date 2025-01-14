const beg = async (nam) => {
    console.log('loading...')
    let foi = new Promise ((resolve,reject) => {
        if(nam){
            resolve (nam)
        }else{
            reject (new Error('invalid'))
        }
    })

try {
        let wok = await foi
    setTimeout (()=>{
    console.log(wok)  
    },2000)
}
catch(e){
    console.log(e)
}
}
beg('jjjjj')