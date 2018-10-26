window.onload = enableLoadBtn;
function GetToGameFromLoad() {
    var center = document.getElementById("center");
    center.style.display = "none";
    var gameScreen = document.getElementById("gameScreen");
    gameScreen.style.display = "block";
    game.style.backgroundImage = "url(css/img/bg.gif)";

    loadYourAvatarImage();
    loadYourName();
    loadYourHP();
    loadYourMoney();
}

function loadYourName() {
    var getNameFromLocalSave = localStorage.getItem("Name");
    spanNameOnGS.innerHTML = getNameFromLocalSave;
}
function loadYourHP(){
    var getHpFromLocalSave = localStorage.getItem("HP");
    spanHealthOnGS.innerHTML = getHpFromLocalSave + " HP";
    spanHealthOnGS.value = parseInt(getHpFromLocalSave);
}
function loadYourMoney() {
    var getSilverFromLocalSave = localStorage.getItem("Silvers");
    SilverOnGs.innerHTML = getSilverFromLocalSave;
    SilverOnGs.value = parseInt(getSilverFromLocalSave);
}

function loadYourAvatarImage() {
    var CaracterImageFromLocalSave = localStorage.getItem("CaracterImage");
    personImage = CaracterImageFromLocalSave;

    if (personImage == 1) {
        ScreenAssasinAvatar.style.display = "block";
    } if (personImage == 2) {
        ScreenDemonAvatar.style.display = "block";
    } if (personImage == 3) {
        ScreenKnightAvatar.style.display = "block";
    }
}

function enableLoadBtn() {
    var getNameFromLocalSave = localStorage.getItem("Name");
    var loadContainer = document.getElementById("loadContainer");

    if (getNameFromLocalSave != null) {
        loadContainer.style.display = "block";
    }
};