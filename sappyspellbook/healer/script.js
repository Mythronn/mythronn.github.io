document.addEventListener("DOMContentLoaded", function() {
  parseURL();
  for(let i = 0; i < abilityCount; i++){
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
  updateTable();
  //console.log("The DOM is fully loaded.");
});
/*##################################*/
function parseURL(){
  fullurl = window.location.href.split("/");
  url = fullurl[fullurl.length-1];
  url = url.replace("index.html", "");
  var exps = [];
  if(url.length > 1 && url[0] == "#"){
    url = expandZeros(url);
    url = url.replace("#", "");
      for(let i = 0; i < abilityCount; i++){
          abilities[i].purchased = decodeMap(url[i]);         
      }
      exps = url.split("-");
      abilities[5].selectedAbility1 = exps[1].replace("_", " ");
      abilities[5].selectedAbility2 = exps[2].replace("_", " ");
      reprocessPoints(0);
  }
}
/*##################################*/
function createURL(){
  let s = "#";
  for(let i = 0; i < abilityCount; i++){
      s += encodeMap(abilities[i].purchased);
  }
  s += "-" + (abilities[5].selectedAbility1).replace(" ", "_") + "-" + (abilities[5].selectedAbility2).replace(" ", "_") + "-";
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
function toggleList(){
  var tables = [];
  var lists = [];
  var levelList = ["", "", "", "", "", "", ""];
  window.history.pushState({}, "", "#Test")
  
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
        if(abilities[k].type == "Verbal"){
          levelList[i] = levelList[i] + ": " + abilities[k].use * abilities[k].purchased + "/" + abilities[k].per + " " + abilities[k].charge;
        }
        if(abilities[k].type == "Enchantment" && (abilities[k].school == "Protection") && abilities[2].purchased == 1){
          levelList[i] = levelList[i] + ": " + abilities[k].use * abilities[k].purchased * 2 + "/" + abilities[k].per + " " + abilities[k].charge;
        }        
        if(abilities[k].type == "Enchantment" && !((abilities[k].school == "Protection") && abilities[2].purchased == 1)){
          levelList[i] = levelList[i] + ": " + abilities[k].use * abilities[k].purchased + "/" + abilities[k].per + " " + abilities[k].charge;
        }
       }
    }
    if(tables[i].style.display == "block"){
      levelList[i] = levelList[i].slice(4);
      lists[i].innerHTML = levelList[i];
      tables[i].style.display = "none";
      lists[i].style.display = "block";
      document.getElementById("saveList").hidden = false;
    }
    else{
      tables[i].style.display = "block";
      lists[i].style.display = "none";
      document.getElementById("saveList").hidden = true;
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
  processNecromancerMinus();
  for(let i = 0; i < abilityCount; i++){
    abilities[i].purchased = 0;
    document.getElementById(abilities[i].pointTotalId).value = 0;
  }
  pointsAvailable = [0, 5,  5,  5,  5,  5,  6];
  pointsSpent = [0, 0,  0,  0,  0,  0,  0];
  if(fullReset == 1){
    document.getElementById("exp1").value = "Select Spell";
    document.getElementById("exp2").value = "Select Spell";
    document.getElementById("ltp").innerText = "";
  }
  if(fullReset){
    updateExperienced();
  }
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
  processExpChange();
  updateTable();
}
/*##################################*/
function processExpChange(){  
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
    }
    else{
      abilities[47].charge = "";
    }
    if(abilities[5].selectedAbility1 == "Dispel Magic" || abilities[5].selectedAbility2 == "Dispel Magic"){
      abilities[37].charge = "Charge x10";
    }
    else{
      abilities[37].charge = "";
    }
    if(abilities[5].selectedAbility1 == "Greater Heal" || abilities[5].selectedAbility2 == "Greater Heal"){
      abilities[29].charge = "Charge x5";
    }
    else{
      abilities[29].charge = "";
    }
    if(abilities[5].selectedAbility1 == "Greater Release" || abilities[5].selectedAbility2 == "Greater Release"){
      abilities[12].charge = "Charge x10";
    }
    else{
      abilities[12].charge = "";
    }
    if(abilities[5].selectedAbility1 == "Mend" || abilities[5].selectedAbility2 == "Mend"){
      abilities[24].charge = "Charge x5";
    }
    else{
      abilities[24].charge = "";
    }
    if(abilities[5].selectedAbility1 == "Shove" || abilities[5].selectedAbility2 == "Shove"){
      abilities[16].charge = "Charge x5";
    }
    else{
      abilities[16].charge = "";
    }
    if(abilities[5].selectedAbility1 == "Teleport" || abilities[5].selectedAbility2 == "Teleport"){
      abilities[33].charge = "Charge x5";
    }
    else{
      abilities[33].charge = "";
    }
    if(abilities[5].selectedAbility1 == "Raise Dead" || abilities[5].selectedAbility2 == "Raise Dead"){
      abilities[26].charge = "Charge x5";
    }
    else{
      abilities[26].charge = "";
    }
    createURL();
 }
