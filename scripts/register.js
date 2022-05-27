//object literal
let salon={
    name:"The Fashion Pet",
    address: {
        street: "Palomar",
        zip: "22345",
        city: "United States",
        number: "245-K"
    },
    hours: {
        open: "9:00 a.m.",
        close: "5:00 p. m."
    },
    phone:"555-5555",
    pets: [
        {
            name: "Scooby",
            age: 50,
            gender: "Male",
            breed: "Dane",
            service: "grooming",
            owner: "Shaggy",
            phone: "888-8888"
        },
        {
            name: "Dudley",
            age: 25,
            gender: "Male",
            breed: "Mixed Breed",
            service: "grooming",
            owner: "Peg",
            phone: "777-7777"
        },
        {
            name: "Doidle",
            age: 15,
            gender: "Male",
            breed: "Mixed Breed",
            service: "fixing",
            owner: "Vicky",
            phone: "222-2222"
        }
    ],
}
//console.log(salon.pets[i]); //Displays Scooby

function displayPetsNameConsole() {
    for(let i=0; i<salon.pets.length;i=i+1)
    {
        console.log(salon.pets[i].name);
    }
}
function displayPetsName() {
    for(let i=0; i<salon.pets.length;i=i+1)
    {
        let tmp=`
        <p>Pet name: ${salon.pets[i].name}</p>`; document.getElementById("pets").innerHTML+=tmp;
    }
}
function displaySalonInfo() {
    let tmp=`
    <p>Welcome to ${salon.name}</p>
    <p>Location: ${salon.address.street}, ${salon.address.zip}, ${salon.address.city}. ${salon.address.number}</p>
    <p>Opening time: ${salon.hours.open}</p>
    <p>Closing time: ${salon.hours.close}</p>`;
    document.getElementById("info").innerHTML=tmp;
}

alert(`There are ${salon.pets.length} pets registered so far`);
displayPetsNameConsole();
displayPetsName();
displaySalonInfo();