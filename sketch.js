var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;

var player, form,game;
var player1,player2;
var players;
var safeitems;
var virus;
var safeGroup;
var virusGroup;
var corona_img, mask_img, ppe_img, sanitaizer_img, injection_img; 
var player_img;
var player1score =0;
var player2score =0;


function preload(){
  back_img = loadImage("images/background.jpeg"); 
  corona_img = loadImage("images/virus.png");
  player_img = loadImage("images/person.png");
 // fruit1_img = loadImage("images/apple2.png");      
  mask_img = loadImage("images/mask.png");                              
  ppe_img = loadImage("images/ppe.png");  
  sanitaizer_img = loadImage("images/sanitaizer.png");
  injection_img = loadImage("images/injection.png");
  safeGroup = new Group();
  virusGroup = new Group();
}
function setup() {
  createCanvas(1000, 600); 
  database = firebase.database();  
  game = new Game(); 
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}