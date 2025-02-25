var abilities = {}
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
// loadScript("bard")
// loadScript("druid")
// loadScript("healer")
// loadScript("wizard")

// https://wiki.amtgard.com/Sash
// var colors = {
//   "Anti-Paladin" : ["Silver", "#C0C0C0"]
//   ,"Archer" : ["Orange", "#ff6600" ]
// }

function getColor(backgroundColors, selector) {
  // Parse parent and child selectors
  const [parentSelector, childSelector] = selector.split(' ');

  // Create parent element (e.g., .midnav or .topnav)
  const parentElement = document.createElement('div');
  parentElement.className = parentSelector.replace('.', '');

  // Create child element (e.g., <a class="Archer">)
  const [childTag, childClass] = childSelector.split('.');
  const childElement = document.createElement(childTag || 'div');
  if (childClass) childElement.className = childClass;

  // Nest child inside parent
  parentElement.appendChild(childElement);
  document.body.appendChild(parentElement);

  // Get computed background color
  const computedStyle = window.getComputedStyle(childElement);
  backgroundColors[selector] = computedStyle.backgroundColor;

  // Cleanup
  document.body.removeChild(parentElement);
}

function loadExternalCSS(cssUrl, classGroups) {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = cssUrl;
    console.log(link)

    link.onload = () => {
      const backgroundColors = {};

      classGroups[0].forEach(martial => {
        getColor(backgroundColors, ".midnav a."+martial)
      });
      classGroups[1].forEach(caster => {
        getColor(backgroundColors, ".topnav a."+caster)
      });

      resolve(backgroundColors);
    };

    link.onerror = () => reject(new Error(`Failed to load CSS: ${cssUrl}`));

    document.head.appendChild(link);
  });
}

var selectors = [["Anti-Paladin", "Archer", "Assassin", "Barbarian", "Monk", "Paladin", "Peasant", "Reeve", "Scout", "Warrior", "Monster"], ["Bard", "Druid", "Healer", "Wizard"]]
var colors = loadExternalCSS('../Martial/style.css', selectors)
  .then(colors => console.log('Background Colors:', colors))
  .catch(err => console.error(err));