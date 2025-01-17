// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// .then(ans => 
//     !ans.ok?  new Error('not pure'): ans.json()
// ) 
// .then(info => console.log(info.weight))
// .catch(error => console.error(error))

async function find(){
    try{
        let ans = await fetch("https://pokeapi.co/api/v2/pokemon/typhlosion")
        if (!ans.ok){
            throw new Error ('impossible to find')
        }
        const found = await ans.json()
        console.log(found)
    }
    catch(error){
        console.error(error)
    }
}
find()
