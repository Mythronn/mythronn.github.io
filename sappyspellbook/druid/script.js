document.addEventListener("DOMContentLoaded", function() {
  parseURL();
  updatePointsAvailable();
  updateTable();
  //console.log("The DOM is fully loaded.");
});
window.addEventListener('hashchange', function() {
  var referrer = document.referrer;
  //console.log("The referrer is: " + referrer);
  //if (referrer === "" || !referrer.includes(window.location.origin)) 
    
    parseURL();
    updateTable();;  
});
/*##################################*/
function parseURL(){
  fullurl = window.location.href.split("/");
  url = fullurl[fullurl.length-1];
  url = url.replace("index.html", "");
  var exps = [];
  //console.log(url);
  if(url.length > 1 && url[0] == "#"){
    url = expandZeros(url);
    url = url.replace("#", "");
      for(let i = 0; i < abilityCount; i++){
          //console.log(abilities[i].name);
          abilities[i].purchased = decodeMap(url[i]);         
      }
      exps = url.split("-");
      abilities[4].selectedAbility1 = exps[1].replace(/_/g, " ");
      abilities[4].selectedAbility2 = exps[2].replace(/_/g, " ");
      if(exps[3] != null && exps[3] != ""){
        document.title = (exps[3]).replace(/_/g, " ");
        document.getElementById('titleShow').innerHTML = document.title;
      }
      if(exps[4] != null && exps[4] != ""){
        if(exps[4] == "ltp"){
          document.getElementById("ltpCheckBox").checked = true;
        }
        if(exps[4] == "no"){
          document.getElementById("ltpCheckBox").checked = false;
        }
      }
      reprocessPoints(0);
  }
}
/*##################################*/
function createURL(){
  let s = "#";
  let chk = "no";
  if(document.getElementById("ltpCheckBox").checked){
    chk = "ltp"
  }
  else{
    chk = "no";
  }
  
  for(let i = 0; i < abilityCount; i++){
      s += encodeMap(abilities[i].purchased);
  }
  s += "-" + (abilities[4].selectedAbility1).replace(/ /g, "_") + "-" + (abilities[4].selectedAbility2).replace(/ /g, "_") + "-" + (document.title).replace(/ /g, "_") + "-" + chk;
  s = replaceRepeatingZeros(s);
  window.history.pushState({}, "", s);
}
/*##################################*/
function encodeMap(ap){
  if(ap == 0){return "0";}
  if(ap == 1){return "1";}
  if(ap == 2){return "2";}
  if(ap == 3){return "3";}
  if(ap == 4){return "4";}
  if(ap == 5){return "5";}
  if(ap == 6){return "6";}
  if(ap == 7){return "7";}
  if(ap == 8){return "8";}
  if(ap == 9){return "9";}
  if(ap == 10){return "a";}
  if(ap == 11){return "b";}
  if(ap == 12){return "c";}
  if(ap == 13){return "d";}
  if(ap == 14){return "e";}
  if(ap == 15){return "f";}
  if(ap == 16){return "g";}
  if(ap == 17){return "h";}
  if(ap == 18){return "i";}
  if(ap == 19){return "j";}
  if(ap == 20){return "k";}
  if(ap == 21){return "l";}
  if(ap == 22){return "m";}
  if(ap == 23){return "n";}
  if(ap == 24){return "o";}
  if(ap == 25){return "p";}
  if(ap == 26){return "q";}
  if(ap == 27){return "r";}
  if(ap == 28){return "s";}
  if(ap == 29){return "t";}
  if(ap == 30){return "u";}
  if(ap == 31){return "v";}
}
function decodeMap(ap){
  if(ap == "0"){return 0;}
  if(ap == "1"){return 1;}
  if(ap == "2"){return 2;}
  if(ap == "3"){return 3;}
  if(ap == "4"){return 4;}
  if(ap == "5"){return 5;}
  if(ap == "6"){return 6;}
  if(ap == "7"){return 7;}
  if(ap == "8"){return 8;}
  if(ap == "9"){return 9;}
  if(ap == "a"){return 10;}
  if(ap == "b"){return 11;}
  if(ap == "c"){return 12;}
  if(ap == "d"){return 13;}
  if(ap == "e"){return 14;}
  if(ap == "f"){return 15;}
  if(ap == "g"){return 16;}
  if(ap == "h"){return 17;}
  if(ap == "i"){return 18;}
  if(ap == "j"){return 19;}
  if(ap == "k"){return 20;}
  if(ap == "l"){return 21;}
  if(ap == "m"){return 22;}
  if(ap == "n"){return 23;}
  if(ap == "o"){return 24;}
  if(ap == "p"){return 25;}
  if(ap == "q"){return 26;}
  if(ap == "r"){return 27;}
  if(ap == "s"){return 28;}
  if(ap == "t"){return 29;}
  if(ap == "u"){return 30;}
  if(ap == "v"){return 31;}
}
/*##################################*/
function replaceRepeatingZeros(input) {
  return input.replace(/0+/g, (match) => {
    const zeroCount = match.length;
    return `@${zeroCount}@`;
  });
}
/*##################################*/
function expandZeros(input) {
  return input.replace(/@(\d+)@/g, (match, num) => {
    return '0'.repeat(Number(num));
  });
}
/*##################################*/
function toggleIncants(){
  showIncants = !showIncants;
  toggleList("incants");
}
/*##################################*/
function toggleList(incantOnly){
  var tables = [];
  var lists = [];
  var levelList = ["", "", "", "", "", "", ""];
  var curLevel = document.getElementById("reqLevel").value;
  
  for(let i = 1; i < 7; i++){
    tables[i] = document.getElementById("table-lvl" + i);
    lists[i] = document.getElementById("lvl" + i + "List");
  }
  for(let i = 1; i < 7; i++){
    levelList = ["", "", "", "", "", "", ""];
    for(let k = 0; k < abilityCount; k++){
      if(abilities[k].level == i && abilities[k].purchased > 0){
        levelList[i] = levelList[i] + "<BR>" + abilities[k].purchased +"x "+ abilities[k].name; 
        if(abilities[k].name == "Experienced" && abilities[k].purchased == 2){
          levelList[i] = levelList[i] + " [" + abilities[k].selectedAbility1 + "] [" + abilities[k].selectedAbility2 + "]";
        }
        if(abilities[k].name == "Experienced" && abilities[k].purchased == 1){
          levelList[i] = levelList[i] + " [" + abilities[k].selectedAbility1 + "]";
        }
        if(abilities[k].type == "Magic Ball"){
          levelList[i] = levelList[i] + ": " + abilities[k].use * abilities[k].purchased + " Ball(s)";
        }
        if(abilities[k].type == "Meta-Magic"){ 
          levelList[i] = levelList[i] + ": " + abilities[k].use * abilities[k].purchased + "/" + abilities[k].per + " " + abilities[k].charge;
        }
        if(abilities[k].type == "Verbal"){
          levelList[i] = levelList[i] + ": " + abilities[k].use * abilities[k].purchased + "/" + abilities[k].per + " " + abilities[k].charge;
        }
        if(abilities[k].type == "Enchantment" && abilities[49].purchased == 0){
          levelList[i] = levelList[i] + ": " + abilities[k].use * abilities[k].purchased + "/" + abilities[k].per + " " + abilities[k].charge;
        }
        if(abilities[k].type == "Enchantment" && abilities[49].purchased == 1){
          levelList[i] = levelList[i] + ": " + abilities[k].use * abilities[k].purchased * 2 + "/" + abilities[k].per + " " + abilities[k].charge;
        }
        if(showIncants && abilities[k].incant != ""){
          levelList[i] = levelList[i] + "<BR>- " + abilities[k].incant;
        }
       }
    }
    levelList[i] = levelList[i].slice(4);
    lists[i].innerHTML = levelList[i];
    if(tables[i].style.display == "block" && incantOnly != 'incants'){
      
      tables[i].style.display = "none";
      lists[i].style.display = "block";
      document.getElementById("saveList").hidden = false;
      document.getElementById("titleList").hidden = false;
      document.getElementById("hlp1").hidden = true;
      document.getElementById("hlp2").hidden = true;
      document.getElementById("hlp3").hidden = true;
      document.getElementById("hlp4").hidden = true;
      document.getElementById("hlp5").hidden = true;
      document.getElementById("level1Points").hidden = true;
      document.getElementById("level2Points").hidden = true;
      document.getElementById("level3Points").hidden = true;
      document.getElementById("level4Points").hidden = true;
      document.getElementById("level5Points").hidden = true;
      document.getElementById("level6Points").hidden = true;
      if(curLevel < 2){
        document.getElementById("2ndHeader").hidden = true;
      }
      if(curLevel < 3){
        document.getElementById("3rdHeader").hidden = true;
      }
      if(curLevel < 4){
        document.getElementById("4thHeader").hidden = true;
      }
      if(curLevel < 5){
        document.getElementById("5thHeader").hidden = true;
      }
      if(curLevel < 6){
        document.getElementById("6thHeader").hidden = true;
      }
    }
    else if(incantOnly != 'incants'){
      tables[i].style.display = "block";
      lists[i].style.display = "none";
      document.getElementById("saveList").hidden = true;
      document.getElementById("titleList").hidden = true;
      document.getElementById("hlp1").hidden = false;
      document.getElementById("hlp2").hidden = false;
      document.getElementById("hlp3").hidden = false;
      document.getElementById("hlp4").hidden = false;
      document.getElementById("hlp5").hidden = false;
      document.getElementById("level1Points").hidden = false;
      document.getElementById("level2Points").hidden = false;
      document.getElementById("level3Points").hidden = false;
      document.getElementById("level4Points").hidden = false;
      document.getElementById("level5Points").hidden = false;
      document.getElementById("level6Points").hidden = false;
      document.getElementById("1stHeader").hidden = false;
      document.getElementById("2ndHeader").hidden = false;
      document.getElementById("3rdHeader").hidden = false;
      document.getElementById("4thHeader").hidden = false;
      document.getElementById("5thHeader").hidden = false;
      document.getElementById("6thHeader").hidden = false;
    } 
  }   
}
/*##################################*/
function updateTable(){
  var cell;
  for(let i = 0; i < abilityCount; i++){
    cell = document.getElementById(i + "max");
    if(abilities[i].max == 31){
      cell.innerHTML = "-";
    }
    else{
      cell.innerHTML = abilities[i].max;
    }
    cell = document.getElementById(i + "cost");
    cell.innerHTML = abilities[i].cost;
    if(document.getElementById(abilities[i].pointTotalId).value != 0){
      document.getElementById(abilities[i].pointTotalId).style.background = "#FFD700";
    }
    else
      document.getElementById(abilities[i].pointTotalId).style.background = "";
  }
}
/*##################################*/
function resetPoints(fullReset){
  var lists = [];
  for(let i = 1; i < 7; i++){
    lists[i] = document.getElementById("lvl" + i + "List");
    lists[i].innerHTML = "";
  }
  if(abilities[0].purchased > 0){
    processRangerMinus();
    abilities[0].purchased = 0;
  }
  processAvatarofNatureMinus();
  processSummonerMinus();

  for(let i = 0; i < abilityCount; i++){
    abilities[i].purchased = 0;
    document.getElementById(abilities[i].pointTotalId).value = 0;
  }
  pointsAvailable = [0, 5,  5,  5,  5,  5,  6];
  pointsSpent = [0, 0,  0,  0,  0,  0,  0];
  higherLevelPoints = [0, 0,  0,  0,  0,  0,  0]; 
  if(fullReset == 1){
    document.getElementById("exp1").value = "Select Spell";
    document.getElementById("exp2").value = "Select Spell";
    document.getElementById("ltp").innerText = "";
  }
  if(fullReset){
    updateExperienced();
    createURL(); //new
  }
  updatePointsAvailable();
}
/*##################################*/
function updateExperienced(){
  abilities[4].selectedAbility1 = document.getElementById("exp1").value;
  abilities[4].selectedAbility2 = document.getElementById("exp2").value;
  
  if(abilities[4].purchased == 0){
  document.getElementById("experiencedtext").innerHTML = "<div class=\"popup\" ><span class=\"popuptext\" id=\"ExperiencedPopup\"></span></div>Experienced";
    document.getElementById("exp1").disabled = false;
    document.getElementById("exp2").disabled = true;
    document.getElementById("exp1").value = "Select Spell";
    abilities[4].selectedAbility1 = "Select Spell";
  }
  
  if(abilities[4].purchased == 1){    
  document.getElementById("experiencedtext").innerHTML = "<div class=\"popup\" ><span class=\"popuptext\" id=\"ExperiencedPopup\"></span></div>Experienced<BR>[" + abilities[4].selectedAbility1 + "]";
    document.getElementById("exp1").disabled = true;
    document.getElementById("exp2").disabled = false;
    document.getElementById("exp2").value = "Select Spell";
    abilities[4].selectedAbility2 = "Select Spell";
  }  
  if(abilities[4].purchased == 2){    
  document.getElementById("experiencedtext").innerHTML = "<div class=\"popup\" ><span class=\"popuptext\" id=\"ExperiencedPopup\"></span></div>Experienced<BR>[" + abilities[4].selectedAbility1 + "]<BR>[" + abilities[4].selectedAbility2 + "]";
    document.getElementById("exp1").disabled = true;
    document.getElementById("exp2").disabled = true;
  }
  processExpChange(0);
  updateTable();
}
/*##################################*/
function processExpChange(fromUser){  
    if(abilities[4].purchased == 0){
      if(document.getElementById("exp1").value != "Select Spell"){
        document.getElementById("Experiencedplus").disabled = false;
        //console.log(document.getElementById("exp1").value);
      }
      else{document.getElementById("Experiencedplus").disabled = true}
    }
    if(abilities[4].purchased == 1){
      if(document.getElementById("exp2").value != "Select Spell"){
        document.getElementById("Experiencedplus").disabled = false;
      }
      else{document.getElementById("Experiencedplus").disabled = true}
    }
    if(abilities[4].purchased == 2){
      document.getElementById("Experiencedplus").disabled = false;
    }
    if(abilities[4].selectedAbility1 == "Mend" || abilities[4].selectedAbility2 == "Mend"){
      abilities[7].charge = "Charge x5";
      abilities[7].text = abilities[7].text.replace("Life<BR>", "Life CHARGE x5<BR>");
    }
    else{
      abilities[7].charge = "";
      abilities[7].text = abilities[7].text.replace("Life CHARGE x5<BR>", "Life<BR>");
    }
    if(abilities[4].selectedAbility1 == "Greater Mend" || abilities[4].selectedAbility2 == "Greater Mend"){
      abilities[22].charge = "Charge x10";
      abilities[22].text = abilities[22].text.replace("Refresh<BR>", "Refresh CHARGE x10<BR>");
    }
    else{
      abilities[22].charge = "";
      abilities[22].text = abilities[22].text.replace("Refresh CHARGE x10<BR>", "Refresh<BR>");
    }
    if(abilities[4].selectedAbility1 == "Icy Blast" || abilities[4].selectedAbility2 == "Icy Blast"){
      abilities[23].charge = "Charge x5";
      abilities[23].text = abilities[23].text.replace("Life<BR>", "Life CHARGE x5<BR>");
    }
    else{
      abilities[23].charge = "";
      abilities[23].text = abilities[23].text.replace("Life CHARGE x5<BR>", "Life<BR>");
    }
    if(abilities[4].selectedAbility1 == "Heal" || abilities[4].selectedAbility2 == "Heal"){
      abilities[11].charge = "Charge x5";
      abilities[11].text = abilities[11].text.replace("Life<BR>", "Life CHARGE x5<BR>");
    }
    else{
      abilities[11].charge = "";
      abilities[11].text = abilities[11].text.replace("Life CHARGE x5<BR>", "Life<BR>");
    }
    if(abilities[4].selectedAbility1 == "Release" || abilities[4].selectedAbility2 == "Release"){
      abilities[15].charge = "Charge x5";
      abilities[15].text = abilities[15].text.replace("Life<BR>", "Life CHARGE x5<BR>");
    }
    else{
      abilities[15].charge = "";
      abilities[15].text = abilities[15].text.replace("Life CHARGE x5<BR>", "Life<BR>");
    }
    if(abilities[4].selectedAbility1 == "Teleport" || abilities[4].selectedAbility2 == "Teleport"){
      abilities[33].charge = "Charge x5";
      abilities[33].text = abilities[33].text.replace("Life<BR>", "Life CHARGE x5<BR>");
    }
    else{
      abilities[33].charge = "";
      abilities[33].text = abilities[33].text.replace("Life CHARGE x5<BR>", "Life<BR>");
    }
    if(abilities[4].selectedAbility1 == "Dispel Magic" || abilities[4].selectedAbility2 == "Dispel Magic"){
      abilities[19].charge = "Charge x10";
      abilities[19].text = abilities[19].text.replace("Refresh<BR>", "Refresh CHARGE x10<BR>")
    }
    else{
      abilities[19].charge = "";
      abilities[19].text = abilities[19].text.replace("Refresh CHARGE x10<BR>", "Refresh<BR>");
    }
    //createURL(); OLD
    if(fromUser == 1){
      pointPlus(4);
      createURL(); //new//new checking to see if this fixes the reload error on iPhones
    }
 }
