var  database;
var gameState = 0;
var playerCount;
var form, player;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(400,400);
if(gameState === 0){
  player = new Player();
  player.getCount();
  form = new Form();
  form.display();
}
  
}

function draw(){
 drawSprites();
  
}

