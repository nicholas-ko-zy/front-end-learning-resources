// https://github.com/freeCodeCamp/CurriculumExpansion/pull/1068/changes/BASE..3e32f4b601d8f4b7941f2c020ab9baf3a08d758d#diff-63c8130bd6e72fe1ddf86fe382bff00d95ceddfdd695866bf2aa1843a0b1dc9b
// const shipment = [
//   "A10|Tomatoes|5|2027-01-01|fridge1",
//   "B02|Milk|2|2026-05-30|fridge1",
//   "C15|Pasta|10|2028-12-15|",
//   "A10|Tomatoes|5|2027-01-01|fridge2",
//   "B03|Cheese|5|2024-01-01|fridge3",
//   "B04|Cheese|5|2027-01-01|fridge3",
// ];

// const pantry =   [
//   "A10|Tomatoes|5|2027-01-01|fridge",
//   "B02|Milk|2|2026-05-30|fridge",
//   "C15|Pasta|10|2028-12-15|",
//   "A10|Tomatoes|5|2027-01-01|fridge",
// ];

function parseShipment(rawData) {
    const objectArray = [];
    let existingSku = [];
    for (let i = 0; i < rawData.length; i++) {
        let line = rawData[i];
        let inputArray = line.split("|");

        let sku = inputArray[0]; 
        let name = inputArray[1]; 
        let qty = Number(inputArray[2]); 
        let expires = inputArray[3]; 
        let zone = inputArray[4] || "general"; 
        if (existingSku.includes(sku)) {
            continue;
        }
        existingSku.push(sku);
        objectArray.push({
            sku: sku,
            name: name,
            qty: qty,
            expires: expires ,
            zone: zone
            })
    }

    return objectArray
}


// { type: "restock" | "discard" | "donate", item }

function planRestock(pantry, shipment) {
    let actions = [];
    let now = new Date().toISOString().slice(0, 10);
    // First loop through shipment to discard :
    // Case 1: If qty <= 0 
    // Case 2: expired
    outerloop: for (let i = 0; i < shipment.length; i++) {
        let incomingItem = shipment[i];
        if (incomingItem.qty <= 0 || incomingItem.expires < now) {
            actions.push({type: 'discard', item: incomingItem})
            continue;
        }

        let found = false;
        innerloop: for (let j = 0; j < pantry.length; j++) {
            let currentItem = pantry[j];
            if (currentItem.sku === incomingItem.sku) {
                found = true;
                break innerloop;
            }
        }
        if (found) {
            actions.push({type: 'restock', item: incomingItem})
        } else {
            actions.push({type: 'donate', item: incomingItem})
        }
    }
    return actions
}

// let actions = planRestock(parseShipment(pantry), parseShipment(shipment));

function groupByZone(actions) {
    let zones = {};
    for (let action of actions) {
        let zone = action.item.zone;
        if (!zones.hasOwnProperty(zone)) {
            zones[zone] = [action];
        } else {
            zones[zone].push(action)
        }
        if (action.item.sku == "B02") {
        }
    }
    return zones
}
// console.log(actions);
// console.log(groupByZone(actions));

// function clonePantry(pantry) {
//     let clonedPantry = [];
//     for (let item of pantry) {
//         clonedItem = JSON.parse(JSON.stringify(item));
//         clonedPantry.push(clonedItem);
//     }
//     return clonedPantry
// }

function clonePantry(pantry) {
    // v.2
    let clonedPantry = [];
    for (let item of pantry) {
        let clonedItem = Object.assign({}, item);
        clonedPantry.push(clonedItem);
    }
    return clonedPantry
}

// let parsedPantry = parseShipment(pantry);
// console.log(parsedPantry);
// let clonedPantry = clonePantry(parsedPantry); 
// clonedPantry.pop()
// console.log("Cloned Pantry: " + clonedPantry);
// // console.log("Parsed Pantry: " + parsedPantry);

const rawData = [
  "A10|Tomatoes|5|2027-01-01", // Restock existing item
  "B21|Bananas|10|2027-01-01", // Donate new item without zone
  "C32|Eggs|3|2027-01-01|fridge", // Donate to a defined zone
  "C32|Eggs|3|2027-01-01", // Duplicated SKU in shipment
  "D43|Pineapples|0|2027-01-01", // Discard with quantity of 0
  "E54|Peppers|-1|2027-01-01|fridge" // Discard even if it's not in pantry
];

const pantry = [
  { sku: "A10", name: "Tomatoes", qty: 4, expires: "2027-01-01", zone: "fridge" },
  { sku: "D43", name: "Pineapples", qty: 2, expires: "2020-01-01", zone: "general" }
];

const parsedShipment = parseShipment(rawData, true); 

const actions = planRestock(pantry, parsedShipment);
const groupedActions = groupByZone(actions);

console.log(groupedActions);