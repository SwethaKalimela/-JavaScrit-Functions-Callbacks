let prepareFood=function(tableNo,items,foodStatus){
    console.log("Prearing food for items - ",items);  
    foodStatus(); //returns to callback function in index1.js
}

function serveFood(tableNo,items){
    console.log("Serving food for items - ",items);
}

