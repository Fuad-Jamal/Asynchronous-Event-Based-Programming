Promise.all([
    fetch('https://jsonplaceholder.typicode.com/posts'),
    fetch('https://jsonplaceholder.typicode.com/comments?postId=id'),
    fetch('https://jsonplaceholder.typicode.com/users')
])
.then((ye)=>{
    if(!ye.ok){
        return true 
    }else{
        return ye.json()
    }
}).then((data)=>{
    console.log('there is something', data[0].type)
})
.catch(err => console.log(err))
// .then((ans)=>{
//     return Promise.all(ans.map(function (done){
//         return done.json()
//         }))
// }).then((info)=>{
//     console.log(info)
// }).catch(error => console.log(error))
