const eggs = [
    {
      name: "Common Egg",
      image: "images/Common_Egg.webp",
      pets: [
        { name: "King Doggy (Secret)", baseOdds: 100000000, icon: "images/pets/King_Doggy.webp" }
      ]
    },
    
      {
        name: "Spikey Egg",
        image: "images/Spikey_Egg.webp",
        pets: [
          { name: "Emerald Golem", baseOdds: 200, icon: "images/pets/Emerald_Golem.webp" }
        ]
      },
      {
        name: "Magma Egg",
        image: "images/Magma_Egg.webp",
        pets: [
          { name: "Inferno Dragon", baseOdds: 400, icon: "images/pets/Inferno_Dragon.webp" }
        ]
      },
      {
        name: "Crystal Egg",
        image: "images/Crystal_Egg.webp",
        pets: [
          { name: "Unicorn", baseOdds: 400, icon: "images/pets/Unicorn.webp" },
          { name: "Flying Pig", baseOdds: 1000, icon: "images/pets/Flying_Pig.webp" }
        ]
      },
      {
        name: "Lunar Egg",
        image: "images/Lunar_Egg.webp",
        pets: [
          { name: "Lunar_Serpent", baseOdds: 400, icon: "images/pets/Lunar_Serpent.webp" },
          { name: "Electra", baseOdds: 1000, icon: "images/pets/Electra.webp" }
        ]
      },
      {
        name: "Void Egg",
        image: "images/Void_Egg.webp",
        pets: [
          { name: "Dark Phoenix", baseOdds: 2000, icon: "images/pets/Dark_Phoenix.webp" },
          { name: "Neon Elemntal", baseOdds: 5000, icon: "images/pets/Neon_Elemental.webp" },
          { name: "NULLVoid", baseOdds: 1000000, icon: "images/pets/NULLVoid.webp" }
        ]
      },
      {
        name: "Hell Egg",
        image: "images/Hell_Egg.webp",
        pets: [
          { name: "Inferno Cube", baseOdds: 4000, icon: "images/pets/Inferno_Cube.webp" },
          { name: "Virus", baseOdds: 50000, icon: "images/pets/Virus.webp" }
        ]
      },
      {
        name: "Nightmare Egg",
        image: "images/Nightmare_Egg.webp",
        pets: [
          { name: "Green Hydra", baseOdds: 25000, icon: "images/pets/Green_Hydra.webp" },
          { name: "Demonic Hydra", baseOdds: 100000, icon: "images/pets/Demonic_Hydra.webp" },
          { name: "The Overlord (Secret)", baseOdds: 1000000, icon: "images/pets/The_Overlord.webp" }
        ]
      },
      {
        name: "Rainbow Egg",
        image: "images/Rainbow_Egg.webp",
        pets: [
          { name: "Hexarium", baseOdds: 100000, icon: "images/pets/Hexarium.webp" },
          { name: "Rainbow Shock", baseOdds: 200000, icon: "images/pets/Rainbow_Shock.webp" }
        ]
      },
      {
        name: "100M Egg",
        image: "images/100M_Egg.webp",
        pets: [
          { name: "Diamond Serpent", baseOdds: 2500, icon: "images/pets/Diamond_Serpent.webp" },
          { name: "Diamond Hexarium", baseOdds: 50000, icon: "images/pets/Diamond_Hexarium.webp" },
          { name: "King Pufferfish", baseOdds: 800000, icon: "images/pets/King_Pufferfish.webp" },
          { name: "Royal Trophy (Secret)", baseOdds: 50000000, icon: "images/pets/Royal_Trophy.webp" }
        ]
      },
      {
        name: "Silly Egg",
        image: "images/Silly_Egg.webp",
        pets: [
          { name: "DOOF", baseOdds: 10000, icon: "images/pets/DOOF.webp" },
          { name: "ROUND", baseOdds: 250000, icon: "images/pets/ROUND.webp" },
          { name: "Silly Doggy (Secret)", baseOdds: 1000000, icon: "images/pets/Silly_Doggy.webp" }
        ]
      }

    // Add up to 11 eggs total
  ];
  
  const eggList = document.getElementById("egg-list");
  
  function createEggCard(egg) {
    const card = document.createElement("div");
    card.className = "egg-card";
  
    const eggHeader = document.createElement("div");
    eggHeader.className = "egg-header";
    eggHeader.innerHTML = `<img src="${egg.image}" alt="${egg.name}" />
                           <h2>${egg.name}</h2>`;
  
    const controls = document.createElement("div");
    controls.className = "controls";
    controls.innerHTML = `
      <label>Multiplier:</label>
      <select class="multiplier">
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
  
    function updateChances() {
      const multiplier = parseFloat(multiplierSelect.value);
      const luckPercent = parseFloat(luckInput.value);
      const luckMultiplier = 1 + luckPercent / 100;
  
      petList.innerHTML = "";
  
      egg.pets.forEach(pet => {
        const baseChance = 1 / pet.baseOdds;
        const adjustedChance = baseChance * luckMultiplier * multiplier;
        const adjustedOneIn = adjustedChance > 0 ? Math.round(1 / adjustedChance).toLocaleString() : "∞";
        const adjustedPercent = (adjustedChance * 100).toFixed(5);
  
        const row = document.createElement("tr");
        row.innerHTML = `
          <td class="pet-name">
            <img src="${pet.icon}" alt="${pet.name}" />
            ${pet.name}
          </td>
          <td>1 in ${pet.baseOdds.toLocaleString()}</td>
          <td>1 in ${adjustedOneIn}</td>
          <td>${adjustedPercent}%</td>
        `;
        petList.appendChild(row);
      });
    }
  
    // Initial render and live updates
    updateChances();
    multiplierSelect.addEventListener("change", updateChances);
    luckInput.addEventListener("input", updateChances);
  }
  
  // Render all eggs
  eggs.forEach(createEggCard);
  