/*##################################*/
function summonerCheck(index){
  var a = index;
  if(abilities[49].purchased > 0){
    if(a == 5 || a == 19 || a == 23 || a == 26 || a == 35 || a == 44 ){
       return false;
       }
    else{
      return true;
    }
  }  
  if(abilities[a].name == "Summoner"){
    if(abilities[5].purchased != 0 || abilities[19].purchased != 0 || abilities[23].purchased != 0 || abilities[26].purchased != 0 || abilities[35].purchased != 0 || abilities[44].purchased != 0){
      return false; 
      }
    else {return true;}
  }
  else{
    return true;
  }
}
/*##################################*/
function pointPlus(index, fromClick) { 
  document.getElementById("ltpCheckBox").disabled = true;
  var a = index;
  tempCost = 0;
  if(abilities[a].max == abilities[a].purchased){
    showToast("Cannot exceed max for " + abilities[a].name);
    return false;
  }
  if(!summonerCheck(a)){
    showToast("Summoners may not use Verbals with a range other than Touch or Self. May not purchase equipment beyond 2nd level");
    return false;
  }
  if(!checkRangerPlus(a)){
    showToast("You don't have the points to add Ranger.");
    return false;
  }
  if(abilities[a].name == "Ranger"){
    processRangerPlus();
  }
  
  
  if(checkPointsAvailable(a)){
    if(abilities[a].name == "Avatar of Nature"){
      processAvatarofNaturePlus();
    }
    if(abilities[a].name == "Summoner"){
      processSummonerPlus();
    }
    tempCost = abilities[a].cost;
    for(let i = abilities[a].level; i < 7; i++){
      if(tempCost > pointsAvailable[i]){
        if(i == abilities[a].level){
          higherLevelPoints[i] += tempCost - pointsAvailable[i];
        }
        tempCost = tempCost - pointsAvailable[i];
        pointsAvailable[i] = 0;
      }
      else{
        pointsAvailable[i] = pointsAvailable[i] - tempCost;
        tempCost = 0;
        abilities[a].purchased++;
        pointsSpent[abilities[a].level] = pointsSpent[abilities[a].level] + abilities[a].cost;
        document.getElementById(abilities[a].pointTotalId).value++;
        updatePointsAvailable();
        updateExperienced();
        if(fromClick){
          reprocessPoints();
          createURL();   //new
        }
        return 0;
      }      
    }
  }
  else{
    showToast("Not enough available points to buy " + abilities[a].name);
    return false;
  }
}
/*##################################*/
function checkPointsAvailable(index){
  a = index;
  tempPoints = 0;
  for(let i = abilities[a].level; i < 7; i++){
    tempPoints = tempPoints + pointsAvailable[i];
  }
  if(document.getElementById("ltpCheckBox").checked == false){
    tempPoints--;
  }
  return (tempPoints >= abilities[a].cost); 
}
/*##################################*/
function updatePointsAvailable(fc){  
  reqLevel = 1;
  if(fc == 'ltp'){
    createURL();
  }
  let ltpReq = false;
  let ltpChecked = document.getElementById("ltpCheckBox").checked;
  let tempCount = 0;
  let level6value = 0;
  for(let i = 1; i < 7; i++){
    document.getElementById("level"+i+"Points").value = pointsAvailable[i];
    tempCount = tempCount + pointsAvailable[i];
  }
  if(tempCount == 31){
    document.getElementById("ltpCheckBox").disabled = false;
  }
  

  if(ltpChecked){
    for(let i = 1; i < 7; i++){
      if(pointsSpent[i] > 0 || pointsAvailable[i] < 4 || (i == 6 && pointsAvailable[i] < 5)){
        reqLevel = i;
      }
    }
  }
  else{
    for(let i = 1; i < 7; i++){
      if(pointsSpent[i] > 0 || pointsAvailable[i] < 5 || (i == 6 && pointsAvailable[i] < 6)){
        reqLevel = i;
      }
    }
  }
  

  level6value = document.getElementById("level6Points").value;
  if(level6value > 0){
    document.getElementById("level6Points").value = level6value - 1;
  }


  document.getElementById("reqLevel").value = reqLevel;
  if(ltpChecked && reqLevel == 6 && pointsAvailable[6] == 0 || reqLevel == 5 && pointsAvailable[6] == 5 || reqLevel == 4 && pointsAvailable[5] == 4 || reqLevel == 3 && pointsAvailable[4] == 4 || reqLevel == 2 && pointsAvailable[3] == 4 || reqLevel == 1 && pointsAvailable[2] == 4){
    document.getElementById("ltp").hidden = true;
    document.getElementById("ltp").innerText = "(Look the Part Required)";
    ltpReq = true;
  }
  else{
    document.getElementById("ltp").hidden = true;
    document.getElementById("ltp").innerText = "";
    ltpReq = false;
  }
  document.getElementById("ltp1").hidden = true;
  document.getElementById("ltp2").hidden = true;
  document.getElementById("ltp3").hidden = true;
  document.getElementById("ltp4").hidden = true;
  document.getElementById("ltp5").hidden = true;
  document.getElementById("ltp6").hidden = true;

  document.getElementById("hlp1").innerText = " ";
  document.getElementById("hlp2").innerText = " ";
  document.getElementById("hlp3").innerText = " ";
  document.getElementById("hlp4").innerText = " ";
  document.getElementById("hlp5").innerText = " ";

  if(higherLevelPoints[1] != 0){
    document.getElementById("hlp1").innerText = " +" + higherLevelPoints[1] + " " + freeableFrom(1, ltpChecked, reqLevel, ltpReq);
  }
  if(higherLevelPoints[2] != 0){
    document.getElementById("hlp2").innerText = " +" + higherLevelPoints[2] + " " + freeableFrom(2, ltpChecked, reqLevel, ltpReq);
  }
  if(higherLevelPoints[3] != 0){
    document.getElementById("hlp3").innerText = " +" + higherLevelPoints[3] + " " + freeableFrom(3, ltpChecked, reqLevel, ltpReq);
  }
  if(higherLevelPoints[4] != 0){
    document.getElementById("hlp4").innerText = " +" + higherLevelPoints[4] + " " + freeableFrom(4, ltpChecked, reqLevel, ltpReq);
  }
  if(higherLevelPoints[5] != 0){
    document.getElementById("hlp5").innerText = " +" + higherLevelPoints[5] + " " + freeableFrom(5, ltpChecked, reqLevel, ltpReq);
  }

  if(ltpChecked && reqLevel == 1 && ltpReq == false){
     document.getElementById("level1Points").value = pointsAvailable[1] + 1;
  }
  else if(ltpChecked && reqLevel == 2 && ltpReq == false){
    document.getElementById("level2Points").value = pointsAvailable[2] + 1;
  }
  else if(ltpChecked && reqLevel == 3 && ltpReq == false){
    document.getElementById("level3Points").value = pointsAvailable[3] + 1;
  }
  else if(ltpChecked && reqLevel == 4 && ltpReq == false){
    document.getElementById("level4Points").value = pointsAvailable[4] + 1;
  }
  else if(ltpChecked && reqLevel == 5 && ltpReq == false){
    document.getElementById("level5Points").value = pointsAvailable[5] + 1;
  }
  else if(ltpChecked && reqLevel == 6 && ltpReq == false){
    document.getElementById("level6Points").value = pointsAvailable[6];
}
  else if(ltpChecked && reqLevel == 1 && ltpReq == true){
    document.getElementById("ltp1").innerText = "(Look the Part Required)";
    document.getElementById("ltp1").hidden = false;
    document.getElementById("level2Points").value = 5;
    document.getElementById("hlp1").innerText = " ";
  }
  else if(ltpChecked && reqLevel == 2 && ltpReq == true){
      document.getElementById("ltp2").innerText = "(Look the Part Required)";
      document.getElementById("ltp2").hidden = false;
      document.getElementById("level3Points").value = 5;
      document.getElementById("hlp2").innerText = " ";
  }
  else if(ltpChecked && reqLevel == 3 && ltpReq == true){
      document.getElementById("ltp3").innerText = "(Look the Part Required)";
      document.getElementById("ltp3").hidden = false;
      document.getElementById("level4Points").value = 5;
      document.getElementById("hlp3").innerText = " ";
  }
  else if(ltpChecked && reqLevel == 4 && ltpReq == true){
      document.getElementById("ltp4").innerText = "(Look the Part Required)";
      document.getElementById("ltp4").hidden = false;
      document.getElementById("level5Points").value = 5;
      document.getElementById("hlp4").innerText = " ";
  }
  else if(ltpChecked && reqLevel == 5 && ltpReq == true){
      document.getElementById("ltp5").innerText = "(Look the Part Required)";
      document.getElementById("ltp5").hidden = false;
      document.getElementById("level6Points").value = 5;
      document.getElementById("hlp5").innerText = " ";
  }
  else if(ltpChecked && reqLevel == 6 && ltpReq == true){
    document.getElementById("ltp6").innerText = "(Look the Part Required)";
    document.getElementById("ltp6").hidden = false;
  }
  //createURL(); OLD
}

