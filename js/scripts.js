

alert("Welcome To My Website");



document.getElementById("Featured").onclick = function(e) {
    e.preventDefault();
    
    document.getElementById("featureditems").style.display = "block";
    document.getElementById("selleritems").style.display = "none";
    document.getElementById("latestitems").style.display = "none";
}



document.getElementById("bestseller").onclick = function(e) {
    e.preventDefault();
    document.getElementById("selleritems").style.display = "block";
    document.getElementById("featureditems").style.display = "none";
    document.getElementById("latestitems").style.display = "none";
}



document.getElementById("Latest").onclick = function(e) {
    e.preventDefault();
    document.getElementById("latestitems").style.display = "block";
    document.getElementById("featureditems").style.display = "none";
    document.getElementById("selleritems").style.display = "none";
}




// document.getElementById("furniture_section").onclick = function() {
//     document.getElementById("selleritems").style.display = "block";
//     document.getElementById("latestitems").style.display = "block";
// }




// document.getElementById("featureditems").onclick = function() {
//     document.getElementById("selleritems").style.display = "none";
//     document.getElementById("Latest").style.display = "none";
// }


// document.getElementById("selleritems").onclick = function() {
//     document.getElementById("featureditems").style.display = "none";
//     document.getElementById("Latest").style.display = "none";
// }


// document.getElementById("Latest").onclick = function() {
//     document.getElementById("featureditems").style.display = "none";
//     document.getElementById("selleritems").style.display = "none";
// }


