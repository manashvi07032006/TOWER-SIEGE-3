const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint; 

var engine, world
var b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16;
var bs1, bs2, bs3, bs4, bs5, bs6, bs7, bs8, bs9;
var base, base1, base2, polygon, IMG, slingshot;
var score=0, backgroundImage;
function preload(){
    IMG = loadImage("polygon.png");
    getTime();
}
function setup(){
    createCanvas(1600, 800);
    engine = Engine.create();
    world = engine.world;

    base = new Ground(800, 780, 1598, 30);
    base1 = new Ground(650, 510, 450, 20);
    base2 = new Ground(1100, 310, 350, 20);
   
    b1 = new Box(500, 465, 50, 70);
    b2 = new Box(550, 465, 50, 70);
    b3 = new Box(600, 465, 50, 70);
    b4 = new Box(650, 465, 50, 70);
    b5 = new Box(700, 465, 50, 70);
    b6 = new Box(750, 465, 50, 70);
    b7 = new Box(800, 465, 50, 70);
    b8 = new Box(550, 395, 50, 70);
    b9 = new Box(600, 395, 50, 70);
    b10 = new Box(650, 395, 50, 70);
    b11 = new Box(700, 395, 50, 70);
    b12 = new Box(750, 395, 50, 70);
    b13 = new Box(600, 325, 50, 70);
    b14 = new Box(650, 325, 50, 70);
    b15 = new Box(700, 325, 50, 70);
    b16 = new Box(650, 255, 50, 70);

    bs1 = new Box(1000, 265, 50, 70);
    bs2 = new Box(1050, 265, 50, 70);
    bs3 = new Box(1100, 265, 50, 70);
    bs4 = new Box(1150, 265, 50, 70);
    bs5 = new Box(1200, 265, 50, 70);
    bs6 = new Box(1050, 195, 50, 70);
    bs7 = new Box(1100, 195, 50, 70);
    bs8 = new Box(1150, 195, 50, 70);
    bs9 = new Box(1100, 125, 50, 70);

    var options={
        isStatic:false,
        restitution : 0,
        friction :2,
        density: 1.2
    }
    polygon = Bodies.circle(200, 400, 20, options);
    World.add(world, polygon);
    
    slingshot = new SlingShot(polygon, {x: 200, y: 300})

}

function draw(){
    if(backgroundImage)
        background(backgroundImage);

    textSize(35);
    fill("white");
    text("SCORE: " + score, 750, 50);

    Engine.update(engine);

    fill(0, 0, 51);
    textSize(40);
    text("Drag the hexagonal stone to destroy the blocks.", 50, 100);
    text("Press space to get a second chance to play!!", 50, 150)

    fill(202, 247, 227);
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    fill(237, 255, 236)
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    fill(246, 223, 235);
    b13.display();
    b14.display();
    b15.display();
    fill(228, 186, 212);
    b16.display();

    b1.score();
    b2.score();
    b3.score();
    b4.score();
    b5.score();
    b6.score();
    b7.score();
    b8.score();
    b9.score();
    b10.score();
    b11.score();
    b12.score();
    b13.score();
    b14.score();
    b15.score();
    b16.score();


    fill(225, 87, 127);
    bs1.display();
    bs2.display();
    bs3.display();
    bs4.display();
    bs5.display();
    fill(255, 136, 75);
    bs6.display();
    bs7.display();
    bs8.display();
    fill(255, 216, 128);
    bs9.display();
           
    bs1.score();
    bs2.score();
    bs3.score();
    bs4.score();
    bs5.score();
    bs6.score();
    bs7.score();
    bs8.score();
    bs9.score();

    imageMode(CENTER);
    image(IMG, polygon.position.x, polygon.position.y, 60, 60);

    slingshot.display();

    fill(51, 0, 51);
    base.display();
    fill(17, 77, 244);
    base1.display();
    base2.display();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon, {x: mouseX, y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(polygon);
    }
}

async function getTime(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    //console.log(responseJSON);
    var datetime = responseJSON.datetime;
    //console.log(datetime);
    var hour = datetime.slice(11, 13)
    console.log(hour);
    if(hour >=06 && hour <=19){
        bgIMG = "day.jpg";
    }
    else{
        bgIMG = "night.jpg"
    }
    backgroundImage = loadImage(bgIMG);
}