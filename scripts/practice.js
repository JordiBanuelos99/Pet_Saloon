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

// let products=[];
// let product1={
//     name:"Laptop",
//     description:'HP Laptop 14", core i7',
//     price: 200
// }
/*products.push();
console.log(student.hobbies[1]);
document.write(student.address);
// Display the address on the console
console.log(student.address);*/
// products = [product1, product2, product3];
// products.push(product1, product2, product3);

// console.log(products[2].name);

function Product(n,d,p) {
    this.name=n;
    this.description=d;
    this.price=p;
}

let Product1 = new Product ("Speaker","It doesn't have support for iOS", 20.50);
let Product2 = new Product ("Laptop","HP",100);
let Product3 = new Product ("Smart TV","Samsung 32 Smart TV", 150);
let Product4 = new Product ("Smartphone", "Samsung Galaxy S8", 220);
console.log(Product1, Product2, Product3, Product4);
function displayNames(){
    for(let i=0;i<products.length;i=i+1)
    {
        console.log(products[i].description);
    }
}

//displayNames();