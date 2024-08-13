const player = {
  name: 'nico',
  points: 10,
  fat: true,
};
console.log(player);
console.log(player.name); // play.name = player["name"]

player.fat = false;
console.log(player);

player.points = player.points + 15;
console.log(player.points);

player.lastName = 'potato';
console.log(player);
