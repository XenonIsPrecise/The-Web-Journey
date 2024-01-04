const login = async(username, password) =>{
    if(!username || !password) throw "Missing Inputs"
    if(password === "pass")return "Hello"
    throw "Invalid Password"
}

login("ewj","pass")
    .then(msg =>{
        console.log("Logged in")
        console.log(msg)
    })
    .catch(err=>{
        console.log("Error")
        console.log(err)
    })

    const delayedcolorchange = (color, delay)=>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                document.body.style.backgroundColor = color;
                resolve();
            },delay)
        })
    }

async function rainbow(){
    await delayedcolorchange("red",1000);
    await delayedcolorchange("orange",1000);
    await delayedcolorchange("yellow",1000);
    await delayedcolorchange("green",1000);
    await delayedcolorchange("blue",1000);
    await delayedcolorchange("indigo",1000);
    return "All done"
}

async function printRainbow(){
    await rainbow();
    console.log("End of rainbow")
}




// fetch("https://swapi.dev/api/people/1")
// .then((res)=>{
//     console.log("Resolved", res)
//     res.json()
//     .then((data)=>{
//         console.log(data)
//         return fetch("https://swapi.dev/api/planets/2")
//     })
//     .then((res)=>{
//         console.log("Second Person",res)
//         return res.json()
//     })
//     .then((data)=>{
//         console.log(data)
//     })
// })
// .catch((err)=>{
//     console.log("Error",err)
// })

const starWarsPeople = async()=>{
    try {
        const data1 = await fetch("https://swapi.dev/api/people/1");
        const pdata1 = await data1.json()
        console.log(pdata1);
}
     catch (error) {
        console.log("Error",error)
    }
}

starWarsPeople();
    

    
