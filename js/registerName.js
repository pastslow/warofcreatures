// go to register section
function changeFromGameToRegister() {
    var gameCont = document.getElementById("gameCont");
    var RegisterName = document.getElementById("RegisterName");
    gameCont.style.display = "none";
    RegisterName.style.display = "block";
}
// go to register section with knight selected
function KnightSlected() {
    changeFromGameToRegister();
    var KnightRegImg = document.getElementById("KnightRegImg");
    var KnightStats = document.getElementById("KnightStats");
    var LowKnightStats = document.getElementById("LowKnightStats");
    LowKnightStats.style.display = "block";
    KnightRegImg.style.display = "block";
    KnightStats.style.display = "block";
}
// go to register section with demon selected
function DemonSlected() {
    changeFromGameToRegister();
    var DemonRegImg = document.getElementById("DemonRegImg");
    var DemonStats = document.getElementById("DemonStats");
    var LowDemonStats = document.getElementById("LowDemonStats");
    LowDemonStats.style.display = "block";
    DemonRegImg.style.display = "block";
    DemonStats.style.display = "block";
}
// go to register section with assasin selected
function AssasinSelected() {
    changeFromGameToRegister();
    var AssasinRegImg = document.getElementById("AssasinRegImg");
    var AssasinStats = document.getElementById("AssasinStats");
    var LowAssasinStats = document.getElementById("LowAssasinStats");
    LowAssasinStats.style.display = "block";
    AssasinRegImg.style.display = "block";
    AssasinStats.style.display = "block";
}
// get back to first screen using GetBack Button
function getBack() {
    var gameCont = document.getElementById("gameCont");
    var RegisterName = document.getElementById("RegisterName");
    gameCont.style.display = "block";
    RegisterName.style.display = "none";
    var KnightRegImg = document.getElementById("KnightRegImg");
    var KnightStats = document.getElementById("KnightStats");
    KnightRegImg.style.display = "none";
    KnightStats.style.display = "none";
    var DemonRegImg = document.getElementById("DemonRegImg");
    var DemonStats = document.getElementById("DemonStats");
    DemonRegImg.style.display = "none";
    DemonStats.style.display = "none";
    var AssasinRegImg = document.getElementById("AssasinRegImg");
    var AssasinStats = document.getElementById("AssasinStats");
    AssasinRegImg.style.display = "none";
    AssasinStats.style.display = "none";
    var LowKnightStats = document.getElementById("LowKnightStats");
    LowKnightStats.style.display = "none";
    var LowDemonStats = document.getElementById("LowDemonStats");
    LowDemonStats.style.display = "none";
    var LowAssasinStats = document.getElementById("LowAssasinStats");
    LowAssasinStats.style.display = "none";
}
//Display Start Button After Regex Name is true
var haveName
function completeName() {
    var nameField = document.getElementById("HeroName").value;
    var reg = /^[A-Z]+([A-Za-z0-9_\-\.@]{5,16})$/;
    var startBtn = document.getElementById("StartBtn");
    var pElementBad = document.getElementById("pElementBad");
    if (reg.test(nameField) == true) {
        StartBtn.style.display = "block";
        //enable message good if regex is true
        pElementGood.style.display = "block";
        pElementBad.style.display = "none";
    } else {
        StartBtn.style.display = "none";
        //enable message bad if regex is true
        pElementBad.style.display = "block";
        pElementGood.style.display = "none";
    }
    //disable both message good and bad if nameField is less or equal with 5
    if (nameField.length <= 5) {
        pElementBad.style.display = "none";
        pElementGood.style.display = "none";
    }
}