function freeableFrom(index, c, rl, r){
  //console.log("level: " + index + " LTP Checked: " + c + " ReqLevel: " + rl + " is ltp required:" + r);
  let lvl = index;
  let req = r;
  let lookThePartChecked = c;
  let reqLvl = rl;
  let highestLevel = 0;
  let outputString = "";
  let tempTotal = 0;
  if(higherLevelPoints[lvl] == 0){
    return "";
  }
  if(lookThePartChecked == false){
    tempTotal = higherLevelPoints[lvl];
    for(let i = lvl + 1; i < 7; i++){
      if(tempTotal + (higherLevelPoints[i] - 5) <= 0 && higherLevelPoints[i] == 0){
        highestLevel = i;
        i = 7;
      }
      tempTotal = tempTotal + (higherLevelPoints[i] - 5);
    }
    //console.log(higherLevelPoints[highestLevel] + " " + pointsAvailable[highestLevel] + " " + highestLevel);
   }
    
   if(lookThePartChecked == true){
    tempTotal = higherLevelPoints[lvl];
    for(let i = lvl + 1; i < 7; i++){
      if(tempTotal + (higherLevelPoints[i] - 5) <= 0 && higherLevelPoints[i] == 0){
        highestLevel = i;
        i = 7;
      }
      if(req == true && i == reqLevel){
         highestLevel = i;
        i = 7;
         }
      tempTotal = tempTotal + (higherLevelPoints[i] - 5);
    }
    //console.log(higherLevelPoints[highestLevel] + " " + pointsAvailable[highestLevel] + " " + highestLevel);
   }
  
    outputString = "[Level " + highestLevel + "]";
    
  return outputString; 
}
/*##################################*/
function pointMinus(index) {
  var a = index;    
  if(abilities[a].purchased == 0){
    showToast("You can't go into the negatives!");
    return 0;
  }  
  if(!checkRangerMinus(a)){
    showToast("You don't have the points to remove Ranger. Equipment too expensive.");
    return 0;
  }
  if(abilities[a].name == "Ranger"){
    processRangerMinus();
  }  
  if(abilities[a].name == "Avatar of Nature"){
    processAvatarofNatureMinus();
  }
  if(abilities[a].name == "Summoner"){
    processSummonerMinus();
  }
  abilities[a].purchased--;
  reprocessPoints();
  createURL(); //new
  return 0;
}
/*##################################*/
function reprocessPoints(index){
  let a = index;
  let temp1 = "";
  let temp2 = "";
  
    temp1 = abilities[4].selectedAbility1;
    temp2 = abilities[4].selectedAbility2;
  
  var tempPurchased = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  for(let i = 0; i < abilityCount; i++){
    tempPurchased[i] = abilities[i].purchased;
  }   
  resetPoints(0);
  while(tempPurchased[47] > 0){
    pointPlus(47, false);
    tempPurchased[47]--; //WARNING THIS IS A CRAZY HACK. BANISH IS CAUSE PROBLEM
  }   
  for(let i = 0; i < abilityCount; i++){
    while(tempPurchased[i] > 0){
      if(i != 47){
        pointPlus(i, false);
        tempPurchased[i]--;
      }
    }
  }
  
    abilities[4].selectedAbility1 = temp1;
    abilities[4].selectedAbility2 = temp2;
    document.getElementById("exp1").value = temp1;
    document.getElementById("exp2").value = temp2;
  
  updateExperienced();  
  updatePointsAvailable();
}
/*##################################*/
function processRangerPlus(){
  abilities[3].cost = 0;
  abilities[8].cost = 0;
  abilities[26].cost = 0;
  abilities[35].cost = 0;
  
  abilities[47].cost = 2;
  abilities[6].cost = 2;
  abilities[9].cost = 2;
  abilities[10].cost = 2;
  abilities[14].cost = 2;
  abilities[17].cost = 2;
  abilities[18].cost = 2; 
  abilities[21].cost = 2; 
  abilities[24].cost = 2;
  abilities[25].cost = 2;
  abilities[27].cost = 4;
  abilities[29].cost = 2;
  abilities[30].cost = 2;
  abilities[31].cost = 2;
  abilities[36].cost = 2;
  abilities[37].cost = 2;
  abilities[38].cost = 2;
  abilities[39].cost = 2;
  abilities[40].cost = 2;
  abilities[42].cost = 2;
  abilities[45].cost = 2;
  abilities[46].cost = 2; 
  abilities[48].cost = 2;
  updateTable();
}
function processAvatarofNaturePlus(){
  abilities[47].text = abilities[47].text.replace("Other", "SELF"); 
  abilities[6].text = abilities[6].text.replace("Other", "SELF"); 
  abilities[9].text = abilities[9].text.replace("Touch", "SELF");  
  abilities[10].text = abilities[10].text.replace("Other", "SELF"); 
  abilities[14].text = abilities[14].text.replace("Other", "SELF"); 
  abilities[17].text = abilities[17].text.replace("Other", "SELF"); 
  abilities[18].text = abilities[18].text.replace("Other", "SELF"); 
  abilities[21].text = abilities[21].text.replace("Other", "SELF"); 
  abilities[24].text = abilities[24].text.replace("Other", "SELF"); 
  abilities[25].text = abilities[25].text.replace("Other", "SELF"); 
  abilities[27].text = abilities[27].text.replace("Other", "SELF"); 
  abilities[29].text = abilities[29].text.replace("Other", "SELF"); 
  abilities[31].text = abilities[31].text.replace("Other", "SELF"); 
}
function processAvatarofNatureMinus(){
  abilities[47].text = abilities[47].text.replace("SELF", "Other"); 
  abilities[6].text = abilities[6].text.replace("SELF", "Other"); 
  abilities[9].text = abilities[9].text.replace("SELF", "Touch");  
  abilities[10].text = abilities[10].text.replace("SELF", "Other"); 
  abilities[14].text = abilities[14].text.replace("SELF", "Other"); 
  abilities[17].text = abilities[17].text.replace("SELF", "Other"); 
  abilities[18].text = abilities[18].text.replace("SELF", "Other"); 
  abilities[21].text = abilities[21].text.replace("SELF", "Other"); 
  abilities[24].text = abilities[24].text.replace("SELF", "Other"); 
  abilities[25].text = abilities[25].text.replace("SELF", "Other"); 
  abilities[27].text = abilities[27].text.replace("SELF", "Other"); 
  abilities[29].text = abilities[29].text.replace("SELF", "Other"); 
  abilities[31].text = abilities[31].text.replace("SELF", "Other"); 
}

