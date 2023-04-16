
//Dictionary name
function my_Car() {
    var car = {
        Make: "Toyota",
        Model: "Corolla",
        Year: 2022,
        Color: "Black",
        Made_in: "Japan",
    };
    document.getElementById("dictionary").innerHTML = car.Make;
}

//Delete operator as word
function my_City() {
    var City = {
        Name: "Vancouver",
        Location: "Nort Amercia",
        Population: "7 Million",
        Culture: "Diverse",
    };
    delete City.Name;
    document.getElementById("pretty").innerHTML = City.Name;
}

document.write("10" + 15);





