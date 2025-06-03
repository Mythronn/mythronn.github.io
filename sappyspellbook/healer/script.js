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
      abilities[5].selectedAbility1 = exps[1].replace(/_/g, " ");
      abilities[5].selectedAbility2 = exps[2].replace(/_/g, " ");
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
  s += "-" + (abilities[5].selectedAbility1).replace(/ /g, "_") + "-" + (abilities[5].selectedAbility2).replace(/ /g, "_") + "-" + (document.title).replace(/ /g, "_") + "-" + chk;
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
        if(abilities[k].type == "Meta-Magic"){
          levelList[i] = levelList[i] + ": " + abilities[k].use * abilities[k].purchased + "/" + abilities[k].per + " " + abilities[k].charge;
        }
        if(abilities[k].type == "Verbal" && (abilities[k].school == "Protection") && abilities[2].purchased == 1){
          levelList[i] = levelList[i] + ": " + abilities[k].use * abilities[k].purchased * 2 + "/" + abilities[k].per + " " + abilities[k].charge;
        }
        if(abilities[k].type == "Verbal" && !((abilities[k].school == "Protection") && abilities[2].purchased == 1)){
          levelList[i] = levelList[i] + ": " + abilities[k].use * abilities[k].purchased + "/" + abilities[k].per + " " + abilities[k].charge;
        }
        if(abilities[k].type == "Enchantment" && (abilities[k].school == "Protection") && abilities[2].purchased == 1){
          levelList[i] = levelList[i] + ": " + abilities[k].use * abilities[k].purchased * 2 + "/" + abilities[k].per + " " + abilities[k].charge;
        }        
        if(abilities[k].type == "Enchantment" && !((abilities[k].school == "Protection") && abilities[2].purchased == 1)){
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
  if(abilities[0].purchased > 0){
    processPriestMinus();
    abilities[0].purchased = 0;
  }
  
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
  processNecromancerMinus();
  processWarderMinus();
  updatePointsAvailable();
}
/*##################################*/
function updateExperienced(){
  abilities[5].selectedAbility1 = document.getElementById("exp1").value;
  abilities[5].selectedAbility2 = document.getElementById("exp2").value;
  
  if(abilities[5].purchased == 0){
  document.getElementById("experiencedtext").innerHTML = "<div class=\"popup\" ><span class=\"popuptext\" id=\"ExperiencedPopup\"></span></div>Experienced";
    document.getElementById("exp1").disabled = false;
    document.getElementById("exp2").disabled = true;
    document.getElementById("exp1").value = "Select Spell";
    abilities[5].selectedAbility1 = "Select Spell";    
  }
  
  if(abilities[5].purchased == 1){    
  document.getElementById("experiencedtext").innerHTML = "<div class=\"popup\" ><span class=\"popuptext\" id=\"ExperiencedPopup\"></span></div>Experienced<BR>[" + abilities[5].selectedAbility1 + "]";
    document.getElementById("exp1").disabled = true;
    document.getElementById("exp2").disabled = false;
    document.getElementById("exp2").value = "Select Spell";
    abilities[5].selectedAbility2 = "Select Spell";
  }  
  if(abilities[5].purchased == 2){    
  document.getElementById("experiencedtext").innerHTML = "<div class=\"popup\" ><span class=\"popuptext\" id=\"ExperiencedPopup\"></span></div>Experienced<BR>[" + abilities[5].selectedAbility1 + "]<BR>[" + abilities[5].selectedAbility2 + "]";
    document.getElementById("exp1").disabled = true;
    document.getElementById("exp2").disabled = true;
  }
  processExpChange(0);
  updateTable();
}
/*##################################*/
function processExpChange(fromUser){  
    if(abilities[5].purchased == 0){
      if(document.getElementById("exp1").value != "Select Spell"){
        document.getElementById("Experiencedplus").disabled = false;
      }
      else{document.getElementById("Experiencedplus").disabled = true}
    }
    if(abilities[5].purchased == 1){
      if(document.getElementById("exp2").value != "Select Spell"){
        document.getElementById("Experiencedplus").disabled = false;
      }
      else{document.getElementById("Experiencedplus").disabled = true}
    }
    if(abilities[5].purchased == 2){
      document.getElementById("Experiencedplus").disabled = false;
    }
    if(abilities[5].selectedAbility1 == "Banish" || abilities[5].selectedAbility2 == "Banish"){
      abilities[47].charge = "Charge x5";
      abilities[47].freq = "1/Life CHARGE x5";
      updateAbilityText(47); 
    }
    else{
      abilities[47].charge = "";
      abilities[47].freq = "1/Life";
      updateAbilityText(47);
    }
    if(abilities[5].selectedAbility1 == "Dispel Magic" || abilities[5].selectedAbility2 == "Dispel Magic"){
      abilities[34].charge = "Charge x10";      
      abilities[34].freq = "1/Ref CHARGE x10";
      updateAbilityText(34); 
    }
    else{
      abilities[34].charge = "";
      abilities[34].freq = "1/Ref";
      updateAbilityText(34);
    }
    if(abilities[5].selectedAbility1 == "Greater Heal" || abilities[5].selectedAbility2 == "Greater Heal"){
      abilities[29].charge = "Charge x5";
      abilities[29].freq = "1/Life CHARGE x5";
      updateAbilityText(29); 
    }
    else{
      abilities[29].charge = "";
      abilities[29].freq = "1/Life";
      updateAbilityText(29);
    }
    if(abilities[5].selectedAbility1 == "Greater Release" || abilities[5].selectedAbility2 == "Greater Release"){
      abilities[12].charge = "Charge x10";
      abilities[12].freq = "1/Ref CHARGE x10";
      updateAbilityText(12);
    }
    else{
      abilities[12].charge = "";
      abilities[12].freq = "1/Ref";
      updateAbilityText(12);
    }
    if(abilities[5].selectedAbility1 == "Mend" || abilities[5].selectedAbility2 == "Mend"){
      abilities[24].charge = "Charge x5";
      abilities[24].freq = "1/Life CHARGE x5";
      updateAbilityText(24);
    }
    else{
      abilities[24].charge = "";
      abilities[24].freq = "1/Life";
      updateAbilityText(24);
    }
    if(abilities[5].selectedAbility1 == "Shove" || abilities[5].selectedAbility2 == "Shove"){
      abilities[16].charge = "Charge x5";
      abilities[16].freq = "1/Life CHARGE x5";
      updateAbilityText(16);
    }
    else{
      abilities[16].charge = "";
      abilities[16].freq = "1/Life";
      updateAbilityText(16);
    }
    if(abilities[5].selectedAbility1 == "Teleport" || abilities[5].selectedAbility2 == "Teleport"){
      abilities[33].charge = "Charge x5";
      abilities[33].freq = "1/Life CHARGE x5";
      updateAbilityText(33);
    }
    else{
      abilities[33].charge = "";
      abilities[33].freq = "1/Life";
      updateAbilityText(33);
    }
    if((abilities[5].selectedAbility1 == "Raise Dead" || abilities[5].selectedAbility2 == "Raise Dead") && abilities[44].purchased == 0){
      abilities[26].charge = "Charge x5";
      abilities[26].freq = "1/Life CHARGE x5";
      updateAbilityText(26);
    }
    else{
      if(abilities[44].purchased == 0)
        {
          abilities[26].charge = "";
          abilities[26].freq = "1/Life";
          updateAbilityText(26);
        }      
    }
    //createURL(); OLD
    if(fromUser == 1){       
      pointPlus(5);
      createURL(); //new//new checking to see if this fixes the reload error on iPhones
    }
 }
