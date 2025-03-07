function loadScript(abilities, caster){
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
  loadScript(abilities, "bard")
  loadScript(abilities, "druid")
  loadScript(abilities, "healer")
  loadScript(abilities, "wizard")
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


function parseSpellText(spell) {
  // Regex patterns for extracting spell attributes
  const regexPatterns = {
    freq: /<p3>Freq:<\/p3>\s*([^<]*)/,
    school: /<p3>School:<\/p3>\s*([^<]*)/,
    range: /<p3>Range:<\/p3>\s*([^<]*)/,
    materials: /<p3>Materials:<\/p3>\s*([^<]*)/,
    effect: /<p3>Effect:<\/p3>\s*([^<]*)/,
    limitations: /<p3>Limitations:<\/p3>\s*([^<]*)/,
    notes: /<p3>Notes:<\/p3>\s*([^<]*)/,
    incant: /<p3>Incant:<\/p3>\s*(<I>.*?<\/I>(?:\s*x\d+)?)/ // Handles incantations with <I>...</I>
  };

  let extractedData = {};

  for (let key in regexPatterns) {
    let match = spell.text.match(regexPatterns[key]);
    extractedData[key] = match ? match[1].trim().replace(/<BR>/g, " ") : "";
  }

  // Special handling for "Effect" to preserve multiple lines properly
  if (spell.text.includes("<p3>Effect:</p3>")) {
    let effectMatch = spell.text.split("<p3>Effect:</p3>")[1]?.split("<p3>")[0]; 
    extractedData.effect = effectMatch ? effectMatch.replace(/<BR>/g, " ").trim() : "";
  }

  // debugging
  // console.log(extractedData.effect)
  // console.log(spell.text)

  return {
    ...spell,
    freq: extractedData.freq,
    school: extractedData.school,
    range: extractedData.range,
    materials: extractedData.materials,
    effect: extractedData.effect,
    limitations: extractedData.limitations,
    notes: extractedData.notes,
    incant: extractedData.incant,
    text: "" // Clear out the original text field
  };
}