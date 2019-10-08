// Tree

// var x = document.getElementById("exotictraditional");
// var a = document.getElementById("slipperyslimy");
// var ab = document.getElementById("coolnot");
// var ac = document.getElementById("expensiveannoying");
// var q = document.getElementById("smallfree");
// var qw = document.getElementById("friendlyaggressive");
// var qe = document.getElementById("rightwrong");
// 
// // var o = document.getElementById("");
// 
// function exotic() {
//     x.style.display = "none";
//     a.style.display = "block";
// }
// 
// document.getElementById("exotic").addEventListener("click", function// (){
//    x.style.display = "none";
//    a.style.display = "block";  });





/************************************************************************************/

// Vehicle Finder:
//  -------------------- (Smaller Vechicle)(a)
//  |_1. Motorcyle 2. Bicycle (1 person)(ab)
//  |       (abc)       (abd)
//  |_3. Corvette 4. VW Rabbit (ac)
//  |       (acb)       (acd)
//  --------------------
//  |
//  -------------------- (Bigger Vechicle)(b)
//  |_5. F150   6. Silverado (Pickup)(ba)
//  |       (bab)       (bad)
//  |_7. Jeep Wrangler 8. Four Runner(bb)
//  |       (bba)        (bbd)
//  --------------------




/* ~~~~~~~~~~~~~~
if (smallerVechicle) {
    console.log("a");
} else {
    console.log("b");
}

// A Branch

    // smaller vechicle
    if (onePerson) {
        console.log("ab");
    } else {
        console.log("ac");
    }
        // motor/bike
        if (gasDependent) {
            console.log("abc", "motorcycle");
        } else {
            console.log("abd", "bike");
        }
        // corvette/rabbit
        if (wagonish) {
            console.log("acd", "rabbit");
        } else {
            console.log("acb", "corvette");
        }

//B Branch

    // bigger vechicle
    if (pickup) {
        console.log("ba");
    } else {
        console.log("bb");
    }
        // f150/silverado
        if (towingCapacity) {
            console.log("bad","silverado");
        } else {
            console.log("bab","f150");
        }
        // wrangler/runner
        if (expensive) {
            console.log("bba","wrangler");
        } else {
            console.log("bbd","runner");
        }

*/


// ~~~~~~~~~

// Fashion Bot

// Based on the temperature range, weather conditions and activity choose the appropriate outfit for the day. Must use conditionals, nested conditionals and prompts to return outfit in a 'alert' box. hint: MDN alert


var temp = prompt("What is the current temperature (in °F)?");
var cool = 0;       var coolWear = "";
var cold = 0;       var coldWear = "";
var warm = 0;       var warmWear = "";
var hot = 0;        var hotWear = "";
var rainy = 0;      var rainyWear = "";
var dry = 0;        var dryWear = "";
var humid = 0;      var humidWear = "";

if (temp <=11) {
    alert("Did you ever consider NOT going outside?");
}
if (temp >=12 && temp <= 46) {
    cold = cold + 1;
    var coldRain = prompt("Will it snow/hail/rain? (Yes/No)");
        if (coldRain == "yes") {
            rainy = rainy + 1;
        }
    var coldHumid = prompt("Is it humid? (Yes/No)");
        if (coldHumid == yes) {
            humid = humid + 1;
        }
}
if (temp >=47 && temp <=69) {
    cool = cool + 1;
    var coolRain = prompt("Will it rain? (Yes/No)");
    if (coolRain == "yes") {
        rainy = rainy + 1;
    }
    var coolHumid = prompt("Is it humid? (Yes/No)");
    if (coolHumid == yes) {
        humid = humid + 1;
    }
}
if (temp >=70 && temp <=81) {
    var warmRain = prompt("Will it rain? (Yes/No)");
    if (warmRain == "yes") {
        rainy = rainy + 1;
    }
    var warmHumid = prompt("Is it humid? (Yes/No)");
    if (warmHumid == yes) {
        humid = humid + 1;
    }
}
if (temp >=81 && temp <=103) {
    var hotRain = prompt("Will it rain? (Yes/No)");
    if (hotRain == "yes") {
        rainy = rainy + 1;
    }
    var hotHumid = prompt("Is it humid? (Yes/No)");
    if (hotHumid == yes) {
        humid = humid + 1;
    }
}
if (temp>=104) {
    alert("WARNING: It's way too hot to be outside comfortably for longer than 20 seconds. If you decide to go outside anyways, I recommended not wearing any clothes at all. Maybe take off your skin too.");
}