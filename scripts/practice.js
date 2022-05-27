let student = {
    // attributes or properties
    name:"Someone",
    age:30,
    isActive:true,
    sayHi:function() {
        return "Hello";
    },
    hobbies: ["football","Listen music", "Play Zelda"],
    address: {
        street:"Palomar",
        zip: "22145",
        city: "San Diego",
        country: "United States"
    }
}

let products=[];
let product1={
    name:"Laptop",
    description:'HP Laptop 14", core i7',
    price: 200
}
let product2={
    name:"Solid State Drive",
    description:"Western Digital 256GB SSD",
    price:35
}
let product3={
    name:"Smartphone",
    description: "Samsung Galaxy S7 ",
    price: 400
}
/*products.push();
console.log(student.hobbies[1]);
document.write(student.address);
// Display the address on the console
console.log(student.address);*/
products = [product1, product2, product3];
products.push(product1, product2, product3);

// console.log(products[2].name);

function displayNames(){
    for(let i=0;i<products.length;i=i+1)
    {
        console.log(products[i].description);
    }
}

displayNames();