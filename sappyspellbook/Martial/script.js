document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM is fully loaded.");
    document.getElementById("buttons").scrollIntoView({ behavior: "smooth" });
  });
  
  function showText(archetype){
    document.getElementById("Anti-PaladinText").hidden = true; 
    document.getElementById("CorruptorText").hidden = true;      
    document.getElementById("InfernalText").hidden = true;     
    document.getElementById("ArcherText").hidden = true;    
    document.getElementById("SniperText").hidden = true;  
    document.getElementById("ArtificerText").hidden = true;     
    document.getElementById("AssassinText").hidden = true;     
    document.getElementById("RogueText").hidden = true;   
    document.getElementById("SpyText").hidden = true;  
    document.getElementById("BarbarianText").hidden = true;   
    document.getElementById("RaiderText").hidden = true;    
    document.getElementById("BerserkerText").hidden = true;     
    document.getElementById("MonkText").hidden = true;     
    document.getElementById("MediumText").hidden = true;     
    document.getElementById("MysticText").hidden = true;   
    document.getElementById("PaladinText").hidden = true;    
    document.getElementById("GuardianText").hidden = true;    
    document.getElementById("InquisitorText").hidden = true;     
    document.getElementById("ScoutText").hidden = true;     
    document.getElementById("HunterText").hidden = true;    
    document.getElementById("ApexText").hidden = true;     
    document.getElementById("WarriorText").hidden = true;     
    document.getElementById("MarauderText").hidden = true;    
    document.getElementById("JuggernautText").hidden = true;
    
    document.getElementById(archetype).hidden = false; //<---show
    console.log(archetype);
    document.getElementById(archetype).scrollIntoView({ behavior: "smooth" });
  }

  function printMartial(archetype){

 let archetypeText = "";

 if(archetype == "Antipaladin"){
  archetypeText = `<div class="card">
      <div class="title"><u>Anti-Paladin</u></div>       
        <div class="entry"><b>Poison: 1/Life Charge x3 (ex)</b><i> - I coat these weapons with a deadly poison x2</i></div>      
        <div class="entry"><b>Steal Life Essence: 1/Life Charge x5 (m)</b><i> - Steal life</i></div>      
        <div class="entry"><b>Brutal Strike: 1/Life Charge x10 (ex)(Ambulant)</b><i> - And stay down!</i></div>      
        <div class="entry"><b>Terror: 2/Life (m)(LTP)</b><i> - Death makes thee terrified x3</i></div>      
        <div class="entry"><b>Flame Blade: 	2/Refresh (ex)</b><i> - The element of fire shall infuse your weapons x3</i></div>              
    </div>`;
 } 
  if(archetype == "Corruptor"){
  archetypeText = `<div class="card">
      <div class="title"><u>Corruptor</u></div>       
        <div class="entry"><b>Poison: 1/Life Charge x3 (ex)</b><i> - I coat these weapons with a deadly poison x2</i></div>      
        <div class="entry"><b>Steal Life Essence: 1/Life Charge x5 (m)</b><i> - Steal life</i></div>      
        <div class="entry"><b>Brutal Strike: 1/Life Charge x10 (ex)(Ambulant)</b><i> - And stay down!</i></div>      
        <div class="entry"><b>Terror: 2/Life Charge x10 (m)(LTP)</b><i> - Death makes thee terrified x3</i></div>      
        <div class="entry"><b>Void Touched: 2/Refresh (m)</b><i> - Embrace the old ones and surrender thyself x3</i></div>             
    </div>`;
 } 
  if(archetype == "Infernal"){
  archetypeText = `<div class="card">
      <div class="title"><u>Infernal</u></div>       
        <div class="entry"><b>Poison: 1/Life Charge x3 (ex)</b><i> - I coat these weapons with a deadly poison x2</i></div>    
        <div class="entry"><b>Brutal Strike: 1/Life Charge x10 (ex)(Ambulant)</b><i> - And stay down!</i></div>  
        <div class="entry"><b>Terror: 2/Life Charge (m)(LTP)</b><i> - Death makes thee terrified x3</i></div> 
        <div class="entry"><b>Flame Blade: 2/Refresh Charge x5 (ex)</b><i> - The element of fire shall infuse your weapons x3</i></div> 
        <div class="entry"><b>Fireball:	2 Ball / Unlimited (m)</b><i> - The flame of fire is mine to evoke x3</i></div>                        
    </div>`;
 } 
  if(archetype == "Archer"){
  archetypeText = `<div class="card">
      <div class="title"><u>Archer</u></div>       
        <div class="entry"><b>Reload: 1/Life Charge x5 (ex)</b><i> - I nocked my arrows to my bow, I let them fly, my quiver is low. Now I pause to go reload. x3</i></div>      
        <div class="entry"><b>Mend: 1/Refresh Charge x5 (ex)</b><i> - I make this item whole again x5</i></div>      
        <div class="entry"><b>Destruction Arrow: 0-4 Arrows / Unlimited (ex)(LTP)</b><i> - Destruction Arrow</i></div>
        <div class="entry"><b>Pinning Arrow: 0-4 Arrows / Unlimited (ex)(LTP)</b><i> - Pinning Arrow</i></div>    
        <div class="entry"><b>Poison Arrow: 0-4 Arrows / Unlimited (ex)(LTP)</b><i> - Poison Arrow</i></div>    
        <div class="entry"><b>Suppression Arrow: 1 Arrow / Unlimited (ex)</b><i> - Suppression Arrow</i></div>    
        <div class="entry"><b>Phase Arrow: 1 Arrow / Unlimited (ex)</b><i> - Phase Arrow</i></div>                       
    </div>`;
 } 
  if(archetype == "Sniper"){
  archetypeText = `<div class="card">
      <div class="title"><u>Sniper</u></div>       
        <div class="entry"><b>Reload: 1/Life Charge x5 (ex)</b><i> - I nocked my arrows to my bow, I let them fly, my quiver is low. Now I pause to go reload. x3</i></div>      
        <div class="entry"><b>Mend: 2/Refresh Charge x5 (ex)(LTP)</b><i> - I make this item whole again x5</i></div>     
        <div class="entry"><b>Momentum: (Ambulant) (Unlimited) (ex)</b><i> - Momentum</i></div>   
        <div class="entry"><b>Destruction Arrow: 1 Arrow/Life Charge x3 (ex)</b><i> - Destruction Arrow</i></div>
        <div class="entry"><b>Pinning Arrow: 1 Arrow/Life Charge x3 (ex)</b><i> - Pinning Arrow</i></div>    
        <div class="entry"><b>Poison Arrow: 1 Arrow/Life Charge x3 (ex)</b><i> - Poison Arrow</i></div>    
        <div class="entry"><b>Suppression Arrow: 1 Arrow/Life Charge x3 (ex)</b><i> - Suppression Arrow</i></div>    
        <div class="entry"><b>Phase Arrow: 1 Arrow/Life Charge x3 (ex)</b><i> - Phase Arrow</i></div>              
    </div>`;
 } 
  if(archetype == "Artificer"){
  archetypeText = `<div class="card">
      <div class="title"><u>Artificer</u></div>       
        <div class="entry"><b>Reload: 1/Life Charge x5 (ex)</b><i> - I nocked my arrows to my bow, I let them fly, my quiver is low. Now I pause to go reload. x3</i></div>      
        <div class="entry"><b>Mend: 2/Life Charge x3 Casting Mend on weapons or ahields does not consume a use of Mend. (ex)</b><i> - I make this item whole again x5</i></div>     
        <div class="entry"><b>Pinning Arrow: 4 Arrows / Unlimited (ex)(LTP)</b><i> - Pinning Arrow</i></div>   
        <div class="entry"><b>Suppression Arrow: 1 Arrow / Unlimited (ex)</b><i> - Suppression Arrow</i></div>    
        <div class="entry"><b>Phase Arrow: 1 Arrow / Unlimited (ex)</b><i> - Phase Arrow</i></div>    
        <div class="entry"><b>Greater Mend: 2/Refresh Charge x10 (ex)</b><i> - Return this [object name] to its former glory x5</i></div>           
    </div>`;
 } 
  if(archetype == "Assassin"){
  archetypeText = `<div class="card">
      <div class="title"><u>Assassin</u></div>       
        <div class="entry"><b>Assassinate: Unlimited (ex) (Ambulant)</b><i> - Assassinate</i></div>      
        <div class="entry"><b>Shadow Step: 2/Life (ex) (Ambulant)</b><i> - I step into the shadows</i></div>      
        <div class="entry"><b>Poison: 0-1/Life Charge x3 (ex)(LTP)</b><i> - I coat these weapons with a deadly poison x2</i></div>      
        <div class="entry"><b>Poison Arrow: 0-2 Arrows / Unlimited (ex)(LTP)</b><i> - Poison Arrow</i></div>      
        <div class="entry"><b>Blink: 2/Life (ex) (Ambulant)</b><i> - I vanish from sight</i></div>
        <div class="entry"><b>Hold Person: 1/Life (m)</b><i> - I command thee to stop x3</i></div>
        <div class="entry"><b>Teleport: 2/Life (ex) (Ambulant)</b><i> - I travel through the aether x5</i></div>
        <div class="entry"><b>Coup de Grace: 	1/Life (m)</b><i> - Death shall come for thee x3</i></div>              
    </div>`;
 } 
  if(archetype == "Rogue"){
  archetypeText = `<div class="card">
      <div class="title"><u>Rogue</u></div>       
        <div class="entry"><b>Assassinate: Unlimited (ex) (Ambulant)</b><i> - Assassinate</i></div>      
        <div class="entry"><b>Shadow Step: 2/Life (ex) (Ambulant)</b><i> - I step into the shadows</i></div>      
        <div class="entry"><b>Poison: 0-1/Life Charge x3 (ex)(LTP)</b><i> - I coat these weapons with a deadly poison x2</i></div> 
        <div class="entry"><b>Blink: 2/Life (ex) (Ambulant)</b><i> - I vanish from sight</i></div>
        <div class="entry"><b>Hold Person: 1/Life (m)</b><i> - I command thee to stop x3</i></div>
        <div class="entry"><b>Teleport: 2/Life (ex) (Ambulant)</b><i> - I travel through the aether x5</i></div>
        <div class="entry"><b>Coup de Grace: 	1/Life Regain a use upon killing a player with a thrown weapon. (m)</b><i> - Death shall come for thee x3</i></div>               
    </div>`;
 } 
  if(archetype == "Spy"){
  archetypeText = `<div class="card">
      <div class="title"><u>Spy</u></div>       
        <div class="entry"><b>Assassinate: Unlimited (ex) (Ambulant)</b><i> - Assassinate</i></div>      
        <div class="entry"><b>Shadow Step: 2/Life Charge x3 (ex) (Ambulant)</b><i> - I step into the shadows</i></div>      
        <div class="entry"><b>Poison: 0-1/Life Charge x3 (ex)(LTP)</b><i> - I coat these weapons with a deadly poison x2</i></div>      
        <div class="entry"><b>Poison Arrow: 0-2 Arrows / Unlimited (ex)(LTP)</b><i> - Poison Arrow</i></div>      
        <div class="entry"><b>Blink: 2/Life Charge x3 (ex) (Ambulant)</b><i> - I vanish from sight</i></div>
        <div class="entry"><b>Hold Person: 1/Life (m)</b><i> - I command thee to stop x3</i></div>
        <div class="entry"><b>Teleport: 2/Life (ex) (Ambulant)</b><i> - I travel through the aether x5</i></div>
        <div class="entry"><b>Coup de Grace: 	1/Life (m)</b><i> - Death shall come for thee x3</i></div>              
    </div>`;
 } 
  if(archetype == "Barbarian"){
  archetypeText = `<div class="card">
      <div class="title"><u>Barbarian</u></div>       
        <div class="entry"><b>Rage: 3/Refresh Charge x10 (ex)(LTP) (Ambulant)</b><i> - I am filled with rage!</i></div>      
        <div class="entry"><b>Adrenaline: Unlimited (ex)</b><i> - Adrenaline</i></div>      
        <div class="entry"><b>Brutal Strike: 1/Life Charge x3 (ex) (Ambulant)</b><i> - And stay down!</i></div>      
        <div class="entry"><b>Blood and Thunder: 	Unlimited (ex)</b><i> - Blood and Thunder!</i></div>                  
    </div>`;
 } 
  if(archetype == "Raider"){
  archetypeText = `<div class="card">
      <div class="title"><u>Raider</u></div>       
        <div class="entry"><b>Bear Strength: 1/Life (ex)</b><i> - I enchant thee with the strength of the bear x3</i></div>      
        <div class="entry"><b>Adrenaline: Unlimited (ex)</b><i> - Adrenaline</i></div>      
        <div class="entry"><b>Brutal Strike: 2/Life Charge x3 (ex)(LTP) (Ambulant)</b><i> - And stay down!</i></div>      
        <div class="entry"><b>Blood and Thunder: 	Unlimited (ex)</b><i> - Blood and Thunder!</i></div>           
    </div>`;
 } 
  if(archetype == "Berserker"){
  archetypeText = `<div class="card">
      <div class="title"><u>Berserker</u></div>       
        <div class="entry"><b>Rage: 3/Refresh Charge x10 (ex)(LTP) (Ambulant)</b><i> - I am filled with rage!</i></div>      
        <div class="entry"><b>Adrenaline: Unlimited (ex)</b><i> - Adrenaline</i></div>      
        <div class="entry"><b>Brutal Strike: 1/Life Charge x3 (ex) (Ambulant)</b><i> - And stay down!</i></div>      
        <div class="entry"><b>Momentum: Unlimited (ex) (Ambulant)</b><i> - Momentum</i></div>             
    </div>`;
 } 
  if(archetype == "Monk"){
  archetypeText = `<div class="card">
      <div class="title"><u>Monk</u></div>       
        <div class="entry"><b>Banish: 1/Life Charge x5 (ex)</b><i> - The spirits banish thee from this place x3</i></div>      
        <div class="entry"><b>Sanctuary: 1/Life Charge x5 (ex) (Ambulant)</b><i> - Sanctuary</i></div>      
        <div class="entry"><b>Heal: 2/Life Charge x3 (ex)(LTP)</b><i> - The white light of healing hath healed thee. x5</i></div>      
        <div class="entry"><b>Resurrect: 1/Refresh Charge x5 (m)</b><i> - Sword Cut, spear stab mace smash, arrow jab, Let the white light of healing descend on thee. Let the white light of healing stop thy spilling blood. Let the white light of healing mend thy bones. Let the white light of healing close thy wounds. Let the white light of healing restore thy vigor. The white light of healing hath resurrected thee.</i></div>      
        <div class="entry"><b>Innate: 1/Life (ex)</b><i> - Innate</i></div>              
    </div>`;
 } 
  if(archetype == "Medium"){
  archetypeText = `<div class="card">
      <div class="title"><u>Medium</u></div>       
        <div class="entry"><b>Banish: 1/Life Charge x5 (ex)</b><i> - The spirits banish thee from this place x3</i></div>      
        <div class="entry"><b>Sanctuary: 1/Life Charge x5 (ex) (Ambulant)</b><i> - Sanctuary</i></div>      
        <div class="entry"><b>Heal: 2/Life Charge x3 (ex)(LTP)</b><i> - The white light of healing hath healed thee. x5</i></div>      
        <div class="entry"><b>Resurrect: 1/Refresh Charge x5 (m)</b><i> - Sword Cut, spear stab mace smash, arrow jab, Let the white light of healing descend on thee. Let the white light of healing stop thy spilling blood. Let the white light of healing mend thy bones. Let the white light of healing close thy wounds. Let the white light of healing restore thy vigor. The white light of healing hath resurrected thee.</i></div>      
        <div class="entry"><b>Innate: 1/Life (ex)</b><i> - Innate</i></div>            
    </div>
    <div class="card">
      <div class="title"><u>Medium</u></div>       
        <div class="entry"><b>Blessing Against Wounds: 1/Life (ex)</b><i> - I enchant thee against wounds x3</i></div> 
        <div class="entry"><b>Sever Spirit: 1/Life Charge x3 (ex)</b><i> - The spirits lay a curse on thee x3</i></div> 
        <div class="entry"><b>Swift: 2/Life (ex)</b><i> - Swift</i></div>               
    </div>`;
 } 
  if(archetype == "Mystic"){
  archetypeText = `<div class="card">
      <div class="title"><u>Mystic</u></div>       
        <div class="entry"><b>Banish: 1/Life Charge x5 (ex)</b><i> - The spirits banish thee from this place x3</i></div>      
        <div class="entry"><b>Sanctuary: 1/Life Charge x5 (ex) (Ambulant)</b><i> - Sanctuary</i></div>      
        <div class="entry"><b>Heal: 2/Life Charge x3 (ex)(LTP)</b><i> - The white light of healing hath healed thee. x5</i></div>      
        <div class="entry"><b>Force Bolt: 4 Balls/Unlimited (m)</b><i> - Forcebolt x3</i></div>     
        <div class="entry"><b>Suppression Bolt: 2 Balls/Unlimited (m)</b><i> - The strength of suppression is mine to evoke x3</i></div>      
        <div class="entry"><b>Innate: 1/Life (ex)</b><i> - Innate</i></div>                
    </div>`;
 } 
  if(archetype == "Paladin"){
  archetypeText = `<div class="card">
      <div class="title"><u>Paladin</u></div>       
        <div class="entry"><b>Greater Heal: 1/Life Charge x3 (m)</b><i> - By the grace of the divine thou art healed x5</i></div>      
        <div class="entry"><b>Extend Immunities: 1/Refresh Charge x5 (ex)</b><i> - May the blessing of my god protect thee x3</i></div>      
        <div class="entry"><b>Greater Resurrect: 1/Life (m)</b><i> - By the grace of the divine thou art resurrected x5</i></div>      
        <div class="entry"><b>Awe: 2/Life (m)(LTP)</b><i> - I command thee awed x3</i></div>      
        <div class="entry"><b>Protection from Magic: 2/Refresh (m)</b><i> - I enchant thee with protection from magic x3</i></div>              
    </div>`;
 } 
  if(archetype == "Guardian"){
  archetypeText = `<div class="card">
      <div class="title"><u>Guardian</u></div>       
        <div class="entry"><b>Greater Heal: 1/Life Charge x3 (m)</b><i> - By the grace of the divine thou art healed x5</i></div>      
        <div class="entry"><b>Martyr: 2/Life Charge x3 (ex)</b><i> - Thy burdens are mine to bear</i></div>      
        <div class="entry"><b>Greater Resurrect: 1/Life (m)</b><i> - By the grace of the divine thou art resurrected x5</i></div>      
        <div class="entry"><b>Awe: 2/Life (m)(LTP)</b><i> - I command thee awed x3</i></div>      
        <div class="entry"><b>Imbue Shield: 1/Life (m)</b><i> - This shield shall neither bend nor break x3</i></div>              
    </div>`;
 } 
  if(archetype == "Inquisitor"){
  archetypeText = `<div class="card">
      <div class="title"><u>Inquisitor</u></div>       
        <div class="entry"><b>Greater Heal: 1/Life Charge x3 (m)</b><i> - By the grace of the divine thou art healed x5</i></div>      
        <div class="entry"><b>Extend Immunities: 1/Refresh Charge x5 (ex)</b><i> - May the blessing of my god protect thee x3</i></div>      
        <div class="entry"><b>Sacred Blades: 1/Life (ex)</b><i> - I sanctify these weapons to smite the wicked x2</i></div>      
        <div class="entry"><b>Awe: 2/Life (m)(LTP)</b><i> - I command thee awed x3</i></div>      
        <div class="entry"><b>Protection from Magic: 2/Refresh (m)</b><i> - I enchant thee with protection from magic x3</i></div>              
    </div>`;
 } 
  if(archetype == "Scout"){
  archetypeText = `<div class="card">
      <div class="title"><u>Scout</u></div>       
        <div class="entry"><b>Tracking: 2/Life Charge x3 (ex) (Ambulant)</b><i> - Tracking x3</i></div>      
        <div class="entry"><b>Heal: 2/Life (ex)(LTP)</b><i> - The white light of healing hath healed thee x5</i></div>      
        <div class="entry"><b>Release: 1/Life Charge x3 (ex)</b><i> - From thy bindings thou art released x5</i></div>      
        <div class="entry"><b>Dispel Magic: 1/Refresh Charge x5 (ex)</b><i> - By my power I dispel that magic x3</i></div>      
        <div class="entry"><b>Shadow Step: 1/Life (ex) (Ambulant)</b><i> - I step into the shadows</i></div>
        <div class="entry"><b>Hold Person: 0-1/Life (m)</b><i> - I command thee to stop x3</i></div>
        <div class="entry"><b>Pinning Arrow: 0-1 Arrow / Unlimited (ex)</b><i> - Pinning Arrow</i></div>
        <div class="entry"><b>Adaptive Protection: 1/Life (ex)</b><i> - I enchant thee with this protection x3</i></div>              
    </div>`;
 } 
  if(archetype == "Hunter"){
  archetypeText = `<div class="card">
      <div class="title"><u>Hunter</u></div>       
        <div class="entry"><b>Tracking: 2/Life Charge x3 (ex) (Ambulant)</b><i> - Tracking x3</i></div>      
        <div class="entry"><b>Heal: 2/Life (ex)(LTP)</b><i> - The white light of healing hath healed thee x5</i></div>      
        <div class="entry"><b>Dispel Magic: 1/Refresh Charge x5 (ex)</b><i> - By my power I dispel that magic x3</i></div>      
        <div class="entry"><b>Shadow Step: 1/Life (ex) (Ambulant)</b><i> - I step into the shadows</i></div>
        <div class="entry"><b>Hold Person: 0-1/Life Charge x3 (m)</b><i> - I command thee to stop x3</i></div>
        <div class="entry"><b>Pinning Arrow: 0-2 Arrow / Unlimited (ex)</b><i> - Pinning Arrow</i></div>
        <div class="entry"><b>Adaptive Protection: 1/Life (ex)</b><i> - I enchant thee with this protection x3</i></div>              
    </div>`;
 } 
  if(archetype == "Apex"){
  archetypeText = `<div class="card">
      <div class="title"><u>Apex</u></div>       
        <div class="entry"><b>Tracking: 2/Life Charge x3 (ex) (Ambulant)</b><i> - Tracking x3</i></div>      
        <div class="entry"><b>Heal: 2/Life (ex)(LTP)</b><i> - The white light of healing hath healed thee x5</i></div>      
        <div class="entry"><b>Release: 1/Life Charge x3 (ex)</b><i> - From thy bindings thou art released x5</i></div>      
        <div class="entry"><b>Dispel Magic: 1/Refresh Charge x5 (ex)</b><i> - By my power I dispel that magic x3</i></div>      
        <div class="entry"><b>Shadow Step: 1/Life (ex) (Ambulant)</b><i> - I step into the shadows</i></div>
        <div class="entry"><b>Sleight of Mind: 1/Life (ex)</b><i> - May thy power remain x3</i></div>
        <div class="entry"><b>Mend: 1/Life (ex)</b><i> - I make this item whole again x5</i></div>
        <div class="entry"><b>Adaptive Protection: 1/Life (ex)</b><i> - I enchant thee with this protection x3</i></div>              
    </div>`;
 } 
  if(archetype == "Warrior"){
  archetypeText = `<div class="card">
      <div class="title"><u>Warrior</u></div>       
        <div class="entry"><b>Harden: 1/Life (ex)</b><i> - I enchant thee with harden x3</i></div>      
        <div class="entry"><b>Scavenge: Unlimited (ex)</b><i> - Scavenge</i></div>      
        <div class="entry"><b>True Grit: 2/Refresh (ex)</b><i> - The wicked flee when I pursue</i></div>      
        <div class="entry"><b>Insult: 2/Life (m) (Ambulant)(LTP)</b><i> - I command thy attention x3</i></div>      
        <div class="entry"><b>Shake It Off: 1/Refresh Charge x3 (ex)</b><i> - I shall overcome</i></div>
        <div class="entry"><b>Ancestral Armor: 3/Refresh Charge x10 (ex) (Swift)</b><i> - May this armor protect thee from all forms of harm</i></div>              
    </div>`;
 } 
  if(archetype == "Marauder"){
  archetypeText = `<div class="card">
      <div class="title"><u>Marauder</u></div>       
        <div class="entry"><b>Harden: 1/Life (ex)</b><i> - I enchant thee with harden x3</i></div>      
        <div class="entry"><b>Scavenge: Unlimited (ex)</b><i> - Scavenge</i></div>      
        <div class="entry"><b>True Grit: 2/Refresh (ex)</b><i> - The wicked flee when I pursue</i></div>      
        <div class="entry"><b>Insult: 2/Life Charge x5 (m) (Ambulant)(LTP)</b><i> - I command thy attention x3</i></div>      
        <div class="entry"><b>Shake It Off: 1/Refresh Charge x3 (ex)</b><i> - I shall overcome</i></div>
        <div class="entry"><b>Ancestral Armor: 3/Refresh (ex) (Swift)</b><i> - May this armor protect thee from all forms of harm</i></div>
        <div class="entry"><b>Momentum: Unlimited (ex) (Ambulant)</b><i> - Momentum</i></div>               
    </div>`;
 } 
  if(archetype == "Juggernaut"){
  archetypeText = `<div class="card">
      <div class="title"><u>Juggernaut</u></div>       
        <div class="entry"><b>Greater Harden: 1/Life (ex)</b><i> - I enchant thee with Greater Harden x3</i></div>      
        <div class="entry"><b>Scavenge: Unlimited (ex)</b><i> - Scavenge</i></div>      
        <div class="entry"><b>Insult: 2/Life (m) (Ambulant)(LTP)</b><i> - I command thy attention x3</i></div>      
        <div class="entry"><b>Shake It Off: 1/Refresh Charge x3 (ex)</b><i> - I shall overcome</i></div>
        <div class="entry"><b>Phoenix Tears: 3/Refresh (ex) (Swift)</b><i> - May the tears of the phoenix wash over thee x3</i></div>              
    </div>`;
 } 

let htmlContent =  `<html>
<head>
  <title>Printable Spell Cards</title>
  <style>
    @media print {
      body {
        margin: 0;
        padding: 0;
      }
    }
    body {
      font-family: Arial, sans-serif;
    }
    .card {
      width: 4.5in;
      height: 2.6in;
      box-sizing: border-box;
      border: 1px solid #000;
      padding: 0.1in;
      margin: 0.1in;
      display: inline-block;
      vertical-align: top;
      font-size: 10pt;
    }
    .entry {
      margin-bottom: 0.2em;
    }
    .title {
      font-weight: bold;
      margin-bottom: 0.5em;
    }
  </style>
</head>
<body>` + archetypeText +

  `<script>window.onload = () => window.print();</script>
</body>
</html>`

const blob = new Blob([htmlContent], { type: 'text/html' });
const url = URL.createObjectURL(blob);
window.open(url, '_blank');
}
  
