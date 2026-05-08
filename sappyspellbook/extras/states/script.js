document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM is fully loaded.");
    document.getElementById("buttons").scrollIntoView({ behavior: "smooth" });
  });
  
  function showText(state){
    document.getElementById("Cursed").hidden = true; 
    document.getElementById("Fragile").hidden = true;      
    document.getElementById("Frozen").hidden = true;     
    document.getElementById("Insubstantial").hidden = true;    
    document.getElementById("Invulnerable").hidden = true;  
    document.getElementById("Stopped").hidden = true;     
    document.getElementById("Stunned").hidden = true;     
    document.getElementById("Suppressed").hidden = true;   
    
    document.getElementById(state).hidden = false; 
    console.log(state);
    document.getElementById(state).scrollIntoView({ behavior: "smooth" });
  }
  
