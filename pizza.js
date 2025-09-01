let pizza;
function order(){
    console.log('order pizza')
    setTimeout(()=>{pizza = '🍕' 
        console.log(`${pizza} yahageze`)},2000)
    console.log('pizza is ready')
}
order()
console.log(`eat ${pizza}`)

function orderPizza(callback){
    setTimeout(()=>{
        const pizza = '🍕'
        callback()
    },2000)
}
function pizzaReady(){
    console.log(`${pizza} is here`)
}
orderPizza(pizzaReady)
console.log('move on')