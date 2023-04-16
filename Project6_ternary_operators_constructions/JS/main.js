

//Ternary Operators
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("ride").innerHTML = Can_ride + " to ride.";
}


        //2ND TRENARY OPERATORS
        function Seat_Function() {
            var age, Can_sit;
            age = document.getElementById("seat").value;
            Can_sit = (age < 13) ? "You cannot sit in front seat." : "You are old enough to sit in front seat.";
            document.getElementById("front").innerHTML = Can_sit + " to sit.";
}
        

//NEW KEYWORD ASSIGNMENT
// Constructor function for Person objects
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  // Create a Person object
  const myFather = new Person("John", "Doe", 50, "blue");
  
  // Display age
  document.getElementById("father").innerHTML =
  "My father is " + myFather.age + "."; 
//THE END



//NEW KEYWORD ASSIGNMENT 2
function Country(name, location, culture, people) {              // Constructor function for Person objects
    this.name = name;
    this.location = location;
    this.culture = culture;
    this.people = people;
}

const favorite = new Country("Cnada", "Nort America", "Diverse", "kind");            // Create a Person object

document.getElementById("north").innerHTML =              // Displays location and people
    "Canada is in " + favorite.location + " and Canadians are " + favorite.people + ".";
document.getElementById("2nd").innerHTML =                //This is 2nd display show Canadians culture
    "Also Canada has a " + favorite.culture + " culture" + ".";
 
//THE END


//NEW KEYWORD
function Child(first, last, age, hair) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.hair = hair;
}

const mySon = new Child("Hisham", "Asadi", 4, "brown")

document.getElementById("king").innerHTML =
    "My son, " + mySon.firstName + " " + mySon.lastName + " is " + mySon.age + " years old boy " + ".";
//THE END


//NESTED FUNCTION
function count_Function() {
    document.getElementById("Counting").innerHTML = Count ();
    function Count() {
        var Starting_Point = 9;
        function plus_one() { Starting_Point += 1;}
        plus_one();
        return Starting_Point;
    }
        }