function processSummonerPlus(){
  for(let i = 0; i < abilityCount; i++){
    if(abilities[i].type == "Enchantment"){
      abilities[i].text = abilities[i].text.replace("</p3>  1/Refresh", "</p3>  2/REFRESH");
      abilities[i].text = abilities[i].text.replace("</p3>  1/Life", "</p3>  2/LIFE");
    }
  }
}

function processSummonerMinus(){
  for(let i = 0; i < abilityCount; i++){
    if(abilities[i].type == "Enchantment"){
      abilities[i].text = abilities[i].text.replace("</p3>  2/REFRESH", "</p3>  1/Refresh");
      abilities[i].text = abilities[i].text.replace("</p3>  2/LIFE", "</p3>  1/Life");
    }
  }
}

/*##################################*/
function processRangerMinus(){
  abilities[3].cost = 2;
  abilities[8].cost = 4;
  abilities[26].cost = 4;
  abilities[35].cost = 5;
  
  abilities[47].cost = 1;
  abilities[6].cost = 1;
  abilities[9].cost = 1;
  abilities[10].cost = 1;
  abilities[14].cost = 1;
  abilities[17].cost = 1;
  abilities[18].cost = 1; 
  abilities[21].cost = 1; 
  abilities[24].cost = 1;
  abilities[25].cost = 1;
  abilities[27].cost = 2;
  abilities[29].cost = 1;
  abilities[30].cost = 1;
  abilities[31].cost = 1;
  abilities[36].cost = 1;
  abilities[37].cost = 1;
  abilities[38].cost = 1;
  abilities[39].cost = 1;
  abilities[40].cost = 1;
  abilities[42].cost = 1;
  abilities[45].cost = 1;
  abilities[46].cost = 1; 
  abilities[48].cost = 1;
  updateTable();
}
/*##################################*/
function checkRangerPlus(index){
  if(abilities[index].name != "Ranger"){
    return true;
  }
  var enchantedCost = [0,0,0,0,0,0,0];
  var tempAvailablePoints = [0,0,0,0,0,0,0];
  var tempCost = 0;
  for(let i = 0; i < abilityCount; i++){
    if(abilities[i].type == "Enchantment"){
      enchantedCost[abilities[i].level] = enchantedCost[abilities[i].level] + (abilities[i].cost * abilities[i].purchased);
    }
  }
  for(let i = 1; i < 7; i++){
    tempAvailablePoints[i] = pointsAvailable[i];
  } 
  tempAvailablePoints[6] = tempAvailablePoints[6] - 2;
  for(let j = 1; j < 7; j++){
    tempCost = enchantedCost[j];
    for(let i = j; i < 7; i++){
      if(tempCost > tempAvailablePoints[i]){
        tempCost = tempCost - tempAvailablePoints[i];
        tempAvailablePoints[i] = 0;
      }
      else{
        tempAvailablePoints[i] = tempAvailablePoints[i] - tempCost;
        tempCost = 0;
      }
      if(i == 6 && tempCost > 0){
        return false;
      }
    }
  }
  return true;
}
/*##################################*/
function checkRangerMinus(index){
  if(abilities[index].name != "Ranger"){
    return true;
  }
  var equipmentCost = [0,0,0,0,0,0,0];
  var tempAvailablePoints = [0,0,0,0,0,0,0];
  var tempCost = 0;
  equipmentCost[abilities[3].level] = equipmentCost[abilities[3].level] + (2 * abilities[3].purchased);
  equipmentCost[abilities[8].level] = equipmentCost[abilities[8].level] + (4 * abilities[8].purchased);
  equipmentCost[abilities[26].level] = equipmentCost[abilities[26].level] + (4 * abilities[26].purchased);
  equipmentCost[abilities[35].level] = equipmentCost[abilities[35].level] + (5 * abilities[35].purchased);
  
  for(let i = 1; i < 7; i++){
    tempAvailablePoints[i] = pointsAvailable[i];
  }
  tempAvailablePoints[6] = tempAvailablePoints[6] + 2;
  for(let j = 1; j < 7; j++){
    tempCost = equipmentCost[j];
    for(let i = j; i < 7; i++){
      if(tempCost > tempAvailablePoints[i]){
        tempCost = tempCost - tempAvailablePoints[i];
        tempAvailablePoints[i] = 0;
      }
      else{
        tempAvailablePoints[i] = tempAvailablePoints[i] - tempCost;
        tempCost = 0;
      }
      if(i == 6 && tempCost > 0){
        return false;
      }
    }
  }
  return true;
}
/*##################################*/
function popFunc(elementId, index) {
  const elements = document.getElementsByClassName("popuptext");
var popup = document.getElementById(elementId);
    
  for (let i = 0; i < elements.length; i++) {
        if(!(elements[i].id == popup.id)){
          elements[i].classList.remove("show");
        }
    }  
    popup.innerHTML = abilities[index].text;
  popup.classList.toggle("show");
}

var pointsAvailable = [0, 5,  5,  5,  5,  5,  6];
var pointsSpent = [0, 0,  0,  0,  0,  0,  0];
var higherLevelPoints = [0, 0,  0,  0,  0,  0,  0];
var showIncants = false;

/*ABILITY DATA
|||||||||||||||||||||||||||||||||||
|||||||||||||||||||||||||||||||||||
*/

const Barkskin = {
  purchased: 0, 
  level: 1,
  cost: 1,
  max: 2, charge: "Charge x10", use: 1, per: "Refresh",
  pointTotalId: "Barkskinval",
  name: "Barkskin", type: "Enchantment",
  incant: "<I>I enchant thee with barkskin</I> x3", 
  text: "<p2>Barkskin</p2><BR><p3>Freq:</p3>  1/Refresh Chg x10<BR><p3>Type:</p3>  Enchantment<BR><p3>School:</p3> Protection<BR><p3>Range:</p3> Other<BR><p3>Incant:</p3> <I>I enchant thee with barkskin</I> x3<BR><p3>Materials:</p3> White strip<BR><p3>Effect:</p3> Bearer gains one point of Magic Armor"
};
const Entangle = {
  purchased: 0,
  level: 1,
  cost: 1,
  max: 2, charge: "", use: 2, per: "Ball",
  pointTotalId: "Entangleval",
  name: "Entangle", type: "Magic Ball",
  incant: "<I>The strength of earth is mine to evoke</I> x3", 
  text: "<p2>Entangle</p2><BR><p3>Freq:</p3> 2 Balls/Unlimited<BR><p3>Type:</p3>  Magic Ball<BR><p3>School:</p3> Subdual<BR><p3>Range:</p3> Ball<BR><p3>Incant:</p3> <I>The strength of earth is mine to evoke</I> x3<BR><p3>Materials:</p3> Brown Magic Ball<BR><p3>Effect:</p3> Target is Stopped for 60 seconds. Engulfing"
};
const WeaponShort = {
  purchased: 0,
  level: 1,
  cost: 2,
  max: 2, charge: "", use: -1, per: "",
  pointTotalId: "WeaponShortval",
  name: "Weapon Short", type: "Neutral",
  incant: "", 
  text: "<p2>Weapon Short</p2><BR><p3>Freq:</p3> N/A<BR><p3>Type:</p3>  Neutral<BR><p3>Effect:</p3> May wield one short weapon at a time for each instance purchased (but may carry extras)"
};
const Experienced = {
  purchased: 0,
  level: 1,
  cost: 2,
  max: 2, charge: "", use: -1, per: "",
  pointTotalId: "Experiencedval",
  name: "Experienced", type: "Neutral",
  selectedAbility1: "Select Spell",
  selectedAbility2: "Select Spell",
  incant: "", 
  text: "<p2>Experienced</p2><BR><p3>Freq:</p3> N/A<BR><p3>Type:</p3>  Neutral<BR><p3>School:</p3> Neutral<BR><p3>Effect:</p3> A single per-life Verbal purchased becomes Charge x5 in addition to the normal frequency OR a single per- refresh Verbal purchased becomes Charge x10 in addition to the normal frequency. This Verbal must be determined before the game begins and cannot be changed<BR><p3>Limitations:</p3> Verbal must be 4th level or lower"
};
const HeatWeapon = {
  purchased: 0,
  level: 1,
  cost: 1,
  max: 31, charge: "Charge x3", use: 1, per: "Life",
  pointTotalId: "HeatWeaponval",
  name: "Heat Weapon", type: "Verbal",
  incant: "<I>I call upon flame to heat that [type of weapon]</I> x3", 
  text: "<p2>Heat Weapon</p2><BR><p3>Freq:</p3> 1/Life Chg x3<BR><p3>Type:</p3>  Verbal<BR><p3>School:</p3> Flame<BR><p3>Range:</p3> 20<BR><p3>Incant:</p3> <I>I call upon flame to heat that [type of weapon]</I> x3<BR><p3>Effect:</p3> Target weapon may not be wielded for 30 seconds. Players who are Immune to Flame may continue to wield the weapon<BR><p3>Notes:</p3>The equipment, not the person, is the target of Heat Weapon. The equipment is the only thing required to be within range and visible for this spell to affect it"
};
const ImbueArmor = {
  purchased: 0,
  level: 1,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Life",
  pointTotalId: "ImbueArmorval",
  name: "Imbue Armor", type: "Enchantment",
  incant: "<I>I enchant thee with Imbued Armor</I> x3", 
  text: "<p2>Imbue Armor</p2><BR><p3>Freq:</p3>  1/Life<BR><p3>Type:</p3>  Enchantment<BR><p3>School:</p3> Protection<BR><p3>Range:</p3> Other<BR><p3>Incant:</p3> <I>I enchant thee with Imbued Armor</I> x3<BR><p3>Materials:</p3> White Strip<BR><p3>Effect:</p3> All armor worn by the bearer gains a +1 modifier. This modifier may allow the armor to exceed the maximum value for its type, up to the bearer’s class maximum<BR><p3>Limitations:</p3>  Does not apply to magic armor. A player may only benefit from one instance of Imbue Armor.<BR><p3>Notes:</p3> When this enchantment is removed, the bearer loses 1 current and maximum Armor Point in each location."
};
const Mend = {
  purchased: 0,
  level: 1,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Life",
  pointTotalId: "Mendval",
  name: "Mend", type: "Verbal",
  incant: "<I>I make this item whole again</I> x5", 
  text: "<p2>Mend</p2><BR><p3>Freq:</p3> 1/Life<BR><p3>Type:</p3>  Verbal<BR><p3>School:</p3> Sorcery<BR><p3>Range:</p3> Touch<BR><p3>Incant:</p3> <I>I make this item whole again</I> x5<BR><p3>Effect:</p3> Destroyed or damaged item is repaired, or one point of armor in one location is repaired"
};

