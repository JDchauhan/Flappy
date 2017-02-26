
function updateGameArea() {
      var x, y;
        for (i = 0; i < myObstacles.length; i += 1) {
            if (myGamePiece.crashWith(myObstacles[i])) {
                myGameArea.stop();
                return;
            } 
        }
        myGameArea.clear();
        myGameArea.frameNo += 1;
        if (myGameArea.frameNo == 1 || everyinterval(150)) {
            x = myGameArea.canvas.width;
            minHeight = 20;
            maxHeight = 200;
            height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
            minGap = 50;
            maxGap = 200;
            gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
            myObstacles.push(new component(10, height, "green", x, 0));
            myObstacles.push(new component(10, x - height - gap, "green", x, height + gap));
        }
        for (i = 0; i < myObstacles.length; i += 1) {
            myObstacles[i].x += -1;
            myObstacles[i].update();
        }
        myGamePiece.speedX = 0;
        myGamePiece.speedY = 0;
        score=myObstacles.length/2-4;
        if(score<0){
            score=0;
        }else{
            score=myObstacles.length/2-3;
        }
        scr=i/2-3;//same as score
        myScore.text="SCORE: " + score;
        myScore.update();
        myGamePiece.newPos();
        myGamePiece.update(); 
}
