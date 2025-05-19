const eggs = [
  {
    name: "Common Egg",
    image: "images/Common_Egg.webp",
    world: "Overworld",
    pets: [
      { name: "King Doggy (Secret)", baseOdds: 100000000, icon: "images/pets/King_Doggy.webp" }
    ]
  },
  {
    name: "Spikey Egg",
    image: "images/Spikey_Egg.webp",
    world: "Overworld",
    pets: [
      { name: "Emerald Golem", baseOdds: 200, icon: "images/pets/Emerald_Golem.webp" }
    ]
  },
  {
    name: "Magma Egg",
    image: "images/Magma_Egg.webp",
    world: "Overworld",
    pets: [
      { name: "Inferno Dragon", baseOdds: 400, icon: "images/pets/Inferno_Dragon.webp" }
    ]
  },
  {
    name: "Crystal Egg",
    image: "images/Crystal_Egg.webp",
    world: "Overworld",
    pets: [
      { name: "Unicorn", baseOdds: 400, icon: "images/pets/Unicorn.webp" },
      { name: "Flying Pig", baseOdds: 1000, icon: "images/pets/Flying_Pig.webp" }
    ]
  },
  {
    name: "Lunar Egg",
    image: "images/Lunar_Egg.webp",
    world: "Overworld",
    pets: [
      { name: "Lunar Serpent", baseOdds: 400, icon: "images/pets/Lunar_Serpent.webp" },
      { name: "Electra", baseOdds: 1000, icon: "images/pets/Electra.webp" }
    ]
  },
  {
    name: "Void Egg",
    image: "images/Void_Egg.webp",
    world: "Overworld",
    pets: [
      { name: "Dark Phoenix", baseOdds: 2000, icon: "images/pets/Dark_Phoenix.webp" },
      { name: "Neon Elemental", baseOdds: 5000, icon: "images/pets/Neon_Elemental.webp" },
      { name: "NULLVoid", baseOdds: 1000000, icon: "images/pets/NULLVoid.webp" }
    ]
  },
  {
    name: "Hell Egg",
    image: "images/Hell_Egg.webp",
    world: "Overworld",
    pets: [
      { name: "Inferno Cube", baseOdds: 4000, icon: "images/pets/Inferno_Cube.webp" },
      { name: "Virus", baseOdds: 50000, icon: "images/pets/Virus.webp" }
    ]
  },
  {
    name: "Nightmare Egg",
    image: "images/Nightmare_Egg.webp",
    world: "Overworld",
    pets: [
      { name: "Green Hydra", baseOdds: 25000, icon: "images/pets/Green_Hydra.webp" },
      { name: "Demonic Hydra", baseOdds: 100000, icon: "images/pets/Demonic_Hydra.webp" },
      { name: "The Overlord (Secret)", baseOdds: 50000000, icon: "images/pets/The_Overlord.webp" }
    ]
  },
  {
    name: "Rainbow Egg",
    image: "images/Rainbow_Egg.webp",
    world: "Overworld",
    pets: [
      { name: "Hexarium", baseOdds: 100000, icon: "images/pets/Hexarium.webp" },
      { name: "Rainbow Shock", baseOdds: 200000, icon: "images/pets/Rainbow_Shock.webp" },
      
    ]
  },
  {
    name: "Mining Egg",
    image: "images/Mining_Egg.webp",
    world: "Minigame Paradise",
    pets: [
      { name: "Crystal Unicorn", baseOdds: 2000, icon: "images/pets/Crystal_Unicorn.webp" },
      { name: "Stone Gargoyle", baseOdds: 20000, icon: "images/pets/Stone_Gargoyle.webp" },
      { name: "Prophet (Secret)", baseOdds: 250000000, icon: "images/pets/Prophet.webp" },
    ]
  },
  {
    name: "Chance Egg",
    image: "images/Chance_Egg.webp",
    world: "Limited",
    pets: [
      { name: "Ring Master", baseOdds: 100000, icon: "images/pets/Ring_Master.webp" },
      { name: "Royal Guardian", baseOdds: 20000000, icon: "images/pets/Royal_Guardian.webp" }
    ]
  },
  {
    name: "Cyber Egg",
    image: "images/Cyber_Egg.webp",
    world: "Minigame Paradise",
    pets: [
      { name: "Cyborg Phoenix", baseOdds: 2500, icon: "images/pets/Cyborg_Phoenix.webp" },
      { name: "Space Invader", baseOdds: 50000, icon: "images/pets/Space_Invader.webp" },
      { name: "Bionic Shard", baseOdds: 666666, icon: "images/pets/Bionic_Shard.webp" },
      { name: "Mech Robot (Secret)", baseOdds: 66666666, icon: "images/pets/Mech_Robot.webp" }
    ]
  },
  {
    name: "Neon Egg",
    image: "images/Neon_Egg.webp",
    world: "Minigame Paradise",
    pets: [
      { name: "Neon Wyvern", baseOdds: 3333, icon: "images/pets/Neon_Wyvern.webp" },
      { name: "Neon Wire Eye", baseOdds: 66666, icon: "images/pets/Neon_Wire_Eye.webp" },
      { name: "Equalizer", baseOdds: 833333, icon: "images/pets/Equalizer.webp" },
      { name: "Hyperwave Kitty (Secret)", baseOdds: 125000000, icon: "images/pets/Hyperwave_Kitty.webp" }
    ]
  },
  {
    name: "Underworld Egg",
    image: "images/Underworld_Egg.webp",
    world: "Limited",
    pets: [
      { name: "Crimson Butterfly", baseOdds: 2000, icon: "images/pets/Crimson_Butterfly.webp" },
      { name: "Demonweb", baseOdds: 40000, icon: "images/pets/Demonweb.webp" },
      { name: "Crimson Bloodmoon", baseOdds: 833333, icon: "images/pets/Crimson_Bloodmoon.webp" },
      { name: "Lord Shock (Secret)", baseOdds: 500000000, icon: "images/pets/Lord_Shock.webp" },
    ]
  },
  {
    name: "Secret Bounty Egg",
    image: "images/Infinity_Egg.webp",
    world: "Limited",
    pets: [
      { name: "Queen Kitty (Secret)", baseOdds: 80000000, icon: "images/pets/Queen_Kitty.webp" },
      { name: "D0GGY1337 (Secret)", baseOdds: 50000000, icon: "images/pets/D0GGY1337.webp" },
      { name: "Prophet (Secret)", baseOdds: 250000000, icon: "images/pets/Prophet.webp" }
    ]
  }

];

