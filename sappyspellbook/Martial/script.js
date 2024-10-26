document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM is fully loaded.");
  });
  
  function showText(archetype){
    document.getElementById("Anti-Paladin").hidden = true; 
    document.getElementById("Corruptor").hidden = true;      
    document.getElementById("Infernal").hidden = true;     
    document.getElementById("Archer").hidden = true;    
    document.getElementById("Sniper").hidden = true;  
    document.getElementById("Artificer").hidden = true;     
    document.getElementById("Assassin").hidden = true;     
    document.getElementById("Ruffian").hidden = true;   
    document.getElementById("Spy").hidden = true;  
    document.getElementById("Barbarian").hidden = true;   
    document.getElementById("Raider").hidden = true;    
    document.getElementById("Berserker").hidden = true;     
    document.getElementById("Monk").hidden = true;     
    document.getElementById("Medium").hidden = true;     
    document.getElementById("Mystic").hidden = true;   
    document.getElementById("Paladin").hidden = true;    
    document.getElementById("Guardian").hidden = true;    
    document.getElementById("Justicar").hidden = true;     
    document.getElementById("Scout").hidden = true;     
    document.getElementById("Hunter").hidden = true;    
    document.getElementById("Apex").hidden = true;     
    document.getElementById("Warrior").hidden = true;     
    document.getElementById("Marauder").hidden = true;    
    document.getElementById("Juggernaut").hidden = true;
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