/*##################################*/
function necromancerCheck(index){ //Necro
  var a = index;
  if(abilities[44].purchased > 0){
    if(abilities[a].type == "Enchantment" && abilities[a].school == "Protection" ){
      
       return false;
       }
    else{
      return true;
    }
  }  
  if(abilities[a].name == "Necromancer"){
    for(let i = 0; i < abilityCount; i++){
      if((abilities[i].type == "Enchantment" && abilities[i].school == "Protection" ) && abilities[i].purchased > 0){
        
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
  var a = index;
  tempCost = 0;
  if(abilities[a].max == abilities[a].purchased){
    medievalAlert("Cannot exceed max for " + abilities[a].name);
    return false;
  }
  if(necromancerCheck(a) == false){
    medievalAlert("Necromancers may not purchase any Enchantments from the Protection School.");
    return false;
  }
  if(warderCheck(a) == false){
    medievalAlert("Warders may not purchase any magic from the Death, Command, or Subdual Schools.");
    return false;
  }
  if(abilities[a].name == "Priest"){
    processPriestPlus();
  }
  if(abilities[a].name == "Necromancer"){
    processNecromancerPlus();
  }
  
  if(checkPointsAvailable(a)){
    tempCost = abilities[a].cost;
    for(let i = abilities[a].level; i < 7; i++){
      if(tempCost > pointsAvailable[i]){
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
          reprocessPoints();   
              
        }
        return 0;
      }      
    }
  }
  else{
    medievalAlert("Not enough available points to buy " + abilities[a].name);
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
  return (tempPoints >= abilities[a].cost); 
}
/*##################################*/
function updatePointsAvailable(){  
  reqLevel = 1;
  for(let i = 1; i < 7; i++){
    document.getElementById("level"+i+"Points").value = pointsAvailable[i];
  }
  for(let i = 1; i < 7; i++){
    if(pointsSpent[i] > 0 || pointsAvailable[i] < 4 || (i == 6 && pointsAvailable[i] < 5)){
      reqLevel = i;
    }
  }
  document.getElementById("reqLevel").value = reqLevel;
  if(reqLevel == 6 && pointsSpent[6] == 6 || reqLevel == 5 && pointsAvailable[6] == 5 || reqLevel == 4 && pointsAvailable[5] == 4 || reqLevel == 3 && pointsAvailable[4] == 4 || reqLevel == 2 && pointsAvailable[3] == 4 || reqLevel == 1 && pointsAvailable[2] == 4){
    document.getElementById("ltp").hidden = false;
    document.getElementById("ltp").innerText = "(Look the Part Required)";
  }
  else{
    document.getElementById("ltp").hidden = true;
    document.getElementById("ltp").innerText = "";
  }
  createURL();
}     
/*##################################*/
function pointMinus(index) {
  var a = index;    
  if(abilities[a].purchased == 0){
    medievalAlert("You can't go into the negatives!");
    return 0;
  }  
  /*I dont think we need this 
  if(!checkPriestMinus(a)){
    medievalAlert("You don't have the points to remove Priest. Heal too expensive.");
    return 0;
  }*/
  if(abilities[a].name == "Priest"){
    processPriestMinus();
  }
  if(abilities[a].name == "Necromancer"){
    processNecromancerMinus();
  } 
  abilities[a].purchased--;
  reprocessPoints();
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
  for(let i = 0; i < abilityCount; i++){
    while(tempPurchased[i] > 0){
      pointPlus(i, false);
      tempPurchased[i]--;
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
  for(let i = 0; i < abilityCount; i++){
    if(abilities[i].school == "Death"){
      abilities[i].charge = "Charge x3";
    }
  }  
}
/*##################################*/
function processNecromancerMinus(){
  for(let i = 0; i < abilityCount; i++){
    if(abilities[i].school == "Death"){
      abilities[i].charge = "";
    }
  }  
}
/*##################################*/
function processPriestPlus(){
  abilities[7].cost = 0;
  for(let i = 0; i < abilityCount; i++){
    if(abilities[i].type == "Meta-Magic"){
      abilities[i].freq = "1/Life Chg x3";
      abilities[i].use = 1;
      abilities[i].per = "Life";
      abilities[i].charge = "Charge x3";
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
    }
    if(abilities[i].name == "Ambulant"){
      abilities[i].freq = "1/Ref";
      abilities[i].per = "Refresh";
    }
  }
}

/*I don't think we need this ##################################*/
/*function checkPriestMinus(index){
  if(abilities[index].name != "Priest"){
    return true;
  }
  var healCost = 0;
  var tempAvailablePoints = [0,0,0,0,0,0,0];
  healCost = abilities[7].purchased;
  
  for(let i = 1; i < 7; i++){
    tempAvailablePoints[i] = pointsAvailable[i];
  }
  tempAvailablePoints[6] = tempAvailablePoints[6] + 1;
  
    
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
  return true;
}*/
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
  incant: "The Spirits banish thee from this place  x3", 
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
  school: "Protection", range: "Touch: Others", materials: "White Strip",
  incant: "I enchant thee against wounds x3", 
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
  incant: "My work shall be undone x3", 
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
  name: "Harden", type: "Enchantment",  freq: "1/Refresh",
  school: "Protection", range: "Touch: Others", materials: "White Strip",
  incant: "I enchant thee with Harden x3", 
  effect: "Bearer's weapons or shield may only be destroyed by Magic Balls/Verbals which destroy objects e.g. Fireball or Pyrotechnics", 
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
  incant: "The white light of healing hath healed thee x5", 
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
  incant: "From thy bindings thou art released x3", 
  effect: "A single ongoing effect or State is removed from the target. Casters choice", 
  limitations: "Cannot remove Cursed. When used to end a State or Ongoing Effect imposed by a magic or ability with multiple effects, all other States and Ongoing Effects from the same source are also ended",
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
  school: "Protection", range: "Touch: Others", materials: "White Strip",
  incant: "I enchant thee with this blessing x3", 
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
  incant: "The strength of earth is mine to evoke x3", 
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
  incant: "From all thine afflictions thou art released x2", 
  effect: "All ongoing effects and States are removed from the target. The caster may choose to leave some States or effects in place", 
  limitations: "",
  notes: "Greater Release may target Dead players. When used to end a State or Ongoing Effect imposed by a magic or ability with multiple effects, all other States and Ongoing Effects from the same source are also ended",
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
  incant: "I command thee to stop x3", 
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
  incant: "Innate", 
  effect: "May be used to instantly Charge a single magic by stating the name of the magic", 
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
  incant: "The spirits lay a curse on thee. x3", 
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
  incant: "My power shoves thee x3", 
  effect: "Target player is moved back 20' in a straight line away from the caster. Works on Stopped players", 
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
  incant: "I summon thy corpse x5", 
  effect: "Target dead player may choose to go to the caster and then counts as though they had not moved from where they died. May be used on a dead player who has not moved from where they died or who is at their respawn", 
  limitations: "",
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
  school: "Protection", range: "Touch: Others", materials: "White Strip",
  incant: "I enchant thee with this protection x3", 
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
  incant: "I command thee to retreat into the aether x3", 
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
  incant: "Extension", 
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
  school: "Protection", range: "Touch: Others", materials: "White Strip",
  incant: "I enchant thee with Greater Harden x3", 
  effect: "Shields and weapons wielded by the player are affected as per Harden. May only be cast on a player", 
  limitations: "",
  notes: "",
  text: ""
};
const Iceball = {
  purchased: 0,
  level: 3,
  cost: 1,
  max: 2, charge: "", use: 2, per: "Ball",
  pointTotalId: "Iceballval",
  name: "Iceball", type: "Magic Ball",  freq: "2 Balls Unlimited",
  school: "Subdual", range: "Ball", materials: "White Magic Ball",
  incant: "The strength of ice is mine to evoke x3", 
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
  incant: "I make this item whole again x5", 
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
  incant: "Sword Cut, spear stab, mace smash, arrow jab, Let the white light of healing descend on thee Let the white light of healing stop thy spilling blood Let the white light of healing mend thy bones Let the white light of healing close thy wounds. Let the white light of healing restore thy vigor. The white light of healing hath resurrected thee.", 
  effect: "Target Dead player who has not moved from where they died is returned to life. Non-Persistent Enchantments on the player are removed before the player returns to life. Any Wounds on the player are healed", 
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
  school: "Death", range: "Touch: Others", materials: "",
  incant: "Rise and fight again x5", 
  effect: "Target Dead player who has not moved from where they died is returned to life and is Cursed. Target is also Suppressed for 30 seconds. Non-Persistent Enchantments on the player are removed before the player returns to life. Any Wounds on the player are healed.", 
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
  school: "Protection", range: "Touch: Others", materials: "White Strip",
  incant: "I enchant thee against all harm x3", 
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
  name: "Circle of Protection", type: "Enchantment",  freq: "1/Ref Chg x10",
  school: "Protection", range: "Self", materials: "",
  incant: "Circle of Protection x3", 
  effect: "The caster and up to five willing players within six inches of the caster become Insubstantial. The caster may end Circle of Protection for all targets at any time by ending their Insubstantial State with the standard Incantation. All targets: Lose all other States and Ongoing Effects. May not move from their starting location.Are unaffected by abilities that require the player to move. May use magic and abilities on players under the effect of the same Circle of Protection as though they were not Insubstantial. May end the effects of Circle of Protection on themselves at any time with the standard Incantation.", 
  limitations: "",
  notes: "",
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
  incant: "By the grace of the divine thou art healed x5", 
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
  school: "Protection", range: "Touch: Others", materials: "White Strip",
  incant: "This shield shall neither bend nor break x3", 
  effect: "Shield wielded by the player cannot be destroyed. Engulfing effects hitting the shield are ignored", 
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
  school: "Protection", range: "Touch: Others", materials: "White Strip",
  incant: "I enchant thee with Protection from Projectiles x3", 
  effect: "Bearer is unaffected by ammunition, thrown javelins, rocks, and throwing weapons. Engulfing effects from those objects, such as Pinning Arrow, do not affect the player", 
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
  incant: "Swift", 
  effect: "Magic and abilities require only a single iteration of the incantation. For multi-line Incantations use the last line", 
  limitations: "May only be used on Magic and Abilities at a range of Ball, Touch, or Self. May not be used on the Charge incantation",
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
  incant: "I travel through the aether x5", 
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
  incant: "By my power I dispel that magic x3", 
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
  incant: "The strength of aether is mine to evoke x3", 
  effect: "Target is Stunned for 60 seconds. Ignores armor", 
  limitations: "May not be used on the Charge incantation",
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
  incant: "Ambulant", 
  effect: "An incantation may be said while moving. May be cast while moving", 
  limitations: "May not be used on the Charge incantation",
  notes: "",
  text: ""
};
const BlessedAura = {
  purchased: 0,
  level: 5,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Refresh",
  pointTotalId: "BlessedAuraval",
  name: "Blessed Aura", type: "Enchantment",  freq: "1/Ref",
  school: "Protection", range: "Touch: Others", materials: "White Strip",
  incant: "I enchant thy person, arms, and armor x3", 
  effect: "Resistant to all effects from the next source which would inflict a Wound, Death, State, or negatively affect them or their carried or worn equipment. Does not trigger against effects cast by the player", 
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
  school: "Protection", range: "Touch: Others", materials: "White Strip",
  incant: "A distant magic has no hold upon thy now enlightened soul x3", 
  effect: "Player is unaffected by Verbal magic used at a Range greater than Touch", 
  limitations: "Affects beneficial magic as well as harmful magic. Does not affect (ex) abilities",
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
  incant: "By the grace of the divine thou art resurrected x5", 
  effect: "Target Dead player who has not moved from where they died is returned to life. Enchantments on the player are retained. Any wounds on the player are healed. Works regardless of any States on the target, and removes Cursed if present.", 
  limitations: "",
  notes: "",
  text: ""
};
const UndeadMinion = {
  purchased: 0,
  level: 5,
  cost: 2,
  max: 31, charge: "", use: 1, per: "Refresh",
  pointTotalId: "UndeadMinionval",
  name: "Undead Minion", type: "Enchantment",  freq: "1/Ref",
  school: "Death", range: "Touch: Others", materials: "Yellow Strip",
  incant: "Flesh rots, bones break, skulls sigh, spirits take let the power of my will descend on thee let the power of my will restore thy spirit let the power of my will knit thy corpse let the power of my will give thee direction let the power of my will cheat thy death by the power of my will, arise my greater minion!", 
  effect: "When the bearer dies, they must return to the caster. While the bearer is enchanted, the caster gains Raise Dead (Unlimited) (m) which can only be cast with the bearer as the target, and ignores the requirement for the bearer to have not moved from where they died. For the duration of the Enchantment, the bearer may treat the caster as a base for the purposes of the effects which require the bearer to go to their base. This enchantment is persistent, and remains active while the bearer is dead.",
  limitations: "The caster may not have more than three active Undead Minion Enchantments.",
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
  incant: "Steal Life", 
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
  school: "Protection", range: "Touch: Others", materials: "White Strip",
  incant: "May this armor protect you from all forms of harm. May the flames of the fire not burn you. May the bolts from the heavens not strike you. May the arrows of your enemies not pierce you. May this armor protect you from all forms of harm", 
  effect: "The effects of a Magic Ball, projectile weapon, or melee weapon which just struck armor worn by the player are ignored, even if the object would not otherwise affect the armor. The armor loses one point of value in the location struck. This effect will not trigger if the armor has no points left in the location struck. Ancestral Armor is not expended after use and will continue to provide protection until removed with Dispel Magic or similar magic or abilities", 
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
  incant: "Let the powers of healing flow through me x3", 
  effect: "Caster may Heal a player by touching them, stating 'I grant thee healing'. Bearer must remove an Enchantment strip after each use of Heal", 
  limitations: "",
  notes: "Mass Healing is removed when the last strip is removed. The effect is not an incantation, and so is not stopped by suppression, and may be used while moving, etc.",
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
  effect: "All magic purchased in the Death School becomes Charge x3. You may have five active Undead Minion Enchantments.", 
  limitations: "You may not purchase any Enchantments from the Protection School",
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
  incant: "Persistent", 
  effect: "Enchantment returns with the user after respawning until it has been otherwise removed", 
  limitations: "",
  notes: "Persistent enchantments with limited uses (Mass Healing, Corrosive Mist, etc.) will retain the number of uses they had remaining. Persistent Magic Armor behaves like normal armor: it will be repaired upon Respawning or retain any prior damage if the bearer is returned to life by some other method, such as Resurrect",
  text: ""
};
const PhoenixTears = {
  purchased: 0,
  level: 6,
  cost: 1,
  max: 31, charge: "", use: 1, per: "Refresh",
  pointTotalId: "PhoenixTearsval",
  name: "Phoenix Tears", type: "Enchantment",  freq: "1/Ref",
  school: "Spirit", range: "Touch: Others", materials: "Two White Strips",
  incant: "May the tears of the phoenix wash over thee x3", 
  effect: "Enchanted player does not die as normal. When the player would otherwise die they instead remove a strip and become Frozen for 30 seconds. When the Frozen State is ended the bearer has: 1. All Wounds removed 2. All States removed that are removed by Death or Respawning 3. All ongoing effects with a timer are expired 4. All of their carried or worn equipment is fully repaired 5. All other enchantments, except those which are Persistent, are removed Additionally Phoenix Tears allows you to wear an extra Enchantment from the Protection School. This extra enchantment is considered Persistent as long as Phoenix Tears is present. The additional Enchantment is not removed once Phoenix Tears is removed", 
  limitations: "",
  notes: "Phoenix Tears is removed when the last strip is removed",
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
  effect: "Meta-magic may only be used on Spirit magics. All Meta-Magics purchased become 1/Life Charge x3. Heal costs zero points", 
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
  school: "Protection", range: "Touch: Others", materials: "White Strip",
  incant: "I enchant thee with protection from magic x3", 
  effect: "Bearer is unaffected by magic from any school. Upon death the player is Cursed", 
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
  incant: "By the power of white light I stun thee x3", 
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
  effect: "Each Enchantment purchased in the Protection School gives double the uses. Example: 1/Life Charge x3 becomes 2/life Charge x3, 2/life becomes 4/life", 
  limitations: "Player may not purchase any magic from the Death, Command, or Subdual Schools",
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
  Abeyance,	//34
  Ambulant,	//35
  BlessedAura,	//36
  DispelMagic,	//37
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
function medievalAlert(message) {
    const modal = document.getElementById('medievalAlert');
    const modalBody = modal.querySelector('.modal-body p');
    modalBody.textContent = message;
    modal.style.display = 'flex';
}
document.getElementById('alertCloseButton').addEventListener('click', function() {
    document.getElementById('medievalAlert').style.display = 'none';
});
function saveList(){
    const textToSave = "Healer Level " + document.getElementById("reqLevel").value + document.getElementById("ltp").innerText + " \n   Level 1 \n" + document.getElementById("lvl1List").innerText + "\n   Level 2 \n" + document.getElementById("lvl2List").innerText + "\n   Level 3 \n" + document.getElementById("lvl3List").innerText + "\n   Level 4 \n" + document.getElementById("lvl4List").innerText + "\n   Level 5 \n" + document.getElementById("lvl5List").innerText + "\n   Level 6 \n" + document.getElementById("lvl6List").innerText;
    const blob = new Blob([textToSave], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'list.txt'; 
    link.click();
    URL.revokeObjectURL(link.href);
}
