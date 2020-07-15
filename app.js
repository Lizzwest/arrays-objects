var name = "Lizz";
console.log(name);

var loc= "Orange county";
console.log(loc);

var favoriteNumber= 7;
console.log(favoriteNumber);


// var musicals = ["Beetlejuice", "Hamilton"," Lion King", "Matilda", "Shrek"]
// console.log(musicals);


// while loops
var num = 10;
var otherNum = 1;
while(otherNum < num){
    console.log(otherNum);
    otherNum += 1;
}

console.log("--------------")

var numTwo= 20;
var numThree = 10;

while( numThree < numTwo){
    console.log(numThree);
    numThree += 1;
}

console.log("--------------")

///some more while loops


var nume = 1
var numeTwo = 43

while( nume <= numeTwo){
    console.log( nume + "ca caw");
    nume += 3;
}
console.log("--------------")
var a = 3
var b= 36

while( a <= b){
    console.log(a);
    a += 2;
}



//for loops
for( var i =0; i <10; i++){
    console.log(i);
}
//print musicals

var musicals = ["Beetlejuice", "Hamilton","Lion King", "Matilda", "Shrek"]
console.log(musicals);


for(var i= 0; i< musicals.length; i++){
    var eachMusical = musicals[i];
// console.log(musicals[i]);
console.log(eachMusical);
}


//make an array
// use a for loop to iterate through array
//print each element in your array

var pets= ["Ping", "Luna", "Bambam", "Pebbles", "Rogelio"]

for(var i=0; i < pets.length; i++){
    var eachPet = pets[i];
    console.log(eachPet);
}

const cars = ["subaru", "Tesla", "prius"];
for( let i=0; i < cars.length; i++){
    let eachCar= cars[i];
    console.log(eachCar);
}



//objects
//key: value pairs

const lizz= {
    fullName: "Lizz Marie Westerband",
    age: 26,
    myLoc: "Orange County",
    placesTraveled: ["Bahamas", "Puerto Rico", "NYC", "Virgin Gorda"]
}
console.log(lizz)

console.log(lizz.myLoc)


console.log(lizz.placesTraveled[2])

const myPost ={
username: "@lizz",
likes: 100,
comments: ['really nice', "so cute", " woah"],
caption: "new kitty",
picture: "link",
}

console.log(myPost)

myPost.myLocation = "OC"
console.log(myPost)
//username, picture, comments, likes, shares, captions


//instagrm post object

const insta= {
    username: "@lizzfrizz",
    hearts: 50,
    caption: "my wedding day",
    comments: ["congrats", "so happy for you", "yaaasss queen"],
    shares: 1

}

console.log(insta)


let sentence = 'I \'m cool';// escape for using apostraphes


//another way

const FourthOfJulyPost = {
    username: '@ga'
};
FourthOfJulyPost.picture = 'https://instagram.com/.....';
FourthOfJulyPost['likes'] = 15;
FourthOfJulyPost.comments = ['ok...'];
FourthOfJulyPost.caption = 'Writing code on the 4th';
console.log(FourthOfJulyPost);