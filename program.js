// async function guy (params) {
//     return {'name': 'jack', 'prefer': ['bread']}
// }
// async function hint {
// const project = await guy()
// console.log(guy)
// }
// hint()
const section = ({course,coach})=>{
    return new Promise((resolve, reject) => {
        if(course&&coach){
            resolve('marked')
        }else {
            reject({message:'unmarked'})
        }
    })
}
 
const clas = async () => {
    let data = {
        course: '',
        coach: ''
    }
try{
   const answer =  await section (data)
   console.log(answer)
}catch(e) {
    console.log(e.message)
}
}
clas()