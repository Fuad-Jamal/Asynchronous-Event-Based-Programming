// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// .then(ans => 
//     !ans.ok?  new Error('not pure'): ans.json()
// ) 
// .then(info => console.log(info.weight))
// .catch(error => console.error(error))

async function find(){
    try{
        const poked = document.getElementById("poked").value.toLowerCase();
       const ans = await fetch(`https://pokeapi.co/api/v2/pokemon/${poked}`)
        if (!ans.ok){
            throw new Error ('impossible to find')
        }
        const found = await ans.json()
        let sprite = found.sprites.front_default;
        let image = document.getElementById("sprite")
        
        image.src = sprite;
        image.style.display = 'block'
    }
    catch(error){
        console.error(error)
    }
}


