let warmHugs = "Hi, I'm Olaf and I like warm hugs.";

console.log(warmHugs.toUpperCase());

warmHugs = warmHugs.replace("like", "love");
console.log(warmHugs);

let beenImpaled = "Oh, look at that. I've been impaled.";

console.log(beenImpaled.slice(18));
console.log(beenImpaled.slice(-18));
console.log(beenImpaled.slice(beenImpaled.indexOf("I")));

let dotDotDot = "...";

let skullBones = `I don't have a skull${dotDotDot}or bones.`;
console.log(skullBones);

console.log(Math.PI);

let randomNumber = Math.random();
randomNumber *= 3;
randomNumber = Math.floor(randomNumber);
randomNumber++;
console.log(randomNumber);

console.log(" Let It Go!".repeat(2).trim().toUpperCase());

let reindeers = "Reindeers are better than people.";

console.log(reindeers.replace(/ /g, "_"));
console.log(reindeers.replaceAll(" ", "_"));

console.log(Math.sqrt(2));
console.log(Math.SQRT2);
console.log(2**(1/2));

let randomNumber = Math.floor(17 * Math.random()) + 7;

let randomNumber = Math.floor(Math.random() * 17) + 7;
let randomNumber = Math.floor(Math.random() * 17 + 7);
console.log(newRandomNumber);