/*__________________________________________*/

const ShieldSmall = {
  purchased: 0,
  level: 2,
  cost: 4,
  max: 1, charge: "", use: -1, per: "",
  pointTotalId: "ShieldSmallval",
  name: "Shield Small", type: "Neutral",
  incant: "", 
  text: "<p2>Shield Small</p2><BR><p3>Freq:</p3> N/A<BR><p3>Type:</p3>  Neutral<BR><p3>Effect:</p3> May wield a small shield"
};
const CorrosiveMist = {
  purchased: 0,
  level: 2,
  cost: 1,
  max: 1, charge: "", use: 1, per: "Refresh",
  pointTotalId: "CorrosiveMistval",
  name: "Corrosive Mist", type: "Enchantment",
  incant: "<I>The mists of corrosion surround thee</I> x3", 
  text: "<p2>Corrosive Mist</p2><BR><p3>Freq:</p3>  1/Refresh<BR><p3>Type:</p3>  Enchantment<BR><p3>School:</p3> Death<BR><p3>Range:</p3> Touch<BR><p3>Incant:</p3> <I>The mists of corrosion surround thee</I> x3<BR><p3>Materials:</p3> Three Red Strips<BR><p3>Effect:</p3> Bearer may cast Destroy Armor (m) by announcing <I>[Player] the mists of corrosion destroy your [armor location] armor</I>. Bearer must remove a strip after each use of Destroy Armor<BR><p3>Notes:</p3> Corrosive Mist is removed when the last strip is removed"
};
const GiftofEarth = {
  purchased: 0,
  level: 2,
  cost: 1,
  max: 2, charge: "", use: 1, per: "Refresh",
  pointTotalId: "GiftofEarthval",
  name: "Gift of Earth", type: "Enchantment",
  incant: "<I>I grant thee a gift of the earth</I> x3", 
  text: "<p2>Gift of Earth</p2><BR><p3>Freq:</p3>  1/Refresh<BR><p3>Type:</p3>  Enchantment<BR><p3>School:</p3> Protection<BR><p3>Range:</p3> Other<BR><p3>Incant:</p3> <I>I grant thee a gift of the earth</I> x3<BR><p3>Materials:</p3> White Strip<BR><p3>Effect:</p3> Bearer gains one point of magic armor and is affected as per Harden."
};
const Heal = {
  purchased: 0,
  level: 2,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Life",
  pointTotalId: "Healval",
  name: "Heal", type: "Verbal",
  incant: "<I>The white light of healing hath healed thee</I> x5", 
  text: "<p2>Heal</p2><BR><p3>Freq:</p3>  1/Life<BR><p3>Type:</p3>  Verbal<BR><p3>School:</p3> Spirit<BR><p3>Range:</p3> Touch<BR><p3>Incant:</p3> <I>The white light of healing hath healed thee</I> x5<BR><p3>Materials:</p3> None<BR><p3>Effect:</p3> Target player heals a Wound"
};
const ForceBolt = {
  purchased: 0,
  level: 2,
  cost: 1,
  max: 2, charge: "", use: 2, per: "Ball",
  pointTotalId: "ForceBoltval",
  name: "Force Bolt", type: "Magic Ball",
  incant: "<I>Forcebolt</I> x3", 
  text: "<p2>Force Bolt</p2><BR><p3>Freq:</p3> 2 Balls/Unlimited<BR><p3>Type:</p3>  Magic Ball<BR><p3>School:</p3> Sorcery<BR><p3>Range:</p3> Ball<BR><p3>Incant:</p3> <I>Forcebolt</I> x3<BR><p3>Materials:</p3> Blue Magic Ball<BR><p3>Effect:</p3> Force Bolt will have one of the following effects on the object first struck:<BR>1. A weapon hit is destroyed<BR>2. Armor hit with Armor Points remaining is subject to Armor Breaking<BR>3. A player hit receives a Wound to that hit location"
};
const Innate = {
  purchased: 0,
  level: 2,
  cost: 1,
  max: 4, charge: "", use: 1, per: "Refresh",
  pointTotalId: "Innateval",
  name: "Innate", type: "Meta-Magic",
  incant: "<I>Innate</I>", 
  text: "<p2>Innate</p2><BR><p3>Freq:</p3>  1/Refresh<BR><p3>Type:</p3>  Meta-Magic<BR><p3>School:</p3> Neutral<BR><p3>Range:</p3> N/A<BR><p3>Incant:</p3> <I>Innate</I> <BR><p3>Effect:</p3> May be used to instantly Charge a single magic or ability by stating its name."
};
const Poison = {
  purchased: 0,
  level: 2,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Life",
  pointTotalId: "Poisonval",
  name: "Poison", type: "Enchantment",
  incant: "<I>I coat these weapons with a deadly poison</I> x2", 
  text: "<p2>Poison</p2><BR><p3>Freq:</p3>  1/Life<BR><p3>Type:</p3>  Enchantment<BR><p3>School:</p3> Death<BR><p3>Range:</p3> Other<BR><p3>Incant:</p3> <I>I coat these weapons with a deadly poison</I> x2<BR><p3>Materials:</p3> Red Strip<BR><p3>Effect:</p3> The next Wound dealt by the bearer in melee is Wounds Kill"
};
const Release = {
  purchased: 0,
  level: 2,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Life",
  pointTotalId: "Releaseval",
  name: "Release", type: "Verbal",
  incant: "<I>From thy bindings thou art released</I> x5", 
  text: "<p2>Release</p2><BR><p3>Freq:</p3> 1/Life<BR><p3>Type:</p3>  Verbal<BR><p3>School:</p3> Sorcery<BR><p3>Range:</p3> Touch<BR><p3>Incant:</p3> <I>From thy bindings thou art released</I> x5<BR><p3>Effect:</p3>  A single ongoing effect or State is removed from the target. Casters choice<BR><p3>Limitations:</p3> Cannot remove Cursed. When used to end a State or Ongoing Effect imposed by a magic or ability with multiple effects, all other States and Ongoing Effects from the same source are also ended"
};
const Stoneform = {
  purchased: 0,
  level: 2,
  cost: 1,
  max: 31, charge: "Charge x3", use: 1, per: "Refresh",
  pointTotalId: "Stoneformval",
  name: "Stoneform", type: "Verbal",
  incant: "<I>I take the form of stone</I>", 
  text: "<p2>Stoneform</p2><BR><p3>Freq:</p3> 1/Refresh Chg x3<BR><p3>Type:</p3>  Verbal<BR><p3>School:</p3> Protection<BR><p3>Range:</p3> Self<BR><p3>Incant:</p3> <I>I take the form of stone</I><BR><p3>Effect:</p3> Caster is Frozen. May end this State at any time by saying <I>The earth release me</I> x2"
};

/*__________________________________________*/

