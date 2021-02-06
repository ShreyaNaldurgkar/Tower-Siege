const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;


function preload(){

}

function setup(){
    createCanvas(500,700)

    ground = new Ground(250,670,500,15);

}


function draw(){
    background(0)


}