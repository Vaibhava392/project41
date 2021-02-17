var drops = [];
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var walking, thunder, canvas;
var boy;
var maxDrops = 100;

function preload(){
    thunder = loadAnimation("proc41images/1.png","proc41images/2.png",
    "proc41images/3.png","proc41images/4.png")
}

function setup(){
    canvas = createCanvas(800, 800);
    boy = new umbrella(400,600,20)
    for(var i=0; i<maxDrops; i++){
        drops.push(new Drop(random(0,400), random(0, 400)));
    }   
}

function draw(){
    background("black");
    boy.display();
}   

