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

printRainbow();