const Attuned = {
  purchased: 0,
  level: 3,
  cost: 1,
  max: 2, charge: "", use: 1, per: "Refresh",
  pointTotalId: "Attunedval",
  name: "Attuned", type: "Enchantment",
  incant: "<I>I enchant thee with attune</I> x3", 
  text: "<p2>Attuned</p2><BR><p3>Freq:</p3>  1/Refresh<BR><p3>Type:</p3>  Enchantment<BR><p3>School:</p3> Sorcery<BR><p3>Range:</p3> Other<BR><p3>Incant:</p3> <I>I enchant thee with attune</I> x3<BR><p3>Materials:</p3> Yellow strip<BR><p3>Effect:</p3> May wear an additional Enchantment. Attuned does not count towards the bearer’s Enchantment limit<BR><p3>Limitations:</p3> This ability may not be used in conjunction with any other similar ability or magic<BR><p3>Notes:</p3> If Attuned is removed, the bearer chooses which (m) Enchantments to lose to meet their new Enchantment limit, if necessary"
};
const BearStrength = {
  purchased: 0,
  level: 3,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Refresh",
  pointTotalId: "BearStrengthval",
  name: "Bear Strength", type: "Enchantment",
  incant: "<I>I enchant thee with the strength of the bear</I> x3", 
  text: "<p2>Bear Strength</p2><BR><p3>Freq:</p3>  1/Refresh<BR><p3>Type:</p3>  Enchantment<BR><p3>School:</p3> Sorcery<BR><p3>Range:</p3> Other<BR><p3>Incant:</p3> <I>I enchant thee with the strength of the bear</I> x3<BR><p3>Materials:</p3> Red Strip<BR><p3>Effect:</p3> Bearer’s melee weapons are Shield Crushing"
};
const DispelMagic = {
  purchased: 0,
  level: 3,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Refresh",
  pointTotalId: "DispelMagicval",
  name: "Dispel Magic", type: "Verbal",
  incant: "<I>By my power I dispel that magic</I> x3", 
  text: "<p2>Dispel Magic</p2><BR><p3>Freq:</p3>  1/Refresh<BR><p3>Type:</p3>  Verbal<BR><p3>School:</p3> Sorcery<BR><p3>Range:</p3> 20<BR><p3>Incant:</p3> <I>By my power I dispel that magic</I> x3<BR><p3>Effect:</p3> All Enchantments on target are removed<BR><p3>Notes:</p3>Will always remove enchantments if successfully cast on a valid target, regardless of the player’s Traits, States, Immunities, Ongoing Effects, or Enchantments (except Sleight of Mind)"
};
const Extension = {
  purchased: 0,
  level: 3,
  cost: 1,
  max: 2, charge: "", use: 1, per: "Life",
  pointTotalId: "Extensionval",
  name: "Extension", type: "Meta-Magic",
  incant: "<I>Extension</I>", 
  text: "<p2>Extension</p2><BR><p3>Freq:</p3>  1/Life<BR><p3>Type:</p3>  Meta-Magic<BR><p3>School:</p3> Neutral<BR><p3>Incant:</p3> <I>Extension</I><BR><p3>Effect:</p3> Verbal becomes 50. Only works on verbals with a range of 20"
};
const GiftofFire = {
  purchased: 0,
  level: 3,
  cost: 1,
  max: 2, charge: "", use: 1, per: "Refresh",
  pointTotalId: "GiftofFireval",
  name: "Gift of Fire", type: "Enchantment",
  incant: "<I>I grant thee a gift of the fire</I> x3", 
  text: "<p2>Gift of Fire</p2><BR><p3>Freq:</p3>  1/Refresh<BR><p3>Type:</p3>  Enchantment<BR><p3>School:</p3> Flame<BR><p3>Range:</p3> Other<BR><p3>Incant:</p3> <I>I grant thee a gift of the fire</I> x3<BR><p3>Materials:</p3> Red Strip and White Strip<BR><p3>Effect:</p3> Bearer gains Heat Weapon 1/Refresh Charge x3 (m) and is Immune to Flame."
};
const GreaterMend = {
  purchased: 0,
  level: 3,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Refresh",
  pointTotalId: "GreaterMendval",
  name: "Greater Mend", type: "Verbal",
  incant: "<I>Return this [object name] to its former glory</I> x5", 
  text: "<p2>Greater Mend</p2><BR><p3>Freq:</p3>  1/Refresh<BR><p3>Type:</p3>  Verbal<BR><p3>School:</p3> Sorcery<BR><p3>Range:</p3> Touch<BR><p3>Incant:</p3> <I>Return this [object name] to its former glory</I> x5<BR><p3>Effect:</p3> Will restore all armor points in one location or repair a damaged or broken item. "
};
const IcyBlast = {
  purchased: 0,
  level: 3,
  cost: 1,
  max: 2, charge: "", use: 1, per: "Life",
  pointTotalId: "IcyBlastval",
  name: "Icy Blast", type: "Verbal",
  incant: "<I>My power makes thee frozen</I> x3", 
  text: "<p2>Icy Blast</p2><BR><p3>Freq:</p3> 1/Life<BR><p3>Type:</p3>  Verbal<BR><p3>School:</p3> Sorcery<BR><p3>Range:</p3> 20<BR><p3>Incant:</p3> <I>My power makes thee frozen</I> x3<BR><p3>Effect:</p3> Target player becomes Frozen for 30 seconds"
};
const Regeneration = {
  purchased: 0,
  level: 3,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Refresh",
  pointTotalId: "Regenerationval",
  name: "Regeneration", type: "Enchantment",
  incant: "<I>I grant thee the power of regeneration</I> x3", 
  text: "<p2>Regeneration</p2><BR><p3>Freq:</p3>  1/Refresh<BR><p3>Type:</p3>  Enchantment<BR><p3>School:</p3> Spirit<BR><p3>Range:</p3> Other<BR><p3>Incant:</p3> <I>I grant thee the power of regeneration</I> x3<BR><p3>Materials:</p3> Yellow strip<BR><p3>Effect:</p3> Bearer gains unlimited use of Heal (self-only) Unlimited (Swift)<BR><p3>Limitations:</p3> The Heal granted by Regeneration may not be used within 10’ of a living enemy<BR><p3>Notes:</p3> Bearer must state Swift normally" 
};
const Stoneskin = {
  purchased: 0,
  level: 3,
  cost: 1,
  max: 2, charge: "", use: 1, per: "Refresh",
  pointTotalId: "Stoneskinval",
  name: "Stoneskin", type: "Enchantment",
  incant: "<I>May nature protect thee from all forms of attack</I> x3", 
  text: "<p2>Stoneskin</p2><BR><p3>Freq:</p3>  1/Refresh<BR><p3>Type:</p3>  Enchantment<BR><p3>School:</p3> Protection<BR><p3>Range:</p3> Other<BR><p3>Incant:</p3> <I>May nature protect thee from all forms of attack</I> x3<BR><p3>Materials:</p3> White Strip<BR><p3>Effect:</p3> Bearer gains 2 points of Magic armor affected as per Ancestral Armor"
};

/*__________________________________________*/

const WeaponLong = {
  purchased: 0,
  level: 4,
  cost: 4,
  max: 1, charge: "", use: -1, per: "",
  pointTotalId: "WeaponLongval",
  name: "Weapon Long", type: "Neutral",
  incant: "", 
  text: "<p2>Weapon Long</p2><BR><p3>Freq:</p3> N/A<BR><p3>Type:</p3>  Neutral<BR><p3>Effect:</p3> May wield one long weapon at a time for each instance purchased (but may carry extras)"
};
const FlameBlade = {
  purchased: 0,
  level: 4,
  cost: 2,
  max: 2, charge: "", use: 1, per: "Refresh",
  pointTotalId: "FlameBladeval",
  name: "Flame Blade", type: "Enchantment",
  incant: "<I>The element of fire shall infuse your weapons</I> x3", 
  text: "<p2>Flame Blade</p2><BR><p3>Freq:</p3>  1/Refresh<BR><p3>Type:</p3>  Enchantment<BR><p3>School:</p3> Flame<BR><p3>Range:</p3> Other<BR><p3>Incant:</p3> <I>The element of fire shall infuse your weapons</I> x3<BR><p3>Materials:</p3> Red Strip and White Strip<BR><p3>Effect:</p3> Bearer’s melee weapons are Armor Breaking and Shield Crushing. Bearer and weapons they hold are Immune to Flame"
};
const Iceball = {
  purchased: 0,
  level: 4,
  cost: 1,
  max: 2, charge: "", use: 1, per: "Ball",
  pointTotalId: "Iceballval",
  name: "Iceball", type: "Magic Ball",
  incant: "<I>The strength of ice is mine to evoke</I> x3", 
  text: "<p2>Iceball</p2><BR><p3>Freq:</p3> 1 Ball/Unlimited<BR><p3>Type:</p3>  Magic Ball<BR><p3>School:</p3> Subdual<BR><p3>Range:</p3> Ball<BR><p3>Incant:</p3> <I>The strength of ice is mine to evoke</I> x3<BR><p3>Materials:</p3> White Magic Ball<BR><p3>Effect:</p3> Target player becomes Frozen for 60 seconds. Engulfing"
};
const GiftofWater = {
  purchased: 0,
  level: 4,
  cost: 1,
  max: 2, charge: "", use: 1, per: "Refresh",
  pointTotalId: "GiftofWaterval",
  name: "Gift of Water", type: "Enchantment",
  incant: "<I>I grant thee a gift of the water</I> x3", 
  text: "<p2>Gift of Water</p2><BR><p3>Freq:</p3>  1/Refresh<BR><p3>Type:</p3>  Enchantment<BR><p3>School:</p3> Sorcery<BR><p3>Range:</p3> Other<BR><p3>Incant:</p3> <I>I grant thee a gift of the water</I> x3<BR><p3>Materials:</p3> White Strip and Yellow Strip<BR><p3>Effect:</p3> Bearer gains one point of magic armor and Heal (self- only) unlimited (m)"
};
const Golem = {
  purchased: 0,
  level: 4,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Refresh",
  pointTotalId: "Golemval",
  name: "Golem", type: "Enchantment",
  incant: "<I>From earth and clay I form thee</I> x3", 
  text: "<p2>Golem</p2><BR><p3>Freq:</p3>  1/Refresh<BR><p3>Type:</p3>  Enchantment<BR><p3>School:</p3> Sorcery<BR><p3>Range:</p3> Other<BR><p3>Incant:</p3> <I>From earth and clay I form thee</I> x3<BR><p3>Materials:</p3>  White Strip and Yellow Strip<BR><p3>Effect:</p3> Bearer is Immune to Death. Bearer is Cursed. Bearer can remove a Wound via Mend. Bearer may use the caster as an alternate respawn point while the caster is alive. Bearer may treat the caster as a base for the purposes of the effects which require the teammate to go to their base. Non-magical armor worn affected as per Imbue Armor. All Enchantments worn by the Bearer, including Golem, are Persistent while Golem is worn<BR><p3>Limitations:</p3> A caster may only have a single Golem Enchantment active at a time<BR><p3>Notes:</p3> Greater Mend and Word of Mending will not remove a wound"
};
const Lycanthropy = {
  purchased: 0,
  level: 4,
  cost: 1,
  max: 2, charge: "", use: 1, per: "Refresh",
  pointTotalId: "Lycanthropyval",
  name: "Lycanthropy", type: "Enchantment",
  incant: "<I>I enchant thee with Lycanthopy</I> x3", 
  text: "<p2>Lycanthropy</p2><BR><p3>Freq:</p3>  1/Refresh<BR><p3>Type:</p3>  Enchantment<BR><p3>School:</p3> Death<BR><p3>Range:</p3> Other<BR><p3>Incant:</p3> <I>I enchant thee with Lycanthopy</I> x3<BR><p3>Materials:</p3> White Strip and Red Strip<BR><p3>Effect:</p3> Bearer gains two points of magic armor. Bearer’s wielded melee weapons are Shield Crushing. Bearer is Immune to Command"
};
const Swift = {
  purchased: 0,
  level: 4,
  cost: 1,
  max: 2, charge: "", use: 1, per: "Life",
  pointTotalId: "Swiftval",
  name: "Swift", type: "Meta-Magic",
  incant: "<I>Swift</I>", 
  text: "<p2>Swift</p2><BR><p3>Freq:</p3> 1/Life<BR><p3>Type:</p3>  Meta-Magic<BR><p3>School:</p3> Neutral<BR><p3>Incant:</p3> <I>Swift</I><BR><p3>Effect:</p3> Magic and abilities require only a single iteration of the incantation. For multi-line Incantations use the last line<BR><p3>Limitations:</p3>  May only be used on Magic and Abilities at a range of Touch, Other, or Self, or on Magic Balls. May not be used on the Charge incantation."
};
const Teleport = {
  purchased: 0,
  level: 4,
  cost: 1,
  max: 2, charge: "", use: 1, per: "Life",
  pointTotalId: "Teleportval",
  name: "Teleport", type: "Verbal",
  incant: "<I>I travel through the aether</I> x5", 
  text: "<p2>Teleport</p2><BR><p3>Freq:</p3> 1/Life<BR><p3>Type:</p3>  Verbal<BR><p3>School:</p3> Sorcery<BR><p3>Range:</p3> Touch<BR><p3>Incant:</p3> <I>I travel through the aether</I> x5<BR><p3>Effect:</p3> Target willing player becomes Insubstantial and moves directly to a chosen location chosen by the caster at the time of casting. This must be a fixed location (not relative to a player or to a moveable object). Upon arrival, they must immediately end the effect as per Insubstantial<BR><p3>Notes:</p3> If the player’s Insubstantial state is removed before they have reached their destination, the effects of Teleport end. If Teleport is cast on self, the caster may end this Insubstantial state at any time by using the exit incantation for Insubstantial"
};

