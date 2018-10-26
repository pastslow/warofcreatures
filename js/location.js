function changeLocation(number) {
    var titleLoc = document.getElementById("titleLoc");
    // Location Images
    var imgSettlement = document.getElementById("imgSettlement");
    var imgSmoky = document.getElementById("imgSmoky");
    var imgClanBurial = document.getElementById("imgClanBurial");
    var imgFort = document.getElementById("imgFort");
    var imgGeorge = document.getElementById("imgGeorge");
    var imgSqura = document.getElementById("imgSqura");
    var imgPlace = document.getElementById("imgPlace");
    var imgCity = document.getElementById("imgCity");
    // Location Buttons
    var locSmokyKnools = document.getElementById("locSmokyKnools");
    var locUnderInstance = document.getElementById("locUnderInstance");
    var locShoplocShop = document.getElementById("locShop");
    var locSettlementChernang = document.getElementById("locSettlementChernang");
    var locClanBurial = document.getElementById("locClanBurial");
    var locFortDybrach = document.getElementById("locFortDybrach");
    var locGeorge = document.getElementById("locGeorge");
    var locSqura = document.getElementById("locSqura");
    var locPlaceOfSorrow = document.getElementById("locPlaceOfSorrow");
    var locDartong = document.getElementById("locDartong");
    switch (number) {
        case 0: // IN/TO smoky knools
            // change img location
            imgSmoky.style.display = "block";
            imgSettlement.style.display = "none";
            imgClanBurial.style.display = "none";
            imgFort.style.display = "none";
            imgGeorge.style.display = "none";
            // change title of location
            titleLoc.innerText = "Smoky Knools";
            // change buttons locations
            locSettlementChernang.style.display = "block";
            locClanBurial.style.display = "block";
            locFortDybrach.style.display = "block";
            locGeorge.style.display = "block";
            locPlaceOfSorrow.style.display = "none";
            locSqura.style.display = "none";
            locSmokyKnools.style.display = "none";
            locUnderInstance.style.display = "none";
            locShoplocShop.style.display = "none";
            // change npc on location
            npcChief.style.display="none";
            break;
        case 1: // IN/TO Settlement of chernang
            // change img location
            imgSettlement.style.display = "block";
            imgSmoky.style.display = "none";
            // change title of location
            titleLoc.innerText = "Settlement of Chernang";
            // change buttons locations
            locSmokyKnools.style.display = "block";
            locUnderInstance.style.display = "block";
            locShoplocShop.style.display = "block";
            locGeorge.style.display = "none";
            locFortDybrach.style.display = "none";
            locClanBurial.style.display = "none";
            locSettlementChernang.style.display = "none";
            // change npc on location
            npcChief.style.display="block";
            break;
        case 2: // IN/TO Clan Burial
            // change img location
            imgClanBurial.style.display = "block";
            imgSqura.style.display = "none";
            imgPlace.style.display = "none";
            imgSmoky.style.display = "none";
            // change title of location
            titleLoc.innerText = "Clan Burial";
            // change buttons locations
            locSmokyKnools.style.display = "block";
            locSqura.style.display = "block";
            locPlaceOfSorrow.style.display = "block";
            locGeorge.style.display = "none";
            locFortDybrach.style.display = "none";
            locSettlementChernang.style.display = "none";
            locClanBurial.style.display = "none";
            locDartong.style.display = "none";
            break;
        case 3: // IN/TO Fort Dybrach
            // change img location
            imgFort.style.display = "block";
            imgSmoky.style.display = "none";
            // change title of location
            titleLoc.innerText = "Fort Dybrach";
            // change buttons locations
            locSmokyKnools.style.display = "block";
            locGeorge.style.display = "none";
            locFortDybrach.style.display = "none";
            locSettlementChernang.style.display = "none";
            locClanBurial.style.display = "none";
            break;
        case 4: // IN/TO George of Chernang
            // change img location
            imgGeorge.style.display = "block";
            imgSmoky.style.display = "none";
            // change title of location
            titleLoc.innerText = "George of Chernang";
            // change buttons locations
            locSmokyKnools.style.display = "block";
            locGeorge.style.display = "none";
            locFortDybrach.style.display = "none";
            locSettlementChernang.style.display = "none";
            locClanBurial.style.display = "none";
            break;
        case 5: // IN/TO Squra of Fire
            // change img location
            imgSqura.style.display = "block";
            imgClanBurial.style.display = "none";
            imgCity.style.display = "none";
            // change title of location
            titleLoc.innerText = "Squire of Fire";
            // change buttons locations
            locDartong.style.display = "block";
            locClanBurial.style.display = "block";
            locPlaceOfSorrow.style.display = "none";
            locSmokyKnools.style.display = "none";
            locSqura.style.display = "none";
            break;
        case 6: // IN/TO Place of Sorrow
            // change img location
            imgPlace.style.display = "block";
            imgClanBurial.style.display = "none";
            // change title of location
            titleLoc.innerText = "Place of Sorrow";
            // change buttons locations
            locClanBurial.style.display = "block";
            locPlaceOfSorrow.style.display = "none";
            locSmokyKnools.style.display = "none";
            locSqura.style.display = "none";
            break;
        case 7: // IN/TO Dartong City
            // change img location
            imgSqura.style.display = "none";
            imgCity.style.display = "block";
            // change title of location
            titleLoc.innerText = "Dartong City";
            // change buttons locations
            locDartong.style.display = "none";
            locSqura.style.display = "block";
            locClanBurial.style.display = "none";
            break;
    }




}

