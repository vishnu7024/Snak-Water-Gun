let user = prompt("Enter Any One S, W or G")
let cpuI = Math.floor(Math.random(0, 1)*3)
let cpu = ["S", "W", "G"][cpuI]



const match = (cpu, user)=>{
    if(cpu === user){
        return "Nobudy";
    }

    else if(cpu==="S" && user==="W"){
        return "cpu";


    }
    else if(cpu === "S" && user=== "G"){
        return "user";
    }
    else if(cpu === "W" && user ==="S"){
        return "user";

    }
    else if(cpu === "W" && user === "G"){
        return "cpu";
    }
    else if(cpu === "G" && user === "S"){
        return "cpu";
    }
    else if(cpu === "G" && user === "W"){
        return "user";
    }

}
let result = match(cpu, user)
document.write(`==============================Snak Water And Gun============================== <br> S = Snak <CPU randam Enter Value:${cpu} <br>  User Enter Value:${user} <br> The Winner is : ${result.toUpperCase()}` )
