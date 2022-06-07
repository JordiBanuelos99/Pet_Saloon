//object literal
let salon={
    name:"My Pet Salon",
    address: {
        street: "Palomar",
        zip: "22345",
        city: "San Diego",
        number: "245-K"
    },
    hours: {
        open: "9:00 a. m.",
        close: "5:00 p. m."
    },
    phone:"555-5555",
    pets: []
}
function displaySalonInfo(){
    let tmp=
    `<div class="row container">
        <p>Welcome to ${salon.name}, located at ${salon.address.street}, ${salon.address.city}, ${salon.address.zip}, ${salon.address.number}</p>
        <div class="col">
            <p>Daily schedule: ${salon.hours.open} - ${salon.hours.close}</p>
        </div>
        <div class="col">
            <p>Contact: ${salon.phone}</p>
        </div>
    </div>`;
    document.getElementById("info").innerHTML=tmp;
    console.log("displaying");
}

function Pet(n,a,g,b,s,o,p,pm){
    this.name=n;
    this.age=a;
    this.gender=g;
    this.breed=b;
    this.service=s;
    this.owner=o;
    this.phone=p;
    this.payment=pm;
}


/* Default Pets */
let Scooby = new Pet("Scooby", 50, "Male", "Dane", "Grooming", "Shaggy", "888-8888", "Scooby snacks");
let Dudley = new Pet("Dudley", 25, "Male", "Mixed-Breed", "Grooming", "Peg", "777-7777", "Treasure chest");
let Doidle = new Pet("Doidle", 20, "Male", "Canaan", "Vaccines", "Vicky", "222-2222", "Dollars");
let Astro = new Pet("Astro", 60, "Male", "Dane", "Grooming", "George Jetson", "123-4567", "Dollars from the future");


function isValid(aPet){
    let valid=true;
    if(aPet.name=="" || aPet.service==""){
        //If we arrive here the pet is not valid
        valid=false;
    }
    return valid;
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
    let petPayment = document.getElementById("selPayment").value;
    //Create the object using the constructor
    let newPet = new Pet(petName, petAge, petGender, petBreed, petService, petOwner, petPhone, petPayment);
    if(isValid(newPet)==true){
        // Put the objects in on the array
        salon.pets.push(newPet);
        // Display it on the HTML
        displayTable();
        // clear the form
        clear();
    }
    else{
        alert("Add a name for the pet");
    }
    //Push the object into the array
    salon.pets.push(newPet);
    //Display on console
    console.log(newPet);
    clear();
}

function clear(){
    // let inputs=document.getElementsByTagName("input");
    // let inputs=document.querySelector("input");
    // for(let i=0;i<inputs.length;i++)
    // {
    //     inputs[i].value="";
    // }
    //document.getElementById(selGender).value="default";
    //document.getElementById(selService).value="default";
    //JQuery
    $("input").val("");
    
}
//console.log(salon.pets[i]); //Displays Scooby

function init(){
    //Hook and trigger events
    displaySalonInfo();
    salon.pets.push(Scooby, Dudley, Doidle, Astro);
    displayTable();
}
//alert(`There are ${salon.pets.length} pets registered so far`);
window.onload=init;