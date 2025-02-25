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
        if(abilities[k].type == "Meta-Magic"){
          levelList[i] = levelList[i] + ": " + abilities[k].use * abilities[k].purchased + "/" + abilities[k].per + " " + abilities[k].charge;
        }
        if(abilities[k].type == "Enchantment"){
          levelList[i] = levelList[i] + ": " + abilities[k].use * abilities[k].purchased + "/" + abilities[k].per + " " + abilities[k].charge;
        }
        if(abilities[k].type == "Verbal" && (abilities[k].school == "Death" || abilities[k].school == "Flame") && abilities[51].purchased == 1){
          levelList[i] = levelList[i] + ": " + abilities[k].use * abilities[k].purchased * 2 + "/" + abilities[k].per + " " + abilities[k].charge;
        }        
        if(abilities[k].type == "Verbal" && !((abilities[k].school == "Death" || abilities[k].school == "Flame") && abilities[51].purchased == 1)){
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
      document.getElementById("toggleIncants").hidden = true;
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
  processBattlemageMinus();
  processEvokerMinus();
  processWarlockMinus();
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
    if(abilities[3].selectedAbility1 == "Astral Intervention" || abilities[3].selectedAbility2 == "Astral Intervention"){
      abilities[9].charge = "Charge x5";
      abilities[9].freq = "1/Life CHARGE x5";
      updateAbilityText(9); 
    }
    else{
      abilities[9].charge = "";
      abilities[9].freq = "1/Life";
      updateAbilityText(9); 
    }
    if(abilities[3].selectedAbility1 == "Banish" || abilities[3].selectedAbility2 == "Banish"){
      abilities[0].charge = "Charge x5";
      abilities[0].freq = "1/Life CHARGE x5";
      updateAbilityText(0); 
    }
    else{
      abilities[0].charge = "";
      abilities[0].freq = "1/Life";
      updateAbilityText(0); 
    }
    if(abilities[3].selectedAbility1 == "Break Concentration" || abilities[3].selectedAbility2 == "Break Concentration"){
      abilities[10].charge = "Charge x5";
      abilities[10].freq = "1/Life CHARGE x5";
      updateAbilityText(10); 
    }
    else{
      abilities[10].charge = "";
      abilities[10].freq = "1/Life";
      updateAbilityText(10); 
    }
    if(abilities[3].selectedAbility1 == "Destroy Armor" || abilities[3].selectedAbility2 == "Destroy Armor"){
      abilities[27].charge = "Charge x10";
      if(abilities[51].purchased > 0){
        abilities[27].freq = "4/Ref CHARGE x10"; //warlock
      }
      else{
        abilities[27].freq = "2/Ref CHARGE x10"; //no warlock
      }      
      updateAbilityText(27); 
    }
    else{
      abilities[27].charge = "";
      if(abilities[51].purchased > 0){
        abilities[27].freq = "4/Ref"; //warlock
      }
      else{
        abilities[27].freq = "2/Ref"; //no warlock
      }
      updateAbilityText(27); 
    }
    if(abilities[3].selectedAbility1 == "Dimensional Rift" || abilities[3].selectedAbility2 == "Dimensional Rift"){
      abilities[28].charge = "Charge x10";
      abilities[28].freq = "1/Ref CHARGE x10";
      updateAbilityText(28); 
    }
    else{
      abilities[28].charge = "";
      abilities[28].freq = "1/Ref";
      updateAbilityText(28); 
    }
    if(abilities[3].selectedAbility1 == "Dragged Below" || abilities[3].selectedAbility2 == "Dragged Below"){
      abilities[18].charge = "Charge x10";
      if(abilities[51].purchased > 0){
        abilities[18].freq = "2/Ref CHARGE x10"; //warlock
      }
      else{
        abilities[18].freq = "1/Ref CHARGE x10"; //no warlock
      }
      updateAbilityText(18); 
    }
    else{
      abilities[18].charge = "";
      if(abilities[51].purchased > 0){
        abilities[18].freq = "2/Ref"; //warlock
      }
      else{
        abilities[18].freq = "1/Ref"; //no warlock
      }
      updateAbilityText(18); 
    }
    if(abilities[3].selectedAbility1 == "Force Barrier" || abilities[3].selectedAbility2 == "Force Barrier"){
      abilities[4].charge = "Charge x5";
      abilities[4].freq = "1/Life CHARGE x5";
      updateAbilityText(4); 
    }
    else{
      abilities[4].charge = "";
      abilities[4].freq = "1/Life";
      updateAbilityText(4); 
    }
    if(abilities[3].selectedAbility1 == "Greater Mend" || abilities[3].selectedAbility2 == "Greater Mend"){
      abilities[20].charge = "Charge x10";
      abilities[20].freq = "1/Ref CHARGE x10";
      updateAbilityText(20); 
    }
    else{
      abilities[20].charge = "";
      abilities[20].freq = "1/Ref";
      updateAbilityText(20); 
    }
    if(abilities[3].selectedAbility1 == "Heat Weapon" || abilities[3].selectedAbility2 == "Heat Weapon"){
      abilities[6].charge = "Charge x5";
      if(abilities[51].purchased > 0){
        abilities[6].freq = "2/Life CHARGE x5"; //warlock
      }
      else{
        abilities[6].freq = "1/Life CHARGE x5"; //no warlock
      }
      updateAbilityText(6); 
    }
    else{
      abilities[6].charge = "";
      if(abilities[51].purchased > 0){
        abilities[6].freq = "2/Life"; //warlock
      }
      else{
        abilities[6].freq = "1/Life"; //no warlock
      }
      updateAbilityText(6); 
    }
    if(abilities[3].selectedAbility1 == "Hold Person" || abilities[3].selectedAbility2 == "Hold Person"){
      abilities[21].charge = "Charge x5";
      abilities[21].freq = "1/Life CHARGE x5";
      updateAbilityText(21); 
    }
    else{
      abilities[21].charge = "";
      abilities[21].freq = "1/Life";
      updateAbilityText(21); 
    }
    if(abilities[3].selectedAbility1 == "Icy Blast" || abilities[3].selectedAbility2 == "Icy Blast"){
      abilities[30].charge = "Charge x10";
      abilities[30].freq = "1/Ref CHARGE x10";
      updateAbilityText(30); 
    }
    else{
      abilities[30].charge = "";
      abilities[30].freq = "1/Ref";
      updateAbilityText(30); 
    }
    if(abilities[3].selectedAbility1 == "Mend" || abilities[3].selectedAbility2 == "Mend"){
      abilities[7].charge = "Charge x5";
      abilities[7].freq = "1/Life CHARGE x5";
      updateAbilityText(7); 
    }
    else{
      abilities[7].charge = "";
      abilities[7].freq = "1/Life";
      updateAbilityText(7); 
    }
    if(abilities[3].selectedAbility1 == "Planar Grounding" || abilities[3].selectedAbility2 == "Planar Grounding"){
      abilities[13].charge = "Charge x10";
      abilities[13].freq = "1/Ref CHARGE x10";
      updateAbilityText(13); 
    }
    else{
      abilities[13].charge = "";
      abilities[13].freq = "1/Ref";
      updateAbilityText(13); 
    }
    if(abilities[3].selectedAbility1 == "Ravage" || abilities[3].selectedAbility2 == "Ravage"){
      abilities[24].charge = "Charge x5";
      if(abilities[51].purchased > 0){
        abilities[24].freq = "4/Life CHARGE x5"; //warlock
      }
      else{
        abilities[24].freq = "2/Life CHARGE x5"; //no warlock
      }
      updateAbilityText(24); 
    }
    else{
      abilities[24].charge = "";
      if(abilities[51].purchased > 0){
        abilities[24].freq = "4/Life"; //warlock
      }
      else{
        abilities[24].freq = "2/Life"; //no warlock
      }
      updateAbilityText(24); 
    }
    if(abilities[3].selectedAbility1 == "Release" || abilities[3].selectedAbility2 == "Release"){
      abilities[14].charge = "Charge x5";
      abilities[14].freq = "1/Life CHARGE x5";
      updateAbilityText(14); 
    }
    else{
      abilities[14].charge = "";
      abilities[14].freq = "1/Life";
      updateAbilityText(14); 
    }
    if(abilities[3].selectedAbility1 == "Shatter" || abilities[3].selectedAbility2 == "Shatter"){
      abilities[31].charge = "Charge x10";
      abilities[31].freq = "1/Ref CHARGE x10";
      updateAbilityText(31); 
    }
    else{
      abilities[31].charge = "";
      abilities[31].freq = "1/Ref";
      updateAbilityText(31); 
    }
    if(abilities[3].selectedAbility1 == "Shatter Weapon" || abilities[3].selectedAbility2 == "Shatter Weapon"){
      abilities[25].charge = "Charge x10";
      abilities[25].freq = "1/Ref CHARGE x10";
      updateAbilityText(25); 
    }
    else{
      abilities[25].charge = "";
      abilities[25].freq = "1/Ref";
      updateAbilityText(25); 
    }
    if(abilities[3].selectedAbility1 == "Suppress Aura" || abilities[3].selectedAbility2 == "Suppress Aura"){
      abilities[32].charge = "Charge x10";
      abilities[32].freq = "1/Ref CHARGE x10";
      updateAbilityText(32); 
    }
    else{
      abilities[32].charge = "";
      abilities[32].freq = "1/Ref";
      updateAbilityText(32); 
    }
    if(abilities[3].selectedAbility1 == "Teleport" || abilities[3].selectedAbility2 == "Teleport"){
      abilities[16].charge = "Charge x5";
      abilities[16].freq = "1/Life CHARGE x5";
      updateAbilityText(16); 
    }
    else{
      abilities[16].charge = "";
      abilities[16].freq = "1/Life";
      updateAbilityText(16); 
    }
    if(abilities[3].selectedAbility1 == "Throw" || abilities[3].selectedAbility2 == "Throw"){
      abilities[26].charge = "Charge x10";
      abilities[26].freq = "1/Ref CHARGE x10";
      updateAbilityText(26); 
    }
    else{
      abilities[26].charge = "";
      abilities[26].freq = "1/Ref";
      updateAbilityText(26); 
    }
    //createURL(); OLD
    if(fromUser == 1){
      pointPlus(3);
      createURL(); //new//new checking to see if this fixes the reload error on iPhones
    }
 }
