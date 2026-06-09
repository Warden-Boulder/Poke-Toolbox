function evoitem() {
  const evoSelect = document.getElementById("evolution");
  const info = document.getElementById("evo-info");
  const evo = evoSelect.value;

  let name = "";
  let evolution = "";
  let item = "";
  let note = "";

  if (evo === "apple") {
    name = "Applin";
    evolution = "Flapple, Appletun, Dipplin/Hydrapple";
    item = "Tart Apple, Sweet Apple, Syrupy Apple";
    note = "Applin will evolove into either Flapple when exposed to a Tart Apple, into Appletun when exposed to a Sweet Apple, or into Dipplin when exposed to a Syurpy Apple then evolve into Hydrapple when leveled up while knowing the move Dragon Cheer";
  } else if (evo === "cadet") {
    name = "Charcadet";
    evolution = "Aramarouge, Ceruledge";
    item = "Auspicious Armor, Malicious Armor";
    note = "Charcadet will evolove into either Aramarouge when exposed to a set of Auspicious Armor or into Ceruledge when exposed to a set of Malicious Armor";
  } else if (evo === "charge") {
    name = "Charjabug";
    evolution = "Vikavolt";
    item = "Thunder Stone";
    note = "Charjabug will evolove into Vikavolt via Thunder Stone in Gen 8 and later otherwise evoloves when exposed to a Special Magnetic Field in Gen 7";
  } else if (evo === "pearl") {
    name = "Clamperl";
    evolution = "Gorebyss, Huntail";
    item = "Deep Sea Scale, Deep Sea Tooth";
    note = "Clamperl will evolove into either Gorebyss when traded while holding a Deep Sea Scale or into Huntail when traded while holding a Deep Sea Tooth";
  } else if (evo === "duralast") {
    name = "Duraludon";
    evolution = "Archaludon";
    item = "Metal Alloy";
    note = "Duraludon will evolove into Archaludon when exposed to a hunk of Metal Alloy only in Gen 9 and later";
  } else if (evo === "dusk") {
    name = "Dusclops";
    evolution = "Dusknoir";
    item = "Reaper Cloth";
    note = "Dusclops will evolove into Dusknoir when traded while holding the Reaper Cloth";
  } else if (evo === "eve") {
    name = "Eevee";
    evolution = "Flareon, Glaceon, Leafeon, Jolteon, Vaporeon";
    item = "Fire Stone, Ice Stone, Leaf Stone, Thunder Stone, Water Stone";
    note = "Eevee will evolve into Flareon when exposed to a Fire Stone, Gaceon when exposed to a Ice Stone (starting in Gen 8) or when leveled up near an Ice Rock (Gen 7 and earlier), Leafeon when expose to a Leaf Stone (starting in Gen 8), Jolteon when exposed to a Thunder Stone, and into Vaporeon when exposed to a Thunder Stone. All other Eeveelutions are friendship based.";
  } else if (evo === "buzz") {
    name = "Electabuzz";
    evolution = "Electivire";
    item = "Electirizer";
    note = "Electabuzz will evolve into Electivier when traded while holding a Electirizer";
  } else if (evo === "beauty") {
    name = "Feebas";
    evolution = "Milotic";
    item = "Prism Scale";
    note = "Feebas will evolve into Milotic when traded while holding a Prism Scale (starting in Gen 5) or by level up with a high beauty (170+ and in games where feebas appears alongside the beauty stat";
  } else if (evo === "glide") {
    name = "Gliagr";
    evolution = "Gliscor";
    item = "Fazor Fang";
    note = "Gligor will evolve into Gliscor when leveled up at night while holding a Razor Fang";
  } else if (evo === "gloom") {
    name = "Gloom";
    evolution = "Vileplume, Bellossom";
    item = "Leaf Stone, Sun Stone";
    note = "Gloom will evolve into Vileplume when exposed to Leaf Stone and into Bellossom when exposed to a Sun Stone";
  } else if (evo === "happy") {
    name = "Happiny";
    evolution = "Chansey";
    item = "Oval Stone";
    note = "Happiny will evolve into Chansey when leveled up during the daytime qhile holding a Oval Stone";
  } else if (evo === "cub") {
    name = "Kubfu";
    evolution = "Urshifu";
    item = "Scroll of Darkness, Scroll of Waters";
    note = "Kubfu will into either Single Strike Stlye Urshifu when exposed to a Scroll of Darkness (Gen 9) and into Rapid Strike Style Urshifu when exposed to a Scroll of Waters (Gen 9)";
  } else if (evo === "magma") {
    name = "Magmar";
    evolution = "Magmortar";
    item = "Magmarizer";
    note = "Magmar will evolve into Magmortar when traded while holding a Magmarizer";
  } else if (evo === "magnet") {
    name = "Magneton";
    evolution = "Magnezone";
    item = "Thunder Stone";
    note = "Magneton will evolve into Mahnezone when exposed to a Thunder Stone (Gen 8+)";
  } else if (evo === "milk") {
    name = "Milcery";
    evolution = "Alcremie";
    item = "Various Sweets";
    note = "Milcery will evolve into Alcremie while holding a sweet and then spinning in place";
  } else if (evo === "compass") {
    name = "Nosepass";
    evolution = "Probopass";
    item = "Thunder Stone";
    note = "Nosepass will evolve into Probopass when exposed to a Thunder Stone (Gen 8+)";
  } else if (evo === "onyx") {
    name = "Onix";
    evolution = "Steelix";
    item = "Metal Coat";
    note = "Onix will evolve into Steelix when traded while holding a Metal Coat";
  } else if (evo === "poly") {
    name = "Poliwhirl";
    evolution = "Water Stone, King's Rock";
    item = "Poliwrath, Politoad";
    note = "Poliwhirl will evolve into Poliwrath when exposed to Water Stone and evolve into Politoad when traded while holding a King's Rock";
  } else if (evo === "poltygheist") {
    name = "Poltchgeist";
    evolution = "Sinistcha";
    item = "Unremarkable Teacup, Masterpiece Teacup";
    note = "Poltchgeist will evolve into Sinistcha (counterfeit form) when exposed to a Unremarkable Teacup and into Sinistcha (artisan form) when exposed to a Masterpiece Teacup. The form is dependant on the stamp of authenticity being present on the Poltchgeist.";
  } else if (evo === "polygon") {
    name = "Porygon";
    evolution = "Porygon 2, Porygon Z";
    item = "Upgrade, Dubious Disc";
    note = "Porygon will evlove into Porygon 2 when traded while holding the Upgrade item and Porygon 2 will evolve into Porygon Z when traded while holind a Dubious Disc";
  } else if (evo === "ride") {
    name = "Rhydon";
    evolution = "Rhyperior";
    item = "Protector";
    note = "Rhydon will evolve into Rhyperior when traded while holind a Protector";
  } else if (evo === "scythe") {
    name = "Scyther";
    evolution = "Scizor, Kleavor";
    item = "Metal Coat, Black Augurite";
    note = "Scyther will evolve into either Scizor when traded while holding a Metal Coat and into Kleavor when exposed to a Black Augurite";
  } else if (evo === "sea") {
    name = "Sedra";
    evolution = "Kingdra";
    item = "Dragon Scale";
    note = "Sedra will evolve into Kingdra when traded while holding a Dragon Scale";
  } else if (evo === "tea") {
    name = "Sinistea";
    evolution = "Polteageist";
    item = "Cracked Pot, Chipped Pot";
    note = "Sinistea will evolve into Polteageist (phony form) when exposed to a Cracked Pot and into Polteageist (antique form) when exposed to a Chipped Pot. The form is dependant on the stamp of authenticity being present on the Sinistea.";
  } else if (evo === "slow") {
    name = "Slowpoke";
    evolution = "Slowbro, Slowking";
    item = "King's Rock, Galarica Cuff, Galarica Wreath";
    note = "Slowpoke will evolve into Slowking when traded while holding a King's Rock and will evolve into SLowbro starting at level 37. While Galarian Slowpoke will evolve into Galarian Slowbro when exposed to a Galarica Cuff and into Galarian Slowking when exposed to a Galarica Wreath";
  } else if (evo === "sneak") {
    name = "Sneasel";
    evolution = "Weavile, Sneasler";
    item = "Razor Claw";
    note = "Sneasel will evolve into Weavile while holding a Razor Claw and leveled up at night while Hisuian Sneasel will evolve into Sneasler while holding a Razor Claw and leveled up during the day.";
  } else if (evo === "spritz") {
    name = "Spritzee";
    evolution = "Aromatisse";
    item = "Sachet";
    note = "Spritzee will evolve into Aromatisse when traded while holding a Sachet.";
  } else if (evo === "swirl") {
    name = "Swirlix";
    evolution = "Slurpuff";
    item = "Whipped Dream";
    note = "Swirlix will evolve into Slurpuff when traded while holding a Whipped Dream.";
  } else if (evo === "ursa") {
    name = "Ursaring";
    evolution = "Ursaluna";
    item = "Peat Block ";
    note = "Ursaring will evolve into Ursaluna when exposed to a Peat Block during a Full Moon.";
  } else if (evo === "sun") {
    name = "Sunkern";
    evolution = "Sunflora";
    item = "Sun Stone";
    note = "Sunkern will evolve into Sunflora when exposed to a Sun Stone";
  } else if (evo === "weep") {
    name = "Weepinbell";
    evolution = "Victreebel";
    item = "Leaf Stone";
    note = "Weepinvl will evolve into Victreebell when exposed to a Leaf Stone";
  }

  if (name !== "") {
  info.innerHTML = `
    <strong>Pokémon:</strong> ${name}<br>
    <strong>Evolution(s):</strong> ${evolution}<br>
    <strong>Required Item(s):</strong> ${item}<br>
    <strong>Notes:</strong> ${note}
  `;
} else {
  info.textContent = "";
  }
}