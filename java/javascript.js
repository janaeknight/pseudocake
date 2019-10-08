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




// ~~~~~~~~~~~~~~
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