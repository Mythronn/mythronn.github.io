function loadScript(caster){
  const iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  document.body.appendChild(iframe);
  
  const iframeWindow = iframe.contentWindow;
  const script = iframeWindow.document.createElement('script');
  script.src = '../'+caster+'/script.js';
  script.onload = () => {
      abilities[caster] = iframeWindow.getAbilities()
      document.body.removeChild(iframe); // Clean up
    };
    iframeWindow.document.body.appendChild(script);
  }

function getCasterAbilities(){
  var abilities = {}
  loadScript("bard")
  loadScript("druid")
  loadScript("healer")
  loadScript("wizard")
  return abilities
}

// https://wiki.amtgard.com/Sash
function getClassColorImmunity(){
  return {
    "Anti-Paladin": ["Silver", "#C0C0C0", ["Command", "Flame"]],
    "Archer": ["Orange", "#ff6600", []],
    "Assassin": ["Black", "#000000", []],
    "Barbarian": ["White", "#ffffff", ["Command", "Subdual"]],
    "Bard": ["Blue", "#0047AB", []],
    "Druid": ["Brown", "#83441a", []],
    "Healer": ["Red", "#ac0404", []],
    "Monk": ["Grey", "#7c7c7c", ["Ranged Verbals"]],
    "Monster": ["No sash, appropriate garb", "", []],
    "Paladin": ["Gold", "#D3AF37", ["Command", "Death"]],
    "Peasant": ["No Sash, no Garb", "", []],
    "Reeve": ["Black and White, Checkered or Striped", "", []],
    "Scout": ["Green", "#00a800", []],
    "Warrior": ["Purple", "#8400b8", []],
    "Wizard": ["Yellow", "#FFD700", []]
  };
}