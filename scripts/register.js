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
        /* {
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
            service: "vaccination",
            owner: "Vicky",
            phone: "222-2222"
        } */
    ]
}

function Pet(n,a,g,b,s,o,p){
    this.name=n;
    this.age=a;
    this.gender=g;
    this.breed=b;
    this.service=s;
    this.owner=o;
    this.phone=p;
}

/* Default Pets */
let Scooby = new Pet ("Scooby", "50", "Male", "Dane", "Grooming", "Shaggy", "888-8888");
let Dudley = new Pet ("Dudley", "10", "Male", "Mixed-Breed", "Grooming", "Peg", "777-7777");
let Doidle = new Pet ("Doidle", "20", "Male", "Canaan", "Vaccines", "Vicky", "222-2222");
salon.pets.push(Scooby, Dudley, Doidle);
console.log(salon.pets[0],salon.pets[1],salon.pets[2]); 

/* Clear all inputs in form */
function clearForm(){
    document.getElementById("txtName").value="";
    document.getElementById("txtAge").value="";
    document.getElementById("txtBreed").value="";
    document.getElementById("txtOwner").value="";
    document.getElementById("txtPhone").value="";
}
/* Registering pets */
function register(){
    console.log("Registering...");
    //Get the info from the inputs ***getElementbyId().value
    let petName = document.getElementById("txtName").value;
    let petAge = document.getElementById("txtAge").value;
    let petGender = document.getElementById("selGender").value;
    let petBreed = document.getElementById("txtBreed").value;
    let petService = document.getElementById("selService").value;
    let petOwner = document.getElementById("txtOwner").value;
    let petPhone = document.getElementById("txtPhone").value;
    //Create the object using the constructor
    let newPet = new Pet (petName, petAge, petGender, petBreed, petService, petOwner, petPhone);
    //Push the object into the array
    salon.pets.push(newPet);
    //Display on console
    console.log(newPet);
    clearForm();
}

//console.log(salon.pets[i]); //Displays Scooby

alert(`There are ${salon.pets.length} pets registered so far`);