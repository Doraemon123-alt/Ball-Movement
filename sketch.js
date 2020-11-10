var ball;
var position
var database

function setup(){
    

    database=firebase.database()
    console.log(database)
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var ballPosition=database.ref('ball/position')
    ballPosition.on("value",readPosition)
}

function draw(){
    background("white");

    if(position!== undefined)
    {
        if(keyDown(LEFT_ARROW)){
            writeDatabase(-7,0);
        }
        else if(keyDown(RIGHT_ARROW)){
            writeDatabase(7,0);
        }
        else if(keyDown(UP_ARROW)){
            writeDatabase(0,-7);
        }
        else if(keyDown(DOWN_ARROW)){
            writeDatabase(0,+7);
        }

        drawSprites();


    }


    
    
}




function readPosition(data)
{

    position=data.val()

    console.log(position)

ball.x=position.x
ball.y=position.y


}

function writeDatabase(x,y)

{

    database.ref('ball/position').set({'x':position.x+x,'y':position.y+y})


}