


 insults = [
    "Baselessly", "Bootlessly", "Clamorously", "Coarsely", "Cravenly", "Dastardly", "Disdainfully", "Dishonestly", "Dolorously", "Drunkenly", "Fawningly", "Fearfully", "Flippantly", "Foolishly", "Fretfully", "Giddily", "Grotesquely", "Hysterically", "Infamously", "Insolently", "Jealously", "Lubberly", "Maliciously", "Miserably", "Monstrously", "Mumblingly", "Nonsensically", "Obnoxiously", "Ostentatiously", "Palpably", "Perfidiously", "Perniciously", "Plaguey", "Quarrelsomely", "Rashly", "Ridiculously", "Scandalously", "Shamelessly", "Slanderously", "Sneeringly", "Spitefully", "Suspiciously", "Tiresomely", "Troublesomely", "Unjustly", "Unworthily", "Upstartly", "Vexatiously", "Villainously", "Wickedly"
];

 adjectives = [
    "Abhorrent", "Beggarly", "Bewildered", "Cowardly", "Deceitful", "Despicable", "Disgraceful", "Dishonorable", "Disobedient", "Drunken", "Envious", "False", "Foolish", "Frail", "Garrulous", "Greedy", "Grotesque", "Hateful", "Ignorant", "Impertinent", "Infectious", "Insignificant", "Jealous", "Lascivious", "Lecherous", "Lewd", "Miserable", "Misleading", "Monstrous", "Nauseous", "Obnoxious", "Outrageous", "Overweening", "Pernicious", "Pestilential", "Pitiful", "Rascally", "Repugnant", "Ridiculous", "Rude", "Scurrilous", "Shameless", "Slanderous", "Sly", "Spiteful", "Thievish", "Unpleasant", "Vain", "Villainous"
];

 nouns = [
    "Ass", "Bawd", "Beast", "Bladder", "Blockhead", "Buffoon", "Canker-blossom", "Churl", "Clotpole", "Coxcomb", "Cuckold", "Dolt", "Dunghill", "Fool", "Fopdoodle", "Gudgeon", "Hedge-born", "Jackanapes", "Jolthead", "Knave", "Lewdster", "Lout", "Lubber", "Lump", "Maggot-pie", "Malt-worm", "Mandrake", "Mumble-news", "Nit", "Pigeon-egg", "Pig-nut", "Pignut", "Pumpion", "Rascal", "Rat-catcher", "Reeky", "Ribald", "Rogue", "Rudesby", "Scullion", "Skainsmate", "Slave", "Scurvy", "Thatch", "Toad", "Varlet", "Wagtail", "Whoremaster", "Zounderkite"
];

 insultText = document.getElementById('insult-text');
 generateButton = document.getElementById('generate-button');

generateButton.addEventListener('click', () => {
    const randomInsultIndex = Math.floor(Math.random() * insults.length);
    const randomAdjectiveIndex = Math.floor(Math.random() * adjectives.length);
    const randomNounIndex = Math.floor(Math.random() * nouns.length);

    const randomInsult = insults[randomInsultIndex];
    const randomAdjective = adjectives[randomAdjectiveIndex];
    const randomNoun = nouns[randomNounIndex];

    const combinedInsult = `${randomInsult} ${randomAdjective} ${randomNoun}`;

    insultText.textContent = combinedInsult;
});