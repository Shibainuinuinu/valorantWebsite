//This helps let you automatically scroll to a portion of the homepage using the navigation bar links at the top
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
  
  if (
    location.href === "https://valorantwebsite.glitch.me/gameinfo/agents.html"
  ) {
    const valorantAgentList = {
      BREACH: {
        role: "Initiator",
        description:
          "Breach, the bionic Swede, fires powerful, targeted kinetic blasts to aggressively clear a path through enemy ground. The damage and disruption he inflicts ensures no fight is ever fair.",
        image:
          "https://cdn.glitch.global/31807237-fc8a-4d60-9bbd-d9abe0c08c9c/breach.png?v=1660147943672",
      },
      SKYE: {
        role: "Initiator",
        description:
          "Hailing from Australia, Skye and her band of beasts trail-blaze the way through hostile territory. With her creations hampering the enemy, and her power to heal others, the team is strongest and safest by Skye’s side.",
        image:
          "https://cdn.glitch.global/31807237-fc8a-4d60-9bbd-d9abe0c08c9c/skye.png?v=1660148760086",
      },
      FADE: {
        role: "Initiator",
        description:
          "Turkish bounty hunter, Fade, unleashes the power of raw nightmares to seize enemy secrets. Attuned with terror itself, she hunts targets and reveals their deepest fears—before crushing them in the dark.",
        image:
          "https://cdn.glitch.global/31807237-fc8a-4d60-9bbd-d9abe0c08c9c/fade.png?v=1660148750542",
      },
      SOVA: {
        role: "Initiator",
        description:
          "Born from the eternal winter of Russia's tundra, Sova tracks, finds, and eliminates enemies with ruthless efficiency and precision. His custom bow and incredible scouting abilities ensure that even if you run, you cannot hide.",
        image:
          "https://cdn.glitch.global/31807237-fc8a-4d60-9bbd-d9abe0c08c9c/sova.png?v=1660148747057",
      },
      "KAYO/O": {
        role: "Initiator",
        description:
          "KAY/O is a machine of war built for a single purpose: neutralizing radiants. His power to suppress enemy abilities cripples his opponents' capacity to fight back, securing him and his allies the ultimate edge.",
        image:
          "https://cdn.glitch.global/31807237-fc8a-4d60-9bbd-d9abe0c08c9c/kayo.png?v=1660148742564",
      },
      CHAMBER: {
        role: "Sentinal",
        description:
          "Well dressed and well armed, French weapons designer Chamber expels aggressors with deadly precision. He leverages his custom arsenal to hold the line and pick off enemies from afar, with a contingency built for every plan.",
        image:
          "https://cdn.glitch.global/31807237-fc8a-4d60-9bbd-d9abe0c08c9c/chamber.png?v=1660148738462",
      },
      KILLJOY: {
        role: "Sentinal",
        description:
          "The genius of Germany. Killjoy secures the battlefield with ease using her arsenal of inventions. If the damage from her gear doesn't stop her enemies, her robots' debuff will help make short work of them.",
        image:
          "https://cdn.glitch.global/31807237-fc8a-4d60-9bbd-d9abe0c08c9c/killjoy.png?v=1660148733230",
      },
      SAGE: {
        role: "Sentinal",
        description:
          "The stronghold of China, Sage creates safety for herself and her team wherever she goes. Able to revive fallen friends and stave off aggressive pushes, she provides a calm center to a hellish fight.",
        image:
          "https://cdn.glitch.global/31807237-fc8a-4d60-9bbd-d9abe0c08c9c/sage.png?v=1660149171346",
      },
      CYPHER: {
        role: "Sentinal",
        description:
          "The Moroccan information broker, Cypher is a one-man surveillance network who keeps tabs on the enemy's every move. No secret is safe. No maneuver goes unseen. Cypher is always watching.",
        image:
          "https://cdn.glitch.global/31807237-fc8a-4d60-9bbd-d9abe0c08c9c/cypher.png?v=1660149180030",
      },
      BRIMSTONE: {
        role: "Controller",
        description:
          "Joining from the USA, Brimstone's orbital arsenal ensures his squad always has the advantage. His ability to deliver utility precisely and from a distance makes him an unmatched boots-on-the-ground commander.",
        image:
          "https://cdn.glitch.global/31807237-fc8a-4d60-9bbd-d9abe0c08c9c/brimstone.png?v=1660149187556",
      },
      OMEN: {
        role: "Controller",
        description:
          "A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold as his foe scrambles to learn where he might strike next.",
        image:
          "https://cdn.glitch.global/31807237-fc8a-4d60-9bbd-d9abe0c08c9c/omen.png?v=1660149190529",
      },
      VIPER: {
        role: "Controller",
        description:
          "The American chemist, Viper deploys an array of poisonous chemical devices to control the battlefield and cripple the enemy's vision. If the toxins don't kill her prey, her mind games surely will.",
        image:
          "https://cdn.glitch.global/31807237-fc8a-4d60-9bbd-d9abe0c08c9c/viper.png?v=1660149195480",
      },
      ASTRA: {
        role: "Controller",
        description:
          "Ghanaian Agent Astra harnesses the energies of the cosmos to reshape battlefields to her whim. With full command of her astral form and a talent for deep strategic foresight, she's always eons ahead of her enemy's next move.",
        image:
          "https://cdn.glitch.global/31807237-fc8a-4d60-9bbd-d9abe0c08c9c/astra.png?v=1660149200084",
      },
      JETT: {
        role: "Duelist",
        description:
          "Representing her home country of South Korea, Jett's agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies before they even know what hit them.",
        image:
          "https://cdn.glitch.global/31807237-fc8a-4d60-9bbd-d9abe0c08c9c/jett.png?v=1660149478341",
      },
      PHOENIX: {
        role: "Duelist",
        description:
          "Hailing from the U.K., Phoenix's star power shines through in his fighting style, igniting the battlefield with flash and flare. Whether he's got backup or not, he'll rush into a fight on his own terms.",
        image:
          "https://cdn.glitch.global/31807237-fc8a-4d60-9bbd-d9abe0c08c9c/phoenix.png?v=1660149485715",
      },
      YORU: {
        role: "Duelist",
        description:
          "Japanese native, Yoru, rips holes straight through reality to infiltrate enemy lines unseen. Using deception and aggression in equal measure, he gets the drop on each target before they know where to look.",
        image:
          "https://cdn.glitch.global/31807237-fc8a-4d60-9bbd-d9abe0c08c9c/yoru.png?v=1660149490655",
      },
      RAZE: {
        role: "Duelist",
        description:
          "Raze explodes out of Brazil with her big personality and big guns. With her blunt-force-trauma playstyle, she excels at flushing entrenched enemies and clearing tight spaces with a generous dose of “boom.”",
        image:
          "https://cdn.glitch.global/31807237-fc8a-4d60-9bbd-d9abe0c08c9c/raze.png?v=1660149495229",
      },
      REYNA: {
        role: "Duelist",
        description:
          "Forged in the heart of Mexico, Reyna dominates single combat, popping off with each kill she scores. Her capability is only limited by her raw skill, making her highly dependent on performance.",
        image:
          "https://cdn.glitch.global/31807237-fc8a-4d60-9bbd-d9abe0c08c9c/reyna.png?v=1660149498420",
      },
      NEON: {
        role: "Duelist",
        description:
          "Filipino Agent Neon surges forward at shocking speeds, discharging bursts of bioelectric radiance as fast as her body generates it. She races ahead to catch enemies off guard, then strikes them down quicker than lightning.",
        image:
          "https://cdn.glitch.global/31807237-fc8a-4d60-9bbd-d9abe0c08c9c/neon.png?v=1660149503055",
      },
    };
  
    function handleSelectAgent(e) {
      const agentHeading = document.getElementById("agentHeading");
      const agentType = document.getElementById("agentType");
      const agentName = e.target.innerText;
      const agentDetails = document.getElementById("agentDetails");
      const agentPortrait = document.getElementById("agentPortrait");
  
      agentHeading.innerText = agentName;
      agentType.innerText = "Role: " + valorantAgentList[agentName].role;
      agentDetails.innerText =
        "Biography: " + valorantAgentList[agentName].description;
      document.getElementById("agentPortrait").src =
        valorantAgentList[agentName].image;
    }
  
    document.querySelectorAll(".scrollAgent li").forEach((listItem) => {
      listItem.addEventListener("click", handleSelectAgent);
    });
  }
  
  if (
    location.href === "https://valorantwebsite.glitch.me/gameinfo/weapons.html"
  ) {
    const weaponsList = [
      {
        name: "Classic",
        type: "Sidearm",
        subtitle:
          "Lightweight and versatile, the default weapon for all is an instant classic.",
        description:
          "Primary fire lands precise shots when still, and is equipped with an alternate burst-firing mode for close encounters.",
        image:
          "https://cdn.glitch.global/31807237-fc8a-4d60-9bbd-d9abe0c08c9c/classic.png?v=1660151470868",
      },
      {
        name: "Shorty",
        type: "Sidearm",
        subtitle: "Surprise your enemy up close for max effectiveness.",
        description:
          "A nimble, short barrel shotgun that is deadly at close range but can only fire twice before needing to reload. Pairs well with long range weapons.",
        image:
          "https://cdn.glitch.global/31807237-fc8a-4d60-9bbd-d9abe0c08c9c/shorty.png?v=1660151762560",
      },
      {
        name: "Frenzy",
        type: "Sidearm",
        subtitle: "Up close, hold the trigger. From afar...try something else.",
        description:
          "Lightweight machine pistol that excels at firing on the move. It’s high rate-of-fire can be difficult to control, so try short bursts at medium ranges.",
        image:
          "https://cdn.glitch.global/31807237-fc8a-4d60-9bbd-d9abe0c08c9c/frenzy.png?v=1660151773948",
      },
      {
        name: "Ghost",
        type: "Sidearm",
        subtitle: "Sleek, silenced, and proficient at any range.",
        description:
          "The Ghost is accurate and carries a large magazine if you miss. Distant targets require a controlled fire rate. Quickly tap the trigger when you can see the whites of their eyes.",
        image:
          "https://cdn.glitch.global/31807237-fc8a-4d60-9bbd-d9abe0c08c9c/ghost.png?v=1660151778933",
      },
      {
        name: "Sheriff",
        type: "Sidearm",
        subtitle: "A modern six-shooter for the headshot searcher.",
        description:
          "It’s high-impact rounds pack a ton of recoil and require true grit to master. Wield the Sheriff right, and your enemies will know they were expendable.",
        image:
          "https://cdn.glitch.global/31807237-fc8a-4d60-9bbd-d9abe0c08c9c/sheriff.png?v=1660151784604",
      },
      {
        name: "Stinger",
        type: "SMGS",
        subtitle: "They’ll know it's over when the Stinger splash hits",
        description:
          "This SMG is more potent at medium to long range than its counterparts, but at the cost of firing rate and mobility. The 20-round mag gets wasted in recoil-filled sprays, but lands lethal blows at medium distances with ADS and controlled fire.",
        image:
          "https://cdn.glitch.global/31807237-fc8a-4d60-9bbd-d9abe0c08c9c/stinger.png?v=1660151790119",
      },
      {
        name: "Spectre",
        type: "SMGS",
        subtitle: "When in doubt, the Spectre is your number one.",
        description:
          "A jack-of-all-trades weapon with a great balance of damage, fire rate, and accuracy—at both short and mid range. It haunts the corners of every map and requires only steady aim to drop foes at long distance.",
        image:
          "https://cdn.glitch.global/31807237-fc8a-4d60-9bbd-d9abe0c08c9c/spectre.png?v=1660151794971",
      },
      {
        name: "Bucky",
        type: "Shotgun",
        subtitle:
          "Attacker. Defender. You’re the one with the pump-action shotgun.",
        description:
          "Heavy but stable, Bucky’s primary fire is for holding tight corners or charging close quarters. Alternate fire strikes targets at medium range.",
        image:
          "https://cdn.glitch.global/31807237-fc8a-4d60-9bbd-d9abe0c08c9c/bucky.png?v=1660151802821",
      },
      {
        name: "Judge",
        type: "Shotgun",
        subtitle:
          "Automatic, rapid fire shotgun that provides sustained high damage.",
        description:
          "The Judge is stable at the stand but volatile when fired rapidly. Primary fire hammers short range targets and you’ll need to be steady to nail anything beyond an arm's-length.",
        image:
          "https://cdn.glitch.global/31807237-fc8a-4d60-9bbd-d9abe0c08c9c/judge.png?v=1660151808451",
      },
      {
        name: "Bulldog",
        type: "Rifles",
        subtitle:
          "Some kind of happiness is measured out in taking down enemies with the Bulldog",
        description:
          "A surefire beast when you can pick your shots. Alt. fire let’s you ADS and spew accurate, short bursts at anyone who tries you from medium to long-range.",
        image:
          "https://cdn.glitch.global/31807237-fc8a-4d60-9bbd-d9abe0c08c9c/bulldog.png?v=1660151812929",
      },
      {
        name: "Guardian",
        type: "Rifles",
        subtitle: "Shines in the hands of a patient shooter.",
        description:
          "The designated marksman rifle. Heavier and less mobile relative to other rifles but precise and powerful. Headhunt when enemies appear at medium to long distances.",
        image:
          "https://cdn.glitch.global/31807237-fc8a-4d60-9bbd-d9abe0c08c9c/guardian.png?v=1660151817025",
      },
      {
        name: "Phantom",
        type: "Rifles",
        subtitle: "A balanced weapon built for stable, extended shots.",
        description:
          "Go full auto for anyone who tests you up close and short controlled bursts scramble enemies from anywhere. Best when fired while stationary.",
        image:
          "https://cdn.glitch.global/31807237-fc8a-4d60-9bbd-d9abe0c08c9c/phantom.png?v=1660151825161",
      },
      {
        name: "Vandal",
        type: "Rifles",
        subtitle: "This accurate powerhouse is ferocious in small bursts.",
        description:
          "Extended fire results in less stability, however. The Vandal retains high damage over distance and rewards those who focus single shots at a target’s head.",
        image:
          "https://cdn.glitch.global/31807237-fc8a-4d60-9bbd-d9abe0c08c9c/vandal.png?v=1660151828441",
      },
      {
        name: "Marshal",
        type: "Sniper",
        subtitle:
          "Hold an angle, breathe, and they’ll regret turning that corner.",
        description:
          "A nimble lever-action sniper rifle with a single zoom that can keep bullish enemies at bay. A slow rate of fire means you have to either hit the mark or leave yourself open to attacks.",
        image:
          "https://cdn.glitch.global/31807237-fc8a-4d60-9bbd-d9abe0c08c9c/marshal.png?v=1660151831746",
      },
      {
        name: "Operator",
        type: "Sniper",
        subtitle: "Get cozy and you can control important ground.",
        description:
          "A fierce bolt-action sniper rifle with high-powered dual zoom. Extremely immobile but fires an incredibly powerful round that can devastate a team with one shot.",
        image:
          "https://cdn.glitch.global/31807237-fc8a-4d60-9bbd-d9abe0c08c9c/operator.png?v=1660151835570",
      },
      {
        name: "Ares",
        type: "Heavies",
        subtitle: "Don’t mistake it’s size for clunk.",
        description:
          "The Ares’ large magazine means it excels at suppressive fire or dealing heavy damage to clustered groups.",
        image:
          "https://cdn.glitch.global/31807237-fc8a-4d60-9bbd-d9abe0c08c9c/ares.png?v=1660151839407",
      },
      {
        name: "Odin",
        type: "Heavies",
        subtitle:
          "Wielding this hammer of a machine threatens glory for the holder and ruin for the foe.",
        description:
          "Suppressive, high damage fire with surprising stability. Spray enemies at short range and use alt. fire to make yourself a living turret.",
        image:
          "https://cdn.glitch.global/31807237-fc8a-4d60-9bbd-d9abe0c08c9c/odin.png?v=1660151842233",
      },
      {
        name: "Tactical Knife",
        type: "Melee",
        subtitle: "An intimate solution.",
        description:
          "When in doubt or out of bullets, hit them with this. Lets you run fast, destroy objects faster, or one-shot enemies in the back with alt. fire.",
        image:
          "https://cdn.glitch.global/31807237-fc8a-4d60-9bbd-d9abe0c08c9c/knife.png?v=1660151845669",
      },
    ];
  
    function generateNewWeapon(weapon) {
      const weaponGridElement = document.getElementById("weapons-grid");
      const weaponElementWrapper = document.createElement("div");
  
      // define base state
      const weaponContainer = document.createElement("div");
      const weaponHeader = document.createElement("h1");
      weaponHeader.innerText = weapon.name;
  
      const weaponImage = document.createElement("div");
      const weaponImgTag = document.createElement("img");
      weaponImgTag.src = weapon.image;
      weaponImage.classList.add("center-element");
      weaponImage.classList.add("mock-image");
  
      const weaponSubHeader = document.createElement("div");
      weaponSubHeader.innerText = weapon.subtitle;
  
      weaponContainer.appendChild(weaponHeader);
      weaponImage.appendChild(weaponImgTag);
      weaponContainer.appendChild(weaponImage);
      weaponContainer.appendChild(weaponSubHeader);
  
      // define hover state
      const weaponContainerHover = document.createElement("div");
  
      const weaponHeaderHover = document.createElement("h1");
      weaponHeaderHover.innerText = weapon.name;
  
      const weaponTypeHeaderHover = document.createElement("div");
      weaponTypeHeaderHover.innerText = "TYPES // " + weapon.type;
  
      const weaponParagraphHover = document.createElement("div");
      weaponParagraphHover.innerText = weapon.description;
  
      weaponContainerHover.appendChild(weaponHeaderHover);
      weaponContainerHover.appendChild(weaponTypeHeaderHover);
      weaponContainerHover.appendChild(weaponParagraphHover);
  
      // append the correct container into weapon element wrapper
      weaponElementWrapper.appendChild(weaponContainer);
  
      // add an event listener that changes the element inside of weaponElementWrapper
      weaponElementWrapper.addEventListener("mouseover", () => {
        // when mouse is over the weapon element, display weaponContainerHover
        weaponElementWrapper.innerHTML = "";
        weaponElementWrapper.appendChild(weaponContainerHover);
      });
      weaponElementWrapper.addEventListener("mouseout", () => {
        // when mouse leaves the weapon element, display weaponContainer
        weaponElementWrapper.innerHTML = "";
        weaponElementWrapper.appendChild(weaponContainer);
      });
  
      weaponElementWrapper.classList.add("weaponHoverColors");
      // append completed weapon element to weapons grid
      weaponGridElement.appendChild(weaponElementWrapper);
    }
  
    for (let weapon of weaponsList) {
      generateNewWeapon(weapon);
    }
  }
  
  //We're using an array because order matters
  const mapList = [
    {
      name: "PEARL",
      description:
        "Attackers push down into the Defenders on this two-site map set in a vibrant, underwater city. Pearl is a geo-driven map with no mechanics. Take the fight through a compact mid or the longer range wings in our first map set in Omega Earth.",
      image:
        "https://cdn.glitch.global/31807237-fc8a-4d60-9bbd-d9abe0c08c9c/pearl.png?v=1660152536862",
      pos: 0,
    },
    {
      name: "FRACTURE",
      description:
        "A top secret research facility split apart by a failed radianite experiment. With defender options as divided as the map, the choice is yours: meet the attackers on their own turf or batten down the hatches to weather the assault.",
      image:
        "https://cdn.glitch.global/31807237-fc8a-4d60-9bbd-d9abe0c08c9c/fracture.png?v=1660182211344",
      pos: 1,
    },
    {
      name: "BREEZE",
      description:
        "Take in the sights of historic ruins or seaside caves on this tropical paradise. But bring some cover. You'll need them for the wide open spaces and long range engagements. Watch your flanks and this will be a Breeze.",
      image:
        "https://cdn.glitch.global/31807237-fc8a-4d60-9bbd-d9abe0c08c9c/breeze.png?v=1660182218017",
      pos: 2,
    },
    {
      name: "ICEBOX",
      description:
        "Your next battleground is a secret Kingdom excavation site overtaken by the arctic. The two plant sites protected by snow and metal require some horizontal finesse. Take advantage of the ziplines and they’ll never see you coming.",
      image:
        "https://cdn.glitch.global/31807237-fc8a-4d60-9bbd-d9abe0c08c9c/icebox.png?v=1660182220725",
      pos: 3,
    },
    {
      name: "BIND",
      description:
        "Two sites. No middle. Gotta pick left or right. What’s it going to be then? Both offer direct paths for attackers and a pair of one-way teleporters make it easier to flank.",
      image:
        "https://cdn.glitch.global/31807237-fc8a-4d60-9bbd-d9abe0c08c9c/bind.png?v=1660182223775",
      pos: 4,
    },
    {
      name: "HAVEN",
      description:
        "Beneath a forgotten monastery, a clamour emerges from rival Agents clashing to control three sites. There’s more territory to control, but defenders can use the extra real estate for aggressive pushes.",
      image:
        "https://cdn.glitch.global/31807237-fc8a-4d60-9bbd-d9abe0c08c9c/haven.png?v=1660182227668",
      pos: 5,
    },
    {
      name: "SPLIT",
      description:
        "If you want to go far, you’ll have to go up. A pair of sites split by an elevated center allows for rapid movement using two rope ascenders. Each site is built with a looming tower vital for control. Remember to watch above before it all blows sky-high.",
      image:
        "https://cdn.glitch.global/31807237-fc8a-4d60-9bbd-d9abe0c08c9c/split.png?v=1660182231143",
      pos: 6,
    },
    {
      name: "ASCENT",
      description:
        "An open playground for small wars of position and attrition divide two sites on Ascent. Each site can be fortified by irreversible bomb doors; once they’re down, you’ll have to destroy them or find another way. Yield as little territory as possible.",
      image:
        "https://cdn.glitch.global/31807237-fc8a-4d60-9bbd-d9abe0c08c9c/ascent.png?v=1660182233965",
      pos: 7,
    },
  ];
  
  class MapDisplay {
    constructor(maps, pos) {
      this.maps = maps;
      this.currentPos = pos || 0;
    }
  
    initialize() {
      if (
        location.href === "https://valorantwebsite.glitch.me/gameinfo/maps.html"
      ) {
        console.log("ran initialization for map display");
  
        // add event handlers for left/right buttons
        const getNextMap = this.getNextMap.bind(this);
        document
          .getElementById("map-right-arrow")
          .addEventListener("click", getNextMap);
  
        const getPrevMap = this.getPrevMap.bind(this);
        document
          .getElementById("map-left-arrow")
          .addEventListener("click", getPrevMap);
  
        this.displayMap();
      }
    }
  
    displayMap() {
      // change current display to some map based on this.currentPos
      /*
        define reference to map-image in HTML
        define reference to map-description in HTML
        
        change the reference properties/attributes to reflect that of the current map (map at currentPos)
      */
  
      const mapImageContainer = document.getElementById("map-image");
      mapImageContainer.src = this.maps[this.currentPos].image;
  
      const mapNameElement = document.getElementById("map-name");
      mapNameElement.innerText = this.maps[this.currentPos].name;
  
      const mapDescriptionElement = document.getElementById("map-description");
      mapDescriptionElement.innerText = this.maps[this.currentPos].description;
    }
  
    //This function was not called anywhere yet but it's for the bottom left when you can just jump to any map immediately
    changeMap(pos) {
      // change currentPosition and display new map at that position
      /*
        change currentPos to input pos
        call displayMap()
      */
      if (pos >= 0 && pos <= this.maps.length - 1) {
        this.currentPos = pos;
        this.displayMap();
      }
    }
  
    getNextMap() {
      // swap to next map in list if any exist
      /*
        Check if there is a next map, if no next map do nothing
        otherwise increment currentPos and call displayMap()
      */
      if (this.currentPos === this.maps.length - 1) return;
      this.currentPos++;
      this.displayMap();
    }
  
    getPrevMap() {
      // swap to previous map in list if any exist
      /*
        Check if there is a prev map, if no prev map do nothing
        otherwise decrement currentPos and call displayMap()
      */
      if (this.currentPos === 0) return;
      this.currentPos--;
      this.displayMap();
    }
  }
  
  const mapDisplay = new MapDisplay(mapList);
  // initialize mapDisplay;
  mapDisplay.initialize();
  
  // console.log(mapDisplay)
  // shows:
  // MapDisplay{
  //   maps: mapList,
  //   currentPos: 0
  // }
  