/*__________________________________________*/

const Ambulant = {
  purchased: 0,
  level: 5,
  cost: 1,
  max: 2, charge: "", use: 1, per: "Life",
  pointTotalId: "Ambulantval",
  name: "Ambulant", type: "Meta-Magic",
  incant: "<I>Ambulant</I>", 
  text: "<p2>Ambulant</p2><BR><p3>Freq:</p3> 1/Life<BR><p3>Type:</p3>  Meta-Magic<BR><p3>School:</p3> Neutral<BR><p3>Incant:</p3> <I>Ambulant</I><BR><p3>Effect:</p3> An incantation may be said while moving. <BR><p3>Limitations:</p3> May not be used on the Charge incantation  <BR><p3>Notes:</p3> Using Ambulant allows both the target indication and Ambulant to be said while moving, but not other Meta-Magics."
};
const WeaponGreat = {
  purchased: 0,
  level: 5,
  cost: 5,
  max: 1, charge: "", use: -1, per: "",
  pointTotalId: "WeaponGreatval",
  name: "Weapon Great", type: "Neutral",
  incant: "", 
  text: "<p2>Weapon Great</p2><BR><p3>Freq:</p3> N/A<BR><p3>Type:</p3>  Neutral<BR><p3>Effect:</p3> May wield one great weapon at a time for each instance purchased (but may carry extras)"
};
const EssenceGraft = {
  purchased: 0,
  level: 5,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Refresh",
  pointTotalId: "EssenceGraftval",
  name: "Essence Graft", type: "Enchantment",
  incant: "<I>I enchant thee with essence graft</I> x3", 
  text: "<p2>Essence Graft</p2><BR><p3>Freq:</p3>  1/Refresh<BR><p3>Type:</p3>  Enchantment<BR><p3>School:</p3> Sorcery<BR><p3>Range:</p3> Other<BR><p3>Incant:</p3> <I>I enchant thee with essence graft</I> x3<BR><p3>Materials:</p3> Yellow strip<BR><p3>Effect:</p3> Bearer may wear up to three additional Enchantments. Essence Graft does not count towards the bearer’s Enchantment limit<BR><p3>Limitations:</p3> Bearer may only wear (m) Enchantments from the caster of Essence Graft. This ability may not be used in conjunction with any other similar ability or magic<BR><p3>Notes:</p3> If Essence Graft is removed, the bearer chooses which (m) Enchantments to lose to meet their new Enchantment limit, if necessary"
};
const GiftofAir = {
  purchased: 0,
  level: 5,
  cost: 1,
  max: 2, charge: "", use: 1, per: "Refresh",
  pointTotalId: "GiftofAirval",
  name: "Gift of Air", type: "Enchantment",
  incant: "<I>I grant thee a gift of the air</I> x3", 
  text: "<p2>Gift of Air</p2><BR><p3>Freq:</p3>  1/Refresh<BR><p3>Type:</p3>  Enchantment<BR><p3>School:</p3> Protection<BR><p3>Range:</p3> Other<BR><p3>Incant:</p3> <I>I grant thee a gift of the air</I> x3<BR><p3>Materials:</p3> White Strip<BR><p3>Effect:</p3>  The effects of a melee weapon or projectile weapon which just struck the bearer are ignored, instead the bearer announces “Gift of Air” and becomes Insubstantial. If the bearer is wearing armor it is affected as normal in addition to triggering Gift of Air. Bearer may choose to return directly to their base immediately after Gift of Air activates. Melee weapons with the Siege, Armor Breaking, Armor Destroying, Shield Crushing, or Shield Destroying Special Effects will affect the bearer as normal and do not trigger Gift of Air.<BR><p3>Limitations:</p3> Bearer may not wield weapons or shields<BR><p3>Notes:</p3> This Enchantment can be removed by Dispel Magic and similar Magic and Abilities. If the Insubstantial State is ended, the player is not required to continue returning to base. Caster may end this Insubstantial state at any time by using the exit incantation for Insubstantial."
};
const HeartoftheSwarm = {
  purchased: 0,
  level: 5,
  cost: 1,
  max: 2, charge: "", use: 1, per: "Refresh",
  pointTotalId: "HeartoftheSwarmval",
  name: "Heart of the Swarm", type: "Enchantment",
  incant: "<I>Let all those who oppose the hive feel the wrath of the swarm</I> x3", 
  text: "<p2>Heart of the Swarm</p2><BR><p3>Freq:</p3>  1/Refresh<BR><p3>Type:</p3>  Enchantment<BR><p3>School:</p3> Spirit<BR><p3>Range:</p3> Other<BR><p3>Incant:</p3> <I>Let all those who oppose the hive feel the wrath of the swarm</I> x3<BR><p3>Materials:</p3> Yellow strip<BR><p3>Effect:</p3> Bearer is Stopped. Any player on the bearer’s team may use the bearer as their respawn point as per the normal game rules. Players respawning at the caster do so by announcing <I>My life for the swarm.</I> Players on the bearer’s team may treat the bearer as a base for the purposes of the effects which require the teammate to go to their base<BR><p3>Limitations:</p3> Players can not respawn at the bearer if there are living enemy players or a game objective within 20’ of the bearer"
};
const Ironskin = {
  purchased: 0,
  level: 5,
  cost: 1,
  max: 2, charge: "", use: 1, per: "Refresh",
  pointTotalId: "Ironskinval",
  name: "Ironskin", type: "Enchantment",
  incant: "<I>I enchant thee with Ironskin</I> x3", 
  text: "<p2>Ironskin</p2><BR><p3>Freq:</p3>  1/Refresh<BR><p3>Type:</p3>  Enchantment<BR><p3>School:</p3> Protection<BR><p3>Range:</p3> Other<BR><p3>Incant:</p3> <I>I enchant thee with Ironskin</I> x3<BR><p3>Materials:</p3> White Strip<BR><p3>Effect:</p3> Bearer is Immune to Flame and gains two points Magic Armor affected as per Ancestral Armor"
};
const PoisonGlands = {
  purchased: 0,
  level: 5,
  cost: 1,
  max: 2, charge: "", use: 1, per: "Refresh",
  pointTotalId: "PoisonGlandsval",
  name: "Poison Glands", type: "Enchantment",
  incant: "<I>Thou shalt secrete poison from thy venomous glands</I> x3", 
  text: "<p2>Poison Glands</p2><BR><p3>Freq:</p3>  1/Refresh<BR><p3>Type:</p3>  Enchantment<BR><p3>School:</p3> Death<BR><p3>Range:</p3> Other<BR><p3>Incant:</p3> <I>Thou shalt secrete poison from thy venomous glands</I> x3<BR><p3>Materials:</p3> Red strip<BR><p3>Effect:</p3> Bearer gains self-only Poison (ex) 1/Refresh Charge x3"
};
const Resurrect = {
  purchased: 0,
  level: 5,
  cost: 2,
  max: 31, charge: "", use: 1, per: "Refresh",
  pointTotalId: "Resurrectval",
  name: "Resurrect", type: "Verbal",
  incant: "<I>Sword Cut, spear stab, mace smash, arrow jab,<BR>Let the white light of healing descend on thee<BR>Let the white light of healing stop thy spilling blood<BR>Let the white light of healing mend thy bones<BR>Let the white light of healing close thy wounds.<BR>Let the white light of healing restore thy vigor.<BR>The white light of healing hath resurrected thee.</I>", 
  text: "<p2>Resurrect</p2><BR><p3>Freq:</p3>  1/Refresh<BR><p3>Type:</p3>  Verbal<BR><p3>School:</p3> Spirit<BR><p3>Range:</p3> Touch<BR><p3>Incant:</p3> <I>Sword Cut, spear stab, mace smash, arrow jab,<BR>Let the white light of healing descend on thee<BR>Let the white light of healing stop thy spilling blood<BR>Let the white light of healing mend thy bones<BR>Let the white light of healing close thy wounds.<BR>Let the white light of healing restore thy vigor.<BR>The white light of healing hath resurrected thee.</I><BR><p3>Effect:</p3> Target Dead player who has not moved more than 5' from where they died is returned to life. Non-Persistent Enchantments on the player are removed before the player returns to life. Any Wounds on the player are healed."
};
const TrollBlood = {
  purchased: 0,
  level: 5,
  cost: 1,
  max: 2, charge: "", use: 1, per: "Refresh",
  pointTotalId: "TrollBloodval",
  name: "Troll Blood", type: "Enchantment",
  incant: "<I>The blood of the trolls sustains thee</I> x3", 
  text: "<p2>Troll Blood</p2><BR><p3>Freq:</p3>  1/Refresh<BR><p3>Type:</p3>  Enchantment<BR><p3>School:</p3> Protection<BR><p3>Range:</p3> Other<BR><p3>Incant:</p3> <I>The blood of the trolls sustains thee</I> x3<BR><p3>Materials:</p3> Three White Strips<BR><p3>Effect:</p3> Enchanted player does not die as normal. When the player would otherwise die they instead ignore the triggering effect as though it had not occurred, remove a strip, and become Frozen for 30 seconds. The bearer is treated as though they have the effects of Regeneration in addition to the above<BR><p3>Notes:</p3> Troll Blood is removed when the last strip is removed"
};