/*##################################*/
function battlemageCheck(index){
  var a = index;
  //console.log(abilities[a].type);
  if(abilities[44].purchased > 0){
    if(abilities[a].type == "Magic Ball" || abilities[a].type == "Enchantment"){
      
       return false;
       }
    else{
      return true;
    }
  }  
  if(abilities[a].name == "Battlemage"){
    for(let i = 0; i < abilityCount; i++){
      if((abilities[i].type == "Magic Ball" || abilities[i].type == "Enchantment") && abilities[i].purchased > 0){
        
        return false; 
        }
    }    
  }
  else{
    return true;
  }
}
/*##################################*/
function evokerCheck(index){
  var a = index;
  if(abilities[46].purchased > 0){
    if(abilities[a].type == "Verbal" && !(abilities[a].range == "Touch" || abilities[a].range == "Self")){
      
       return false;
       }
    else{
      return true;
    }
  }  
  if(abilities[a].name == "Evoker"){
    for(let i = 0; i < abilityCount; i++){
      if((abilities[i].type == "Verbal" && !(abilities[i].range == "Touch" || abilities[i].range == "Self")) && abilities[i].purchased > 0){
        
        return false; 
        }
    }    
  }
  else{
    return true;
  }
}
/*##################################*/
function warlockCheck(index){
  var a = index;
  if(abilities[51].purchased > 0){
    if(abilities[a].type == "Verbal" && !(abilities[a].school == "Death" || abilities[a].school == "Flame")){
      
       return false;
       }
    else{
      return true;
    }
  }  
  if(abilities[a].name == "Warlock"){
    for(let i = 0; i < abilityCount; i++){
      if((abilities[i].type == "Verbal" && !(abilities[i].school == "Death" || abilities[i].school == "Flame")) && abilities[i].purchased > 0){
        
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
  if(battlemageCheck(a) == false){
    showToast("Battlemages may not purchase Enchantments or Magic Balls");
    return false;
  }
  if(evokerCheck(a) == false){
    showToast("Evokers can only purchase verbals of range Touch or Self.");
    return false;
  }
  if(warlockCheck(a) == false){
    showToast("Warlocks may not purchase Verbals from any School other than the Death and Flame Schools.");
    return false;
  }
  
  
  if(checkPointsAvailable(a)){
    if(abilities[a].name == "Battlemage"){
      processBattlemagePlus();
    }
    if(abilities[a].name == "Evoker"){
      processEvokerPlus();
    }
    if(abilities[a].name == "Warlock"){
      processWarlockPlus();
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
  /*if(!checkRangerMinus(a)){
    showToast("You don't have the points to remove Ranger. Equipment too expensive.");
    return 0;
  }*/
  if(abilities[a].name == "Battlemage"){
    processBattlemageMinus();
  }
  if(abilities[a].name == "Evoker"){
    processEvokerMinus();
  } 
  if(abilities[a].name == "Warlock"){
    processWarlockMinus();
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

function processBattlemagePlus(){
  abilities[36].per = "Unlimited";
  abilities[36].freq = "Unlimited";
  updateAbilityText(36);
}
function processBattlemageMinus(){
  abilities[36].per = "Life";
  abilities[36].freq = "1/Life";
  updateAbilityText(36);
}
function processEvokerPlus(){
  abilities[45].charge = "CHARGE x10";
  abilities[45].freq = "1/Ref CHG x10";
  updateAbilityText(45);
}
function processEvokerMinus(){
  abilities[45].charge = "";
  abilities[45].freq = "1/Ref";
  updateAbilityText(45);
}
function processWarlockPlus(){
  abilities[6].freq = "2/Life";
  abilities[18].freq = "2/Ref";
  abilities[24].freq = "4/Life";
  abilities[27].freq = "4/Ref";
  abilities[35].freq = "2/Ref Chg x3";
  abilities[40].freq = "2/Ref";
  abilities[41].freq = "2/Life";
  abilities[47].freq = "2/Ref";
  updateAbilityText(6);
  updateAbilityText(18);
  updateAbilityText(24);
  updateAbilityText(27);
  updateAbilityText(35);
  updateAbilityText(40);
  updateAbilityText(41);
  updateAbilityText(47);
}
function processWarlockMinus(){
  abilities[6].freq = "1/Life";
  abilities[18].freq = "1/Ref";
  abilities[24].freq = "2/Life";
  abilities[27].freq = "2/Ref";
  abilities[35].freq = "1/Ref Chg x3";
  abilities[40].freq = "1/Ref";
  abilities[41].freq = "1/Life";
  abilities[47].freq = "1/Ref";
  updateAbilityText(6);
  updateAbilityText(18);
  updateAbilityText(24);
  updateAbilityText(27);
  updateAbilityText(35);
  updateAbilityText(40);
  updateAbilityText(41);
  updateAbilityText(47);
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
const WeaponShort = {
  purchased: 0,
  level: 1,
  cost: 2,
  max: 1, charge: "", use: -1, per: "",
  pointTotalId: "WeaponShortval",
  name: "Weapon Short", type: "Neutral",  freq: "",
  school: "", range: "", materials: "",
  incant: "", 
  effect: "May wield one short weapon at a time for each instance purchased (but may carry extras)", 
  limitations: "",
  notes: "",
  text: ""
};
const ForceBarrier = {
  purchased: 0,
  level: 1,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Life",
  pointTotalId: "ForceBarrierval",
  name: "Force Barrier", type: "Verbal",  freq: "1/Life",
  school: "Sorcery", range: "Self", materials: "",
  incant: "<I>I shall not be harmed</I>", 
  effect: "Player is Frozen for 10 seconds", 
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
const ForceBolt = {
  purchased: 0,
  level: 1,
  cost: 1,
  max: 8, charge: "", use: 3, per: "Ball",
  pointTotalId: "ForceBoltval",
  name: "Force Bolt", type: "Magic Ball",  freq: "3 Balls/Unlimited",
  school: "Sorcery", range: "Ball", materials: "Blue Magic Ball",
  incant: "<I>Forcebolt</I> x3", 
  effect: "Force Bolt will have one of the following effects on the object first struck: <BR>1. A weapon hit is destroyed <BR>2. Armor hit with Armor Points remaining is subject to Armor Breaking <BR>3. A player hit receives a Wound to that hit location", 
  limitations: "",
  notes: "",
  text: ""
};
const HeatWeapon = {
  purchased: 0,
  level: 1,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Life",
  pointTotalId: "HeatWeaponval",
  name: "Heat Weapon", type: "Verbal",  freq: "1/Life",
  school: "Flame", range: "20", materials: "",
  incant: "<I>I call upon flame to heat that [type of weapon]</I> x3", 
  effect: "Target weapon may not be wielded for 30 seconds. Players who are Immune to Flame may continue to wield the weapon", 
  limitations: "",
  notes: "The equipment, not the person, is the target of Heat Weapon. The equipment is the only thing required to be within range and visible for this spell to affect it",
  text: ""
};
const Mend = {
  purchased: 0,
  level: 1,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Life",
  pointTotalId: "Mendval",
  name: "Mend", type: "Verbal",  freq: "	1/Life",
  school: "Sorcery", range: "Touch", materials: "",
  incant: "<I>I make this item whole again</I> x5", 
  effect: "Destroyed or damaged item is repaired, or one point of armor in one location is repaired.", 
  limitations: "",
  notes: "",
  text: ""
};
const Shove = {
  purchased: 0,
  level: 1,
  cost: 1,
  max: 31, charge: "Charge x3", use: 1, per: "Life",
  pointTotalId: "Shoveval",
  name: "Shove", type: "Verbal",  freq: "1/Life Chg x3",
  school: "Sorcery", range: "20", materials: "",
  incant: "<I>My power shoves thee</I> x3", 
  effect: " Target player is moved back 20' in a straight line away from the caster. Works on Stopped players. If the caster is the target, the caster may choose the direction they move.", 
  limitations: "",
  notes: "",
  text: ""
};

/*__________________________________________*/

const AstralIntervention = {
  purchased: 0,
  level: 2,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Life",
  pointTotalId: "AstralInterventionval",
  name: "Astral Intervention", type: "Verbal",  freq: "1/Life",
  school: "Command", range: "20", materials: "",
  incant: "<I>I command thee to retreat into the aether</I> x3", 
  effect: "Target player becomes Insubstantial for 30 seconds", 
  limitations: "",
  notes: "If cast on self, the caster may end this Insubstantial state at any time by using the exit incantation for Insubstantial",
  text: ""
};
const BreakConcentration = {
  purchased: 0,
  level: 2,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Life",
  pointTotalId: "BreakConcentrationval",
  name: "Break Concentration", type: "Verbal",  freq: "1/Life",
  school: "Command", range: "20", materials: "",
  incant: "<I>I command thee suppressed</I>", 
  effect: "Target player is suppressed for 10 seconds", 
  limitations: "",
  notes: "",
  text: ""
};
const Entangle = {
  purchased: 0,
  level: 2,
  cost: 1,
  max: 3, charge: "", use: 2, per: "Ball",
  pointTotalId: "Entangleval",
  name: "Entangle", type: "Magic Ball",  freq: "2 Balls Unlimited",
  school: "Subdual", range: "Ball", materials: "Brown Magic Ball",
  incant: "<I>The strength of earth is mine to evoke</I> x3", 
  effect: "Target is Stopped for 60 seconds. Engulfing", 
  limitations: "",
  notes: "",
  text: ""
};
const Innate = {
  purchased: 0,
  level: 2,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Refresh",
  pointTotalId: "Innateval",
  name: "Innate", type: "Meta-Magic",  freq: "1/Ref",
  school: "Neutral", range: "", materials: "",
  incant: "<I>Innate</I>", 
  effect: "May be used to instantly Charge a single magic or ability by stating its name.", 
  limitations: "",
  notes: "",
  text: ""
};
const PlanarGrounding = {
  purchased: 0,
  level: 2,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Refresh",
  pointTotalId: "PlanarGroundingval",
  name: "Planar Grounding", type: "Verbal",  freq: "1/Ref",
  school: "Sorcery", range: "20", materials: "",
  incant: "<I>My power closes the aether to you</I> x3", 
  effect: "Target player has their Insubstantial State removed and may not become Insubstantial for 30 seconds. May be cast on players who are not currently Insubstantial", 
  limitations: "",
  notes: "Planar Grounding causes Enchantments that automatically render their bearer Insubstantial, such as Undead Minion, to fail and be removed if they activate while Planar Grounding is in effect",
  text: ""
};
const Release = {
  purchased: 0,
  level: 2,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Life",
  pointTotalId: "Releaseval",
  name: "Release", type: "Verbal",  freq: "1/Life",
  school: "Sorcery", range: "Touch", materials: "",
  incant: "<I>From thy bindings thou art released</I> x5", 
  effect: "A single ongoing effect or State is removed from the target. Casters choice", 
  limitations: "Cannot remove Cursed. When used to end a State or Ongoing Effect imposed by a magic or ability with multiple effects, all other States and Ongoing Effects from the same source are also ended",
  notes: "",
  text: ""
};
const SuppressionBolt = {
  purchased: 0,
  level: 2,
  cost: 1,
  max: 3, charge: "", use: 1, per: "Ball",
  pointTotalId: "SuppressionBoltval",
  name: "Suppression Bolt", type: "Magic Ball",  freq: "1 Ball Unlimited",
  school: "Subdual", range: "Ball", materials: "Purple Magic Ball",
  incant: "<I>The strength of suppression is mine to evoke</I> x3", 
  effect: "Target is Suppressed for 60 seconds. Engulfing", 
  limitations: "",
  notes: "",
  text: ""
};
const Teleport = {
  purchased: 0,
  level: 2,
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
/*__________________________________________*/
const DispelMagic = {
  purchased: 0,
  level: 3,
  cost: 1,
  max: 31, charge: "Charge x3", use: 1, per: "Refresh",
  pointTotalId: "DispelMagicval",
  name: "Dispel Magic", type: "Verbal",  freq: "1/Ref Chg x3",
  school: "Sorcery", range: "20", materials: "",
  incant: "<I>By my power I dispel that magic</I> x3", 
  effect: "All Enchantments on target are removed", 
  limitations: "",
  notes: "Will always remove enchantments if successfully cast on a valid target, regardless of the player’s Traits, States, Immunities, Ongoing Effects, or Enchantments (except Sleight of Mind)",
  text: ""
};
const DraggedBelow = {
  purchased: 0,
  level: 3,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Refresh",
  pointTotalId: "DraggedBelowval",
  name: "Dragged Below", type: "Verbal",  freq: "1/Ref",
  school: "Death", range: "20", materials: "",
  incant: "<I>Death comes for thee from below</I> x3", 
  effect: "Target Stopped player dies", 
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
const GreaterMend = {
  purchased: 0,
  level: 3,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Refresh",
  pointTotalId: "GreaterMendval",
  name: "Greater Mend", type: "Verbal",  freq: "1/Ref",
  school: "Sorcery", range: "Touch", materials: "",
  incant: "<I>Return this [object name] to its former glory</I> x5", 
  effect: "Will restore all armor points in one location or repair a damaged or broken item.", 
  limitations: "",
  notes: "",
  text: ""
};
const HoldPerson = {
  purchased: 0,
  level: 3,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Life",
  pointTotalId: "HoldPersonval",
  name: "Hold Person", type: "Verbal",  freq: "1/Life",
  school: "Command", range: "20", materials: "",
  incant: "<I>I command thee to stop</I> x3", 
  effect: "Target player becomes Stopped for 30 seconds", 
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
const LightningBolt = {
  purchased: 0,
  level: 3,
  cost: 1,
  max: 4, charge: "", use: 1, per: "Ball",
  pointTotalId: "LightningBoltval",
  name: "Lightning Bolt", type: "Magic Ball",  freq: "1 Ball Unlimited",
  school: "Flame", range: "Ball", materials: "Yellow Magic Ball",
  incant: "<I>The flame of storms is mine to evoke</I> x3", 
  effect: "A player struck is subject to an Engulfing Stopped effect for 60 seconds. In addition Lightning Bolt will have one of the following effects on the object first struck: <BR>1. A weapon hit is destroyed <BR>2. Armor hit with Armor Points remaining is subject to Armor Breaking <BR>3. A player hit receives a Wound in that hit location", 
  limitations: "",
  notes: "",
  text: ""
};
const Ravage = {
  purchased: 0,
  level: 3,
  cost: 1,
  max: 31, charge: "", use: 2, per: "Life",
  pointTotalId: "Ravageval",
  name: "Ravage", type: "Verbal",  freq: "2/Life",
  school: "Death", range: "20", materials: "",
  incant: "<I>Death shall make thee fragile</I> x3", 
  effect: "Target player is Fragile", 
  limitations: "",
  notes: "",
  text: ""
};
const ShatterWeapon = {
  purchased: 0,
  level: 3,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Refresh",
  pointTotalId: "ShatterWeaponval",
  name: "Shatter Weapon", type: "Verbal",  freq: "1/Ref",
  school: "Sorcery", range: "20", materials: "",
  incant: "<I>My power destroys thy [type of weapon]</I> x3", 
  effect: "Target weapon is destroyed", 
  limitations: "",
  notes: "The equipment, not the person, is the target of Shatter Weapon. The equipment is the only thing required to be within range and visible for this spell to affect it",
  text: ""
};
const Throw = {
  purchased: 0,
  level: 3,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Refresh",
  pointTotalId: "Throwval",
  name: "Throw", type: "Verbal",  freq: "1/Ref",
  school: "Sorcery", range: "20", materials: "",
  incant: "<I>My power throws thee</I> x3", 
  effect: "Target player is moved back 50’ in a straight line away from the caster. Works on Stopped players", 
  limitations: "",
  notes: "",
  text: ""
};

/*__________________________________________*/

const DestroyArmor = {
  purchased: 0,
  level: 4,
  cost: 1,
  max: 31, charge: "", use: 2, per: "Refresh",
  pointTotalId: "DestroyArmorval",
  name: "Destroy Armor", type: "Verbal",  freq: "2/Ref",
  school: "Death", range: "20", materials: "",
  incant: "<I>Death destroys thy [hit location] armor</I> x3", 
  effect: "Remove all armor points from target hit location.", 
  limitations: "",
  notes: "Destroy Armor targets the player but affects the Hit Location. Visibility can be drawn to any part of the player, not just the desired Hit Location. Immunities, resistances, and other protections will only protect the armor from Destroy Armor if they specifically extend to the armor, such as Blessed Aura. Abilities like Enlightened Soul, Protection from Magic, and Adaptive Protection (Death) do not extend to armor and thus cannot protect against Destroy Armor. Ancestral Armor does not protect against verbal magic and thus cannot protect against Destroy Armor.",
  text: ""
};
const DimensionalRift = {
  purchased: 0,
  level: 4,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Refresh",
  pointTotalId: "DimensionalRiftval",
  name: "Dimensional Rift", type: "Verbal",  freq: "1/Ref",
  school: "Sorcery", range: "20", materials: "",
  incant: "<I>The power of the aether consumes thee</I> x3", 
  effect: "Target Insubstantial player dies", 
  limitations: "",
  notes: "",
  text: ""
};
const Fireball = {
  purchased: 0,
  level: 4,
  cost: 1,
  max: 4, charge: "", use: 1, per: "Ball",
  pointTotalId: "Fireballval",
  name: "Fireball", type: "Magic Ball",  freq: "1 Ball Unlimited",
  school: "Flame", range: "Ball", materials: "Red Magic Ball",
  incant: "<I>The flame of fire is mine to evoke</I> x3", 
  effect: "Fireball will have one of the following effects on the object first struck: <BR>1. A weapon hit is destroyed <BR>2. A shield hit is subject to Shield Destroying <BR>3. Armor hit with Armor Points remaining is subject to Armor Destroying. <BR>4. A player hit dies.", 
  limitations: "",
  notes: "",
  text: ""
};
const IcyBlast = {
  purchased: 0,
  level: 4,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Refresh",
  pointTotalId: "IcyBlastval",
  name: "Icy Blast", type: "Verbal",  freq: "1/Ref",
  school: "Sorcery", range: "20", materials: "",
  incant: "<I>My power makes thee frozen</I> x3", 
  effect: "Target player becomes Frozen for 30 seconds", 
  limitations: "",
  notes: "",
  text: ""
};
const Shatter = {
  purchased: 0,
  level: 4,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Refresh",
  pointTotalId: "Shatterval",
  name: "Shatter", type: "Verbal",  freq: "1/Ref",
  school: "Sorcery", range: "20", materials: "",
  incant: "<I>My power shatters thy body</I> x3", 
  effect: "Target Frozen player dies", 
  limitations: "",
  notes: "",
  text: ""
};
const SuppressAura = {
  purchased: 0,
  level: 4,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Refresh",
  pointTotalId: "SuppressAuraval",
  name: "Suppress Aura", type: "Verbal",  freq: "1/Ref",
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
  name: "Swift", type: "Meta-Magic",  freq: "	1/Life",
  school: "Neutral", range: "", materials: "",
  incant: "<I>Swift</I>", 
  effect: "Magic and abilities require only a single iteration of the incantation. For multi-line Incantations use the last line", 
  limitations: "May only be used on Magic and Abilities at a range of Touch, Other, or Self, or on Magic Balls. May not be used on the Charge incantation.",
  notes: "",
  text: ""
};
const Vampirism = {
  purchased: 0,
  level: 4,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Refresh",
  pointTotalId: "Vampirismval",
  name: "Vampirism", type: "Enchantment",  freq: "1/Ref",
  school: "Death", range: "Other", materials: "Yellow Strip and White Strip",
  incant: "<I>Thy hunger can never be sated</I> x3", 
  effect: "Player gains Adrenaline unlimited (ex), is Immune to Death, and is Cursed. Bearer’s Adrenaline ability will work through their Cursed State", 
  limitations: "",
  notes: "",
  text: ""
};
const Wounding = {
  purchased: 0,
  level: 4,
  cost: 1,
  max: 31, charge: "Charge x3", use: 1, per: "Refresh",
  pointTotalId: "Woundingval",
  name: "Wounding", type: "Verbal",  freq: "1/Ref Chg x3",
  school: "Death", range: "20", materials: "",
  incant: "<I>Death strikes off thy [left/right] [arm/leg]</I> x3", 
  effect: "Target hit location on target player is Wounded", 
  limitations: "Has no effect on players already Wounded",
  notes: "Wounding targets the player but affects the Hit Location. Visibility can be drawn to any part of the player, not just the desired Hit Location",
  text: ""
};

/*__________________________________________*/

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
  limitations: "May not be used on the Charge incantation",
  notes: "Using Ambulant allows both the target indication and Ambulant to be said while moving, but not other Meta-Magics.",
  text: ""
};
const Contagion = {
  purchased: 0,
  level: 5,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Refresh",
  pointTotalId: "Contagionval",
  name: "Contagion", type: "Enchantment",  freq: "1/Ref",
  school: "Death", range: "Other", materials: "Red Strip",
  incant: "<I>May thou bear this plague to all</I> x3", 
  effect: "All melee weapons wielded by player are Wounds Kill. Bearer is Fragile", 
  limitations: "",
  notes: "",
  text: ""
};
const LongWeapon = {
  purchased: 0,
  level: 5,
  cost: 4,
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
const PhaseBolt = {
  purchased: 0,
  level: 5,
  cost: 1,
  max: 4, charge: "", use: 1, per: "Ball",
  pointTotalId: "PhaseBoltval",
  name: "Phase Bolt", type: "Magic Ball",  freq: "1 Ball Unlimited",
  school: "Sorcery", range: "Ball", materials: "Grey Magic Ball",
  incant: "<I>The power of sorcery is mine to evoke</I> x3", 
  effect: "This Magic Ball does not interact with other ongoing Magic, Abilities, nor Traits. Example: This Magic Ball is not stopped by Stoneskin, Protection from Projectiles, and does not trigger the effects of Gift of Air, Troll Blood, Missile Block, or similar Magic or Abilities. Will have one of the following effects: <BR>1. A weapon hit is destroyed <BR>2. Armor hit with Armor Points remaining is subject to Armor Breaking. <BR>3. A player hit receives a Wound in that hit location", 
  limitations: "",
  notes: "Does not supercede the Frozen, Insubstantial, or Out of Game States",
  text: ""
};
const Pyrotechnics = {
  purchased: 0,
  level: 5,
  cost: 1,
  max: 2, charge: "", use: 1, per: "Refresh",
  pointTotalId: "Pyrotechnicsval",
  name: "Pyrotechnics", type: "Verbal",  freq: "1/Ref",
  school: "Flame", range: "50", materials: "",
  incant: "<I>I call upon the element of flame to destroy thy belongings</I> x3", 
  effect: "All shields and weapons carried or worn by the target player are destroyed", 
  limitations: "Only affects shields and weapons carried or worn when the Verbal is completed",
  notes: "Pyrotechnics targets the player but affects their equipment. Immunities, resistances, and other protections will only protect the equipment from Pyrotechnics if they specifically extend to the equipment, such as Blessed Aura or Flame Blade. Abilities like Enlightened Soul, Protection from Magic, and Adaptive Protection (Flame) do not extend to equipment and thus cannot protect from Pyrotechnics",
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
const VoidTouched = {
  purchased: 0,
  level: 5,
  cost: 1,
  max: 2, charge: "", use: 1, per: "Refresh",
  pointTotalId: "VoidTouchedval",
  name: "Void Touched", type: "Enchantment",  freq: "1/Ref",
  school: "Sorcery", range: "Other", materials: "Red Strip and White Strip",
  incant: "<I>Embrace the old ones and surrender thyself</I> x3", 
  effect: "Melee weapons wielded by bearer are Armor Breaking. Bearer gains Shadow Step 1/Refresh Charge x30 (ex), Steal Life Essence Unlimited (ex), and is unaffected by Magic from the Sorcery, Spirit, and Death Schools. May still benefit from their own Steal Life Essence. Player is Cursed.", 
  limitations: "",
  notes: "This effect does not interact with other Enchantments worn by the bearer",
  text: ""
};
const WardSelf = {
  purchased: 0,
  level: 5,
  cost: 1,
  max: 2, charge: "", use: 1, per: "Refresh",
  pointTotalId: "WardSelfval",
  name: "Ward Self", type: "Enchantment",  freq: "1/Ref",
  school: "Protection", range: "Self", materials: "White Strip",
  incant: "<I>The power of magic defends me</I> x3", 
  effect: "Resistant to all effects from the next source which would inflict a Wound, Death, or State. Does not trigger against effects cast by the player", 
  limitations: "",
  notes: "",
  text: ""
};

/*__________________________________________*/

const Battlemage = {
  purchased: 0,
  level: 6,
  cost: 2,
  max: 1, charge: "", use: -1, per: "",
  pointTotalId: "Battlemageval",
  name: "Battlemage", type: "Archetype",  freq: "",
  school: "Neutral", range: "", materials: "",
  incant: "", 
  effect: "Use of Ambulant becomes unlimited", 
  limitations: "May not purchase Enchantments or Magic Balls",
  notes: "",
  text: ""
};
const ElementalBarrage = {
  purchased: 0,
  level: 6,
  cost: 1,
  max: 2, charge: "", use: 1, per: "Refresh",
  pointTotalId: "ElementalBarrageval",
  name: "Elemental Barrage", type: "Verbal",  freq: "1/Ref",
  school: "Sorcery", range: "Self", materials: "",
  incant: "<I>I am filled with the power of magic</I>", 
  effect: "Caster may use Magic Balls they are currently carrying by stating the name of the Magic Ball immediately prior to throwing the ball in place of the incantation", 
  limitations: "This magic ends if the caster picks up any additional Magic Balls or begins casting any new magic",
  notes: "The effect is not an incantation, and so is not stopped by suppression, and may be used while moving, etc.",
  text: ""
};
const Evoker = {
  purchased: 0,
  level: 6,
  cost: 2,
  max: 1, charge: "", use: -1, per: "",
  pointTotalId: "Evokerval",
  name: "Evoker", type: "Archetype",  freq: "",
  school: "Neutral", range: "", materials: "",
  incant: "", 
  effect: "Verbals purchased may only be of range Touch or Self. Elemental Barrage becomes Charge x10", 
  limitations: "",
  notes: "Elemental Barrage must still be purchased",
  text: ""
};
const FingerofDeath = {
  purchased: 0,
  level: 6,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Refresh",
  pointTotalId: "FingerofDeathval",
  name: "Finger of Death", type: "Verbal",  freq: "1/Ref",
  school: "Death", range: "20", materials: "",
  incant: "<I>I call upon death to smite thee</I> x3", 
  effect: "Target player dies", 
  limitations: "",
  notes: "",
  text: ""
};
const Persistent = {
  purchased: 0,
  level: 6,
  cost: 2,
  max: 31, charge: "", use: 1, per: "Refresh",
  pointTotalId: "Persistentval",
  name: "Persistent", type: "Meta-Magic",  freq: "1/Ref",
  school: "Neutral", range: "", materials: "",
  incant: "<I>Persistent</I>", 
  effect: "Enchantment returns with the user after respawning until it has been otherwise removed", 
  limitations: "",
  notes: "Persistent is a Meta-Magic; it must be used before another incantation, and affects the next spell cast by that same caster. Persistent does not retroactively make an enchantment already on a player Persistent. Persistent enchantments with limited uses (Mass Healing, Corrosive Mist, etc.) will retain the number of uses they had remaining. Persistent Magic Armor behaves like normal armor: it will be repaired upon Respawning or retain any prior damage if the bearer is returned to life by some other method, such as Resurrect.",
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
  effect: "Bearer is unaffected by magic from any school. Upon death the player is Cursed", 
  limitations: "",
  notes: "This effect does not interact with other Enchantments worn by the bearer.",
  text: ""
};
const SphereofAnnihilation = {
  purchased: 0,
  level: 6,
  cost: 2,
  max: 1, charge: "", use: 1, per: "Ball",
  pointTotalId: "SphereofAnnihilationval",
  name: "Sphere of Annihilation", type: "Magic Ball",  freq: "1 Ball Unlimited",
  school: "Sorcery", range: "Ball", materials: "Black Magic Ball",
  incant: "<I>The power of void is mine to evoke</I> x3", 
  effect: "Sphere of Annihilation ignores armor and enchantments and will have one of the following effects on the object first struck: <BR>A weapon struck is destroyed. <BR>A shield struck is subject to Shield Destroying. <BR>A player struck dies and is Cursed.", 
  limitations: "",
  notes: "Missile Block nullifies the effects of Sphere of Annihilation.",
  text: ""
};
const Warlock = {
  purchased: 0,
  level: 6,
  cost: 2,
  max: 1, charge: "", use: -1, per: "",
  pointTotalId: "Warlockval",
  name: "Warlock", type: "Archetype",  freq: "",
  school: "Neutral", range: "", materials: "",
  incant: "", 
  effect: "Each Verbal purchased in the Death and Flame Schools gives double the uses. Example: 1/Life Charge x3 becomes 2/life Charge x3, 2/life becomes 4/life", 
  limitations: "Player may not purchase Verbals from any School other than the Death and Flame Schools",
  notes: "",
  text: ""
};
const WordofMending = {
  purchased: 0,
  level: 6,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Refresh",
  pointTotalId: "WordofMendingval",
  name: "Word of Mending", type: "Verbal",  freq: "1/Ref",
  school: "Sorcery", range: "Touch", materials: "",
  incant: "<I>Spedoinkle</I>", 
  effect: "All equipment carried by target player is repaired. All armor worn by target player is restored to full value", 
  limitations: "May not be cast within 20’ of a living enemy",
  notes: "",
  text: ""
};

const abilityCount = 52;
const abilities = [Banish, //0
  WordofMending, //1
  WeaponShort, //2
  Experienced, //3
  ForceBarrier, //4
  ForceBolt, //5
  HeatWeapon, //6
  Mend, //7
  Shove, //8
  AstralIntervention, //9
  BreakConcentration, //10
  Entangle, //11
  Innate, //12
  PlanarGrounding, //13
  Release, //14
  SuppressionBolt, //15
  Teleport, //16
  DispelMagic, //17
  DraggedBelow, //18
  Extension, //19
  GreaterMend, //20
  HoldPerson, //21
  Iceball, //22
  LightningBolt, //23
  Ravage, //24
  ShatterWeapon, //25
  Throw, //26
  DestroyArmor, //27
  DimensionalRift, //28
  Fireball, //29
  IcyBlast, //30
  Shatter,	 //31
  SuppressAura, //32
  Swift,  //33
  Vampirism, //34
  Wounding, //35
  Ambulant, //36
  Contagion, //37
  LongWeapon, //38
  PhaseBolt, //39
  Pyrotechnics, //40
  StealLifeEssence, //41
  VoidTouched, //42
  WardSelf, //43
  Battlemage, //44
  ElementalBarrage, //45
  Evoker, //46
  FingerofDeath, //47
  Persistent, //48
  ProtectionfromMagic, //49
  SphereofAnnihilation, //50
  Warlock //51
   
];

function getAbilities(){return abilities}

function saveList(){
  let textToSave = "";
    if(document.title == "Wizard Spellbook"){
      textToSave = "Wizard Level " + document.getElementById("reqLevel").value + document.getElementById("ltp").innerText + " \n   Level 1 \n" + document.getElementById("lvl1List").innerText + "\n   Level 2 \n" + document.getElementById("lvl2List").innerText + "\n   Level 3 \n" + document.getElementById("lvl3List").innerText + "\n   Level 4 \n" + document.getElementById("lvl4List").innerText + "\n   Level 5 \n" + document.getElementById("lvl5List").innerText + "\n   Level 6 \n" + document.getElementById("lvl6List").innerText;
    }
    else{
      textToSave = document.title + " \n(Wizard Level " + document.getElementById("reqLevel").value + ")" + document.getElementById("ltp").innerText + " \n   Level 1 \n" + document.getElementById("lvl1List").innerText + "\n   Level 2 \n" + document.getElementById("lvl2List").innerText + "\n   Level 3 \n" + document.getElementById("lvl3List").innerText + "\n   Level 4 \n" + document.getElementById("lvl4List").innerText + "\n   Level 5 \n" + document.getElementById("lvl5List").innerText + "\n   Level 6 \n" + document.getElementById("lvl6List").innerText;
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