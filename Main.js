let current_inventory = new Array ();

let incoming_purchase = {
 
};

let orders = {
   
};




function is_empty(string) {
    if (string.length == 0) {
        return true;
    }
    return false;
}

function getIndex(tbody) {
    let index = tbody.children.length || 0;
    return index;
}

function clearAll() {
    clearCurrentInventory();
    clearIncomingOrder();
    clearOutgoingOrder();
}

function clearCurrentInventory() {
    document.querySelector("#current_inventory_list").innerHTML = "";
}

function clearIncomingOrder() {
    document.querySelector("#incoming_inventory_list").innerHTML = "";
}

function clearOutgoingOrder() {
    document.querySelector("#outgoing_inventory_list").innerHTML = "";
}




let qtyaaa = 0;








function addCurrentInventory() {
    let productName = document.querySelector(
        "#current_order_product_name"
    ).value;
    let productSpecie = document.querySelector(
        "#current_order_product_species"
    ).value;
    let productScientificName = document.querySelector(
        "#current_order_scientific_name"
    ).value;
    let productQuantity = document.querySelector(
        "#current_order_product_quantity"
    ).value;
    let timeDate = document.querySelector(
        "#InventoryNow"
    ).value;

    if (
        is_empty(productName) ||
        is_empty(productSpecie) ||
        is_empty(productScientificName) ||
        is_empty(productQuantity) ||
        is_empty(timeDate)
    ) {
        alert("Prencha todos os campos!!");
        return;
    }


    let speciesFound = false;

    for (let i = 0; i < current_inventory.length; i++) {
        if (productSpecie === current_inventory[i].specie) {
            current_inventory[i].quantity = parseInt(current_inventory[i].quantity) + parseInt(productQuantity);
            qtyaaa = parseInt(current_inventory[i].quantity);
            speciesFound = true;
            break;
        }
    }
    
    if (!speciesFound) {
        current_inventory.push({
            name: productName,
            specie: productSpecie,
            scientificName: productScientificName,
            quantity: parseInt(productQuantity),
        });
        qtyaaa = parseInt(productQuantity);
    }
      // tentar adicionar um braek para não perimir adicionar a mesma especie duas vezes

      let tbody = document.querySelector("#current_inventory_list");

      let tr = `<tr>
      <th scope='row'>${getIndex(tbody) + 1}</th>
      <td>${productName}</td>
      <td>${productSpecie}</td>
      <td>${qtyaaa}</td>
      <td>${productScientificName}</td>
      <td>${timeDate}</td>`;
  
      tbody.innerHTML += tr;
}







// sistema de estoque funcionando corretamente, testar funcionalidade para alterar automaticamente e visualmente o estoque da primeira pagina.




//Falta descrição na primeira pagina, fazer a drescrição ficar de baixo da table.


//refatorar.











function addIncomingOrder() {
    let productName = document.querySelector(
        "#incoming_order_product_name"
        ).value;
    let productSpecies = document.querySelector(
        "#incoming_order_product_species"
        ).value;
    let productScientificName = document.querySelector(
        "#incoming_order_scientific_name"
        ).value;
    let productQuantity = parseInt(document.querySelector(
        "#incoming_order_product_quantity"
        ).value);
        let IncomingTime = parseInt(document.querySelector(
            "#IncomingTime"
            ).value);

    if (
        is_empty(productName) ||
        is_empty(productSpecies) ||
        is_empty(productScientificName) ||
        is_empty(productQuantity.toString()) ||
        is_empty(IncomingTime)
    ) {
        alert("Preencha todos os campos!!");
        return;
    }

    
    let speciesFound = false;

    for (let i = 0; i < current_inventory.length; i++) {
        if (productSpecies === current_inventory[i].specie) {
            current_inventory[i].quantity = parseInt(current_inventory[i].quantity) + parseInt(productQuantity);
            qtyaaa = parseInt(current_inventory[i].quantity);
            speciesFound = true;
            break;
        }
    }

    if (!speciesFound) {
        qtyaaa = parseInt(productQuantity);
    }
      //tentar adicionar um braek para não perimir adicionar a mesma especie duas vezes

    let tbody = document.querySelector("#incoming_inventory_list");

    let tr = `<tr>
    <th scope='row'>${getIndex(tbody) + 1}</th>
    <td>${productName}</td>
    <td>${productSpecies}</td>
    <td>${productQuantity}</td>
    <td>${productScientificName}</td>
    <td>${qtyaaa}</td>
    <td>${IncomingTime}</td>`;

    tbody.innerHTML += tr;
    
}

























function addOutgoingOrder() {
    let productName = document.querySelector(
        "#outgoing_order_product_name"
    ).value;
    let productSpecie = document.querySelector(
        "#outgoing_order_product_species"
    ).value;
    let productPrice = document.querySelector(
        "#outgoing_order_product_price"
    ).value;
    let productQuantity = document.querySelector(
        "#outgoing_order_product_quantity"
    ).value;
    let outGoingTime = parseInt(document.querySelector(
        "#outGoingTime"
        ).value);

    if (
        is_empty(productName) ||
        is_empty(productSpecie) ||
        is_empty(productPrice) ||
        is_empty(productQuantity) ||
        is_empty(outGoingTime)
    ) {
        alert("Prencha todos os campos!!");
        return;
    }

    let speciesFound = false;

    for (let i = 0; i < current_inventory.length; i++) {
        if (productSpecie === current_inventory[i].specie) {
            current_inventory[i].quantity = parseInt(current_inventory[i].quantity) - parseInt(productQuantity);
            qtyaaa = parseInt(current_inventory[i].quantity);
            speciesFound = true;
            break;
        }
    }

    if (speciesFound) {
        qtyaaa = parseInt(productQuantity);
    }

    //adicionar um braek para não perimir adicionar a mesma especie duas vezes


    let tbody = document.querySelector("#outgoing_inventory_list");

    let tr = `<tr>
    <th scope='row'>${getIndex(tbody) + 1}</th>
    <td>${productName}</td>
    <td>${productSpecie}</td>
    <td>${productQuantity}</td>
    <td>$${productPrice}</td>
    <td>${qtyaaa}</td>`;

    tbody.innerHTML += tr;
}

//Adicionar calculo de todas as vendas 