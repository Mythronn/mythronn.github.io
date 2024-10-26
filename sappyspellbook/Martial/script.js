document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM is fully loaded.");
  });
  
  function showText(archetype){
    document.getElementById("Anti-PaladinText").hidden = true; 
    document.getElementById("CorruptorText").hidden = true;      
    document.getElementById("InfernalText").hidden = true;     
    document.getElementById("ArcherText").hidden = true;    
    document.getElementById("SniperText").hidden = true;  
    document.getElementById("ArtificerText").hidden = true;     
    document.getElementById("AssassinText").hidden = true;     
    document.getElementById("RuffianText").hidden = true;   
    document.getElementById("SpyText").hidden = true;  
    document.getElementById("BarbarianText").hidden = true;   
    document.getElementById("RaiderText").hidden = true;    
    document.getElementById("BerserkerText").hidden = true;     
    document.getElementById("MonkText").hidden = true;     
    document.getElementById("MediumText").hidden = true;     
    document.getElementById("MysticText").hidden = true;   
    document.getElementById("PaladinText").hidden = true;    
    document.getElementById("GuardianText").hidden = true;    
    document.getElementById("JusticarText").hidden = true;     
    document.getElementById("ScoutText").hidden = true;     
    document.getElementById("HunterText").hidden = true;    
    document.getElementById("ApexText").hidden = true;     
    document.getElementById("WarriorText").hidden = true;     
    document.getElementById("MarauderText").hidden = true;    
    document.getElementById("JuggernautText").hidden = true;
    document.getElementById(archetype).hidden = false; //<---show
  }
  
  function medievalAlert(message) {
      const modal = document.getElementById('medievalAlert');
      const modalBody = modal.querySelector('.modal-body p');
      modalBody.textContent = message;
      modal.style.display = 'flex';
  }
  document.getElementById('alertCloseButton').addEventListener('click', function() {
      document.getElementById('medievalAlert').style.display = 'none';
  });