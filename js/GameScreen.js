function getToGameScreen() {
    var RegisterName = document.getElementById("RegisterName");
    var gameScreen = document.getElementById("gameScreen");
    RegisterName.style.display = "none";
    game.style.backgroundImage = "url(css/img/bg.gif)";
    gameScreen.style.display = "block";
    // Get Name on Game Screen
    getNameOnGS()
    //Get first money
    GiveMoneyFirst()
    //Get my Avatar
    changeAvatarOnGS()
    // Get Hp on Game Screen
    changeAvatarHealthOnGs()
    //
    localStorage.setItem("Name", HeroName.value);
    localStorage.setItem("HP", spanHealthOnGS.value);
}
// GS = Main Game Screen
function getNameOnGS() {
    var HeroName = document.getElementById("HeroName").value;
    var spanNameOnGS = document.getElementById("spanNameOnGS");
    spanNameOnGS.value = HeroName;
    spanNameOnGS.innerHTML = HeroName;
};
// After Register 50 silvester bonus
function GiveMoneyFirst() {
    var DiamondsOnGS = document.getElementById("DiamondsOnGS");
    DiamondsOnGS.value = 0;
    DiamondsOnGS.innerHTML = 0;
    var GoldOnGs = document.getElementById("GoldOnGs");
    GoldOnGs.value = 0;
    GoldOnGs.innerHTML = 0;
    var SilverOnGs = document.getElementById("SilverOnGs");
    SilverOnGs.value = 50;
    SilverOnGs.innerHTML = 50;
    var CopperOnGs = document.getElementById("CopperOnGs");
    CopperOnGs.value = 0;
    CopperOnGs.innerHTML = 0;

    localStorage.setItem("Diamonds", DiamondsOnGS.value);
    localStorage.setItem("Gold", GoldOnGs.value);
    localStorage.setItem("Silvers", SilverOnGs.value);
    localStorage.setItem("Coppers", CopperOnGs.value);
};
// Change avatar image from register page to game screen
function changeAvatarOnGS() {
    var personImage = 0;
    var AssasinRegImg = document.getElementById("AssasinRegImg");
    var DemonRegImg = document.getElementById("DemonRegImg");
    var KnightRegImg = document.getElementById("KnightRegImg");
    var ScreenAssasinAvatar = document.getElementById("ScreenAssasinAvatar");
    var ScreenKnightAvatar = document.getElementById("ScreenKnightAvatar");
    var ScreenDemonAvatar = document.getElementById("ScreenDemonAvatar");
    if (AssasinRegImg.style.display == "block") {
        ScreenAssasinAvatar.style.display = "block";
        ScreenKnightAvatar.style.display = "none";
        ScreenDemonAvatar.style.display = "none";
        personImage = 1;
    } if (DemonRegImg.style.display == "block") {
        ScreenAssasinAvatar.style.display = "none";
        ScreenKnightAvatar.style.display = "none";
        ScreenDemonAvatar.style.display = "block";
        personImage = 2;
    } if (KnightRegImg.style.display == "block") {
        ScreenAssasinAvatar.style.display = "none";
        ScreenKnightAvatar.style.display = "block";
        ScreenDemonAvatar.style.display = "none";
        personImage = 3;
    }

    localStorage.setItem("CaracterImage", personImage);
}
function changeAvatarHealthOnGs() {
    var spanHealthOnGS = document.getElementById("spanHealthOnGS")
    var AssasinRegImg = document.getElementById("AssasinRegImg");
    var DemonRegImg = document.getElementById("DemonRegImg");
    var KnightRegImg = document.getElementById("KnightRegImg");
    if (AssasinRegImg.style.display == "block") {
        spanHealthOnGS.value = Human.Assasin.hp;
        spanHealthOnGS.innerHTML = Human.Assasin.hp + " HP";
    } if (DemonRegImg.style.display == "block") {
        spanHealthOnGS.value = Human.Demon.hp;
        spanHealthOnGS.innerHTML = Human.Demon.hp + " HP";
    } if (KnightRegImg.style.display == "block") {
        spanHealthOnGS.value = Human.Knight.hp;
        spanHealthOnGS.innerHTML = Human.Knight.hp + " HP";
    }
}
var Human = {
    Knight: {
        armour: 20,
        totalHp: 150,
        hp: 150,
        minDmg: 5,
        maxDmg: 10,
        crit: 1,
        dodge: 1,
        block: 5,
    },
    Demon: {
        armour: 10,
        totalHp: 75,
        hp: 75,
        minDmg: 10,
        maxDmg: 20,
        crit: 5,
        dodge: 1,
        block: 1,
    },
    Assasin: {
        armour: 10,
        totalHp: 75,
        hp: 75,
        minDmg: 10,
        maxDmg: 21,
        crit: 1,
        dodge: 5,
        block: 1,
    },
}