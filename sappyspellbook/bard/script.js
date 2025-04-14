document.addEventListener("DOMContentLoaded", function() {
  parseURL();
  for(let i = 0; i < abilityCount; i++){
    updateAbilityText(i);
  }
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

function updateAbilityText(index){
  let i = index;
  abilities[i].text = "<p2>" + abilities[i].name + "</p2><BR>"; 
    if(abilities[i].freq != ""){
      abilities[i].text += "<p3>Freq:</p3>  " + abilities[i].freq + "<BR>"; 
    }
    if(abilities[i].type != ""){
      abilities[i].text += "<p3>Type:</p3>  " + abilities[i].type + "<BR>"; 
    }
    if(abilities[i].school != ""){
      abilities[i].text += "<p3>School:</p3>  " + abilities[i].school + "<BR>"; 
    }
    if(abilities[i].range != ""){
      abilities[i].text += "<p3>Range:</p3>  " + abilities[i].range + "<BR>"; 
    }
    if(abilities[i].incant != ""){
      abilities[i].text += "<p3>Incant:</p3>  " + abilities[i].incant + "<BR>"; 
    }
    if(abilities[i].materials != ""){
      abilities[i].text += "<p3>Materials:</p3>  " + abilities[i].materials + "<BR>"; 
    }
    if(abilities[i].effect != ""){
      abilities[i].text += "<p3>Effect:</p3>  " + abilities[i].effect + "<BR>"; 
    }
    if(abilities[i].limitations != ""){
      abilities[i].text += "<p3>Limitations:</p3>  " + abilities[i].limitations + "<BR>"; 
    }
    if(abilities[i].notes != ""){
      abilities[i].text += "<p3>Notes:</p3>  " + abilities[i].notes + "<BR>"; 
    }
}


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
      abilities[3].selectedAbility1 = exps[1].replace(/_/g, " ");
      abilities[3].selectedAbility2 = exps[2].replace(/_/g, " ");
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
  s += "-" + (abilities[3].selectedAbility1).replace(/ /g, "_") + "-" + (abilities[3].selectedAbility2).replace(/ /g, "_") + "-" + (document.title).replace(/ /g, "_") + "-" + chk;
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
          levelList[i] = levelList[i] + ": " + abilities[k].use * abilities[k].purchased + " Balls";
        }
        if(abilities[k].type == "Meta-Magic" && (abilities[40].purchased > 0 && abilities[k].name == "Extension")){
          levelList[i] = levelList[i] + ": " + abilities[k].use * abilities[k].purchased * 2 + "/" + abilities[k].per + " " + abilities[k].charge;
        }
        if(abilities[k].type == "Meta-Magic" && !(abilities[40].purchased > 0 && abilities[k].name == "Extension")){
          levelList[i] = levelList[i] + ": " + abilities[k].use * abilities[k].purchased + "/" + abilities[k].per + " " + abilities[k].charge;
        }
        if(abilities[k].type == "Enchantment"){
          levelList[i] = levelList[i] + ": " + abilities[k].use * abilities[k].purchased + "/" + abilities[k].per + " " + abilities[k].charge;
        }
        if(abilities[k].type == "Verbal" && abilities[0].purchased > 0){
          levelList[i] = levelList[i] + ": " + abilities[k].use * abilities[k].purchased * 2 + "/" + abilities[k].per + " " + abilities[k].charge;
        }      
        if(abilities[k].type == "Verbal" && abilities[0].purchased <= 0){
          levelList[i] = levelList[i] + ": " + abilities[k].use * abilities[k].purchased + "/" + abilities[k].per + " " + abilities[k].charge;
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
      document.getElementById("toggleIncants").hidden = false;
      document.getElementById("hlp1").hidden = true;
      document.getElementById("hlp2").hidden = true;
      document.getElementById("hlp3").hidden = true;
      document.getElementById("hlp4").hidden = true;
      document.getElementById("hlp5").hidden = true;
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
      document.getElementById("toggleIncants").hidden = true;
      document.getElementById("hlp1").hidden = false;
      document.getElementById("hlp2").hidden = false;
      document.getElementById("hlp3").hidden = false;
      document.getElementById("hlp4").hidden = false;
      document.getElementById("hlp5").hidden = false;
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
  
  processDervishMinus();
  processLegendMinus();
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
  abilities[3].selectedAbility1 = document.getElementById("exp1").value;
  abilities[3].selectedAbility2 = document.getElementById("exp2").value;
  
  if(abilities[3].purchased == 0){
  document.getElementById("experiencedtext").innerHTML = "<div class=\"popup\" ><span class=\"popuptext\" id=\"ExperiencedPopup\"></span></div>Experienced";
    document.getElementById("exp1").disabled = false;
    document.getElementById("exp2").disabled = true;
    document.getElementById("exp1").value = "Select Spell";
    abilities[3].selectedAbility1 = "Select Spell";    
  }
  
  if(abilities[3].purchased == 1){    
  document.getElementById("experiencedtext").innerHTML = "<div class=\"popup\" ><span class=\"popuptext\" id=\"ExperiencedPopup\"></span></div>Experienced<BR>[" + abilities[3].selectedAbility1 + "]";
    document.getElementById("exp1").disabled = true;
    document.getElementById("exp2").disabled = false;
    document.getElementById("exp2").value = "Select Spell";
    abilities[3].selectedAbility2 = "Select Spell";
  }  
  if(abilities[3].purchased == 2){    
  document.getElementById("experiencedtext").innerHTML = "<div class=\"popup\" ><span class=\"popuptext\" id=\"ExperiencedPopup\"></span></div>Experienced<BR>[" + abilities[3].selectedAbility1 + "]<BR>[" + abilities[3].selectedAbility2 + "]";
    document.getElementById("exp1").disabled = true;
    document.getElementById("exp2").disabled = true;
  }
  processExpChange(0);
  updateTable();
}
/*##################################*/
function processExpChange(fromUser){  
    if(abilities[3].purchased == 0){
      if(document.getElementById("exp1").value != "Select Spell"){
        document.getElementById("Experiencedplus").disabled = false;
      }
      else{document.getElementById("Experiencedplus").disabled = true}
    }
    if(abilities[3].purchased == 1){
      if(document.getElementById("exp2").value != "Select Spell"){
        document.getElementById("Experiencedplus").disabled = false;
      }
      else{document.getElementById("Experiencedplus").disabled = true}
    }
    if(abilities[3].purchased == 2){
      document.getElementById("Experiencedplus").disabled = false;
    }
    if(abilities[3].selectedAbility1 == "Awe" || abilities[3].selectedAbility2 == "Awe"){
      abilities[15].charge = "Charge x5";
      abilities[15].freq = "1/Life CHARGE x5";
      if(abilities[0].purchased > 0){abilities[15].freq = "2/Life CHARGE x5";}
      updateAbilityText(15);
    }
    else{
      abilities[15].charge = "";
      abilities[15].freq = "1/Life";
      if(abilities[0].purchased > 0){abilities[15].freq = "2/Life";}
      updateAbilityText(15);
    }
    if(abilities[3].selectedAbility1 == "Break Concentration" || abilities[3].selectedAbility2 == "Break Concentration"){
      abilities[17].charge = "Charge x5";
      abilities[17].freq = "1/Life CHARGE x5";
      if(abilities[0].purchased > 0){abilities[17].freq = "2/Life CHARGE x5";}
      updateAbilityText(17);
    }
    else{
      abilities[17].charge = "";
      abilities[17].freq = "1/Life";
      if(abilities[0].purchased > 0){abilities[17].freq = "2/Life";}
      updateAbilityText(17);
    }
    if(abilities[3].selectedAbility1 == "Empower" || abilities[3].selectedAbility2 == "Empower"){
      abilities[8].charge = "Charge x10";
      abilities[8].freq = "2/Ref CHARGE x10";
      if(abilities[0].purchased > 0){abilities[8].freq = "4/Ref CHARGE x10";}
      updateAbilityText(8);
    }
    else{
      abilities[8].charge = "";
      abilities[8].freq = "2/Ref";
      if(abilities[0].purchased > 0){abilities[8].freq = "4/Ref";}
      updateAbilityText(8);
    }
    if(abilities[3].selectedAbility1 == "Greater Release" || abilities[3].selectedAbility2 == "Greater Release"){
      abilities[10].charge = "Charge x10";
      abilities[10].freq = "1/Ref CHARGE x10";
      if(abilities[0].purchased > 0){abilities[10].freq = "2/Ref CHARGE x10";}
      updateAbilityText(10);
    }
    else{
      abilities[10].charge = "";
      abilities[10].freq = "1/Ref";
      if(abilities[0].purchased > 0){abilities[10].freq = "2/Ref";}
      updateAbilityText(10);
    }
    if(abilities[3].selectedAbility1 == "Insult" || abilities[3].selectedAbility2 == "Insult"){
      abilities[4].charge = "Charge x5";
      abilities[4].freq = "1/Life CHARGE x5";
      if(abilities[0].purchased > 0){abilities[4].freq = "2/Life CHARGE x5";}
      updateAbilityText(4);
    }
    else{
      abilities[4].charge = "";
      abilities[4].freq = "1/Life";
      if(abilities[0].purchased > 0){abilities[4].freq = "2/Life";}
      updateAbilityText(4);
    }
    if(abilities[3].selectedAbility1 == "Mend" || abilities[3].selectedAbility2 == "Mend"){
      abilities[12].charge = "Charge x5";
      abilities[12].freq = "1/Life CHARGE x5";
      if(abilities[0].purchased > 0){abilities[12].freq = "2/Life CHARGE x5";}
      updateAbilityText(12);
    }
    else{
      abilities[12].charge = "";
      abilities[12].freq = "1/Life";
      if(abilities[0].purchased > 0){abilities[12].freq = "2/Life";}
      updateAbilityText(12);
    }
    if(abilities[3].selectedAbility1 == "Release" || abilities[3].selectedAbility2 == "Release"){
      abilities[5].charge = "Charge x5";
      abilities[5].freq = "1/Life CHARGE x5";
      if(abilities[0].purchased > 0){abilities[5].freq = "2/Life CHARGE x5";}
      updateAbilityText(5);
    }
    else{
      abilities[5].charge = "";
      abilities[5].freq = "1/Life";
      if(abilities[0].purchased > 0){abilities[5].freq = "2/Life";}
      updateAbilityText(5);
    }
    if(abilities[3].selectedAbility1 == "Restoration" || abilities[3].selectedAbility2 == "Restoration"){
      abilities[23].charge = "Charge x10";
      abilities[23].freq = "1/Ref CHARGE x10";
      if(abilities[0].purchased > 0){abilities[23].freq = "2/Ref CHARGE x10";}
      updateAbilityText(23);
    }
    else{
      abilities[23].charge = "";
      abilities[23].freq = "1/Ref";
      if(abilities[0].purchased > 0){abilities[23].freq = "2/Ref";}
      updateAbilityText(23);
    }
    if(abilities[3].selectedAbility1 == "Shove" || abilities[3].selectedAbility2 == "Shove"){
      abilities[6].charge = "Charge x5";
      abilities[6].freq = "1/Life CHARGE x5";
      if(abilities[0].purchased > 0){abilities[6].freq = "2/Life CHARGE x5";}
      updateAbilityText(6);
    }
    else{
      abilities[6].charge = "";
      abilities[6].freq = "1/Life";
      if(abilities[0].purchased > 0){abilities[6].freq = "2/Life";}
      updateAbilityText(6);
    }
    if(abilities[3].selectedAbility1 == "Suppress Aura" || abilities[3].selectedAbility2 == "Suppress Aura"){
      abilities[27].charge = "Charge x10";
      abilities[27].freq = "1/Ref CHARGE x10";
      if(abilities[0].purchased > 0){abilities[27].freq = "2/Ref CHARGE x10";}
      updateAbilityText(27);
    }
    else{
      abilities[27].charge = "";
      abilities[27].freq = "1/Ref";
      if(abilities[0].purchased > 0){abilities[27].freq = "2/Ref";}
      updateAbilityText(27);
    }
    if(abilities[3].selectedAbility1 == "Terror" || abilities[3].selectedAbility2 == "Terror"){
      abilities[29].charge = "Charge x10";
      abilities[29].freq = "1/Ref CHARGE x10";
      if(abilities[0].purchased > 0){abilities[29].freq = "2/Ref CHARGE x10";}
      updateAbilityText(29);
    }
    else{
      abilities[29].charge = "";
      abilities[29].freq = "1/Ref";
      if(abilities[0].purchased > 0){abilities[29].freq = "2/Ref";}
      updateAbilityText(29);
    }
    //createURL(); OLD
    if(fromUser == 1){
      pointPlus(3);
      createURL(); //new//new checking to see if this fixes the reload error on iPhones
    }
    
 }
/*##################################*/
function legendCheck(index){
  var a = index;
  if(abilities[40].purchased > 0){
    if(abilities[a].name == "Swift"){
      
       return false;
       }
    else{
      return true;
    }
  }  
  if(abilities[a].name == "Legend"){
    for(let i = 0; i < abilityCount; i++){
      if(abilities[i].name == "Swift" && abilities[i].purchased > 0){
        
        return false; 
        }
    }    
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
  
  if(legendCheck(a) == false){
    showToast("Legends never purchase Swift.");
    return false;
  }
  if(!checkDervishPlus(a)){
    showToast("You don't have the points to add Dervish.");
    return false;
  }
  
  
  if(checkPointsAvailable(a)){
    if(abilities[a].name == "Dervish"){
      processDervishPlus();
    }
    if(abilities[a].name == "Legend"){
      processLegendPlus();
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
        //console.log(abilities[a].name + " " + abilities[a].pointTotalId);
        document.getElementById(abilities[a].pointTotalId).value++;
        updatePointsAvailable();
        updateExperienced();
        if(fromClick){ 
          reprocessPoints(a);
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

  if(reqLevel == 1){    
    document.getElementById("level1Points").hidden = false;
    document.getElementById("reqLevel1").hidden = false;
    document.getElementById("level2Points").hidden = true;
    document.getElementById("reqLevel2").hidden = true;
    document.getElementById("level3Points").hidden = true;
    document.getElementById("reqLevel3").hidden = true;
    document.getElementById("level4Points").hidden = true;
    document.getElementById("reqLevel4").hidden = true;
    document.getElementById("level5Points").hidden = true;
    document.getElementById("reqLevel5").hidden = true;
    document.getElementById("level6Points").hidden = true;
    document.getElementById("reqLevel6").hidden = true;
  }
  else if(reqLevel == 2){    
    document.getElementById("level1Points").hidden = false;
    document.getElementById("reqLevel1").hidden = false;
    document.getElementById("level2Points").hidden = false;
    document.getElementById("reqLevel2").hidden = false;
    document.getElementById("level3Points").hidden = true;
    document.getElementById("reqLevel3").hidden = true;
    document.getElementById("level4Points").hidden = true;
    document.getElementById("reqLevel4").hidden = true;
    document.getElementById("level5Points").hidden = true;
    document.getElementById("reqLevel5").hidden = true;
    document.getElementById("level6Points").hidden = true;
    document.getElementById("reqLevel6").hidden = true;
  }
  else if(reqLevel == 3){    
    document.getElementById("level1Points").hidden = false;
    document.getElementById("reqLevel1").hidden = false;
    document.getElementById("level2Points").hidden = false;
    document.getElementById("reqLevel2").hidden = false;
    document.getElementById("level3Points").hidden = false;
    document.getElementById("reqLevel3").hidden = false;
    document.getElementById("level4Points").hidden = true;
    document.getElementById("reqLevel4").hidden = true;
    document.getElementById("level5Points").hidden = true;
    document.getElementById("reqLevel5").hidden = true;
    document.getElementById("level6Points").hidden = true;
    document.getElementById("reqLevel6").hidden = true;
  }
  else if(reqLevel == 4){    
    document.getElementById("level1Points").hidden = false;
    document.getElementById("reqLevel1").hidden = false;
    document.getElementById("level2Points").hidden = false;
    document.getElementById("reqLevel2").hidden = false;
    document.getElementById("level3Points").hidden = false;
    document.getElementById("reqLevel3").hidden = false;
    document.getElementById("level4Points").hidden = false;
    document.getElementById("reqLevel4").hidden = false;
    document.getElementById("level5Points").hidden = true;
    document.getElementById("reqLevel5").hidden = true;
    document.getElementById("level6Points").hidden = true;
    document.getElementById("reqLevel6").hidden = true;
  }
  else if(reqLevel == 5){    
    document.getElementById("level1Points").hidden = false;
    document.getElementById("reqLevel1").hidden = false;
    document.getElementById("level2Points").hidden = false;
    document.getElementById("reqLevel2").hidden = false;
    document.getElementById("level3Points").hidden = false;
    document.getElementById("reqLevel3").hidden = false;
    document.getElementById("level4Points").hidden = false;
    document.getElementById("reqLevel4").hidden = false;
    document.getElementById("level5Points").hidden = false;
    document.getElementById("reqLevel5").hidden = false;
    document.getElementById("level6Points").hidden = true;
    document.getElementById("reqLevel6").hidden = true;
  }
  else if(reqLevel == 6){    
    document.getElementById("level1Points").hidden = false;
    document.getElementById("reqLevel1").hidden = false;
    document.getElementById("level2Points").hidden = false;
    document.getElementById("reqLevel2").hidden = false;
    document.getElementById("level3Points").hidden = false;
    document.getElementById("reqLevel3").hidden = false;
    document.getElementById("level4Points").hidden = false;
    document.getElementById("reqLevel4").hidden = false;
    document.getElementById("level5Points").hidden = false;
    document.getElementById("reqLevel5").hidden = false;
    document.getElementById("level6Points").hidden = false;
    document.getElementById("reqLevel6").hidden = false;
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
  if(abilities[a].name == "Dervish"){
    processDervishMinus();
  }
  if(abilities[a].name == "Legend"){
    processLegendMinus();
  }
  abilities[a].purchased--;
  reprocessPoints(a);
  createURL(); //new
  return 0;
}
/*##################################*/
function reprocessPoints(index){
  let a = index;
  let temp1 = "";
  let temp2 = "";
  
    temp1 = abilities[3].selectedAbility1;
    temp2 = abilities[3].selectedAbility2;
  
  var tempPurchased = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  for(let i = 0; i < abilityCount; i++){
    tempPurchased[i] = abilities[i].purchased;
  }   
  resetPoints(0);  
  for(let i = 0; i < abilityCount; i++){
    while(tempPurchased[i] > 0){
      pointPlus(i, false);
      tempPurchased[i]--;
    }
  }
  
    abilities[3].selectedAbility1 = temp1;
    abilities[3].selectedAbility2 = temp2;
    document.getElementById("exp1").value = temp1;
    document.getElementById("exp2").value = temp2;
  
  updateExperienced();  
  updatePointsAvailable();
}

function processDervishPlus(){
  abilities[2].cost = 4;
  abilities[9].cost = 6;
  abilities[19].cost = 4;
  abilities[22].cost = 6;
  abilities[33].cost = 6;
  abilities[39].cost = 4;

  abilities[1].freq = "2/Ref Chg x5";
  abilities[4].freq = "2/Life";
  abilities[5].freq = "2/Life";
  abilities[6].freq = "2/Life";
  abilities[8].freq = "4/Ref";
  abilities[10].freq = "2/Ref";
  abilities[12].freq = "2Life";
  abilities[15].freq = "2/Life";
  abilities[17].freq = "2/Life";
  abilities[23].freq = "2/Ref";
  abilities[27].freq = "2/Ref";
  abilities[29].freq = "2/Ref";
  abilities[30].freq = "2/Ref";
  abilities[35].freq = "2/Life";
  abilities[38].freq = "2/Ref";

  updateAbilityText(1);	
  updateAbilityText(4);	
  updateAbilityText(5);	
  updateAbilityText(6);	
  updateAbilityText(8);	
  updateAbilityText(10);	
  updateAbilityText(12);	
  updateAbilityText(15);	
  updateAbilityText(17);
  updateAbilityText(23);	
  updateAbilityText(27);	
  updateAbilityText(29);	
  updateAbilityText(30);	
  updateAbilityText(35);	
  updateAbilityText(38);	
  
  updateTable();
}
function processDervishMinus(){
  abilities[2].cost = 2;
  abilities[9].cost = 3;
  abilities[19].cost = 2;
  abilities[22].cost = 3;
  abilities[33].cost = 3;
  abilities[39].cost = 2;
  
  abilities[1].freq = "1/Ref Chg x5";
  abilities[4].freq = "1/Life";
  abilities[5].freq = "1/Life";
  abilities[6].freq = "1/Life";
  abilities[8].freq = "2/Ref";
  abilities[10].freq = "1/Ref";
  abilities[12].freq = "1Life";
  abilities[15].freq = "1/Life";
  abilities[17].freq = "1/Life";
  abilities[23].freq = "1/Ref";
  abilities[27].freq = "1/Ref";
  abilities[29].freq = "1/Ref";
  abilities[30].freq = "1/Ref";
  abilities[35].freq = "1/Life";
  abilities[38].freq = "1/Ref";

  updateAbilityText(1);	
  updateAbilityText(4);	
  updateAbilityText(5);	
  updateAbilityText(6);	
  updateAbilityText(8);	
  updateAbilityText(10);	
  updateAbilityText(12);	
  updateAbilityText(15);	
  updateAbilityText(17);
  updateAbilityText(23);	
  updateAbilityText(27);	
  updateAbilityText(29);	
  updateAbilityText(30);	
  updateAbilityText(35);	
  updateAbilityText(38);
  updateTable();
}

function processLegendPlus(){
  abilities[18].freq = "2/Life";
  updateTable();
}
function processLegendMinus(){
  abilities[18].freq = "1/Life";
  updateTable();
}

function checkDervishPlus(index){
  if(abilities[index].name != "Dervish"){
    return true;
  }
  var equipCost = [0,0,0,0,0,0,0];
  var tempAvailablePoints = [0,0,0,0,0,0,0];
  var tempCost = 0;
  for(let i = 0; i < abilityCount; i++){
    if(i == 2 || i == 9 || i == 19 || i == 22 || i == 33 || i == 39){
      equipCost[abilities[i].level] = equipCost[abilities[i].level] + (abilities[i].cost * abilities[i].purchased);
    }
  }
  for(let i = 1; i < 7; i++){
    tempAvailablePoints[i] = pointsAvailable[i];
  } 
  tempAvailablePoints[6] = tempAvailablePoints[6] - 2;
  for(let j = 1; j < 7; j++){
    tempCost = equipCost[j];
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
const Confidence = {
  purchased: 0, 
  level: 1,
  cost: 1,
  max: 31, charge: "Charge x5", use: 1, per: "Refresh",
  pointTotalId: "Confidenceval",
  name: "Confidence", type: "Verbal",  freq: "1/Ref Chg x5",
  school: "Sorcery", range: "Other", materials: "",
  incant: "<I>My power grants thee confidence</I>", 
  effect: "Target player may instantly Charge a single ability", 
  limitations: "May not be used within 20' of a living enemy.",
  notes: "",
  text: ""
};
const WeaponShort = {
  purchased: 0,
  level: 1,
  cost: 2,
  max: 2, charge: "", use: -1, per: "",
  pointTotalId: "WeaponShortval",
  name: "Weapon Short", type: "Neutral",  freq: "",
  school: "", range: "", materials: "",
  incant: "", 
  effect: "May wield one short weapon at a time for each instance purchased (but may carry extras)", 
  limitations: "",
  notes: "",
  text: ""
};
const Experienced = {
  purchased: 0,
  level: 1,
  cost: 2,
  max: 2, charge: "", use: -1, per: "",
  pointTotalId: "Experiencedval",
  name: "Experienced", type: "Neutral",  freq: "",
  school: "Neutral", range: "", materials: "",
  incant: "", 
  effect: "A single per-life Verbal purchased becomes Charge x5 in addition to the normal frequency OR a single per- refresh Verbal purchased becomes Charge x10 in addition to the normal frequency. This Verbal must be determined before the game begins and cannot be changed", 
  limitations: "Verbal must be 4th level or lower",
  notes: "",
  selectedAbility1: "Select Spell",
  selectedAbility2: "Select Spell",
  text: ""
};
const Insult = {
  purchased: 0,
  level: 1,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Life",
  pointTotalId: "Insultval",
  name: "Insult", type: "Verbal",  freq: "1/Life",
  school: "Command", range: "20", materials: "",
  incant: "<I>I command thy attention</I> x3", 
  effect: "Target is unable to attack or cast Magical abilities at anyone other than the caster or their carried equipment for 30 seconds, or until either party dies. If the target of Insult is attacked or has Magical abilities cast on them or their carried equipment by someone other than the caster, the target of Insult becomes able to choose to attack the offending party as well.", 
  limitations: "The target may still charge and throw Magic Balls at the caster.",
  notes: "",
  text: ""
};
const Release = {
  purchased: 0,
  level: 1,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Life",
  pointTotalId: "Releaseval",
  name: "Release", type: "Verbal",  freq: "1/Life",
  school: "Sorcery", range: "Touch", materials: "",
  incant: "<I>From thy bindings thou art released</I> x5", 
  effect: "A single ongoing effect or State is removed from the target. Casters choice", 
  limitations: "Cannot remove Cursed. When used to end a State or Ongoing Effect imposed by an ability with multiple effects, all other States and Ongoing Effects from the same source are also ended",
  notes: "",
  text: ""
};
const Shove = {
  purchased: 0,
  level: 1,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Life",
  pointTotalId: "Shoveval",
  name: "Shove", type: "Verbal",  freq: "1/Life",
  school: "Sorcery", range: "20", materials: "",
  incant: "<I>My power shoves thee</I> x3", 
  effect: "Target player is moved back 20' in a straight line away from the caster. Works on Stopped players. If the caster is the target, the caster may choose the direction they move", 
  limitations: "",
  notes: "",
  text: ""
};
const SongofDetermination = {
  purchased: 0,
  level: 1,
  cost: 1,
  max: 1, charge: "", use: 1, per: "Unlimited",
  pointTotalId: "SongofDeterminationval",
  name: "Song of Determination", type: "Enchantment",  freq: "Unlimited",
  school: "Protection", range: "Self", materials: "",
  incant: "<I>I sing of my unwavering determination</I>", 
  effect: "Bearer is Immune to Command. Bearer must Chant 'Song of Determination' or sing a song regarding their determination. Singing in place of the normal Chant is still a Chant and must follow all Chant rules.", 
  limitations: "",
  notes: "",
  text: ""
};

/*__________________________________________*/

const Empower = {
  purchased: 0,
  level: 2,
  cost: 1,
  max: 31, charge: "", use: 2, per: "Refresh",
  pointTotalId: "Empowerval",
  name: "Empower", type: "Verbal",  freq: "2/Ref",
  school: "Sorcery", range: "Other", materials: "",
  incant: "<I>I empower thee</I>", 
  effect: "Target player regains one use of any per-life Ability they have expended", 
  limitations: "Does not function on Empower, Confidence, or Restoration",
  notes: "Does not allow a player to have more than their maximum uses of an ability.",
  text: ""
};
const Armor1Point = {
  purchased: 0,
  level: 2,
  cost: 3,
  max: 1, charge: "", use: -1, per: "",
  pointTotalId: "Armor1Pointval",
  name: "Armor 1 Point", type: "Neutral",  freq: "",
  school: "", range: "", materials: "",
  incant: "", 
  effect: "Your class maximum armor limit increases one additional point", 
  limitations: "",
  notes: "",
  text: ""
};
const GreaterRelease = {
  purchased: 0,
  level: 2,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Refresh",
  pointTotalId: "GreaterReleaseval",
  name: "Greater Release", type: "Verbal",  freq: "1/Ref",
  school: "Sorcery", range: "20", materials: "",
  incant: "<I>From all thine afflictions thou art released</I> x2", 
  effect: "All ongoing effects and States are removed from the target. The caster may choose to leave some States or effects in place. Greater Release may target Dead players.", 
  limitations: "",
  notes: "When used to end a State or Ongoing Effect imposed by an ability with multiple effects, all other States and Ongoing Effects from the same source are also ended",
  text: ""
};
const Innate = {
  purchased: 0,
  level: 2,
  cost: 1,
  max: 4, charge: "", use: 1, per: "Refresh",
  pointTotalId: "Innateval",
  name: "Innate", type: "Meta-Magic",  freq: "1/Ref",
  school: "Neutral", range: "", materials: "",
  incant: "<I>Innate</I>", 
  effect: "May be used to instantly Charge a single ability by stating its name.", 
  limitations: "",
  notes: "",
  text: ""
};
const Mend = {
  purchased: 0,
  level: 2,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Life",
  pointTotalId: "Mendval",
  name: "Mend", type: "Verbal",  freq: "	1/Life",
  school: "Sorcery", range: "Touch", materials: "",
  incant: "<I>I make this item whole again</I> x5", 
  effect: "Destroyed or damaged item is repaired, or one point of armor in one location is repaired", 
  limitations: "",
  notes: "",
  text: ""
};
const SongofBattle = {
  purchased: 0,
  level: 2,
  cost: 1,
  max: 1, charge: "", use: 1, per: "Unlimited",
  pointTotalId: "SongofBattleval",
  name: "Song of Battle", type: "Enchantment",  freq: "Unlimited",
  school: "Protection", range: "Self", materials: "",
  incant: "<I>I sing of my legendary prowess</I>", 
  effect: "Bearer's wielded melee weapons are Armor Breaking. Bearer must Chant “Song of Battle” or sing a song regarding their martial prowess. Singing in place of the normal Chant is still a Chant and must follow all Chant rules.", 
  limitations: "",
  notes: "",
  text: ""
};
const SongofVisit = {
  purchased: 0,
  level: 2,
  cost: 1,
  max: 1, charge: "", use: 1, per: "Unlimited",
  pointTotalId: "SongofVisitval",
  name: "Song of Visit", type: "Enchantment",  freq: "Unlimited",
  school: "Protection", range: "Self", materials: "",
  incant: "<I>I sing to entertain friend and foe</I> x3", 
  effect: "Bearer cannot be Wounded and is Immune to all schools. Bearer is Stopped. Bearer must Chant 'Song of Visit' or sing a song regarding their general good nature and friendly disposition. Singing in place of the normal Chant is still a Chant and must follow all Chant rules. When Song of Visit is removed player becomes Insubstantial and must immediately move directly to their base. Upon arrival, they must immediately end the effect as per Insubstantial", 
  limitations: "Bearer may not wield weapons, interact with game objects, impede play, gain further Enchantments, or target any player",
  notes: "This Enchantment can be removed by Dispel Magic and similar Magic and Abilities. If the Insubstantial State is ended, the rest of the effect is ended as well.",
  text: ""
};
/*__________________________________________*/
const Awe = {
  purchased: 0,
  level: 3,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Life",
  pointTotalId: "Aweval",
  name: "Awe", type: "Verbal",  freq: "1/Life",
  school: "Command", range: "20", materials: "",
  incant: "<I>I command thee awed</I> x3", 
  effect: "Target may not attack or cast Magical abilities at the caster or their carried equipment. Target must remain at least 20’ away from the caster unless forced there by another ability. Lasts 30 seconds", 
  limitations: "",
  notes: "If the caster attacks the target, begins casting another magic at the target or their carried equipment, or dies, this spell’s effect is negated",
  text: ""
};
const BattlefieldTriage = {
  purchased: 0,
  level: 3,
  cost: 1,
  max: 1, charge: "", use: 1, per: "Refresh",
  pointTotalId: "BattlefieldTriageval",
  name: "Battlefield Triage", type: "Enchantment",  freq: "1/Ref",
  school: "Spirit", range: "Touch", materials: "3 Yellow strips",
  incant: "<I>Be a bastion of healing</I> x3", 
  effect: "Bearer may cast Heal (m) by incanting “[Player] thou art made whole” and removing an enchantment strip. Enchantment is removed when the last strip is removed.", 
  limitations: "",
  notes: "",
  text: ""
};
const BreakConcentration = {
  purchased: 0,
  level: 3,
  cost: 1,
  max: 4, charge: "", use: 1, per: "Life",
  pointTotalId: "BreakConcentrationval",
  name: "Break Concentration", type: "Verbal",  freq: "1/Life",
  school: "Command", range: "20", materials: "",
  incant: "<I>I command thee suppressed</I>", 
  effect: "Target player is suppressed for 10 seconds", 
  limitations: "",
  notes: "",
  text: ""
};
const Extension = {
  purchased: 0,
  level: 3,
  cost: 1,
  max: 2, charge: "", use: 1, per: "Life",
  pointTotalId: "Extensionval",
  name: "Extension", type: "Meta-Magic",  freq: "1/Life",
  school: "Neutral", range: "", materials: "",
  incant: "<I>Extension</I>", 
  effect: "Verbal becomes 50'. Only works on verbals with a range of 20'", 
  limitations: "",
  notes: "",
  text: ""
};
const ShieldSmall = {
  purchased: 0,
  level: 3,
  cost: 2,
  max: 1, charge: "", use: -1, per: "",
  pointTotalId: "ShieldSmallval",
  name: "Shield Small", type: "Neutral",  freq: "",
  school: "", range: "", materials: "",
  incant: "", 
  effect: "May wield a small shield", 
  limitations: "",
  notes: "",
  text: ""
};
const SongofFreedom = {
  purchased: 0,
  level: 3,
  cost: 1,
  max: 1, charge: "", use: 1, per: "Unlimited",
  pointTotalId: "SongofFreedomval",
  name: "Song of Freedom", type: "Enchantment",  freq: "Unlimited",
  school: "Protection", range: "Self", materials: "",
  incant: "<I>I sing of my unquenchable wanderlust</I>", 
  effect: "Bearer cannot receive the States Stopped, Frozen, or Insubstantial unless caused by the bearer or other enchantments they carry. Bearer must Chant 'Song of Freedom' or sing a song of roving or rambling. Singing in place of the normal Chant is still a Chant and must follow all Chant rules", 
  limitations: "",
  notes: "",
  text: ""
};

/*__________________________________________*/

const Amplification = {
  purchased: 0,
  level: 4,
  cost: 1,
  max: 4, charge: "", use: 1, per: "Refresh",
  pointTotalId: "Amplificationval",
  name: "Amplification", type: "Enchantment",  freq: "1/Ref",
  school: "Sorcery", range: "Touch", materials: "Yellow Strip",
  incant: "<I>My power amplifies thy voice</I> x3", 
  effect: "Bearer gains Extension 1/refresh Charge x3 (m). Other sources of extension may not be utilized while Amplification is worn.", 
  limitations: "",
  notes: "Does not use up any purchased instances of Extension.",
  text: ""
};
const LongWeapon = {
  purchased: 0,
  level: 4,
  cost: 3,
  max: 1, charge: "", use: -1, per: "",
  pointTotalId: "LongWeaponval",
  name: "Long Weapon", type: "Neutral",  freq: "",
  school: "", range: "", materials: "",
  incant: "", 
  effect: "May wield one long weapon at a time for each instance purchased (but may carry extras)", 
  limitations: "",
  notes: "",
  text: ""
};
const Restoration = {
  purchased: 0,
  level: 4,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Refresh",
  pointTotalId: "Restorationval",
  name: "Restoration", type: "Verbal",  freq: "1/Ref",
  school: "Sorcery", range: "Other", materials: "",
  incant: "<I>I restore thee to thy full potency</I>", 
  effect: "Player has all uses of their per-life Abilities restored", 
  limitations: "Does not function on Empower, Confidence, or Restoration",
  notes: "",
  text: ""
};
const SleightofMind = {
  purchased: 0,
  level: 4,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Refresh",
  pointTotalId: "SleightofMindval",
  name: "Sleight of Mind", type: "Enchantment",  freq: "1/Ref",
  school: "Sorcery", range: "Other", materials: "Yellow Strip",
  incant: "<I>May thy power remain</I> x3", 
  effect: "Enchantments worn by the bearer, other than Sleight of Mind, are not removed by Dispel Magic or similar Abilities. Does not count towards the bearer’s Enchantment Limit", 
  limitations: "",
  notes: "",
  text: ""
};
const SongofDeflection = {
  purchased: 0,
  level: 4,
  cost: 1,
  max: 1, charge: "", use: 1, per: "Unlimited",
  pointTotalId: "SongofDeflectionval",
  name: "Song of Deflection", type: "Enchantment",  freq: "Unlimited",
  school: "Protection", range: "Self", materials: "",
  incant: "<I>I sing of my nimble acrobatics</I>", 
  effect: "Bearer is unaffected by ammunition, thrown javelins, rocks, and thrown weapons. Engulfing effects from those objects, such as Pinning Arrow, do not affect the player. Bearer must Chant “Song of Deflection” or sing a song of their acrobatic prowess. Singing in place of the normal Chant is still a Chant and must follow all Chant rules", 
  limitations: "",
  notes: "Does not protect the bearer against Magic Balls.",
  text: ""
};
const SongofPower = {
  purchased: 0,
  level: 4,
  cost: 1,
  max: 1, charge: "", use: 1, per: "Unlimited",
  pointTotalId: "SongofPowerval",
  name: "Song of Power", type: "Enchantment",  freq: "Unlimited",
  school: "Protection", range: "Self", materials: "",
  incant: "<I>I sing to inspire my comrades-in-arms</I>", 
  effect: "Friendly players within 20’ of the bearer have their Charging Incantation repetitions divided by 2, rounded down, to a minimum of 1. Bearer is Stopped. Bearer must Chant 'Song of Power' or sing an inspiring song. Singing in place of the normal Chant is still a Chant and must follow all Chant rules", 
  limitations: "Players can only benefit from one instance of Song of Power at a time",
  notes: "",
  text: ""
};
const SuppressAura = {
  purchased: 0,
  level: 4,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Refresh",
  pointTotalId: "SuppressAuraval",
  name: "Suppress Aura", type: "Verbal",  freq: "	1/Ref",
  school: "Command", range: "50", materials: "",
  incant: "<I>I command thee powerless</I> x3", 
  effect: "Target is Suppressed for 30 seconds", 
  limitations: "",
  notes: "",
  text: ""
};
const Swift = {
  purchased: 0,
  level: 4,
  cost: 1,
  max: 2, charge: "", use: 1, per: "Life",
  pointTotalId: "Swiftval",
  name: "Swift", type: "Meta-Magic",  freq: "1/Life",
  school: "Neutral", range: "", materials: "",
  incant: "<I>Swift</I>", 
  effect: "Abilities require only a single iteration of the incantation. For multi-line Incantations use the last line", 
  limitations: "May only be used on abilities at a range of Touch, Other, or Self, or on Magic Balls. May not be used on the Charge incantation.",
  notes: "",
  text: ""
};
const Terror = {
  purchased: 0,
  level: 4,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Refresh",
  pointTotalId: "Terrorval",
  name: "Terror", type: "Verbal",  freq: "1/Ref",
  school: "Death", range: "20", materials: "",
  incant: "<I>Death makes thee terrified</I> x3", 
  effect: "Target may not attack or cast Magical abilities at the caster or their carried equipment. Target must remain at least 50’ away from the caster unless forced there by another ability. Lasts 30 seconds", 
  limitations: "",
  notes: "If the caster attacks the target, begins casting another magical ability at the target or their carried equipment, or dies, this ability’s effect is negated",
  text: ""
};

/*__________________________________________*/

const Agoraphobia = {
  purchased: 0,
  level: 5,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Refresh",
  pointTotalId: "Agoraphobiaval",
  name: "Agoraphobia", type: "Verbal",  freq: "1/Ref",
  school: "Command", range: "20", materials: "",
  incant: "<I>I command thee to be alone</I> x3", 
  effect: "Target must remain at least 20’ away from all other living players unless forced there by another ability. Lasts 30 seconds.", 
  limitations: "",
  notes: "",
  text: ""
};
const Ambulant = {
  purchased: 0,
  level: 5,
  cost: 1,
  max: 2, charge: "", use: 1, per: "Life",
  pointTotalId: "Ambulantval",
  name: "Ambulant", type: "Meta-Magic",  freq: "1/Life",
  school: "Neutral", range: "", materials: "",
  incant: "<I>Ambulant</I>", 
  effect: "An incantation may be said while moving.", 
  limitations: "May not be used on the Charge incantation.",
  notes: "Using Ambulant allows both the target indication and Ambulant to be said while moving, but not other Meta-Magics.",
  text: ""
};
const Discordia = {
  purchased: 0,
  level: 5,
  cost: 1,
  max: 1, charge: "", use: 1, per: "Refresh",
  pointTotalId: "Discordiaval",
  name: "Discordia", type: "Enchantment",  freq: "1/Ref",
  school: "Command", range: "Self", materials: "Five red strips",
  incant: "<I>My discordant melodies shall stymie my foes</I> x3", 
  effect: "Bearer may cast Break Concentration (m) by incanting “[Player] thou art suppressed” and removing an enchantment strip. Enchantment is removed when the last strip is removed.", 
  limitations: "",
  notes: "",
  text: ""
};
const ShieldMedium = {
  purchased: 0,
  level: 5,
  cost: 3,
  max: 	1, charge: "", use: -1, per: "",
  pointTotalId: "ShieldMediumval",
  name: "Shield Medium", type: "Neutral",  freq: "",
  school: "", range: "", materials: "",
  incant: "", 
  effect: "May wield up to a medium shield", 
  limitations: "",
  notes: "",
  text: ""
};
const HeartoftheSwarm = {
  purchased: 0,
  level: 5,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Refresh",
  pointTotalId: "HeartoftheSwarmval",
  name: "Heart of the Swarm", type: "Enchantment",  freq: "1/Ref",
  school: "Spirit", range: "Self", materials: "Yellow Strip",
  incant: "<I>Let all those who oppose the hive feel the wrath of the swarm</I> x3", 
  effect: "Bearer is Stopped. Any player on the bearer’s team may use the bearer as their respawn point as per the normal game rules. Players respawning at the caster do so by announcing 'My life for the swarm.' Players on the bearer’s team may treat the bearer as a base for the purposes of the effects which require the teammate to go to their base", 
  limitations: "Players can not respawn at the bearer if there are living enemy players or a game objective within 20’ of the bearer",
  notes: "",
  text: ""
};
const Lost = {
  purchased: 0,
  level: 5,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Life",
  pointTotalId: "Lostval",
  name: "Lost", type: "Verbal",  freq: "1/Life",
  school: "Command", range: "20", materials: "",
  incant: "<I>I command thee to be lost</I> x3", 
  effect: "Player becomes Insubstantial and must move directly to their base. Player must end their Insubstantial State as per normal once they reach their base", 
  limitations: "",
  notes: "If the Insubstantial State is ended before reaching the base, the rest of the effect is ended as well. If Lost is cast on self, the caster may end this Insubstantial state at any time by using the exit incantation for Insubstantial",
  text: ""
};
const SongofSurvival = {
  purchased: 0,
  level: 5,
  cost: 1,
  max: 1, charge: "", use: 1, per: "Unlimited",
  pointTotalId: "SongofSurvivalval",
  name: "Song of Survival", type: "Enchantment",  freq: "Unlimited",
  school: "Protection", range: "Self", materials: "",
  incant: "<I>I sing of my numerous close calls</I>", 
  effect: "When the bearer would otherwise die, they instead declare “Song of Survival” and become Insubstantial. The caster treats the triggering event as though it had no effect on them other than triggering Song of Survival. Song of Survival immediately ends and bearer must stop their Chant. Bearer may choose to return directly to their base immediately after Song of Survival activates. Bearer must Chant “Song of Survival” or sing a song regarding their many escapes from certain doom. Singing in place of the normal Chant is still a Chant and must follow all Chant rules.", 
  limitations: "Once Song of Survival has activated to protect the bearer it may not be cast nor activated again on the same life.",
  notes: "Bearer may end the Insubstantial state caused by Song of Survival at any time with the standard Incantation. If the Insubstantial State is ended by any means before reaching the base, the rest of the effect is ended as well.",
  text: ""
};

/*__________________________________________*/

const CombatCaster = {
  purchased: 0,
  level: 6,
  cost: 2,
  max: 1, charge: "", use: -1, per: "",
  pointTotalId: "CombatCasterval",
  name: "Combat Caster", type: "Archetype",  freq: "",
  school: "Neutral", range: "", materials: "",
  incant: "", 
  effect: "Does not require an empty hand to cast abilities", 
  limitations: "",
  notes: "",
  text: ""
};
const Dervish = {
  purchased: 0,
  level: 6,
  cost: 2,
  max: 1, charge: "", use: -1, per: "",
  pointTotalId: "Dervishval",
  name: "Dervish", type: "Archetype",  freq: "",
  school: "Neutral", range: "", materials: "",
  incant: "", 
  effect: "Equipment costs are doubled. Each Verbal purchased gives double the uses. Example: 1/Life Charge x3 becomes 2/life Charge x3, 2/life becomes 4/life, 1/Refresh becomes 2/Refresh", 
  limitations: "",
  notes: "",
  text: ""
};
const Armor1Point2 = {
  purchased: 0,
  level: 6,
  cost: 2,
  max: 1, charge: "", use: -1, per: "",
  pointTotalId: "Armor1Point2val",
  name: "Armor 1 Point", type: "Neutral",  freq: "",
  school: "", range: "", materials: "",
  incant: "", 
  effect: "Your class maximum armor limit increases one additional point", 
  limitations: "",
  notes: "",
  text: ""
};
const Legend = {
  purchased: 0,
  level: 6,
  cost: 1,
  max: 1, charge: "", use: -1, per: "",
  pointTotalId: "Legendval",
  name: "Legend", type: "Archetype",  freq: "",
  school: "Neutral", range: "", materials: "",
  incant: "", 
  effect: "Each Extension purchased gives double the uses. Example: 1/life becomes 2/life. Swift may not be purchased or used", 
  limitations: "",
  notes: "",
  text: ""
};
const SilverTongue = {
  purchased: 0,
  level: 6,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Refresh",
  pointTotalId: "SilverTongueval",
  name: "Silver Tongue", type: "Enchantment",  freq: "1/Ref",
  school: "Sorcery", range: "Touch", materials: "Yellow Strip",
  incant: "<I>My power quickens thine</I> x3", 
  effect: "Bearer gains Swift 1/refresh Charge x3 (m). Other sources of Swift may not be utilized while Silver Tongue is worn", 
  limitations: "",
  notes: "Does not use up any purchased instances of Swift",
  text: ""
};
const SongofInterference = {
  purchased: 0,
  level: 6,
  cost: 1,
  max: 1, charge: "Charge x5", use: 1, per: "Refresh",
  pointTotalId: "SongofInterferenceval",
  name: "Song of Interference", type: "Enchantment",  freq: "1/Ref Chg x5",
  school: "Protection", range: "Self", materials: "",
  incant: "<I>I sing a song of dark magic thwarted</I>", 
  effect: "As per Enlightened Soul. Bearer must Chant 'Song of Interference' or sing a song about defeating/resisting the forces of magic. Singing in place of the normal Chant is still a Chant and must follow all Chant rules", 
  limitations: "",
  notes: "",
  text: ""
};
const Stun = {
  purchased: 0,
  level: 6,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Refresh",
  pointTotalId: "Stunval",
  name: "Stun", type: "Verbal",  freq: "1/Ref",
  school: "Sorcery", range: "20", materials: "",
  incant: "<I>By the power of white light I stun thee</I> x3", 
  effect: "Target player is Stunned for 30 seconds", 
  limitations: "",
  notes: "",
  text: ""
};

const abilityCount = 43;
const abilities = [Dervish, //0
  Confidence, //1
  WeaponShort, //2
  Experienced, //3
  Insult, //4
  Release, //5
  Shove, //6
  SongofDetermination, //7
  Empower, //8
  Armor1Point, //9
  GreaterRelease, //10
  Innate, //11
  Mend, //12
  SongofBattle, //13
  SongofVisit, //14
  Awe, //15
  BattlefieldTriage, //16
  BreakConcentration, //17
  Extension, //18
  ShieldSmall, //19
  SongofFreedom, //20
  Amplification, //21
  LongWeapon, //22
  Restoration, //23
  SleightofMind, //24
  SongofDeflection, //25
  SongofPower, //26
  SuppressAura, //27
  Swift, //28
  Terror, //29
  Agoraphobia, //30
  Ambulant, //31
  Discordia, //32
  ShieldMedium, //33
  HeartoftheSwarm, //34
  Lost, //35
  SongofSurvival, //36
  CombatCaster, //37
  Stun, //38
  Armor1Point2, //39
  Legend, //40
  SilverTongue, //41
  SongofInterference //42
  ];

function getAbilities(){return abilities}

function saveList(){
  let textToSave = "";
    if(document.title == "Bard Spellbook"){
      textToSave = "Bard Level " + document.getElementById("reqLevel").value + document.getElementById("ltp").innerText + " \n   Level 1 \n" + document.getElementById("lvl1List").innerText + "\n   Level 2 \n" + document.getElementById("lvl2List").innerText + "\n   Level 3 \n" + document.getElementById("lvl3List").innerText + "\n   Level 4 \n" + document.getElementById("lvl4List").innerText + "\n   Level 5 \n" + document.getElementById("lvl5List").innerText + "\n   Level 6 \n" + document.getElementById("lvl6List").innerText;
    }
    else{
      textToSave = document.title + " \n(Bard Level " + document.getElementById("reqLevel").value + ")" + document.getElementById("ltp").innerText + " \n   Level 1 \n" + document.getElementById("lvl1List").innerText + "\n   Level 2 \n" + document.getElementById("lvl2List").innerText + "\n   Level 3 \n" + document.getElementById("lvl3List").innerText + "\n   Level 4 \n" + document.getElementById("lvl4List").innerText + "\n   Level 5 \n" + document.getElementById("lvl5List").innerText + "\n   Level 6 \n" + document.getElementById("lvl6List").innerText;
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