class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",player_img);
    player1.scale = 0.1;
    player2 = createSprite(700,500);
    player2.addImage("player2", player_img);
    player2.scale = 0.1;
    players=[player1,player2];

        }
    
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                 image(back_img, 0, 0, 1000, 800);
                 var x =100;
                 var y=200;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y=500;
                     
                     players[index -1].x = x;
                     players[index - 1].y = y;
                       
                     if(index === player.index){
                         
                         fill("black");
                         textSize(25);
                         text(allPlayers[plr].name ,x-25,y+25);

                         
                     }
                       textSize(25);
                       fill("white");
                       text("player 1:"+allPlayers.player1.score,50,50);
                       text("player 2:"+allPlayers.player2.score,50,100);
                     
                 
                 }
                
                
                 

                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance -= 10
                    player.update();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distance += 10
                    player.update();
                }
            
                 if (frameCount % 20 === 0) {
                     safeitems = createSprite(random(100, 1000), 0, 100, 100);
                     safeitems.velocityY = 6;
                     safeitems.scale = 0.1;
                     var rand = Math.round(random(1,5));
                     switch(rand){ 
                         case 1: safeitems.addImage("fruit1",injection_img);
                         break;
                         case 2: safeitems.addImage("fruit1",ppe_img );
                         break;
                         case 3: safeitems.addImage("fruit1", mask_img);
                         break;
                         case 4: safeitems.addImage("fruit1", sanitaizer_img);
                         break;
                         
                     }
                     safeGroup.add(safeitems);
                     
                 }

                 if (frameCount % 20 === 0) {
                    virus = createSprite(random(100, 1000), 0, 100, 100);
                    virus.velocityY = 6;
                    virus.scale = 0.1;
                    var rand = Math.round(random(1,5));
                    switch(rand){ 
                        case 1: virus.addImage("fruit1",corona_img);
                        break;
                        
                        
                    }
                    virusGroup.add(virus);
                    
                }
                 
                  if (player.index !== null)  {
                    for (var i =0; i < safeGroup.length; i++) {
                        if(safeGroup.get(i).isTouching(players)){
                           safeGroup.get(i).destroy();
                           player.score = player.score + 1;
                           player.update();    
                        }
                    } 
                  } 

                  if (player.index !== null)  {
                    for (var i =0; i < virusGroup.length; i++) {
                        if(virusGroup.get(i).isTouching(players)){
                           virusGroup.get(i).destroy();
                           player.score = player.score - 1;
                           player.update();    
                        }
                    } 
                  } 
                
    
         
         
        
         

    }

    end(){
       console.log("Game Ended");
    }
}
drawSprites()