/*##################################*/
function necromancerCheck(index){ //Necro
  var a = index;
  if(abilities[44].purchased > 0){
    if(abilities[a].school == "Protection" ){
      
       return false;
       }
    else{
      return true;
    }
  }  
  if(abilities[a].name == "Necromancer"){
    for(let i = 0; i < abilityCount; i++){
      if((abilities[i].school == "Protection" ) && abilities[i].purchased > 0){
        
        return false; 
        }
    }    
  }
  else{
    return true;
  }
}
/*##################################*/
function warderCheck(index){ //warder
  var a = index;
  if(abilities[2].purchased > 0){
    if(abilities[a].school == "Command" || abilities[a].school == "Subdual"|| abilities[a].school == "Death"){
      
       return false;
       }
    else{
      return true;
    }
  }  
  if(abilities[a].name == "Warder"){
    for(let i = 0; i < abilityCount; i++){
      if((abilities[i].school == "Command" || abilities[i].school == "Subdual"|| abilities[i].school == "Death") && abilities[i].purchased > 0){
        
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
  if(necromancerCheck(a) == false){
    showToast("Necromancers may not purchase any abilities from the Protection School.");
    return false;
  }
  if(warderCheck(a) == false){
    showToast("Warders may not purchase any abilities from the Death, Command, or Subdual Schools.");
    return false;
  }
  
  
  if(checkPointsAvailable(a)){
    if(abilities[a].name == "Priest"){
      processPriestPlus();
    }
    if(abilities[a].name == "Necromancer"){
      processNecromancerPlus();
    }
    if(abilities[a].name == "Warder"){
      processWarderPlus();
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
  /*I dont think we need this 
  if(!checkPriestMinus(a)){
    showToast("You don't have the points to remove Priest. Heal too expensive.");
    return 0;
  }*/
  if(abilities[a].name == "Priest"){
    processPriestMinus();
  }
  if(abilities[a].name == "Necromancer"){
    processNecromancerMinus();
  } 
  if(abilities[a].name == "Warder"){
    processWarderMinus();
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
  
    temp1 = abilities[5].selectedAbility1;
    temp2 = abilities[5].selectedAbility2;
  
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
    abilities[5].selectedAbility1 = temp1;
    abilities[5].selectedAbility2 = temp2;
    document.getElementById("exp1").value = temp1;
    document.getElementById("exp2").value = temp2;
  
  updateExperienced();  
  updatePointsAvailable();
}

/*##################################*/
function processNecromancerPlus(){
  abilities[26].charge = "Charge x3";
  abilities[40].charge = "Charge x3";
  abilities[41].charge = "Charge x3";
  abilities[26].freq = "1/Life Chg x3";
  abilities[40].freq = "1/Ref Chg x3";
  abilities[41].freq = "1/Life Chg x3";
  updateAbilityText(26);
  updateAbilityText(40);
  updateAbilityText(41);  
}
/*##################################*/
function processNecromancerMinus(){
  abilities[26].charge = "";
  abilities[40].charge = "";
  abilities[41].charge = "";
  abilities[26].freq = "1/Life";
  abilities[40].freq = "1/Ref";
  abilities[41].freq = "1/Life";
  updateAbilityText(26);
  updateAbilityText(40);
  updateAbilityText(41);
}

/*##################################*/
function processPriestPlus(){
  abilities[7].cost = 0;
  for(let i = 0; i < abilityCount; i++){
    if(abilities[i].type == "Meta-Magic"){
      abilities[i].freq = "1/Life CHG x3";
      abilities[i].use = 1;
      abilities[i].per = "Life";
      abilities[i].charge = "Charge x3";
      updateAbilityText(i);
    }
  }
  updateTable();
}
/*##################################*/
function processPriestMinus(){
  abilities[7].cost = 1;
  for(let i = 0; i < abilityCount; i++){
    if(abilities[i].type == "Meta-Magic"){
      abilities[i].freq = "1/Life";
      abilities[i].use = 1;
      abilities[i].per = "Life";
      abilities[i].charge = "";
      updateAbilityText(i);
    }
    if(abilities[i].name == "Ambulant"){
      abilities[i].freq = "1/Ref";
      abilities[i].per = "Refresh";
      updateAbilityText(i);
    }
  }
}
/*##################################*/
function processWarderPlus(){
  abilities[1].freq = "2/Life";
  abilities[6].freq = "2/Ref";
  abilities[9].freq = "2/Life";
  abilities[18].freq = "2/Ref";
  abilities[22].freq = "2/Ref";
  abilities[27].freq = "2/Ref";
  abilities[28].freq = "2/Ref Chg x10";
  abilities[30].freq = "4/Ref";
  abilities[31].freq = "2/Ref";
  abilities[37].freq = "2/Ref";
  abilities[38].freq = "2/Ref";
  abilities[42].freq = "2/Ref";
  abilities[48].freq = "2/Ref";
  updateAbilityText(1);
  updateAbilityText(6);
  updateAbilityText(9);
  updateAbilityText(18);
  updateAbilityText(22);
  updateAbilityText(27);
  updateAbilityText(28);
  updateAbilityText(30);
  updateAbilityText(31);
  updateAbilityText(37);
  updateAbilityText(38);
  updateAbilityText(42);
  updateAbilityText(48);
}
/*##################################*/
function processWarderMinus(){
  abilities[1].freq = "1/Life";
  abilities[6].freq = "1/Ref";
  abilities[9].freq = "1/Life";
  abilities[18].freq = "1/Ref";
  abilities[22].freq = "1/Ref";
  abilities[27].freq = "1/Ref";
  abilities[28].freq = "1/Ref Chg x10";
  abilities[30].freq = "2/Ref";
  abilities[31].freq = "1/Ref";
  abilities[37].freq = "1/Ref";
  abilities[38].freq = "1/Ref";
  abilities[42].freq = "1/Ref";
  abilities[48].freq = "1/Ref";
  updateAbilityText(1);
  updateAbilityText(6);
  updateAbilityText(9);
  updateAbilityText(18);
  updateAbilityText(22);
  updateAbilityText(27);
  updateAbilityText(28);
  updateAbilityText(30);
  updateAbilityText(31);
  updateAbilityText(37);
  updateAbilityText(38);
  updateAbilityText(42);
  updateAbilityText(48);
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

const Banish = {
  purchased: 0, 
  level: 1,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Life",
  pointTotalId: "Banishval",
  name: "Banish", type: "Verbal",  freq: "1/Life",
  school: "Spirit", range: "20", materials: "",
  incant: "<I>The Spirits banish thee from this place</I>  x3", 
  effect: "Target Insubstantial player must return to their base where their Insubstantial State immediately ends", 
  limitations: "",
  notes: "The target's Insubstantial State is replaced with a new insubstantial state from Banish. If the Insubstantial State is ended before reaching the base, the rest of the effect is ended as well. If Banish is cast on self, the caster may end this Insubstantial state at any time by using the exit incantation for Insubstantial.",
  text: ""
};
const BlessingAgainstWounds = {
  purchased: 0,
  level: 1,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Life",
  pointTotalId: "BlessingAgainstWoundsval",
  name: "Blessing Against Wounds", type: "Enchantment",  freq: "1/Life",
  school: "Protection", range: "Other", materials: "White Strip",
  incant: "<I>I enchant thee against wounds</I> x3", 
  effect: "Resistant to Wounds. Does not count towards a players Enchantment limit", 
  limitations: "May not be worn with any other Enchantments from the Protection School unless the other Enchantment is (ex)",
  notes: "",
  text: ""
};
const Cancel = {
  purchased: 0,
  level: 1,
  cost: 0,
  max: 1, charge: "", use: -1, per: "",
  pointTotalId: "Cancelval",
  name: "Cancel", type: "Neutral",  freq: "Unlimited",
  school: "Neutral", range: "Touch", materials: "",
  incant: "<I>My work shall be undone</I> x3", 
  effect: "Remove an Enchantment cast by the caster", 
  limitations: "",
  notes: "",
  text: ""
};
const ShieldSmall = {
  purchased: 0,
  level: 1,
  cost: 2,
  max: 1, charge: "", use: -1, per: "",
  pointTotalId: "ShieldSmallval",
  name: "Small Shield", type: "Neutral",  freq: "",
  school: "", range: "", materials: "",
  incant: "", 
  effect: "May wield a small shield", 
  limitations: "",
  notes: "",
  text: ""
};
const WeaponShort = {
  purchased: 0,
  level: 1,
  cost: 3,
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
const Harden = {
  purchased: 0,
  level: 1,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Refresh",
  pointTotalId: "Hardenval",
  name: "Harden", type: "Enchantment",  freq: "1/Ref",
  school: "Protection", range: "Other", materials: "White Strip",
  incant: "<I>I enchant thee with Harden</I> x3", 
  effect: "Bearer's wielded weapons or shield may only be destroyed or damaged by Magic Balls/Verbals which destroy objects e.g. Fireball or Pyrotechnics", 
  limitations: "Will only affect either the weapons or the shield of the bearer, not both",
  notes: "",
  text: ""
};
const Heal = {
  purchased: 0,
  level: 1,
  cost: 1,
  max: 1, charge: "", use: 1, per: "Unlimited",
  pointTotalId: "Healval",
  name: "Heal", type: "Verbal",  freq: "Unlimited",
  school: "Spirit", range: "Touch", materials: "",
  incant: "<I>The white light of healing hath healed thee</I> x5", 
  effect: "Target player heals a Wound", 
  limitations: "",
  notes: "",
  text: ""
};
const Release = {
  purchased: 0,
  level: 1,
  cost: 1,
  max: 31, charge: "Charge x3", use: 2, per: "Life",
  pointTotalId: "Releaseval",
  name: "Release", type: "Verbal",  freq: "2/Life Chg x3",
  school: "Sorcery", range: "Touch", materials: "",
  incant: "<I>From thy bindings thou art released</I> x3", 
  effect: "A single ongoing effect or State is removed from the target. Casters choice", 
  limitations: "Cannot remove Cursed. When used to end a State or Ongoing Effect imposed by an ability with multiple effects, all other States and Ongoing Effects from the same source are also ended",
  notes: "",
  text: ""
};

/*__________________________________________*/

const AdaptiveBlessing = {
  purchased: 0,
  level: 2,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Life",
  pointTotalId: "AdaptiveBlessingval",
  name: "Adaptive Blessing", type: "Enchantment",  freq: "1/Life",
  school: "Protection", range: "Other", materials: "White Strip",
  incant: "<I>I enchant thee with this blessing</I> x3", 
  effect: "Bearer becomes Resistant to one of the following Schools: Death, Flame, Subdual, Command, Sorcery. School is chosen at the time of casting. Does not count towards a players Enchantment limit.", 
  limitations: "May not be worn with any other Enchantments from the Protection School unless the other Enchantment is (ex)",
  notes: "",
  text: ""
};
const Entangle = {
  purchased: 0,
  level: 2,
  cost: 1,
  max: 4, charge: "", use: 2, per: "Ball",
  pointTotalId: "Entangleval",
  name: "Entangle", type: "Magic Ball",  freq: "2 Balls/Unlimited",
  school: "Subdual", range: "Ball", materials: "Brown Magic Ball",
  incant: "<I>The strength of earth is mine to evoke</I> x3", 
  effect: "Target is Stopped for 60 seconds. Engulfing", 
  limitations: "",
  notes: "",
  text: ""
};
const WeaponHinged = {
  purchased: 0,
  level: 2,
  cost: 3,
  max: 1, charge: "", use: -1, per: "",
  pointTotalId: "WeaponHingedval",
  name: "Weapon Hinged", type: "Neutral",  freq: "",
  school: "", range: "", materials: "",
  incant: "", 
  effect: "May wield one hinged weapon at a time for each instance purchased (but may carry extras)", 
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
  effect: "All ongoing effects and States are removed from the target. The caster may choose to leave some States or effects in place", 
  limitations: "",
  notes: "Greater Release may target Dead players. When used to end a State or Ongoing Effect imposed by an ability with multiple effects, all other States and Ongoing Effects from the same source are also ended",
  text: ""
};
const HoldPerson = {
  purchased: 0,
  level: 2,
  cost: 1,
  max: 31, charge: "Charge x3", use: 1, per: "Life",
  pointTotalId: "HoldPersonval",
  name: "Hold Person", type: "Verbal",  freq: "1/Life Chg x3",
  school: "Command", range: "20", materials: "",
  incant: "<I>I command thee to stop</I> x3", 
  effect: "Target player becomes Stopped for 30 seconds", 
  limitations: "",
  notes: "",
  text: ""
};
const Innate = {
  purchased: 0,
  level: 2,
  cost: 2,
  max: 2, charge: "", use: 1, per: "Life",
  pointTotalId: "Innateval",
  name: "Innate", type: "Meta-Magic",  freq: "1/Life",
  school: "Neutral", range: "", materials: "",
  incant: "<I>Innate</I>", 
  effect: "May be used to instantly Charge a single ability by stating its name.", 
  limitations: "",
  notes: "",
  text: ""
};
const SeverSpirit = {
  purchased: 0,
  level: 2,
  cost: 1,
  max: 31, charge: "Charge x3", use: 1, per: "Life",
  pointTotalId: "SeverSpiritval",
  name: "Sever Spirit", type: "Verbal",  freq: "1/Life Chg x3",
  school: "Spirit", range: "20", materials: "",
  incant: "<I>The spirits lay a curse on thee.</I> x3", 
  effect: "May only target dead players. Player is Cursed. Any Enchantments on the player are removed", 
  limitations: "",
  notes: "Will always remove enchantments if successfully cast on a valid target, regardless of the player’s Traits, States, Immunities, Ongoing Effects, or Enchantments",
  text: ""
};
const Shove = {
  purchased: 0,
  level: 2,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Life",
  pointTotalId: "Shoveval",
  name: "Shove", type: "Verbal",  freq: "1/Life",
  school: "Sorcery", range: "20", materials: "",
  incant: "<I>My power shoves thee</I> x3", 
  effect: "Target player is moved back 20' in a straight line away from the caster. Works on Stopped players. If the caster is the target, the caster may choose the direction they move.", 
  limitations: "",
  notes: "",
  text: ""
};
const SummonDead = {
  purchased: 0,
  level: 2,
  cost: 1,
  max: 31, charge: "Charge x3", use: 1, per: "Life",
  pointTotalId: "SummonDeadval",
  name: "Summon Dead", type: "Verbal",  freq: "1/Life Chg x3",
  school: "Spirit", range: "50", materials: "",
  incant: "<I>I summon thy corpse</I> x5", 
  effect: "Target willing dead player must go directly to the caster. Upon reaching the caster, Summon Dead immediately ends. Wherever the player is when Summon Dead ends is treated as where the player died.", 
  limitations: "May be used on a dead player who has not moved more than 5' from where they died or who is at their respawn.",
  notes: "",
  text: ""
};
/*__________________________________________*/
const AdaptiveProtection = {
  purchased: 0,
  level: 3,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Refresh",
  pointTotalId: "AdaptiveProtectionval",
  name: "Adaptive Protection", type: "Enchantment",  freq: "1/Ref",
  school: "Protection", range: "Other", materials: "White Strip",
  incant: "<I>I enchant thee with this protection</I> x3", 
  effect: "Bearer becomes Immune to one of the following Schools: Death, Flame, Subdual, Command, Sorcery. School is chosen at the time of casting", 
  limitations: "",
  notes: "",
  text: ""
};
const AstralIntervention = {
  purchased: 0,
  level: 3,
  cost: 1,
  max: 31, charge: "Charge x3", use: 1, per: "Life",
  pointTotalId: "AstralInterventionval",
  name: "Astral Intervention", type: "Verbal",  freq: "1/Life Chg x3",
  school: "Command", range: "20", materials: "",
  incant: "<I>I command thee to retreat into the aether</I> x3", 
  effect: "Target player becomes Insubstantial for 30 seconds", 
  limitations: "",
  notes: "If cast on self, the caster may end this Insubstantial state at any time by using the exit incantation for Insubstantial",
  text: ""
};
const ShieldMedium = {
  purchased: 0,
  level: 3,
  cost: 2,
  max: 1, charge: "", use: -1, per: "",
  pointTotalId: "ShieldMediumval",
  name: "Medium Shield", type: "Neutral",  freq: "",
  school: "", range: "", materials: "",
  incant: "", 
  effect: "May wield up to a medium shield", 
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
const GreaterHarden = {
  purchased: 0,
  level: 3,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Refresh",
  pointTotalId: "GreaterHardenval",
  name: "Greater Harden", type: "Enchantment",  freq: "1/Ref",
  school: "Protection", range: "Other", materials: "White Strip",
  incant: "<I>I enchant thee with Greater Harden</I> x3", 
  effect: "Shields and weapons wielded by the player are affected as per Harden.", 
  limitations: "",
  notes: "",
  text: ""
};
const Iceball = {
  purchased: 0,
  level: 3,
  cost: 1,
  max: 3, charge: "", use: 1, per: "Ball",
  pointTotalId: "Iceballval",
  name: "Iceball", type: "Magic Ball",  freq: "1 Ball Unlimited",
  school: "Subdual", range: "Ball", materials: "White Magic Ball",
  incant: "<I>The strength of ice is mine to evoke</I> x3", 
  effect: "Target player becomes Frozen for 60 seconds. Engulfing", 
  limitations: "",
  notes: "",
  text: ""
};
const Mend = {
  purchased: 0,
  level: 3,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Life",
  pointTotalId: "Mendval",
  name: "Mend", type: "Verbal",  freq: "1/Life",
  school: "Sorcery", range: "Touch", materials: "",
  incant: "<I>I make this item whole again</I> x5", 
  effect: "Destroyed or damaged item is repaired, or one point of armor in one location is repaired", 
  limitations: "",
  notes: "",
  text: ""
};
const Resurrect = {
  purchased: 0,
  level: 3,
  cost: 1,
  max: 31, charge: "Charge x5", use: 1, per: "Refresh",
  pointTotalId: "Resurrectval",
  name: "Resurrect", type: "Verbal",  freq: "1/Ref Chg x5",
  school: "Spirit", range: "Touch", materials: "",
  incant: "<I>Sword Cut, spear stab, mace smash, arrow jab, <BR>- Let the white light of healing descend on thee <BR>- Let the white light of healing stop thy spilling blood <BR>- Let the white light of healing mend thy bones <BR>- Let the white light of healing close thy wounds. <BR>- Let the white light of healing restore thy vigor. <BR>- The white light of healing hath resurrected thee.</I>", 
  effect: "Target Dead player who has not moved more than 5' from where they died is returned to life. Non-Persistent Enchantments on the player are removed before the player returns to life. Any Wounds on the player are healed.", 
  limitations: "",
  notes: "",
  text: ""
};
const RaiseDead = {
  purchased: 0,
  level: 3,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Life",
  pointTotalId: "RaiseDeadval",
  name: "Raise Dead", type: "Verbal",  freq: "1/Life",
  school: "Death", range: "Other", materials: "",
  incant: "<I>Rise and fight again</I> x5", 
  effect: "Target Dead player who has not moved more than 5' from where they died is returned to life and is Cursed. Target is also Suppressed for 30 seconds. Non-Persistent Enchantments on the player are removed before the player returns to life. Any Wounds on the player are healed.", 
  limitations: "",
  notes: "",
  text: ""
};
/*__________________________________________*/
const BlessingAgainstHarm = {
  purchased: 0,
  level: 4,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Refresh",
  pointTotalId: "BlessingAgainstHarmval",
  name: "Blessing Against Harm", type: "Enchantment",  freq: "1/Ref",
  school: "Protection", range: "Other", materials: "White Strip",
  incant: "<I>I enchant thee against all harm</I> x3", 
  effect: "Resistant to all effects from the next source which would inflict a Wound, Death, State, or other negative effect. Does not trigger against effects cast by the player", 
  limitations: "",
  notes: "",
  text: ""
};
const CircleofProtection = {
  purchased: 0,
  level: 4,
  cost: 1,
  max: 1, charge: "Charge x10", use: 1, per: "Refresh",
  pointTotalId: "CircleofProtectionval",
  name: "Circle of Protection", type: "Verbal",  freq: "1/Ref Chg x10",
  school: "Protection", range: "Self", materials: "",
  incant: "<I>Circle of Protection</I> x3", 
  effect: "The caster and up to five willing players within Touch range of the caster immediately have all States and Ongoing Effects removed and then become Insubstantial. All targets: - May not move from their starting location, and are unaffected by abilities that allow or require the player to move. - May use abilities on players and their carried equipment who became Insubstantial due to the same casting of Circle of Protection as though they were not Insubstantial. - May end this Insubstantial state at any time by using the exit incantation for Insubstantial. The caster may end Circle of Protection for all targets at any time by using the exit incantation for Insubstantial. If the Insubstantial state is ended for a target, the ongoing effects of Circle of Protection no longer apply to that player", 
  limitations: "",
  notes: "If a player is prevented from becoming Insubstantial, they are unaffected by Circle of Protection.",
  text: ""
};
const GreaterHeal = {
  purchased: 0,
  level: 4,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Life",
  pointTotalId: "GreaterHealval",
  name: "Greater Heal", type: "Verbal",  freq: "1/Life",
  school: "Spirit", range: "Touch", materials: "",
  incant: "<I>By the grace of the divine thou art healed</I> x5", 
  effect: "All wounds are healed. Ignores the Cursed State", 
  limitations: "",
  notes: "",
  text: ""
};
const ImbueShield = {
  purchased: 0,
  level: 4,
  cost: 1,
  max: 2, charge: "", use: 2, per: "Refresh",
  pointTotalId: "ImbueShieldval",
  name: "Imbue Shield", type: "Enchantment",  freq: "2/Ref",
  school: "Protection", range: "Other", materials: "White Strip",
  incant: "<I>This shield shall neither bend nor break</I> x3", 
  effect: "Shield wielded by the player cannot be destroyed nor damaged. Engulfing effects hitting the wielded shield are ignored.", 
  limitations: "",
  notes: "",
  text: ""
};
const ProtectionfromProjectiles = {
  purchased: 0,
  level: 4,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Refresh",
  pointTotalId: "ProtectionfromProjectilesval",
  name: "Protection from Projectiles", type: "Enchantment",  freq: "1/Ref",
  school: "Protection", range: "Other", materials: "White Strip",
  incant: "<I>I enchant thee with Protection from Projectiles</I> x3", 
  effect: "Bearer is unaffected by ammunition, thrown javelins, rocks, and thrown weapons. Engulfing effects from those objects, such as Pinning Arrow, do not affect the player", 
  limitations: "",
  notes: "Equipment can still be affected by the above. Does not protect bearer against Magic Balls",
  text: ""
};
const Swift = {
  purchased: 0,
  level: 4,
  cost: 1,
  max: 2, charge: "", use: 1, per: "Life",
  pointTotalId: "Swiftval",
  name: "Swift", type: "Meta-Magic",  freq: "	1/Life",
  school: "Neutral", range: "", materials: "",
  incant: "<I>Swift</I>", 
  effect: "Abilities require only a single iteration of the incantation. For multi-line Incantations use the last line", 
  limitations: ": May only be used on abilities at a range of Touch, Other, or Self, or on Magic Balls. May not be used on the Charge incantation.",
  notes: "",
  text: ""
};
const Teleport = {
  purchased: 0,
  level: 4,
  cost: 1,
  max: 2, charge: "", use: 1, per: "Life",
  pointTotalId: "Teleportval",
  name: "Teleport", type: "Verbal",  freq: "1/Life",
  school: "Sorcery", range: "Touch", materials: "",
  incant: "<I>I travel through the aether</I> x5", 
  effect: "Target willing player becomes Insubstantial and moves directly to a chosen location chosen by the caster at the time of casting. This must be a fixed location (not relative to a player or to a moveable object). Upon arrival, they must immediately end the effect as per Insubstantial", 
  limitations: "",
  notes: "If the player’s Insubstantial state is removed before they have reached their destination, the effects of Teleport end. If Teleport is cast on self, the caster may end this Insubstantial state at any time by using the exit incantation for Insubstantial",
  text: ""
};
const DispelMagic = {
  purchased: 0,
  level: 4,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Refresh",
  pointTotalId: "DispelMagicval",
  name: "Dispel Magic", type: "Verbal",  freq: "1/Ref",
  school: "Sorcery", range: "20", materials: "",
  incant: "<I>By my power I dispel that magic</I> x3", 
  effect: "All Enchantments on target are removed", 
  limitations: "",
  notes: "Will always remove enchantments if successfully cast on a valid target, regardless of the player’s Traits, States, Immunities, Ongoing Effects, or Enchantments (except Sleight of Mind)",
  text: ""
};
/*__________________________________________*/
const Abeyance = {
  purchased: 0,
  level: 5,
  cost: 1,
  max: 2, charge: "", use: 1, per: "Ball",
  pointTotalId: "Abeyanceval",
  name: "Abeyance", type: "Magic Ball",  freq: "1 Ball Unlimited",
  school: "Subdual", range: "Ball", materials: "Green Magic Ball",
  incant: "<I>The strength of aether is mine to evoke</I> x3", 
  effect: "Target is Stunned for 60 seconds. Ignores armor", 
  limitations: "",
  notes: "",
  text: ""
};
const Ambulant = {
  purchased: 0,
  level: 5,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Refresh",
  pointTotalId: "Ambulantval",
  name: "Ambulant", type: "Meta-Magic",  freq: "1/Ref",
  school: "Neutral", range: "", materials: "",
  incant: "<I>Ambulant</I>", 
  effect: "An incantation may be said while moving", 
  limitations: "May not be used on the Charge incantation",
  notes: "Using Ambulant allows both the target indication and Ambulant to be said while moving, but not other Meta-Magics.",
  text: ""
};
const BlessedAura = {
  purchased: 0,
  level: 5,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Refresh",
  pointTotalId: "BlessedAuraval",
  name: "Blessed Aura", type: "Enchantment",  freq: "1/Ref",
  school: "Protection", range: "Other", materials: "White Strip",
  incant: "<I>I enchant thy person, arms, and armor</I> x3", 
  effect: "Resistant to all effects from the next source which would inflict a Wound, Death, State, or negatively affect them or their carried equipment. Does not trigger against effects cast by the player", 
  limitations: "",
  notes: "",
  text: ""
};

const EnlightenedSoul = {
  purchased: 0,
  level: 5,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Refresh",
  pointTotalId: "EnlightenedSoulval",
  name: "Enlightened Soul", type: "Enchantment",  freq: "1/Ref",
  school: "Protection", range: "Other", materials: "White Strip",
  incant: "<I>A distant magic has no hold upon thy now enlightened soul</I> x3", 
  effect: "Player is unaffected by Verbal Magical abilities used at a Range greater than Touch.", 
  limitations: "Affects beneficial as well as harmful Magical abilities.",
  notes: "Does not affect (ex) abilities, abilities with a Range of Touch, or abilities whose Range is greater than Touch but are used at a Range of Touch anyway",
  text: ""
};
const GreaterResurrect = {
  purchased: 0,
  level: 5,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Refresh",
  pointTotalId: "GreaterResurrectval",
  name: "Greater Resurrect", type: "Verbal",  freq: "1/Ref",
  school: "Spirit", range: "Touch", materials: "",
  incant: "<I>By the grace of the divine thou art resurrected</I> x5", 
  effect: "Target Dead player who has not moved more than 5' from where they died is returned to life. Any wounds on the player are healed. Works regardless of any States on the target, and removes Cursed if present.", 
  limitations: "",
  notes: "Enchantments on the player are retained.",
  text: ""
};
const UndeadMinion = {
  purchased: 0,
  level: 5,
  cost: 2,
  max: 31, charge: "", use: 1, per: "Refresh",
  pointTotalId: "UndeadMinionval",
  name: "Undead Minion", type: "Enchantment",  freq: "1/Ref",
  school: "Death", range: "Other", materials: "Yellow Strip",
  incant: "<I>By the power of my will, arise my minion!</I> x5", 
  effect: "Bearer is Cursed and cannot Respawn. While the bearer is enchanted, the caster gains Raise Dead (Unlimited) (m) which can only be cast with the bearer as the target, and ignores the requirement for the bearer to have not moved from where they died. For the duration of the Enchantment, the bearer may treat the caster as a base for the purposes of the effects which require the bearer to go to their base. This enchantment is Persistent, and remains active while the bearer is dead.",
  limitations: "The caster may not have more than three Undead Minion Enchantments.",
  notes: "",
  text: ""
};
const StealLifeEssence = {
  purchased: 0,
  level: 5,
  cost: 1,
  max: 2, charge: "", use: 1, per: "Life",
  pointTotalId: "StealLifeEssenceval",
  name: "Steal Life Essence", type: "Verbal",  freq: "1/Life",
  school: "Death", range: "Touch", materials: "",
  incant: "<I>Steal Life</I>", 
  effect: "Caster may heal a Wound or instantly Charge an ability", 
  limitations: "May only be used on a dead player. That player is Cursed. Does not work on Cursed players. The caster does not gain the effect if the dead player is unaffected",
  notes: "In order to charge an ability, the name of the ability being charged must still be stated immediately after the incantation.",
  text: ""
};

/*__________________________________________*/

const AncestralArmor = {
  purchased: 0,
  level: 6,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Refresh",
  pointTotalId: "AncestralArmorval",
  name: "Ancestral Armor", type: "Enchantment",  freq: "1/Ref",
  school: "Protection", range: "Other", materials: "White Strip",
  incant: "<I>May this armor protect thee from all forms of harm.<BR>- May the flames of the fire not burn thee.<BR>- May the bolts from the heavens not strike thee.<BR>- May the arrows of your enemies not pierce thee.<BR>- May this armor protect thee from all forms of harm.</I>", 
  effect: "The effects of a Magic Ball, projectile weapon, or melee weapon which just struck armor worn by the player are ignored, even if the object would not otherwise affect the armor. The armor loses one point of value in the location struck. This effect will not trigger if the armor has no points left in the location struck. Ancestral Armor is not expended after use and will continue to provide protection until removed with Dispel Magic or similar abilities", 
  limitations: "Phase Arrow and Phase Bolt interact with armor worn by the bearer as though Ancestral Armor was not present",
  notes: "Engulfing Effects that do not strike the bearer's armor and abilities that ignore armor entirely do not trigger Ancestral Armor",
  text: ""
};
const MassHealing = {
  purchased: 0,
  level: 6,
  cost: 1,
  max: 1, charge: "", use: 1, per: "Refresh",
  pointTotalId: "MassHealingval",
  name: "Mass Healing", type: "Enchantment",  freq: "1/Ref",
  school: "Spirit", range: "Self", materials: "Five Yellow Strips",
  incant: "<I>Let the powers of healing flow through me</I> x3", 
  effect: "Caster may Heal (m) a player at Touch stating “I grant thee healing” and removing an enchantment strip. Enchantment is removed when the last strip is removed.", 
  limitations: "",
  notes: "The effect is not an incantation, and so is not stopped by suppression, and may be used while moving, etc.",
  text: ""
};
const Necromancer = {
  purchased: 0,
  level: 6,
  cost: 1,
  max: 1, charge: "", use: -1, per: "",
  pointTotalId: "Necromancerval",
  name: "Necromancer", type: "Archetype",  freq: "",
  school: "Neutral", range: "", materials: "",
  incant: "", 
  effect: "All abilities purchased in the Death School become Charge x3. You may have a combined total of five Undead Minion Enchantments. ", 
  limitations: "You may not purchase any abilities from the Protection School.",
  notes: "",
  text: ""
};
const Persistent = {
  purchased: 0,
  level: 6,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Life",
  pointTotalId: "Persistentval",
  name: "Persistent", type: "Meta-Magic",  freq: "1/Life",
  school: "Neutral", range: "", materials: "",
  incant: "<I>Persistent</I>", 
  effect: "Enchantment returns with the user after respawning until it has been otherwise removed", 
  limitations: "",
  notes: " Persistent is a Meta-Magic; it must be used before another incantation, and affects the next spell cast by that same caster. Persistent does not retroactively make an enchantment already on a player Persistent. Persistent enchantments with limited uses (Mass Healing, Corrosive Mist, etc.) will retain the number of uses they had remaining. Persistent Magic Armor behaves like normal armor: it will be repaired upon Respawning or retain any prior damage if the bearer is returned to life by some other method, such as Resurrect.",
  text: ""
};
const PhoenixTears = {
  purchased: 0,
  level: 6,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Refresh",
  pointTotalId: "PhoenixTearsval",
  name: "Phoenix Tears", type: "Enchantment",  freq: "1/Ref",
  school: "Spirit", range: "Other", materials: "Two White Strips",
  incant: "<I>May the tears of the phoenix wash over thee</I> x3", 
  effect: "Enchanted player does not die as normal. When the player would otherwise die they instead remove a strip and become Frozen for 30 seconds. When the Frozen State is ended, the bearer is affected as follows: <BR>1. All Wounds are removed. <BR>2. All States that would be removed by Death or Respawning are removed. <BR>3. All ongoing effects with a timer expire. <BR>4. All of their carried equipment is fully repaired. <BR>5. All non-persistent enchantments, other than Phoenix Tears, are removed. Additionally Phoenix Tears allows you to wear an extra Enchantment from the Protection School. This extra enchantment is considered Persistent as long as Phoenix Tears is present. The additional Enchantment is not removed once Phoenix Tears is removed. ", 
  limitations: "",
  notes: "Phoenix Tears is removed when the last strip is removed. If Phoenix Tears is removed, the bearer chooses which (m) Enchantments to lose to meet their new Enchantment limit, if necessary.",
  text: ""
};
const Priest = {
  purchased: 0,
  level: 6,
  cost: 1,
  max: 1, charge: "", use: -1, per: "",
  pointTotalId: "Priestval",
  name: "Priest", type: "Archetype",  freq: "",
  school: "Neutral", range: "", materials: "",
  incant: "", 
  effect: "Meta-magic may only be used on Spirit abilities. All Meta-Magics purchased become 1/Life Charge x3. Heal costs zero points", 
  limitations: "",
  notes: "",
  text: ""
};
const ProtectionfromMagic = {
  purchased: 0,
  level: 6,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Refresh",
  pointTotalId: "ProtectionfromMagicval",
  name: "Protection from Magic", type: "Enchantment",  freq: "1/Ref",
  school: "Protection", range: "Other", materials: "White Strip",
  incant: "<I>I enchant thee with protection from magic</I> x3", 
  effect: "Bearer is unaffected by Magical abilities from any school. Upon death the player is Cursed.", 
  limitations: "",
  notes: "This effect does not interact with other Enchantments worn by the bearer.",
  text: ""
};
const Stun = {
  purchased: 0,
  level: 6,
  cost: 1,
  max: 4, charge: "", use: 1, per: "Refresh",
  pointTotalId: "Stunval",
  name: "Stun", type: "Verbal",  freq: "1/Ref",
  school: "Sorcery", range: "20", materials: "",
  incant: "<I>By the power of white light I stun thee</I> x3", 
  effect: "Target player is Stunned for 30 seconds", 
  limitations: "",
  notes: "",
  text: ""
};
const Warder = {
  purchased: 0,
  level: 6,
  cost: 2,
  max: 1, charge: "", use: -1, per: "",
  pointTotalId: "Warderval",
  name: "Warder", type: "Archetype",  freq: "",
  school: "Neutral", range: "", materials: "",
  incant: "", 
  effect: "All abilities purchased in the Protection School give double the uses. Example: 1/Life Charge x3 becomes 2/life Charge x3, 2/life becomes 4/life", 
  limitations: "Player may not purchase any abilities from the Death, Command, or Subdual Schools.",
  notes: "",
  text: ""
};

const abilityCount = 50;
const abilities = [Priest,	//0
  BlessingAgainstWounds,	//1
  Warder,	//2
  ShieldSmall,	//3
  WeaponShort,	//4
  Experienced,	//5
  Harden,	//6
  Heal,	//7
  Release,	//8
  AdaptiveBlessing,	//9
  Entangle,	//10
  WeaponHinged,	//11
  GreaterRelease,	//12
  HoldPerson,	//13
  Innate,	//14
  SeverSpirit,	//15
  Shove,	//16
  SummonDead,	//17
  AdaptiveProtection,	//18
  AstralIntervention,	//19
  ShieldMedium,	//20
  Extension,	//21
  GreaterHarden,	//22
  Iceball,	//23
  Mend,	//24
  Resurrect,	//25
  RaiseDead,	//26
  BlessingAgainstHarm,	//27
  CircleofProtection,	//28
  GreaterHeal,	//29
  ImbueShield,	//30
  ProtectionfromProjectiles,	//31
  Swift,	//32
  Teleport,	//33
  DispelMagic,	//34
  Abeyance,	//35
  Ambulant,	//36
  BlessedAura,	//37  
  EnlightenedSoul,	//38
  GreaterResurrect,	//39
  UndeadMinion,	//40
  StealLifeEssence,	//41
  AncestralArmor,	//42
  MassHealing,	//43
  Necromancer,	//44
  Persistent,	//45
  PhoenixTears,	//46
  Banish,	//47
  ProtectionfromMagic,	//48
  Stun	//49  
];

function getAbilities(){return abilities}

function saveList(){
  let textToSave = "";
    if(document.title == "Healer Spellbook"){
      textToSave = "Healer Level " + document.getElementById("reqLevel").value + document.getElementById("ltp").innerText + " \n   Level 1 \n" + document.getElementById("lvl1List").innerText + "\n   Level 2 \n" + document.getElementById("lvl2List").innerText + "\n   Level 3 \n" + document.getElementById("lvl3List").innerText + "\n   Level 4 \n" + document.getElementById("lvl4List").innerText + "\n   Level 5 \n" + document.getElementById("lvl5List").innerText + "\n   Level 6 \n" + document.getElementById("lvl6List").innerText;
    }
    else{
      textToSave = document.title + " \n(Healer Level " + document.getElementById("reqLevel").value + ")" + document.getElementById("ltp").innerText + " \n   Level 1 \n" + document.getElementById("lvl1List").innerText + "\n   Level 2 \n" + document.getElementById("lvl2List").innerText + "\n   Level 3 \n" + document.getElementById("lvl3List").innerText + "\n   Level 4 \n" + document.getElementById("lvl4List").innerText + "\n   Level 5 \n" + document.getElementById("lvl5List").innerText + "\n   Level 6 \n" + document.getElementById("lvl6List").innerText;
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