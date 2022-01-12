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

// append 
function appendCat(name) {
    
   return [...cats, name]
    
}

// prepend
function prependCat(name) {
    
    return [ name , ...cats]
}

//remove first
function removeFirstCat() {
    
    return cats.slice(1);
}

// remove last
function removeLastCat() {
    
    return cats.slice(0, cats.length - 1);
}

