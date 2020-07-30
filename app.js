
// onst allPeople = fetch("https://swapi.dev/api/people");
// allPeople.then(data => data.json()).then(people=> console.log(people));





// (async ()=>{
//     const people = document.querySelector("#people")
//     const data = await fetch("https://swapi.dev/api/people");
//     const  allPeople  = await data.json();
//     const {results} = allPeople;
//     console.log(results);
    
//     const peopleDiv = results.map(el => `<a href=${el.url}><li>${el.name}</li></a>`).join(" ")
    
//     people.innerHTML = peopleDiv;

// })()
 

// const getData = ()=>{
//     return new Promise((resolve, reject)=>{
//         // console.log("hey");
//         resolve("data")
//     })
// }
    
// const getData = () => new Promise((resolve, reject)=>{
//         // console.log("hey");
//         resolve("data")
//         reject("error while making request")
//     })


// getData().then(data=>console.log(data)).catch(err=> console.log(err));

// (async ()=>{
//     const p  = await getData();
//     console.log(p.results.results);
// })()

function myFunc(){
   let x = document.forms["frm"]
   let text = " ";
   for(let i=0; i< x.length; i++){
       text += x.elements[i].value + "<br>"   } 
       document.getElementById('output').innerHTML = text;
}


let name = 'mew'
let age = 10;
let non = 'mey'
let shey = 'shey'
let person = document.getElementById("clic").addEventListener('click',function(){
    added(name, age,shey,non)
});

function added(name,age,shey,non){
let result  = `  ${name} ${age} ${shey} ${non}`  
 document.getElementById('clicked').innerHTML = result;
}

document.getElementById("clic").addEventListener("click", myact)
function myact(){
    alert("hello dear")
}


let fname = 'faith'
let lname = 'oni'
let par = document.createElement('p')
let txt = document.createTextNode(`${fname} ${lname}`)
par.appendChild(txt)
let element = document.getElementById('kept')
element.appendChild(par)



class User{
    constructor(gname,gheight,gage){
        this.gname = gname;
        this.gheight = gheight; 
        this.gage = gage;
    }
    
}
user = new User('faith',10,2)
console.log(user.gname , user.gheight)

//gemerators and iterators
