Promise.all([
    fetch('https://jsonplaceholder.typicode.com/posts/id'),
    fetch('https://jsonplaceholder.typicode.com/comments?postId=id'),
    fetch('https://jsonplaceholder.typicode.com/users/id')
])
.then((ye)=>{
    if(!ye.ok){
        return true 
    }else{
        return ye.json()
    }
    
})
.then((info)=>{
    console.log('there is something', info[0].type)
})
.catch(err => console.log(err))
// .then((ans)=>{
//     return Promise.all(ans.map(function (done){
//         return done.json()
//         }))
// }).then((info)=>{
//     console.log(info)
// }).catch(error => console.log(error))
