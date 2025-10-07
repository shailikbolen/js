(function chai(){
    //named iife
    console.log(`DB connected`);
    
})();
// to remove global scope pollution we used IIFE

//this part will not work ig we won't end the upper function with semi-colon
((name) => {
    //simple or un-named iife
    console.log(`DB connected two ${name}`);
    
})('Shailik')