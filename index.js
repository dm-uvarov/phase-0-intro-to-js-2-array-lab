// Write your solution here!

// declare cats[]
let cats = ["Milo", "Otis", "Garfield"];

// push()
function destructivelyAppendCat(name) {
    
    cats.push(name);
}

// pop()
function destructivelyRemoveLastCat() {
    
    cats.pop();
}


//shift()
function destructivelyRemoveFirstCat() {
    
    cats.shift();
}
//unshift
function destructivelyPrependCat(name) {
    
    cats.unshift(name);
}


function appendCat(name) {
    
   return [...cats, name]
    
}
function prependCat(name) {
    
    return [ name , ...cats]
}

function removeFirstCat() {
    
    return cats.slice(1);
}

function removeLastCat() {
    
    return cats.slice(0, cats.length - 1);
}

/*
console.log(cats);
console.log(removeLastCat());
console.log(cats);
*/