/*__________________________________________*/

const AvatarofNature = {
  purchased: 0,
  level: 6,
  cost: 1,
  max: 1, charge: "", use: -1, per: "",
  pointTotalId: "AvatarofNatureval",
  name: "Avatar of Nature", type: "Archetype",
  incant: "", 
  text: "<p2>Avatar of Nature</p2><BR><p3>Freq:</p3> N/A<BR><p3>Type:</p3>  Archetype<BR><p3>School:</p3> Neutral<BR><p3>Effect:</p3> All the casters Enchantments of level 4 and below are now range Self instead of their previous range. Does not apply to Golem"
};
const CallLightning = {
  purchased: 0,
  level: 6,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Refresh",
  pointTotalId: "CallLightningval",
  name: "Call Lightning", type: "Verbal",
  incant: "<I>I call lightning’s flame to strike thee</I> x3", 
  text: "<p2>Call Lightning</p2><BR><p3>Freq:</p3>  1/Refresh<BR><p3>Type:</p3>  Verbal<BR><p3>School:</p3> Flame<BR><p3>Range:</p3> 20<BR><p3>Incant:</p3> <I>I call lightning’s flame to strike thee</I> x3<BR><p3>Effect:</p3> Target player dies"
};
const ImbueWeapon = {
  purchased: 0,
  level: 6,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Refresh",
  pointTotalId: "ImbueWeaponval",
  name: "Imbue Weapon", type: "Enchantment",
  incant: "<I>I enchant thee to slay all foes</I> x3", 
  text: "<p2>Imbue Weapon</p2><BR><p3>Freq:</p3>  1/Refresh<BR><p3>Type:</p3>  Enchantment<BR><p3>School:</p3> Death<BR><p3>Range:</p3> Other<BR><p3>Incant:</p3> <I>I enchant thee to slay all foes</I> x3<BR><p3>Materials:</p3> Red Strip<BR><p3>Effect:</p3> Melee weapons wielded by the bearer are Wounds Kill"
};
const NaturalizeMagic = {
  purchased: 0,
  level: 6,
  cost: 1,
  max: 2, charge: "", use: 1, per: "Refresh",
  pointTotalId: "NaturalizeMagicval",
  name: "Naturalize Magic", type: "Enchantment",
  incant: "<I>I shall restore the balance</I> x3", 
  text: "<p2>Naturalize Magic</p2><BR><p3>Freq:</p3>  1/Refresh<BR><p3>Type:</p3>  Enchantment<BR><p3>School:</p3> Sorcery<BR><p3>Range:</p3> Self<BR><p3>Incant:</p3> <I>I shall restore the balance</I> x3<BR><p3>Materials:</p3> Three Red Strips<BR><p3>Effect:</p3> Bearer may cast Dispel Magic (m) by announcing <I>[Player] thou art dispelled</I> and removing an enchantment strip. Enchantment is removed when the last strip is removed."
};
const Ranger = {
  purchased: 0,
  level: 6,
  cost: 2,
  max: 1, charge: "", use: -1, per: "",
  pointTotalId: "Rangerval",
  name: "Ranger", type: "Archetype",
  incant: "", 
  text: "<p2>Ranger</p2><BR><p3>Freq:</p3>  N/A<BR><p3>Type:</p3>  Archetype<BR><p3>School:</p3> Neutral<BR><p3>Effect:</p3>  May use Bows. The cost of all available Equipment is reduced to zero points. The cost of all Enchantments is doubled."
};
const SnaringVines = {
  purchased: 0,
  level: 6,
  cost: 1,
  max: 1, charge: "", use: 1, per: "Refresh",
  pointTotalId: "SnaringVinesval",
  name: "Snaring Vines", type: "Enchantment",
  incant: "<I>The hands of the earth rise to your bidding</I> x3", 
  text: "<p2>Snaring Vines</p2><BR><p3>Freq:</p3>  1/Refresh<BR><p3>Type:</p3>  Enchantment<BR><p3>School:</p3> Command<BR><p3>Range:</p3> Self<BR><p3>Incant:</p3> <I>The hands of the earth rise to your bidding</I> x3<BR><p3>Materials:</p3> Three Red Strips<BR><p3>Effect:</p3> Bearer may cast Hold Person (m) by announcing <I>[Player] stop at my command.</I> and removing an enchantment strip. Enchantment is removed when the last strip is removed."
};
const Summoner = {
  purchased: 0,
  level: 6,
  cost: 2,
  max: 1, charge: "", use: -1, per: "",
  pointTotalId: "Summonerval",
  name: "Summoner", type: "Archetype",
  incant: "", 
  text: "<p2>Summoner</p2><BR><p3>Freq:</p3> N/A<BR><p3>Type:</p3>  Archetype<BR><p3>School:</p3> Neutral<BR><p3>Effect:</p3> Each Enchantment purchased gives double the uses. Example: 1/Life Charge x3 becomes 2/life Charge x3, 2/ life becomes 4/life<BR><p3>Limitations:</p3> May not purchase Verbals with a range other than Touch or Self. May not purchase equipment beyond 2nd level"
};
const WordofMending = {
  purchased: 0,
  level: 6,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Refresh",
  pointTotalId: "WordofMendingval",
  name: "Word of Mending", type: "Verbal",
  incant: "<I>Spedoinkle</I>", 
  text: "<p2>Word of Mending</p2><BR><p3>Freq:</p3>  1/Refresh<BR><p3>Type:</p3>  Verbal<BR><p3>School:</p3> Sorcery<BR><p3>Range:</p3> Touch<BR><p3>Incant:</p3> <I>Spedoinkle</I><BR><p3>Effect:</p3> All equipment carried by target player is repaired. All armor worn by target player is restored to full value<BR><p3>Limitations:</p3>May not be cast within 20’ of a living enemy"
};
const abilityCount = 50;
const abilities = [Ranger, //0
WordofMending, //1
Entangle, //2
WeaponShort, //3
Experienced, //4
HeatWeapon, //5
ImbueArmor, //6
Mend, //7
ShieldSmall, //8
CorrosiveMist, //9
GiftofEarth, //10
Heal, //11
ForceBolt, //12
Innate, //13
Poison, //14
Release, //15
Stoneform, //16
Attuned, //17
BearStrength, //18
DispelMagic, //19
Extension, //20
GiftofFire, //21
GreaterMend, //22
IcyBlast, //23
Regeneration, //24
Stoneskin, //25
WeaponLong, //26
FlameBlade, //27
Iceball, //28
GiftofWater, //29
Golem, //30
Lycanthropy, //31
Swift, //32
Teleport, //33
Ambulant, //34
WeaponGreat, //35
EssenceGraft, //36
GiftofAir, //37
HeartoftheSwarm, //38
Ironskin, //39
PoisonGlands, //40
Resurrect, //41
TrollBlood, //42
AvatarofNature, //43
CallLightning, //44
ImbueWeapon, //45
NaturalizeMagic, //46
Barkskin, //47
SnaringVines, //48
Summoner //49
];

function saveList(){
  let textToSave = "";
    if(document.title == "Druid Spellbook"){
      textToSave = "Druid Level " + document.getElementById("reqLevel").value + document.getElementById("ltp").innerText + " \n   Level 1 \n" + document.getElementById("lvl1List").innerText + "\n   Level 2 \n" + document.getElementById("lvl2List").innerText + "\n   Level 3 \n" + document.getElementById("lvl3List").innerText + "\n   Level 4 \n" + document.getElementById("lvl4List").innerText + "\n   Level 5 \n" + document.getElementById("lvl5List").innerText + "\n   Level 6 \n" + document.getElementById("lvl6List").innerText;
    }
    else{
      textToSave = document.title + " \n(Druid Level " + document.getElementById("reqLevel").value + ")" + document.getElementById("ltp").innerText + " \n   Level 1 \n" + document.getElementById("lvl1List").innerText + "\n   Level 2 \n" + document.getElementById("lvl2List").innerText + "\n   Level 3 \n" + document.getElementById("lvl3List").innerText + "\n   Level 4 \n" + document.getElementById("lvl4List").innerText + "\n   Level 5 \n" + document.getElementById("lvl5List").innerText + "\n   Level 6 \n" + document.getElementById("lvl6List").innerText;
    }    
    const blob = new Blob([textToSave], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = document.title + '.txt'; 
    link.click();
    URL.revokeObjectURL(link.href);
}

function titleList(){
  let newTitle = prompt("Enter a title for this list:");
  if (newTitle) {
    newTitle = newTitle.replace(/[^a-zA-Z0-9 ]/g, '');
    //newTitle = newTitle.replace(/ /g, "_");
    document.title = newTitle;
    document.getElementById('titleShow').innerHTML = newTitle;
    createURL();
  } else {
    console.log("Title change cancelled.");
  }
}

function showToast(message) {
  let duration = 3000;
  const toast = document.getElementById('toastMessage');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, duration);
}