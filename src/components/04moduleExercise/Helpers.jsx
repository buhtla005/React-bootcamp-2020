const choice = (fruits) => {
     return fruits[Math.floor(Math.random()*fruits.length)]
}

const remove = (fruits, item) => {
     for (let i=0; i<fruits.length; i++){
          if(fruits[i] === item){ fruits.splice(i,1)} 
     }
     return fruits
}

export  { choice, remove };
