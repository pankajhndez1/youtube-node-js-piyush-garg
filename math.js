function add(a,b) {
    return a + b;
}

function sub(a,b) {
    return a - b;
}

// Exporting the functions using CommonJS module syntax also known as default export
module.exports = {
    add,
    sub
}

// now for the multiple exports we can use the following syntax
module.exports.printHellow = ()=>{
    console.log('hello world');
}   

module.exports.printGoodbye = ()=>{         
    console.log('goodbye ');
}   


module.exports.multiplyInput = (a,b) => {
    return a * b;
}   