const eggList = document.getElementById("egg-list");
const searchBar = document.getElementById("search-bar");

// Initialize the current world
let currentWorld = "Overworld"; // Default world

// Add event listeners to the buttons for each world
document.getElementById("overworld-btn").addEventListener("click", () => {
  currentWorld = "Overworld";
  renderEggs(); // Reload eggs for the Overworld world
});

document.getElementById("minigame-btn").addEventListener("click", () => {
  currentWorld = "Minigame Paradise";
  renderEggs(); // Reload eggs for the Minigame Paradise world
});

document.getElementById("limited-btn").addEventListener("click", () => {
  currentWorld = "Limited";
  renderEggs(); // Reload eggs for the Limited world
});

// Render eggs based on the current world
function renderEggs() {
  const eggList = document.getElementById("egg-list");
  eggList.innerHTML = ""; // Clear existing eggs

  // Filter the eggs based on the selected world
  const filteredEggs = eggs.filter(egg => egg.world === currentWorld);

  // Render the filtered eggs
  filteredEggs.forEach(createEggCard);
}

function createEggCard(egg) {
  const card = document.createElement("div");
  card.className = "egg-card";
  card.dataset.eggName = egg.name.toLowerCase();

  const eggHeader = document.createElement("div");
  eggHeader.className = "egg-header";
  eggHeader.innerHTML = `
    <img src="${egg.image}" alt="${egg.name}" />
    <h2>${egg.name}</h2>
    <div class="mode-buttons">
      <button class="mode-btn" data-mode="base">Base</button>
      <button class="mode-btn" data-mode="mythic">Mythic</button>
      <button class="mode-btn" data-mode="shiny">Shiny</button>
      <button class="mode-btn" data-mode="shiny-mythic">Shiny Mythic</button>
    </div>
  `;

  const controls = document.createElement("div");
  controls.className = "controls";
  controls.innerHTML = `
    <label>Multiplier:</label>
    <select class="multiplier">
      <option value="1">1x (Base)</option>
      <option value="5">5x</option>
      <option value="10">10x</option>
      <option value="25">25x</option>
    </select>
    <label>Luck Bonus (%):</label>
    <input type="number" class="luck" value="0" />
  `;

  const table = document.createElement("table");
  table.innerHTML = `
    <thead>
      <tr>
        <th>Pet</th>
        <th>Base Odds</th>
        <th>Adjusted (1 in X)</th>
        <th>Adjusted (%)</th>
      </tr>
    </thead>
    <tbody class="pet-list"></tbody>
  `;

  card.appendChild(eggHeader);
  card.appendChild(controls);
  card.appendChild(table);
  eggList.appendChild(card);

  const multiplierSelect = controls.querySelector(".multiplier");
  const luckInput = controls.querySelector(".luck");
  const petList = table.querySelector(".pet-list");
  const modeButtons = eggHeader.querySelectorAll(".mode-btn");

  let currentMode = "base";

  function updateChances() {
    const multiplier = parseFloat(multiplierSelect.value);
    let luckPercent = parseFloat(luckInput.value);
  
   if (egg.name === "200M Egg") {
    if (luckPercent < 2000) {
      luckPercent = Math.max(0, luckPercent - 100);
    } else {
      luckPercent = Math.max(0, luckPercent - 200);
    }
  }
  
    const totalBoost = multiplier === 1
      ? (100 + luckPercent) / 100
      : (100 + luckPercent + (multiplier * 100)) / 100;
  
    petList.innerHTML = "";
  
    egg.pets.forEach(pet => {
      let modifiedOdds = pet.baseOdds;
  
      switch (currentMode) {
        case "shiny":
          modifiedOdds *= 40;
          break;
        case "mythic":
          modifiedOdds *= 100;
          break;
        case "shiny-mythic":
          modifiedOdds *= 4000;
          break;
      }
  
      const baseChance = 1 / modifiedOdds;
      const adjustedChance = baseChance * totalBoost;
      const adjustedPercent = (adjustedChance * 100).toFixed(5);
      const adjustedOdds = adjustedChance > 0 ? Math.round(1 / adjustedChance).toLocaleString() : "∞";
  
      const row = document.createElement("tr");
      row.innerHTML = `
        <td class="pet-name">
          <img src="${pet.icon}" alt="${pet.name}" />
          <div>${pet.name}</div>
        </td>
        <td>1 in ${Math.round(modifiedOdds).toLocaleString()}</td>
        <td>1 in ${adjustedOdds}</td>
        <td>${adjustedPercent}%</td>
      `;
      petList.appendChild(row);
    });
  }
  
  

  multiplierSelect.addEventListener("change", updateChances);
  luckInput.addEventListener("input", updateChances);

  modeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      currentMode = btn.dataset.mode;
      modeButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      updateChances();
    });
  });

  updateChances(); // Initialize values
}

// Initialize with the default world (Overworld)
renderEggs();

searchBar.addEventListener("input", () => {
  const query = searchBar.value.toLowerCase();
  const cards = document.querySelectorAll(".egg-card");

  cards.forEach(card => {
    const name = card.dataset.eggName;
    card.style.display = name.includes(query) ? "" : "none";
  });
});