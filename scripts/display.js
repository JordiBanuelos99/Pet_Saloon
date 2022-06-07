/*function displayCards(){
    let petDiv = $("#pets");
    petDiv.html("");
    // Travel the array
    let tmp="";
    for(let i=0; i<salon.pets.length;i++){
        let pet = salon.pets[i];
        tmp=`
            <div class="pet">
                <h5>Name: ${pet.name}</h5>
                <p>Age: ${pet.age}</p>
                <p>Gender: ${pet.gender}</p>
                <p>Breed: ${pet.breed}</p>
                <p>Service: ${pet.service}</p>
                <p>Owner: ${pet.owner}</p>
                <p>Phone: ${pet.phone}</p>
            </div>
        `;
        petDiv.append(tmp);
    }
}*/

function displayTable() {
    let petTable = $("#pets_table");
    petTable.html("");
    document.getElementById("pets_table").innerHTML=
    `
        <tr class="pet">
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Breed</th>
            <th>Service</th>
            <th>Owner</th>
            <th>Phone number</th>
            <th>Payment Method</th>
        </tr>
    `
    // Travel the array
    let tmp="";
    for(let i=0; i<salon.pets.length;i++){
        let pet = salon.pets[i];
        tmp=`
        <tr class="pet">
            <td scope="col">${pet.name}</td>
            <td scope="col">${pet.age}</td>
            <td scope="col">${pet.gender}</td>
            <td scope="col">${pet.breed}</td>
            <td scope="col">${pet.service}</td>
            <td scope="col">${pet.owner}</td>
            <td scope="col">${pet.phone}</td>
            <td scope="col">${pet.payment}</td>
        </tr>
        `;
        petTable.append(tmp);
    }
}