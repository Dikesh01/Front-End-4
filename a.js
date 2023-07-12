
// let a = 20
// export let a = 100
// export let b = 2000
// export let c = 50

// module.exports = {a,b,c}

// export default 
// -------------------------------------
console.log("first file...")

let name = "john"

function display(){
    console.log("Hello", name);
}

function hello(){
    console.log("I am in context of session")
}

console.log("second file...")

export default hello
