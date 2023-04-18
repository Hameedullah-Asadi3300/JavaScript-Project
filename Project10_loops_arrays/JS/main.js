



function call_loop() {
    var number = "";
    var x = 1;
    while (x < 20) {
        number += "<br>" + x;
        x++;
    }
    document.getElementById("loop").innerHTML = number;
}


//for LOOP
var cities = ["Kabul", "Herat", "Kandahar", "Mazar-e-Sharif", "Bamyan", "Pule-e-alam"];
var content = "";
var y;
function for_Loop() {
    for (y = 0; y < cities.length; y++) {
        content += cities[y] + "<br>";
    }
    document.getElementById("list_of_Cities").innerHTML = content;      
}
//THE END for LOOP


//Array
function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("cat").innerHTML = "In this picture, the cat is " +
        Cat_Picture[2] + ".";
}
//THE END ARRAY


// 2ND ARRAY
function my_pics() {
    var my_Picture = [];
    my_Picture[0] = "exercising";
    my_Picture[1] = "entertaining";
    my_Picture[2] = "working";
    my_Picture[3] = "studying";
    document.getElementById("me").innerHTML = "In this picture, I am " +
        my_Picture[3] + ".";
    }


    //CONSTANT
function constant_function() {
    const Musical_Instrument = { type: "guitar", brand: "Fender", color: "black" }
    Musical_Instrument.Color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("constant").innerHTML = "The cost of the " +
        Musical_Instrument.type + " was " + Musical_Instrument.price +".";
}
    //THE END CONSTANT

var x = 10;
x = 7;
document.write(x)



