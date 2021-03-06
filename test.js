// function sum(){
//     var inputs = Array.prototype.slice.call(arguments)
//     var result = 0
//     inputs.forEach(function(el){
//     	result += el
//     })
//     return result;
// };


// // tests
// // ---
// console.assert(sum(1, 2, 3) === 6)
// console.assert(sum(1, 2, 3, 4) === 10)
// console.assert(sum(1, 2, 3, 4, 5) === 15)


// var people = [
//     {name:"Matt", alma_mater:"Univ of Texas - Austin"},
//     {name:"Brian", alma_mater:"Texas A&M"},
//     {name:"Jesse", alma_mater:"Univ of Texas - Austin"},
//     {name:"Justin", alma_mater:"Univ of Florida"}
// ]

// people.sort(function(a, b){
    
// 	if(a.name > b.name){
// 		return 1;
// 	}
// 	if(a.name < b.name){
// 		return -1;
// 	}
// 	return 0;
// })


// // tests
// // ---
// console.assert(people[0].name === "Brian")
// console.assert(people[1].name === "Jesse")
// console.assert(people[2].name === "Justin")

var customers = [
    { first: 'Joe', last: 'Blogs'},
    { first: 'John', last: 'Smith'},
    { first: 'Dave', last: 'Jones'},
    { first: 'Jack', last: 'White'}
]

var results = customers
    .filter(function(a, b){
        if (a.first[0] === 'J'){
        	return a;
        }
    })

    .map(function(a, b){
        var fullName = a.first + " " + a.last;
        return {fullname: fullName};
    })

    .sort(function(a, b){
        if (a.fullname > b.fullname){
        	return 1;
        }
        if(a.fullname < b.fullname){
        	return -1;
        }
        return 0;
    })

// tests
// ---
console.assert(results[0].fullname === "Jack White")
console.assert(results[2].fullname === "John Smith")
