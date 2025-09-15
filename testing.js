
// . Create a function that counts from 1 to 5, with a 1-second
//  delay between each number, using a callback to print each number.
// function count(){
//     let begin = 0
//     const swing = setInterval(()=>{
//         if(begin>=5){
//             clearInterval(swing)
//         }else{
//        begin ++
//        console.log(begin)
//         }
//     },1000) 
// }
// count()

// Create a function that takes a first name, last name, 
// and a callback function to format them in different ways.

function call(f1,f2){
    return f1[0].toUpperCase()+f1.slice(1).toLowerCase() +' '+f2[0].toUpperCase()+f2.toLowerCase().slice(1)
    }
    
    function red(f1,f2,call){
        return call(f1,f2)
    }
    console.log(red('haha','hehe',call))

    // Create a calculator function that takes two numbers and a callback. 
    // The callback should perform the mathematical operation.

    function call (nam1,nam2){
        return nam1+nam2
    }
    function calc(nam1,nam2,call){
        return call(nam1,nam2)
    }
    console.log(calc(1,3,call))

    // .Create a Promise that resolves with the message "Success!" after 1 second or rejects 
    // with "Failure!" after 1 second, based on a random condition.

    let promise = new Promise((resolve, reject) => {
        let wood = 20
        setTimeout(()=>{
            (wood>300)? resolve('good') : reject (new Error('wataguan'))
            
        },1000)
    })
    promise
        .then ((result)=>{
        console.log(result)
    })
    .catch(error=>console.log(error.message))

// let url = (" http://img.omdbapi.com/?apikey=[yourkey]&")
// let that = async () => {
//     try{
//     let ans = await fetch(url)
//     console.log(ans.json())
//     }
//     catch(error){
//         console.log(error)
//     }
// }
// that()