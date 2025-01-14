const yum = new Promise((resolve,reject)=>{
    let x = 20
    if (x<20){
    resolve ('that is true')
        
    }else{
        reject  ('wrong')
    }
    })
    const than = async () => {
        try {
            let y = await yum
            console.log(y)
        }
        catch (error){
            console.log(new Error(error))
        }
    }
    than()