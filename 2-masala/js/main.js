let users = [
    {
        name: "Avazbek",
        age: "25"
    },
    {
        name: "Umid",
        age: "21"
    },
    {
        name: "O'ktam",
        age: "22"
    },
    {
        name: "Valijon",
        age: "19"
    },
    {
        name: "Sarvar",
        age: "27"
    },
    {
        name: "Sardor",
        age: "17"
    },
    {
        name: "Toxir",
        age: "16"
    }
]



function ageGreaterThan() {
    let newArray = []
    for(i=0; i<users.length; i++){
        if(users[i].age>=22){
            newArray.push(users[i]);
            console.log(newArray);
        }

    }

    return newArray
}

ageGreaterThan(22)
