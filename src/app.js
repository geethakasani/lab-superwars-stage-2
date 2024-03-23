
const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];
    let usedNames = [];

    // Create players using for loop
    // Type your code here
    players.forEach((player, i) => {
        let playerName = player;
        while (usedNames.includes(playerName)) {
            playerName = `${player} ${Math.floor(Math.random() * 1000)}`;
        }
        usedNames.push(playerName);
        let playerIndex = players.indexOf(player);
        let playerImage = `images/super-${playerIndex + 1}.png`;
        let playerStrength = getRandomStrength();
        let playerType = Math.random() > 0.5 ? "hero" : "villain";
        detailedPlayers.push({ name: playerName, strength: playerStrength, image: playerImage, type: playerType });
});

    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
    return Math.floor(Math.random() * 100) + 1;
}

const buildPlayers = (players, type) => {
    let fragment = '';

    // Loop through players and accumulate HTML template
    // depending on the type of player (hero|villain)
    players.forEach(player => {
        if (player.type === type && player.strength !== undefined) {
            fragment += `<div class="player">
                            <img src="${player.image}" alt="">
                            <div class="name">${player.name}</div>
                            <div class="strength">${player.strength}</div>
                        </div>`;
        }
    });

    return fragment;
}

// Display players in HTML
const viewPlayers = (players) => {

    document.getElementById('heroes').innerHTML = buildPlayers(players.filter(player => player.type === 'hero'), 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players.filter(player => player.type === 'villain'), 'villain');

}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}
